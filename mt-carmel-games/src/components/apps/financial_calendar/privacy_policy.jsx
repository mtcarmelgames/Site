import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, []);

  return (
    <article className="document">
      <Link to="/apps/financial_calendar">← Back to Financial Calendar</Link>
      <h1>Financial Calendar Privacy Policy</h1>

      <p>
        <strong>Effective Date:</strong> November 15, 2026
      </p>

      <p>
        <strong>Last Updated:</strong> November 17, 2026
      </p>

      <p>Financial Calendar is operated by Mount Carmel Games LLC ("Mount Carmel Games", "we", "us", or "our").</p>

      <p>Financial Calendar helps you plan bills and pay periods. This policy explains what the app collects, where it is kept, and the choices you have. It applies to the Financial Calendar apps for Windows, Android, and iOS.</p>

      <h2>1. Using the App Without an Account</h2>

      <p>Without signing in, you can open and read files on your device, and nothing you enter is sent to us. Editing needs a signed-in account, because the 30-day free trial and the purchase belong to the account.</p>

      <h2>2. Information We Collect When You Sign In</h2>

      <h3>Account Information</h3>

      <p>Financial Calendar uses Auth0 to sign you in with Google, Apple, or an email address and password. We receive your name, email address, profile picture (if your sign-in provider has one), and an account identifier. We never receive your Google or Apple password. The same Mount Carmel Games sign-in also works in our other apps, such as BiteScribe.</p>

      <h3>Your Files</h3>

      <p>When you are signed in, the files you keep in your account (up to three) are stored on our server so they open on all your devices. A file holds what you enter: statement dates, bill names, amounts, due dates, paid and cleared marks, recurring items, and notes. We do not connect to your bank and never ask for bank, card, or account numbers.</p>

      <h3>Your Trial and Purchase</h3>

      <p>We record when your account's free trial started and whether your account has bought Financial Calendar, with the store's purchase identifier, so one purchase unlocks the app on all your devices. Payment is handled by Stripe (on Windows), Google Play, or the App Store. We never receive your card or bank details. On Windows, Stripe's checkout page collects your email address and payment details under <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe's Privacy Policy</a>. We keep only the record that your account paid and Stripe's payment ID.</p>

      <h3>Technical Information</h3>

      <p>Our server records the time, address (IP), and result of requests to keep the service secure and working. These logs are kept for a short time and are not used to build a profile of you.</p>

      <h2>3. What We Do Not Do</h2>

      <ul>
        <li>We do not show ads.</li>
        <li>We do not use analytics or tracking in the app.</li>
        <li>We do not sell, rent, or share your information with advertisers or data brokers.</li>
        <li>We do not read your files except when needed to fix a problem you report to us, or when required by law.</li>
      </ul>

      <p>This policy covers the app. Our website, including the Financial Calendar page, uses Google Analytics and Google Ads to count visits and measure our ads. The app does not.</p>

      <h2>4. How We Use Information</h2>

      <p>We use your account information to sign you in and show who is signed in. We use your files only to store them and deliver them to your devices.</p>

      <h2>5. Service Providers</h2>

      <ul>
        <li>
          <strong>Auth0 (Okta)</strong> provides sign-in.
        </li>
        <li>
          <strong>IONOS</strong> hosts our server in the United States.
        </li>
        <li>
          <strong>Google</strong> and <strong>Apple</strong> confirm your identity if you choose to sign in with them.
        </li>
        <li>
          <strong>Stripe</strong>, <strong>Google Play</strong>, and the <strong>App Store</strong> process purchases and confirm them to our server.
        </li>
      </ul>

      <h2>6. Security</h2>

      <p>All traffic between the app and our server uses HTTPS. Each account can only read and change its own files. Your sign-in is kept in your device's secure storage. No system is perfectly secure, but we work to protect your information.</p>

      <h2>7. Retention and Deletion</h2>

      <p>
        Your files are kept until you delete them or your account. You can delete a single file from the Open dialog, or everything at once in <strong>Settings → Account → Delete account</strong>. Deleting removes your files from our server and from your devices right away. Copies may stay in our server backups until those backups are replaced. We keep the record of your trial and any purchase, because purchases are sales records we must keep, and so that signing in again restores your purchase.
      </p>

      <p>
        You can also <Link to="/apps/financial_calendar/request_account_deletion">request deletion on our website</Link>. Signing out removes your account's files from that device but keeps them in your account.
      </p>

      <h2>8. Children</h2>

      <p>Financial Calendar is not directed to children under 13, and we do not knowingly collect information from them. If you believe a child has given us information, contact us and we will delete it.</p>

      <h2>9. Changes to This Policy</h2>

      <p>If we change this policy, we will update the date above and, for significant changes, tell you in the app.</p>

      <p>
        Using Financial Calendar is also subject to the <Link to="/apps/financial_calendar/terms">Financial Calendar Terms of Use</Link>.
      </p>

      <h2>10. Contact Us</h2>

      <p>
        Mount Carmel Games LLC
        <br />
        Email: <a href="mailto:admin@mountcarmelgames.com">admin@mountcarmelgames.com</a>
      </p>
    </article>
  );
}
