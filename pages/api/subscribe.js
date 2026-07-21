const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limiter. Note: on serverless (Vercel) each instance has
// its own memory, so this throttles per-instance bursts rather than globally —
// enough to blunt a single client hammering the endpoint. Combined with the
// honeypot below, it stops the unsophisticated bot signups we were seeing.
const RATE_LIMIT_MAX = 3; // requests allowed per window, per IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const hits = new Map(); // ip -> number[] (timestamps)

function getClientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd.length) return fwd.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the Map doesn't grow unbounded.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, website } = req.body || {};

  // Honeypot: `website` is a hidden field no human sees. If it's filled, a bot
  // submitted the form. Pretend it worked (200) so the bot gets no signal, but
  // never touch Resend.
  if (typeof website === "string" && website.trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }

  if (isRateLimited(getClientIp(req))) {
    return res
      .status(429)
      .json({ error: "Too many attempts. Please try again in a few minutes." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return res
      .status(500)
      .json({ error: "Subscription is not configured. Please try again later." });
  }

  try {
    const response = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = data?.message || "Could not subscribe. Please try again.";
      return res.status(response.status).json({ error: message });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Something went wrong. Please try again." });
  }
}
