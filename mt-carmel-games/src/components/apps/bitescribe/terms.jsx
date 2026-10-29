import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <main className="legal-page">
      <h1>BiteScribe Terms of Service</h1>

      <p>
        <strong>Effective Date:</strong> October 7, 2026
      </p>

      <p>These Terms of Service ("Terms") govern your access to and use of BiteScribe, including the BiteScribe mobile application, website, services, features, and related software (collectively, the "Service").</p>

      <p>BiteScribe is operated by Mount Carmel Games LLC ("Mount Carmel Games," "we," "us," or "our"), an Alabama limited liability company.</p>

      <p>By accessing or using BiteScribe, you agree to these Terms. If you do not agree to these Terms, do not use the Service.</p>

      <h2>1. BiteScribe Is Not Medical Advice</h2>

      <p>BiteScribe is intended to help users record food, meals, nutrition information, and related wellness information for general informational and personal tracking purposes.</p>

      <p>BiteScribe does not provide medical advice, diagnosis, treatment, or professional healthcare services. Information provided through BiteScribe should not be used as a substitute for advice from a physician, dietitian, pharmacist, or other qualified healthcare professional.</p>

      <p>You should not rely on BiteScribe for medical decisions, including decisions involving medications, insulin dosing, allergies, eating disorders, medical nutrition therapy, or the diagnosis or treatment of any health condition.</p>

      <p>If you have questions about your health, diet, medications, or nutritional needs, consult a qualified healthcare professional.</p>

      <h2>2. Nutrition Information and Estimates</h2>

      <p>BiteScribe may provide nutrition information such as calories, protein, carbohydrates, fat, serving sizes, ingredients, or other nutritional values.</p>

      <p>Some information may be obtained from manufacturers, public sources, third-party services, artificial intelligence systems, user input, photographs, or estimates.</p>

      <p>Nutritional information may be incomplete, outdated, inaccurate, or different from the food you actually consumed. Restaurant preparation methods, serving sizes, recipes, product formulas, substitutions, and other factors can cause actual nutritional values to vary.</p>

      <p>You are responsible for reviewing nutrition information before relying on it.</p>

      <h2>3. Artificial Intelligence</h2>

      <p>BiteScribe may use artificial intelligence and automated systems to interpret user requests, photographs, food descriptions, and other information.</p>

      <p>Artificial intelligence can make mistakes. AI-generated results may incorrectly identify foods, portion sizes, ingredients, serving sizes, or nutritional values.</p>

      <p>You should review AI-generated information before adding it to your diary or relying on it for personal decisions.</p>

      <h2>4. Accounts</h2>

      <p>Certain BiteScribe features require an account. You agree to provide accurate information and to maintain the security of your account.</p>

      <p>You are responsible for activity performed through your account unless the activity resulted from a security failure caused by us.</p>

      <p>Authentication may be provided through third-party identity providers such as Auth0, Google, Apple, or other supported login providers.</p>

      <h2>5. Account Deletion</h2>

      <p>You may request deletion of your BiteScribe account and associated personal data through the account deletion options provided in BiteScribe or through our account deletion page.</p>

      <p>We may retain limited information when required by law, necessary to resolve disputes, prevent fraud or abuse, maintain financial records, or enforce these Terms.</p>

      <h2>6. Subscriptions and Paid Features</h2>

      <p>BiteScribe may offer paid subscriptions or premium features. Prices, billing periods, free trials, and available features will be displayed before purchase.</p>

      <p>Purchases made through Apple App Store or Google Play are billed through the applicable store and are subject to that store's payment and subscription terms.</p>

      <p>Unless otherwise stated, subscriptions automatically renew until canceled through the platform through which they were purchased.</p>

      <p>You are responsible for canceling a subscription before its renewal date if you do not want it to renew.</p>

      <p>Refund requests for purchases processed by Apple or Google are generally handled according to the applicable store's refund policies.</p>

      <h2>7. User Content</h2>

      <p>You may provide BiteScribe with photographs, meal descriptions, text, notes, nutrition information, and other content ("User Content").</p>

      <p>You retain ownership of your User Content.</p>

      <p>You grant Mount Carmel Games a limited, non-exclusive license to process, store, transmit, reproduce, and analyze User Content only as reasonably necessary to operate, maintain, improve, secure, and provide the Service.</p>

      <p>This license ends when the User Content is deleted from our systems, except where retention is required by law or reasonably necessary for backups, security, fraud prevention, or legal obligations.</p>

      <h2>8. Photos and Food Analysis</h2>

      <p>If you submit photographs for food identification or analysis, those photographs may be transmitted to service providers that assist BiteScribe with image processing or artificial intelligence analysis.</p>

      <p>You should avoid submitting photographs containing information or people unrelated to the food or meal you want BiteScribe to analyze.</p>

      <h2>9. Acceptable Use</h2>

      <p>You agree not to:</p>

      <ul>
        <li>Use BiteScribe for unlawful purposes.</li>
        <li>Attempt to gain unauthorized access to BiteScribe or its systems.</li>
        <li>Interfere with or disrupt the Service.</li>
        <li>Use automated systems to abuse or overload the Service.</li>
        <li>Attempt to bypass usage limits, security protections, or access controls.</li>
        <li>Reverse engineer BiteScribe except where expressly permitted by law.</li>
        <li>Use BiteScribe to transmit malicious software or harmful content.</li>
        <li>Use the Service in a way that infringes the rights of another person.</li>
      </ul>

      <h2>10. Ownership of BiteScribe</h2>

      <p>BiteScribe, including its software, source code, designs, graphics, icons, branding, interfaces, documentation, trademarks, and other intellectual property, is owned by Mount Carmel Games LLC or its licensors.</p>

      <p>These Terms do not transfer ownership of BiteScribe or any intellectual property to you.</p>

      <p>We grant you a limited, personal, non-exclusive, non-transferable, revocable license to use BiteScribe for its intended purpose while you comply with these Terms.</p>

      <h2>11. Third-Party Services</h2>

      <p>BiteScribe may rely on third-party services for authentication, hosting, artificial intelligence, payment processing, analytics, app distribution, nutrition information, or other functionality.</p>

      <p>Those services may be subject to their own terms and privacy policies. We are not responsible for third-party services that we do not control.</p>

      <h2>12. Availability of the Service</h2>

      <p>We may modify, update, suspend, discontinue, or restrict portions of BiteScribe at any time.</p>

      <p>We do not guarantee that the Service will always be available, uninterrupted, secure, or free from errors.</p>

      <h2>13. Disclaimer of Warranties</h2>

      <p>To the fullest extent permitted by law, BiteScribe is provided "as is" and "as available."</p>

      <p>Mount Carmel Games disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, reliability, availability, and non-infringement.</p>

      <p>We do not guarantee the accuracy of food identification, nutritional information, calorie estimates, portion estimates, AI-generated information, manufacturer information, or other information provided through the Service.</p>

      <h2>14. Limitation of Liability</h2>

      <p>
        To the fullest extent permitted by applicable law, Mount Carmel Games LLC and its members, employees, contractors, officers, agents, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from or relating to your use
        of BiteScribe.
      </p>

      <p>This includes, without limitation, damages arising from inaccurate nutritional information, food identification errors, data loss, service interruptions, reliance on AI-generated information, or decisions made based on information provided through BiteScribe.</p>

      <p>To the fullest extent permitted by law, our total liability for claims arising out of or relating to BiteScribe will not exceed the greater of:</p>

      <ul>
        <li>The amount you paid to Mount Carmel Games for BiteScribe during the twelve months preceding the claim; or</li>
        <li>One hundred U.S. dollars ($100).</li>
      </ul>

      <p>Some jurisdictions do not allow certain limitations of liability, so portions of this section may not apply to you.</p>

      <h2>15. Indemnification</h2>

      <p>To the extent permitted by law, you agree to indemnify and hold harmless Mount Carmel Games LLC from claims, damages, liabilities, losses, and expenses arising from your unlawful use of BiteScribe, your violation of these Terms, or your infringement of another person's rights.</p>

      <h2>16. Suspension and Termination</h2>

      <p>We may suspend or terminate access to BiteScribe if we reasonably believe an account is being used unlawfully, fraudulently, abusively, or in violation of these Terms.</p>

      <p>You may stop using BiteScribe at any time and may request deletion of your account.</p>

      <h2>17. Privacy</h2>

      <p>Your use of BiteScribe is also governed by the BiteScribe Privacy Policy, which describes how Mount Carmel Games collects, uses, stores, and shares personal information.</p>

      <h2>18. Changes to These Terms</h2>

      <p>We may update these Terms from time to time. If we make material changes, we may provide notice through BiteScribe, our website, email, or another reasonable method.</p>

      <p>Your continued use of BiteScribe after updated Terms become effective constitutes acceptance of the revised Terms, to the extent permitted by law.</p>

      <h2>19. Governing Law</h2>

      <p>These Terms are governed by the laws of the State of Alabama, without regard to conflict-of-law principles, except where applicable consumer protection law requires otherwise.</p>

      <h2>20. Severability</h2>

      <p>If any provision of these Terms is found unenforceable, the remaining provisions will remain in effect.</p>

      <h2>21. Entire Agreement</h2>

      <p>These Terms, together with the BiteScribe Privacy Policy and any additional terms presented for specific features, constitute the agreement between you and Mount Carmel Games regarding your use of BiteScribe.</p>

      <h2>22. Contact Us</h2>

      <p>Questions about these Terms may be sent to:</p>

      <address>
        <strong>Mount Carmel Games LLC</strong>
        <br />
        Email: admin@mountcarmelgames.com
      </address>
    </main>
  );
}
