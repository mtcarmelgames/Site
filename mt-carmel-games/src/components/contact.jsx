import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { Send } from "lucide-react";
import "../css/contact.css";

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location.pathname, location.search]);

  return (
    <div className="contact-page">
      <header className="contact-introduction">
        <p className="contact-eyebrow">Get in touch</p>
        <h1>Good things start<br />with a conversation.</h1>
        <p>A question, an idea, or a little feedback? We'd love to hear from you.</p>
      </header>

      <div className="contact-layout">
        <form className="contact-form" action="https://formsubmit.co/admin@mountcarmelgames.com" method="POST">
          <div className="contact-form-heading"><h2>Send us a message.</h2><p>All fields are required.</p></div>
          <input type="hidden" name="_subject" value="Mount Carmel Games website inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_url" value={`${window.location.origin}${location.pathname}`} />
          <input className="contact-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="contact-form-row">
            <div className="contact-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" maxLength={120} placeholder="Name" required /></div>
            <div className="contact-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" required /></div>
          </div>

          <div className="contact-field"><label htmlFor="contact-topic">What's it about?</label><select id="contact-topic" name="topic" defaultValue="" required><option value="" disabled>Select a topic</option><option value="BiteScribe">BiteScribe</option><option value="War Nuggets">War Nuggets</option><option value="Other">Other</option></select></div>
          <div className="contact-field"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows={7} minLength={10} maxLength={5000} placeholder="Tell us what's on your mind..." required /></div>

          <p className="contact-form-note" id="contact-delivery-note">Your message is sent through <a href="https://formsubmit.co/" target="_blank" rel="noreferrer">FormSubmit</a> to our inbox. We use your email to reply to your inquiry.</p>
          <button className="contact-send" type="submit" aria-describedby="contact-delivery-note">Send message<Send size={18} aria-hidden="true" /></button>
        </form>
      </div>
    </div>
  );
}
