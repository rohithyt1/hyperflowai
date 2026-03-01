import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are HyperFlow's AI assistant on our website. Talk like a real human — casual, warm, brief.

RULES:
- Reply in 1-2 short sentences MAX. Never write paragraphs.
- Sound like you're texting a friend, not writing an essay.
- Only answer what's asked. No extra info. No upselling.
- If you don't know, say "Hmm not sure about that — want to book a quick call? https://cal.com/star-ment-yrerge/30min"
- If it's unrelated to HyperFlow, just say "Hey, I only know about HyperFlow stuff! 😄"
- Use emojis sparingly (1 max per message).
- Never repeat info the user already knows.

FACTS (only use when asked):
- AI Voice Receptionist: answers calls 24/7, books appointments, takes messages, transfers urgent calls.
- AI Chatbots: WhatsApp, Instagram, Messenger, website, email, SMS — one dashboard.
- Setup: 24-72 hours, no coding needed, keep your number.
- Trial: 14 days free, no card needed.
- Pricing: starts at $249/mo (₹20,750/mo). No hidden fees, cancel anytime.
- Integrations: Google Calendar, Outlook, Calendly, Salesforce, HubSpot, Zoho, Stripe, Razorpay, Zapier, Make.
- Security: enterprise encryption, GDPR compliant.
- Support: 24/7 + dedicated success manager.
- Contact: rohan@hyperflow.space | +91 7483815143
- Demo: https://cal.com/star-ment-yrerge/30min`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.slice(-10), // keep last 10 messages for context
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please wait a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("faq-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
