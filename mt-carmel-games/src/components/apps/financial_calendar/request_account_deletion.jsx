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
      <Link to="/apps/financial_calendar/privacy_policy">← Back to the Privacy Policy</Link>
      <h1>Delete Your Financial Calendar Account</h1>

      <p>
        The quickest way is in the app: open <strong>Settings → Account → Delete account</strong>. Your files are deleted from our server and your devices right away.
      </p>

      <p>If you can't use the app, send this form with the email address you sign in with. We may write to that address to confirm the request is yours before deleting anything.</p>

      <p>Deletion removes every file in your Financial Calendar account: statements, bills, amounts, recurring items, and notes. Copies may stay in server backups until those backups are replaced. Files saved only on your device, or exported as Excel workbooks, aren't affected.</p>

      <p>
        Your Mount Carmel Games sign-in is shared with our other apps. To delete the sign-in too, say so below; it also closes your <Link to="/apps/bitescribe/request_account_deletion">BiteScribe</Link> account.
      </p>

      <form className="stacked-form" action="https://formsubmit.co/admin@mountcarmelgames.com" method="POST">
        <input type="hidden" name="_subject" value="Financial Calendar account deletion request" />
        <input type="hidden" name="_template" value="table" />
        <label htmlFor="email">Financial Calendar account email</label>

        <input id="email" name="email" type="email" autoComplete="email" required maxLength={320} />

        <label htmlFor="notes">Additional information (optional)</label>

        <textarea id="notes" name="notes" maxLength={2000} />

        <p>
          Requests are sent through FormSubmit to Mount Carmel Games. You can also email <a href="mailto:admin@mountcarmelgames.com?subject=Financial%20Calendar%20account%20deletion%20request">admin@mountcarmelgames.com</a> from your account email with the subject "Financial Calendar account deletion request". Don't include your password.
        </p>

        <button className="pill-button" type="submit">
          Request Account Deletion
        </button>
      </form>
    </article>
  );
}
