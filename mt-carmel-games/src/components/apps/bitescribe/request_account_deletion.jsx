import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";

export default function RequestAccountDeletion() {
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, []);

  async function onSubmit(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("YOUR_ACCOUNT_DELETION_REQUEST_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          notes: notes.trim(),
        }),
      });

      if (!response.ok) throw new Error();

      setSubmitted(true);
    } catch {
      setError("Your request could not be submitted. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <article className="document">
      <Link to="/apps/bitescribe">← Back to BiteScribe</Link>
        <h1>BiteScribe Account Deletion</h1>

        <h2>Request received</h2>

        <p>Your BiteScribe account deletion request has been submitted. We may contact you to verify ownership of the account.</p>

        <p>We will send confirmation after the account and associated personal data have been deleted.</p>
      </article>
    );
  }

  return (
    <article className="document">
      <Link to="/apps/bitescribe">← Back to BiteScribe</Link>
      <h1>Delete Your BiteScribe Account</h1>

      <p>Use this form to request permanent deletion of your BiteScribe account and associated personal data.</p>

      <p>Enter the email address associated with your BiteScribe account. We may contact you at that address to verify ownership before completing the deletion.</p>

      <p>Deletion includes your BiteScribe diary, profile and nutrition goals, chat history, stored meal photos, and other data linked to your account unless retention is required by law.</p>

      <p>Product and nutrition-reference information that no longer identifies you may be retained.</p>

      <p>App Store or Google Play subscriptions must be canceled separately through the applicable store.</p>

      <form className="stacked-form" onSubmit={onSubmit}>
        <label htmlFor="email">BiteScribe account email</label>

        <input id="email" name="email" type="email" autoComplete="email" required maxLength={320} value={email} onChange={(event) => setEmail(event.target.value)} />

        <label htmlFor="notes">Additional information (optional)</label>

        <textarea id="notes" name="notes" maxLength={2000} value={notes} onChange={(event) => setNotes(event.target.value)} />

        {error && <p role="alert">{error}</p>}

        <button className="pill-button" type="submit" disabled={submitting}>
          {submitting ? "Submitting…" : "Request Permanent Account Deletion"}
        </button>
      </form>
    </article>
  );
}
