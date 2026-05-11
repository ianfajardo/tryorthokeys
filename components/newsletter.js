import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Could not subscribe. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks! You're on the list.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="newsletter">
      <h5>Stay in the loop</h5>
      <p className="text-muted small mb-2">
        Ortholinear keyboard guides, deals, and news. No spam.
      </p>
      <form onSubmit={handleSubmit} className="form-inline">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mr-2 mb-2"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className="btn btn-primary mb-2"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && (
        <div
          className={`small mt-1 ${
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
