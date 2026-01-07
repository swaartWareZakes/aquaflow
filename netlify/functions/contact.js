const { Resend } = require("resend");

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const data = JSON.parse(event.body || "{}");

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const topic = String(data.topic || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !email || !topic || !message) {
      return { statusCode: 400, body: "Missing required fields" };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return { statusCode: 500, body: "Server misconfigured (missing email key)" };
    }
    if (!toEmail) {
      console.error("Missing CONTACT_TO_EMAIL");
      return { statusCode: 500, body: "Server misconfigured (missing recipient)" };
    }

    const resend = new Resend(apiKey);

    const subject = `AquaFlow Contact: ${topic} — ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
        <p><strong>Message:</strong></p>
        <pre style="background:#f6f6f6;padding:12px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(message)}</pre>
      </div>
    `;

    const result = await resend.emails.send({
      from: `AquaFlow <${fromEmail}>`,
      to: [toEmail],
      reply_to: email, // so you can reply directly to the sender
      subject,
      html,
    });

    // Helpful to see in Netlify logs
    console.log("Resend result:", result);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Contact function error:", err);
    return { statusCode: 500, body: "Server error" };
  }
};

// basic HTML escaping to avoid breaking markup
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}