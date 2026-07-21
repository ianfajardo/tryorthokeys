import { useEffect, useState } from "react";

const STORAGE_KEY = "tok_newsletter_popup_v1";
const SHOW_AFTER_MS = 7000;
const DISMISS_TTL_DAYS = 30;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — real users leave empty
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { dismissedAt, subscribed } = JSON.parse(raw);
        if (subscribed) return;
        if (
          dismissedAt &&
          Date.now() - dismissedAt < DISMISS_TTL_DAYS * 86400 * 1000
        ) {
          return;
        }
      }
    } catch (e) {
      // ignore malformed storage
    }

    const timer = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  function persist(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore storage failures
    }
  }

  function handleClose() {
    setVisible(false);
    persist({ dismissedAt: Date.now() });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Could not subscribe. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks! You're on the list.");
      persist({ subscribed: true });
      setTimeout(() => setVisible(false), 2500);
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (!visible) return null;

  return (
    <div className="newsletter-popup" role="dialog" aria-label="Subscribe to Try Ortho Keys">
      <button
        type="button"
        className="newsletter-popup__close"
        aria-label="Close"
        onClick={handleClose}
      >
        &times;
      </button>
      <h5 className="newsletter-popup__title">Like ortholinear keyboards?</h5>
      <p className="newsletter-popup__copy">
        Get new guides, deals, and ortho keyboard news in your inbox. No spam.
      </p>
      <form onSubmit={handleSubmit} className="newsletter-popup__form">
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
        >
          <label htmlFor="newsletter-popup-website">Website</label>
          <input
            id="newsletter-popup-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(ev) => setWebsite(ev.target.value)}
          />
        </div>
        <label htmlFor="newsletter-popup-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-popup-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="form-control"
          disabled={status === "loading" || status === "success"}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {message && (
        <div
          className={`newsletter-popup__message ${
            status === "success" ? "text-success" : "text-danger"
          }`}
          role="status"
        >
          {message}
        </div>
      )}
    </div>
  );
}
