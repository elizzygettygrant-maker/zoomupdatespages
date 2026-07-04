const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { event, details } = await req.json();
    const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
    if (!token) throw new Error("TELEGRAM_BOT_TOKEN not configured");

    const chatId = "7345412794";
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    const ua = req.headers.get("user-agent") ?? "unknown";
    const time = new Date().toISOString();

    const text =
      `<b>🔔 Zoom Site Activity</b>\n` +
      `<b>Event:</b> ${escapeHtml(event ?? "unknown")}\n` +
      (details ? `<b>Details:</b> ${escapeHtml(JSON.stringify(details))}\n` : "") +
      `<b>IP:</b> ${escapeHtml(ip)}\n` +
      `<b>UA:</b> ${escapeHtml(ua)}\n` +
      `<b>Time:</b> ${time}`;

    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
    });

    const data = await resp.json();
    if (!resp.ok) throw new Error(`Telegram: ${JSON.stringify(data)}`);

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
