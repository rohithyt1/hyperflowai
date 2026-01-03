import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP from headers (Supabase edge functions provide this)
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
      || req.headers.get('cf-connecting-ip') 
      || req.headers.get('x-real-ip')
      || '';

    console.log('Detecting currency for IP:', clientIP);

    let countryCode = 'US'; // Default to US

    // Try multiple IP geolocation services
    try {
      // Primary: ip-api.com (free, no key needed)
      const response = await fetch(`http://ip-api.com/json/${clientIP}?fields=countryCode`, {
        signal: AbortSignal.timeout(3000),
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.countryCode) {
          countryCode = data.countryCode;
          console.log('Detected country from ip-api.com:', countryCode);
        }
      }
    } catch (err) {
      const error = err as Error;
      console.log('ip-api.com failed, trying fallback:', error.message);
      
      try {
        // Fallback: ipapi.co
        const response = await fetch(`https://ipapi.co/${clientIP}/country/`, {
          signal: AbortSignal.timeout(3000),
        });
        
        if (response.ok) {
          const text = await response.text();
          if (text && text.length === 2) {
            countryCode = text;
            console.log('Detected country from ipapi.co:', countryCode);
          }
        }
      } catch (fbErr) {
        const fallbackError = fbErr as Error;
        console.log('ipapi.co also failed:', fallbackError.message);
      }
    }

    // Determine currency based on country
    const currency = countryCode === 'IN' ? 'INR' : 'USD';
    
    console.log('Returning currency:', currency, 'for country:', countryCode);

    return new Response(
      JSON.stringify({ 
        currency, 
        countryCode,
        detected: true 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (err) {
    const error = err as Error;
    console.error('Error detecting currency:', error);
    
    // Return USD as default on any error
    return new Response(
      JSON.stringify({ 
        currency: 'USD', 
        countryCode: 'US',
        detected: false,
        error: error.message 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
