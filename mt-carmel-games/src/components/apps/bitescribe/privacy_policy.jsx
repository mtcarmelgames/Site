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
      <Link to="/apps/bitescribe">← Back to BiteScribe</Link>
      <h1>BiteScribe Privacy Policy</h1>

      <p>
        <strong>Effective Date:</strong> October 6, 2026
      </p>

      <p>
        <strong>Last Updated:</strong> October 6, 2026
      </p>

      <p>BiteScribe is operated by Mount Carmel Games LLC ("BiteScribe", "Mount Carmel Games", "we", "us", or "our").</p>

      <p>We respect your privacy. This Privacy Policy explains what information BiteScribe collects, how we use that information, when information may be processed by service providers, how information may be retained, and the choices available to you.</p>

      <p>This Privacy Policy applies to the BiteScribe mobile application, website, and related services.</p>

      <h2>1. Information We Collect</h2>

      <h3>Account Information</h3>

      <p>When you create or use a BiteScribe account, we may receive information such as your email address, name, profile image, account identifier, and authentication information necessary to maintain your session.</p>

      <p>BiteScribe uses Auth0 to provide authentication. If you sign in using a service such as Google or Apple, BiteScribe may receive limited account information from that provider.</p>

      <p>BiteScribe does not receive your Google or Apple account password.</p>

      <h3>Nutrition, Goals, and Diary Information</h3>

      <p>When you use BiteScribe, you may provide foods and beverages you consume, serving sizes and portions, calorie and nutrition information, diary entries, nutrition goals, weight, and other information used to provide BiteScribe's nutrition-tracking features.</p>

      <p>We use this information to provide food logging, nutrition tracking, goal calculation, and personalization features.</p>

      <h3>Chat Messages and Food Searches</h3>

      <p>BiteScribe stores messages you send through its chat features and BiteScribe's responses so that conversation history and related features can be provided.</p>

      <p>Messages may contain food descriptions, restaurant or product names, serving information, nutrition questions, corrections, or other information you choose to provide.</p>

      <p>Some requests are processed using artificial intelligence. Depending on the request and service availability, submitted text may be processed by service providers including OpenAI or Cloudflare.</p>

      <h3>Meal Photos</h3>

      <p>If you choose to use BiteScribe's meal-photo features, the photograph is processed by BiteScribe and may be transmitted to an artificial intelligence service, such as OpenAI, to identify foods and estimate portions and nutrition.</p>

      <p>Meal photos used in chat may be stored as part of your private BiteScribe chat history so that you can view or retry them later.</p>

      <p>Stored meal photos are associated with your authenticated account and are not made publicly accessible by BiteScribe.</p>

      <p>BiteScribe does not access your camera or photo library unless you choose to use a feature requiring that access and grant the applicable device permission.</p>

      <h3>Voice Input</h3>

      <p>BiteScribe may allow you to dictate a chat message using the speech-recognition capabilities provided by your device or operating system.</p>

      <p>BiteScribe uses the resulting transcription to populate your chat message. BiteScribe's servers do not receive the original microphone audio through this feature.</p>

      <p>If you send the transcribed message, the text is processed and stored in the same manner as a message you typed manually. Your device's speech-recognition service may be subject to the privacy practices of the applicable operating-system or service provider.</p>

      <h3>Barcode Information</h3>

      <p>If you use a barcode feature, BiteScribe may process and store the barcode in connection with a food lookup or diary entry.</p>

      <h3>Lookup and Diagnostic Information</h3>

      <p>
        BiteScribe maintains diagnostic information used to operate, troubleshoot, evaluate, and improve its nutrition lookup system. Depending on the request, this may include the food or product searched for, brand information, barcode information, serving information, nutrition-source URLs,
        lookup results, source evidence, request timing, performance information, and AI usage information.
      </p>

      <p>AI usage records may include items such as model name, token counts, request duration, estimated cost, and whether a request succeeded. These usage records do not separately store the contents of the AI message.</p>

      <h3>Product and Nutrition Reference Information</h3>

      <p>BiteScribe may retain product-level nutrition information, manufacturer URLs, barcodes, nutrition-source evidence, and similar reference information used to improve future food lookups.</p>

      <p>Product-reference information that is not associated with an identifiable user may remain after an account is deleted.</p>

      <h2>2. How We Use Information</h2>

      <p>
        We use information collected through BiteScribe to create and manage accounts, authenticate users, maintain food diaries and chat history, calculate nutrition goals, identify foods and products, analyze meal photographs, process voice-transcribed messages, locate nutrition information,
        operate AI-assisted features, improve food lookup accuracy, diagnose technical problems, measure service usage and costs, protect BiteScribe, respond to support or privacy requests, and comply with applicable legal obligations.
      </p>

      <h2>3. Artificial Intelligence and Food Lookup Services</h2>

      <p>BiteScribe uses automated systems and artificial intelligence to interpret food descriptions, analyze supported meal photographs, locate nutrition information, and prepare editable nutrition entries.</p>

      <p>Depending on the feature and service availability, information necessary to complete a request may be processed by services operated by companies such as OpenAI or Cloudflare.</p>

      <p>BiteScribe is designed to avoid including private diary information in public web searches. Food lookup searches are intended to contain only product-related information necessary to find nutrition information, such as food name, brand, serving size, or barcode.</p>

      <p>BiteScribe may retrieve publicly available information from manufacturer, restaurant, retailer, nutrition, or other websites to locate and verify nutrition information.</p>

      <h2>4. Service Providers</h2>

      <p>
        BiteScribe relies on third-party service providers to operate portions of the service. These may include Auth0 for account authentication, OpenAI and Cloudflare for artificial intelligence processing, IONOS and related infrastructure providers for server hosting, Apple and Google for
        authentication and application-platform services, and other providers necessary to operate BiteScribe.
      </p>

      <p>We provide service providers only with information reasonably necessary to provide the requested feature or operate the service.</p>

      <h2>5. How We Share Information</h2>

      <p>
        We may disclose information to service providers necessary to operate BiteScribe, when you request a feature requiring another service to process information, when necessary to protect BiteScribe or others, when required by applicable law or legal process, or in connection with a merger,
        acquisition, financing, restructuring, or sale of some or all of Mount Carmel Games LLC.
      </p>

      <p>
        <strong>Mount Carmel Games LLC does not sell BiteScribe users' personal information for money.</strong>
      </p>

      <p>BiteScribe does not use your personal information for third-party behavioral advertising.</p>

      <h2>6. Data Retention</h2>

      <p>We retain personal information for as long as reasonably necessary to operate BiteScribe, maintain your account and requested features, diagnose problems, protect the service, resolve disputes, and comply with applicable legal obligations.</p>

      <p>Account information, diary entries, nutrition goals, chat messages, and meal photos may remain associated with your account while it is active. Lookup diagnostics and AI usage records may be retained for operational, troubleshooting, security, and cost-management purposes.</p>

      <p>Product-level or public nutrition-reference information that no longer identifies an individual user may be retained after an account is deleted.</p>

      <h2>7. Account and Data Deletion</h2>

      <p>You may initiate deletion of your BiteScribe account from the Account section of the BiteScribe application. BiteScribe will direct you to our account-deletion request page:</p>

      <p>
        <a href="/apps/bitescribe/request_account_deletion">Request BiteScribe Account Deletion</a>
      </p>

      <p>You will be asked to provide the email address associated with your BiteScribe account so that we can verify the request. Account-deletion requests may be processed manually. We will provide confirmation after deletion has been completed.</p>

      <p>
        After a verified deletion request is completed, BiteScribe deletes account-associated information that is not required to be retained by law or for another legitimate purpose. This may include diary entries, nutrition goals and profile information, chat history, stored meal photos,
        account-linked lookup diagnostics, AI usage records, account-specific product records, subscription-entitlement records, and the associated BiteScribe authentication identity.
      </p>

      <p>Product, manufacturer, or nutrition-reference information that has been separated from your account and does not identify you may remain.</p>

      <p>Deleting your BiteScribe account does not automatically cancel a paid subscription managed by an application marketplace. Marketplace subscriptions must be canceled separately through the applicable marketplace.</p>

      <h2>8. Local Device Information</h2>

      <p>BiteScribe may store information locally on your device, including authentication-session information, application preferences, conversation identifiers, and locally cached application data.</p>

      <p>Authentication credentials used to maintain a BiteScribe session are stored using operating-system secure-storage capabilities where supported.</p>

      <h2>9. Security</h2>

      <p>We use reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, loss, or misuse.</p>

      <p>BiteScribe uses authenticated access controls to separate private account data between users. Network communication with BiteScribe's production services uses encrypted HTTPS connections.</p>

      <p>No electronic system can be guaranteed to be completely secure, and we cannot guarantee absolute security.</p>

      <h2>10. Your Choices and Controls</h2>

      <p>
        You may edit or delete diary entries, change nutrition goals, choose whether to use meal-photo or voice features, decline camera, microphone, or photo-library permissions, manage device permissions through your operating-system settings, and request deletion of your BiteScribe account and
        associated personal information.
      </p>

      <h2>11. Children's Privacy</h2>

      <p>BiteScribe is not intended for children under 13, and Mount Carmel Games LLC does not knowingly collect personal information from children under 13.</p>

      <p>If we learn that personal information from a child under 13 has been collected without appropriate authorization, we will take reasonable steps to delete it.</p>

      <h2>12. Your Privacy Rights</h2>

      <p>Depending on where you live, applicable law may provide rights relating to your personal information, including rights to request access, correction, deletion, or information regarding how your information is used or disclosed.</p>

      <p>We may take reasonable steps to verify your identity before completing certain requests.</p>

      <h2>13. International Processing</h2>

      <p>Mount Carmel Games LLC and its service providers may process information in the United States or other locations in which they operate. Information may therefore be processed outside the state, province, or country in which you live, subject to applicable law.</p>

      <h2>14. Changes to This Privacy Policy</h2>

      <p>We may update this Privacy Policy as BiteScribe changes or as applicable laws, regulations, or service requirements change. When this policy changes, we will update the Last Updated date above.</p>

      <p>If a change materially affects how we handle personal information, we may provide additional notice when appropriate.</p>

      <h2>15. Contact Us</h2>

      <p>For privacy questions or requests relating to BiteScribe, contact:</p>

      <p>
        <strong>Mount Carmel Games LLC</strong>
        <br />
        Email: <a href="mailto:admin@mountcarmelgames.com">admin@mountcarmelgames.com</a>
      </p>

      <p>
        Account deletion: <a href="/apps/bitescribe/request_account_deletion">Request Account Deletion</a>
      </p>
    </article>
  );
}
