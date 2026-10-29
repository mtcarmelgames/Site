import { createElement, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { ArrowDown, ArrowRight, ArrowUpRight, Camera, Check, MessageCircle, Monitor, Moon, ScanLine, ShieldCheck, Smartphone } from "lucide-react";
import "../../../css/bitescribe.css";

// Add published listing URLs here as each platform becomes available.
const platforms = [
  { id: "windows", name: "Windows", store: "Microsoft Store", icon: Monitor, href: null },
  { id: "ios", name: "iOS", store: "App Store", icon: Smartphone, href: null },
  { id: "android", name: "Android", store: "Google Play", icon: Smartphone, href: null },
];

const screens = [
  { id: "diary", name: "Daily diary", file: "01-diary-macros.png", description: "Calories, macros, and meals. Your day, all together." },
  { id: "photo", name: "Photo logging", file: "02-photo-logging.png", description: "Start with a product, nutrition label, barcode, or meal photo." },
  { id: "review", name: "Food review", file: "03-food-review.png", description: "Check the details and adjust the numbers before adding to your diary." },
  { id: "calendar", name: "Calendar", file: "04-calendar.png", description: "Look back at your meals and follow your progress over time." },
  { id: "dark", name: "Dark mode", file: "05-diary-dark.png", description: "The same clear diary, with a quieter look after dark." },
];

// Set a local video URL when the BiteScribe trailer is ready.
const trailerSrc = null;
const imageRoot = "/images/bitescribe/landing";

function PlatformLinks() {
  return (
    <div className="bitescribe-platforms">
      {platforms.map(({ id, name, store, icon, href }) => href ? (
        <a className="bitescribe-platform" href={href} key={id}>
          {createElement(icon, { "aria-hidden": true })}<span><small>Download for</small><strong>{name}</strong><small>{store}</small></span><ArrowUpRight aria-hidden="true" />
        </a>
      ) : (
        <div className="bitescribe-platform bitescribe-platform--soon" key={id}>
          {createElement(icon, { "aria-hidden": true })}<span><small>{store}</small><strong>{name}</strong><small>Coming soon</small></span>
        </div>
      ))}
    </div>
  );
}

export default function BiteScribe() {
  const location = useLocation();
  const [platform, setPlatform] = useState("windows");
  const [screen, setScreen] = useState(screens[0]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location.pathname, location.search]);

  return (
    <div className="bitescribe">
      <header className="bitescribe-nav">
        <a className="bitescribe-brand" href="#bitescribe-intro" aria-label="BiteScribe introduction"><img src={`${imageRoot}/app-icon.png`} alt="" width="42" height="42" />BiteScribe<span>by Mt. Carmel Games</span></a>
        <nav aria-label="BiteScribe"><a href="#bitescribe-how">How it works</a><a href="#bitescribe-preview">Explore the app</a><a className="bitescribe-nav-cta" href="#bitescribe-download">Get BiteScribe <ArrowUpRight size={16} aria-hidden="true" /></a></nav>
      </header>

      <section className="bitescribe-intro" id="bitescribe-intro" aria-labelledby="bitescribe-heading">
        <div className="bitescribe-intro-copy">
          <p className="bitescribe-eyebrow"><span /> A little less effort. A lot more clarity.</p>
          <h1 id="bitescribe-heading">Your food.<br />Your goals.<br /><em>Your final say.</em></h1>
          <p className="bitescribe-lead">AI-first calorie tracking you can trust.</p>
          <p className="bitescribe-description">Tell BiteScribe what you ate, snap a photo, or scan a barcode. Review your food, portions, and nutrition. Then make it part of your day.</p>
          <PlatformLinks />
          <a className="bitescribe-text-link" href="#bitescribe-preview">Take a look inside <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <div className="bitescribe-intro-art">
          <div className="bitescribe-orbit" aria-hidden="true" />
          <span className="bitescribe-art-label">A clearer picture of your day</span>
          <img className="bitescribe-phone" src={`${imageRoot}/ios/01-diary-macros.png`} alt="BiteScribe on iPhone showing daily nutrition, macro totals, and breakfast" width="1320" height="2868" fetchPriority="high" />
          <div className="bitescribe-floating-note"><ShieldCheck aria-hidden="true" /><span><strong>AI helps. You decide.</strong><small>Review before you save.</small></span></div>
          <span className="bitescribe-art-caption">Actual app screen · Demo data</span>
        </div>
      </section>

      <div className="bitescribe-promise-strip"><span><Check size={17} aria-hidden="true" /> Editable portions & nutrition</span><span><Check size={17} aria-hidden="true" /> Source links when available</span><span><Check size={17} aria-hidden="true" /> Your diary, your control</span></div>

      <section className="bitescribe-section" id="bitescribe-how" aria-labelledby="bitescribe-how-heading">
        <div className="bitescribe-section-heading"><p className="bitescribe-eyebrow">From the first bite to the bigger picture</p><h2 id="bitescribe-how-heading">Less busywork.<br />More understanding.</h2><p>Getting a meal into your diary should feel like a conversation, not a chore.</p></div>
        <div className="bitescribe-steps">
          <article><div className="bitescribe-step-top"><MessageCircle aria-hidden="true" /><span>01 / START</span></div><h3>Log it your way.</h3><p>Describe your meal, take a photo, or scan a barcode. Start with what you have and let BiteScribe help with the details.</p><div className="bitescribe-methods"><span><MessageCircle size={15} aria-hidden="true" /> Describe</span><span><Camera size={15} aria-hidden="true" /> Snap</span><span><ScanLine size={15} aria-hidden="true" /> Scan</span></div></article>
          <article><div className="bitescribe-step-top"><ShieldCheck aria-hidden="true" /><span>02 / REVIEW</span></div><h3>Make the numbers yours.</h3><p>Check the food, serving size, and nutrition. Open source links when available and adjust the details before saving.</p><p className="bitescribe-step-note">Nothing goes in your diary without your say.</p></article>
          <article><div className="bitescribe-step-top"><Check aria-hidden="true" /><span>03 / KEEP GOING</span></div><h3>See your day add up.</h3><p>Keep meals organized, follow your daily totals, and revisit your calendar. Build a record that helps you understand your habits.</p><a className="bitescribe-text-link" href="#bitescribe-preview">Explore your diary <ArrowRight size={16} aria-hidden="true" /></a></article>
        </div>
      </section>

      <section className="bitescribe-preview bitescribe-section" id="bitescribe-preview" aria-labelledby="bitescribe-preview-heading">
        <div className="bitescribe-preview-heading"><div><p className="bitescribe-eyebrow">Meet your new food diary</p><h2 id="bitescribe-preview-heading">Made for your everyday.</h2></div><p>At your desk or in your pocket.<br />Take a closer look at BiteScribe.</p></div>
        <div className="bitescribe-device-buttons" role="group" aria-label="Choose a platform to preview">{platforms.map(({ id, name, icon }) => <button type="button" key={id} aria-pressed={platform === id} onClick={() => setPlatform(id)}>{createElement(icon, { size: 18, "aria-hidden": true })}{name}</button>)}</div>
        <div className={`bitescribe-screen-stage bitescribe-screen-stage--${platform}`}>
          <img key={`${platform}-${screen.id}`} src={`${imageRoot}/${platform}/${screen.file}`} alt={`BiteScribe ${screen.name.toLowerCase()} on ${platforms.find((item) => item.id === platform).name}`} loading="lazy" />
        </div>
        <div className="bitescribe-screen-buttons" role="group" aria-label="Choose an app screen">{screens.map((item) => <button type="button" key={item.id} aria-pressed={screen.id === item.id} onClick={() => setScreen(item)}>{item.name}</button>)}</div>
        <p className="bitescribe-screen-caption" aria-live="polite">{screen.description}</p><p className="bitescribe-demo-note">Actual app screens with demo data. Appearance varies by platform.</p>
      </section>

      <section className="bitescribe-section bitescribe-features" aria-labelledby="bitescribe-features-heading">
        <div className="bitescribe-section-heading"><p className="bitescribe-eyebrow">More than a calorie count</p><h2 id="bitescribe-features-heading">A little perspective<br />goes a long way.</h2></div>
        <div className="bitescribe-feature-grid">
          <article className="bitescribe-calendar-card"><div><span className="bitescribe-feature-number">01 / THE BIGGER PICTURE</span><h3>Every day tells<br />part of your story.</h3><p>Revisit meals, see your daily grades, and find encouragement in BiteScribe Perspective. An honest record helps you notice what works for you.</p></div><img src={`${imageRoot}/android/04-calendar.png`} alt="BiteScribe calendar with daily grades and a daily Perspective message" width="1080" height="2400" loading="lazy" /></article>
          <article className="bitescribe-control-card"><ShieldCheck size={32} aria-hidden="true" /><span className="bitescribe-feature-number">02 / YOU'RE IN CONTROL</span><h3>Helpful AI.<br />Human judgment.</h3><p>Food isn't always simple. BiteScribe makes room for questions, corrections, and the portion you actually ate.</p><ul><li><Check size={17} aria-hidden="true" /> Adjust servings and nutrition</li><li><Check size={17} aria-hidden="true" /> Review available sources</li><li><Check size={17} aria-hidden="true" /> Keep, edit, or discard a food card</li></ul><p className="bitescribe-fine-print">AI and photo estimates can make mistakes. Review helps you keep a diary you understand.</p></article>
          <article className="bitescribe-dark-card"><div><span className="bitescribe-feature-number"><Moon size={16} aria-hidden="true" /> 03 / A QUIETER LOOK</span><h3>Easy on the eyes.<br />Even after dinner.</h3><p>Switch to dark mode and keep your daily nutrition in focus.</p></div><img src={`${imageRoot}/ios/05-diary-dark.png`} alt="BiteScribe diary in dark mode on iPhone" width="1320" height="2868" loading="lazy" /></article>
        </div>
      </section>

      {trailerSrc && <section className="bitescribe-section bitescribe-trailer" aria-label="Watch the BiteScribe trailer"><h2>A closer look at BiteScribe.</h2><video src={trailerSrc} controls playsInline preload="none" aria-label="BiteScribe trailer" /></section>}

      <section className="bitescribe-section bitescribe-faq" aria-labelledby="bitescribe-faq-heading"><div><p className="bitescribe-eyebrow">A few things to know</p><h2 id="bitescribe-faq-heading">Good questions.<br />Clear answers.</h2></div><div className="bitescribe-questions">
        <details><summary>Where can I get BiteScribe?</summary><p>BiteScribe is coming to Windows, iOS, and Android. The download links on this page will be updated as each store listing becomes available.</p></details>
        <details><summary>Do I have to log everything with a photo?</summary><p>No. Describe a meal in your own words, start with a photo, or scan a barcode. You can also reuse recent foods and review the details before saving.</p></details>
        <details><summary>Can I change the nutrition BiteScribe finds?</summary><p>Yes. Food cards let you review and edit servings and nutrition before adding them to your diary. Source links are shown when available. AI estimates are a starting point you can refine.</p></details>
        <details><summary>Can I set my own calorie and macro goals?</summary><p>Yes. Set daily calorie and macro goals, then follow your totals in the diary and revisit previous days in the calendar.</p></details>
      </div></section>

      <section className="bitescribe-download" id="bitescribe-download" aria-labelledby="bitescribe-download-heading"><img src={`${imageRoot}/app-icon.png`} alt="" width="64" height="64" loading="lazy" /><p className="bitescribe-eyebrow">Your next chapter starts with a bite.</p><h2 id="bitescribe-download-heading">Make room for<br />a clearer picture.</h2><p>A diary you understand. A record you control.<br />BiteScribe is coming to your favorite devices.</p><PlatformLinks /></section>

      <footer className="bitescribe-footer"><span>BiteScribe <small>by Mt. Carmel Games</small></span><nav aria-label="BiteScribe support and policies"><Link to="/apps/bitescribe/privacy_policy">Privacy</Link><Link to="/apps/bitescribe/terms">Terms</Link><Link to="/contact">Support</Link></nav></footer>
    </div>
  );
}
