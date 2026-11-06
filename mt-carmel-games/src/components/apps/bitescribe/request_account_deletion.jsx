import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";

export default function RequestAccountDeletion() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, []);

  return (
    <article className="document">
      <Link to="/apps/bitescribe">← Back to BiteScribe</Link>
      <h1>Delete Your BiteScribe Account</h1>

      <p>Use this form to request permanent deletion of your BiteScribe account and associated personal data.</p>

      <p>Enter the email address associated with your BiteScribe account. We may contact you at that address to verify ownership before completing the deletion.</p>

      <p>Deletion includes your BiteScribe diary, profile and nutrition goals, chat history, stored meal photos, and other data linked to your account unless retention is required by law.</p>

      <p>Product and nutrition-reference information that no longer identifies you may be retained.</p>

      <p>App Store or Google Play subscriptions must be canceled separately through the applicable store.</p>

      <form className="stacked-form" action="https://formsubmit.co/admin@mountcarmelgames.com" method="POST">
        <input type="hidden" name="_subject" value="BiteScribe account deletion request" />
        <input type="hidden" name="_template" value="table" />
        <label htmlFor="email">BiteScribe account email</label>

        <input id="email" name="email" type="email" autoComplete="email" required maxLength={320} />

        <label htmlFor="notes">Additional information (optional)</label>

        <textarea id="notes" name="notes" maxLength={2000} />

        <p>Requests are sent through FormSubmit to Mount Carmel Games. Alternatively, email <a href="mailto:admin@mountcarmelgames.com?subject=BiteScribe%20account%20deletion%20request">admin@mountcarmelgames.com</a> from your account email with the subject “BiteScribe account deletion request”. Do not include your password.</p>

        <button className="pill-button" type="submit">
          Request Permanent Account Deletion
        </button>
      </form>
    </article>
  );
}

