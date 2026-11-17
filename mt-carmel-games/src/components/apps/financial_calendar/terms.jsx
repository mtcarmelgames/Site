import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";

export default function Terms() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, []);

  return (
    <article className="document">
      <Link to="/apps/financial_calendar">← Back to Financial Calendar</Link>
      <h1>Financial Calendar Terms of Use</h1>

      <p>
        <strong>Effective Date:</strong> November 17, 2026
      </p>

      <p>These Terms of Use ("Terms") govern your use of Financial Calendar, including the Financial Calendar apps for Windows, Android, and iOS, your Financial Calendar account, and related services (together, the "Service").</p>

      <p>Financial Calendar is operated by Mount Carmel Games LLC ("Mount Carmel Games," "we," "us," or "our"), an Alabama limited liability company.</p>

      <p>By using Financial Calendar, you agree to these Terms. If you do not agree, do not use the Service.</p>

      <h2>1. Financial Calendar Is a Planning Tool</h2>

      <p>Financial Calendar helps you write down your own bills, income, and pay periods and see their totals. It does not connect to banks, move money, pay bills, or check balances, and it does not know whether a payment was actually made.</p>

      <p>Financial Calendar does not provide financial, tax, legal, credit, or investment advice. Totals and due dates are only as accurate as what you enter. You are responsible for paying your bills, confirming amounts and due dates with the companies you owe, and the financial decisions you make.</p>

      <h2>2. Accounts</h2>

      <p>You can use Financial Calendar without an account to open and read files on your device. Editing, the free trial, purchases, and keeping files in your account require signing in.</p>

      <p>Sign-in is provided by Auth0, with Google, Apple, or an email address and password. You agree to keep your sign-in secure and are responsible for activity in your account, unless it results from a security failure caused by us. The same Mount Carmel Games sign-in also works in our other apps.</p>

      <h2>3. Free Trial and Purchase</h2>

      <p>Each Financial Calendar account gets a free trial of 30 days, starting the first time the account signs in to the app. Reinstalling the app or using another device does not restart it.</p>

      <p>After the trial, a one-time purchase unlocks editing for your account on Windows, Android, and iOS. It is not a subscription and does not renew. The price is shown in the app before you buy, and taxes may apply. Without a purchase, your files stay available to open, read, export, and delete, but they can't be edited.</p>

      <p>Purchases are processed by Stripe on Windows, Google Play on Android, and the App Store on iOS, and are also subject to their terms. We never receive your card or bank details.</p>

      <p>One purchase unlocks one Financial Calendar account. A purchase can't be moved to another account.</p>

      <h2>4. Refunds</h2>

      <p>For a refund of a Windows purchase, contact us at the address below. Refunds of Google Play and App Store purchases are handled by Google and Apple under their refund policies. If a purchase is refunded or charged back, the account returns to read-only.</p>

      <h2>5. Your Files</h2>

      <p>Your files and what you put in them ("Your Content") belong to you. You give Mount Carmel Games a limited permission to store, copy, and send Your Content only as needed to run the Service, such as keeping your files in your account and delivering them to your devices.</p>

      <p>That permission ends when Your Content is deleted from our systems, except for copies kept for a limited time in backups or where the law requires us to keep them.</p>

      <p>You can export your files as Excel workbooks at any time. We work to protect your files, but you are responsible for keeping your own copies of information that matters to you.</p>

      <h2>6. Account Deletion</h2>

      <p>
        You can delete your account's files in Settings → Account → Delete account, or <Link to="/apps/financial_calendar/request_account_deletion">request deletion on our website</Link>. We keep the record of your trial and any purchase, as described in the <Link to="/apps/financial_calendar/privacy_policy">Privacy Policy</Link>.
      </p>

      <h2>7. Acceptable Use</h2>

      <p>You agree not to:</p>

      <ul>
        <li>Use Financial Calendar for unlawful purposes.</li>
        <li>Try to get into other people's accounts or our systems.</li>
        <li>Interfere with, disrupt, or overload the Service.</li>
        <li>Get around the free trial, purchase checks, usage limits, or security protections.</li>
        <li>Reverse engineer Financial Calendar, except where the law allows it.</li>
        <li>Use the Service to send malicious software or harmful content.</li>
      </ul>

      <h2>8. Ownership</h2>

      <p>Financial Calendar, including its software, designs, graphics, icons, names, and documentation, belongs to Mount Carmel Games LLC or its licensors. These Terms don't transfer any of it to you.</p>

      <p>We give you a limited, personal, non-exclusive, non-transferable, revocable license to use Financial Calendar for its intended purpose while you follow these Terms.</p>

      <h2>9. Third-Party Services</h2>

      <p>Financial Calendar relies on other companies for sign-in, hosting, payments, and app distribution. They have their own terms and privacy policies, and we aren't responsible for services we don't control.</p>

      <h2>10. Availability and Changes</h2>

      <p>We may update, change, suspend, or discontinue parts of the Service. We don't promise that the Service will always be available, uninterrupted, secure, or free of errors. If we ever stop running the account service, we will give reasonable notice so you can export your files.</p>

      <h2>11. Disclaimer of Warranties</h2>

      <p>To the fullest extent the law allows, Financial Calendar is provided "as is" and "as available." Mount Carmel Games disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, accuracy, availability, and non-infringement.</p>

      <h2>12. Limitation of Liability</h2>

      <p>To the fullest extent the law allows, Mount Carmel Games LLC and its members, employees, contractors, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from your use of Financial Calendar. This includes late fees, overdraft or other bank charges, missed payments, data loss, or service interruptions.</p>

      <p>To the fullest extent the law allows, our total liability for claims relating to Financial Calendar will not exceed the greater of the amount you paid us for Financial Calendar in the twelve months before the claim, or one hundred U.S. dollars ($100).</p>

      <p>Some places don't allow certain limitations of liability, so parts of this section may not apply to you.</p>

      <h2>13. Indemnification</h2>

      <p>To the extent the law allows, you agree to indemnify and hold harmless Mount Carmel Games LLC from claims, damages, losses, and expenses arising from your unlawful use of Financial Calendar, your violation of these Terms, or your infringement of another person's rights.</p>

      <h2>14. Suspension and Termination</h2>

      <p>We may suspend or end access to the Service if we reasonably believe an account is being used unlawfully, fraudulently, abusively, or in violation of these Terms. You may stop using Financial Calendar at any time.</p>

      <h2>15. Privacy</h2>

      <p>
        Your use of Financial Calendar is also governed by the <Link to="/apps/financial_calendar/privacy_policy">Financial Calendar Privacy Policy</Link>.
      </p>

      <h2>16. Changes to These Terms</h2>

      <p>We may update these Terms. If we make significant changes, we will tell you in the app or on our website. Continuing to use Financial Calendar after the new Terms take effect means you accept them, to the extent the law allows.</p>

      <h2>17. Governing Law</h2>

      <p>These Terms are governed by the laws of the State of Alabama, without regard to conflict-of-law rules, except where consumer protection law where you live requires otherwise.</p>

      <h2>18. Severability and Entire Agreement</h2>

      <p>If any part of these Terms can't be enforced, the rest stays in effect. These Terms and the Privacy Policy are the whole agreement between you and Mount Carmel Games about Financial Calendar.</p>

      <h2>19. Contact Us</h2>

      <address>
        <strong>Mount Carmel Games LLC</strong>
        <br />
        Email: <a href="mailto:admin@mountcarmelgames.com">admin@mountcarmelgames.com</a>
      </address>
    </article>
  );
}
