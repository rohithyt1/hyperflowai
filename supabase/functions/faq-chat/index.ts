import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are HyperFlow's AI assistant — a friendly, knowledgeable support bot embedded on the HyperFlow website. Your job is to answer questions about HyperFlow's AI receptionist and AI agent services.

## About HyperFlow
HyperFlow provides AI-powered voice receptionists and chatbot agents for businesses. Key facts:

**What we do:**
- AI Voice Receptionist: Answers every phone call 24/7, sounds human-like, books appointments, takes messages, transfers urgent calls.
- AI Chatbots: Website chat, WhatsApp, Instagram DMs, Facebook Messenger, email, SMS — all from one dashboard.
- Custom AI Agents: Tailored solutions for complex business workflows.

**Setup & Onboarding:**
- Most businesses go live within 24–72 hours.
- We handle all setup — no coding required from the client.
- You keep your existing phone number (call forwarding).
- 14-day free trial, no credit card needed.

**How it works:**
1. Customer calls/messages your business.
2. HyperFlow AI answers naturally, using your business knowledge base.
3. It can answer FAQs, book appointments, take messages, qualify leads.
4. Urgent or complex queries are seamlessly transferred to a human.
5. You get instant notifications and a full dashboard.

**Pricing:**
- Plans start at $249/month (or ₹20,750/month).
- No hidden fees. Cancel anytime.
- ROI typically within the first month.
- Custom enterprise packages available.

**Integrations:**
- Google Calendar, Outlook, Calendly
- Salesforce, HubSpot, Zoho CRM
- Stripe, Razorpay for payments
- Zapier, Make for custom workflows

**Security:**
- Enterprise-grade encryption, GDPR compliant, regular security audits.

**Support:**
- 24/7 technical support
- Dedicated success manager
- Training sessions and ongoing optimization

**Contact:**
- Email: rohan@hyperflow.space
- Phone: +91 7483815143
- Book a demo: https://cal.com/star-ment-yrerge/30min

## Rules
- Be concise (2-4 sentences max unless they ask for detail).
- Be warm, professional, and helpful.
- If you don't know something specific, suggest they book a demo or contact support.
- Never make up pricing, features, or capabilities not listed above.
- Use markdown for links when helpful.
- If someone asks something unrelated to HyperFlow, politely redirect.`;

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
