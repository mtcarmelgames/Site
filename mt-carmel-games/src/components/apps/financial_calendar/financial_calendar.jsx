import { createElement, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Check, CheckCheck, FileSpreadsheet, Landmark, Monitor, Repeat, ShieldCheck, Smartphone, WalletCards } from "lucide-react";
import "../../../css/financial_calendar.css";

// Put each store's listing URL here, and set live to true, once that version is published.
const platforms = [
  { id: "windows", name: "Windows", store: "Microsoft Store", icon: Monitor, href: "https://apps.microsoft.com/detail/9NF7QD17ZW34", live: false },
  { id: "ios", name: "iOS", store: "App Store", icon: Smartphone, href: null, live: false },
  { id: "android", name: "Android", store: "Google Play", icon: Smartphone, href: "https://play.google.com/store/apps/details?id=com.mountcarmelgames.financialcalendar", live: false },
];

// Screens with demo data. iOS screenshots can be added once the iPhone build is ready.
const previewPlatforms = platforms.filter(({ id }) => id !== "ios");
const screens = {
  windows: [
    { id: "statements", name: "Pay periods", file: "01-statements.png", description: "Every pay period side by side: what came in, what's due, and what's left." },
    { id: "bills", name: "Bills & Pay", file: "02-bills-and-pay.png", description: "Your bills and paychecks, set up once. Each new pay period fills itself in." },
  ],
  android: [
    { id: "statements", name: "Pay periods", file: "01-statement.png", description: "One pay period per screen, with what's left right at the top." },
    { id: "bills", name: "Bills & Pay", file: "02-bills-and-pay.png", description: "Your bills and paychecks, set up once. Each new pay period fills itself in." },
  ],
};

const questions = [
  { question: "Does it connect to my bank?", answer: "No. Financial Calendar never asks for bank logins or account numbers. You enter your bills and paychecks yourself, so you see exactly what you planned." },
  { question: "Is it a subscription?", answer: "No. Try everything free for 30 days, then buy it once for $9.99. That one purchase unlocks Financial Calendar on Windows, Android, and iPhone with your account." },
  { question: "What happens if I don't buy after the trial?", answer: "Your files stay yours. You can still open, read, export, and delete them; you just can't make changes until you buy." },
  { question: "Can I use it on my phone and my PC?", answer: "Yes. Sign in with Apple, Google, or email to keep up to three files in your account. They open on every device, and changes made offline sync when you're back online." },
  { question: "I used the original Financial Calendar for Windows. Can I bring my files?", answer: "Yes. Financial Calendar uses the same Excel workbook layout, so your old files open in the new app." },
];

const imageRoot = "/images/financial_calendar/landing";
const storeIcons = { windows: "microsoft-store.svg", ios: "apple.svg", android: "google-play.svg" };

function PlatformLinks() {
  return (
    <div className="fincal-platforms">
      {platforms.map(({ id, name, store, href, live }) => href && live ? (
        <a className="fincal-platform fincal-platform--available" href={href} key={id} aria-label={`Get Financial Calendar for ${name} on the ${store}`}>
          <img className="fincal-store-icon" src={`/images/bitescribe/stores/${storeIcons[id]}`} alt="" width="36" height="36" /><span><small>Available now on</small><strong>{store}</strong><small>For {name}</small></span><ArrowUpRight className="fincal-store-arrow" aria-hidden="true" />
        </a>
      ) : (
        <div className="fincal-platform fincal-platform--soon" key={id}>
          <img className="fincal-store-icon" src={`/images/bitescribe/stores/${storeIcons[id]}`} alt="" width="36" height="36" /><span><small>Coming soon to</small><strong>{store}</strong><small>For {name}</small></span>
        </div>
      ))}
    </div>
  );
}

export default function FinancialCalendar() {
  const location = useLocation();
  const [platform, setPlatform] = useState("windows");
  const [screenId, setScreenId] = useState("statements");
  const screen = screens[platform].find((item) => item.id === screenId) ?? screens[platform][0];

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location.pathname, location.search]);

  return (
    <div className="fincal">
      <header className="fincal-nav">
        <a className="fincal-brand" href="#fincal-intro" aria-label="Financial Calendar introduction"><img src={`${imageRoot}/app-icon.png`} alt="" width="42" height="42" /><span className="fincal-brand-copy"><strong>Financial Calendar</strong><small>by Mount Carmel Games</small></span></a>
        <nav aria-label="Financial Calendar"><a href="#fincal-how">How it works</a><a href="#fincal-preview">Explore the app</a><a className="fincal-nav-cta" href="#fincal-download">Get Financial Calendar <ArrowUpRight size={16} aria-hidden="true" /></a></nav>
      </header>

      <section className="fincal-intro" id="fincal-intro" aria-labelledby="fincal-heading">
        <div className="fincal-intro-copy">
          <p className="fincal-eyebrow"><span /> Paycheck to paycheck, without the guesswork.</p>
          <h1 id="fincal-heading">Every bill.<br />Every <em>payday.</em></h1>
          <p className="fincal-lead">See what each paycheck has to cover, before it arrives.</p>
          <p className="fincal-description">Financial Calendar lays out your bills by pay period: your paycheck, everything due before the next one, and what's left. No bank logins, no categories, no tracking every coffee.</p>
          <PlatformLinks />
          <a className="fincal-text-link" href="#fincal-preview">Take a look inside <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <div className="fincal-intro-art">
          <div className="fincal-orbit" aria-hidden="true" />
          <img className="fincal-phone" src={`${imageRoot}/android/01-statement.png`} alt="Financial Calendar on Android showing one pay period: a paycheck, bills checked off as paid, and $979.52 left" width="1080" height="2400" fetchPriority="high" />
          <div className="fincal-floating-note"><span className="fincal-coin" aria-hidden="true">$</span><span><strong>$979.52 left</strong><small>after this paycheck's bills</small></span></div>
          <span className="fincal-art-caption">Actual app screen · Demo data</span>
        </div>
      </section>

      <div className="fincal-promise-strip"><span><Check size={17} aria-hidden="true" /> Never connects to your bank</span><span><Check size={17} aria-hidden="true" /> No ads, no tracking</span><span><Check size={17} aria-hidden="true" /> Buy once, use it everywhere</span></div>

      <section className="fincal-section" id="fincal-how" aria-labelledby="fincal-how-heading">
        <div className="fincal-section-heading"><p className="fincal-eyebrow">Simple on purpose</p><h2 id="fincal-how-heading">Know where you stand,<br />every payday.</h2><p>Budgeting apps want every receipt. Financial Calendar asks one question: will this paycheck cover what's due before the next one?</p></div>
        <div className="fincal-steps">
          <article><div className="fincal-step-top"><Repeat aria-hidden="true" /><span>01 / SET UP</span></div><h3>Add your bills and pay once.</h3><p>Rent on the 1st, the phone bill on the 22nd, groceries every paycheck. Put them in Bills & Pay one time.</p><div className="fincal-methods"><span><CalendarDays size={15} aria-hidden="true" /> Day of month</span><span><Repeat size={15} aria-hidden="true" /> Every paycheck</span><span><Repeat size={15} aria-hidden="true" /> Every other</span></div></article>
          <article><div className="fincal-step-top"><WalletCards aria-hidden="true" /><span>02 / PLAN</span></div><h3>Each payday fills itself in.</h3><p>Add the next pay period and every bill due before the following payday lands in it, with what's left at the bottom. Weekly, every two weeks, or monthly.</p><p className="fincal-step-note">Add one-off expenses any time.</p></article>
          <article><div className="fincal-step-top"><CheckCheck aria-hidden="true" /><span>03 / CHECK OFF</span></div><h3>Mark it paid. Then cleared.</h3><p>Check each bill when you pay it, and again when it clears the bank, so nothing surprises you. Select a few rows to see their total.</p><a className="fincal-text-link" href="#fincal-preview">See it in action <ArrowRight size={16} aria-hidden="true" /></a></article>
        </div>
      </section>

      <section className="fincal-preview fincal-section" id="fincal-preview" aria-labelledby="fincal-preview-heading">
        <div className="fincal-preview-heading"><div><p className="fincal-eyebrow">On your desk and in your pocket</p><h2 id="fincal-preview-heading">Made for payday.</h2></div><p>Plan on your PC, check things off on your phone.<br />Take a closer look at Financial Calendar.</p></div>
        <div className="fincal-device-buttons" role="group" aria-label="Choose a platform to preview">{previewPlatforms.map(({ id, name, icon }) => <button type="button" key={id} aria-pressed={platform === id} onClick={() => setPlatform(id)}>{createElement(icon, { size: 18, "aria-hidden": true })}{name}</button>)}</div>
        <div className={`fincal-screen-stage fincal-screen-stage--${platform}`}>
          <img key={`${platform}-${screen.id}`} src={`${imageRoot}/${platform}/${screen.file}`} alt={`Financial Calendar ${screen.name} on ${platforms.find((item) => item.id === platform).name}`} loading="lazy" />
        </div>
        <div className="fincal-screen-buttons" role="group" aria-label="Choose an app screen">{screens[platform].map((item) => <button type="button" key={item.id} aria-pressed={screen.id === item.id} onClick={() => setScreenId(item.id)}>{item.name}</button>)}</div>
        <p className="fincal-screen-caption" aria-live="polite">{screen.description}</p><p className="fincal-demo-note">Actual app screens with demo data. Appearance varies by platform.</p>
      </section>

      <section className="fincal-section fincal-features" aria-labelledby="fincal-features-heading">
        <div className="fincal-section-heading"><p className="fincal-eyebrow">Your money, your way</p><h2 id="fincal-features-heading">Less worry.<br />No strings.</h2></div>
        <div className="fincal-feature-grid">
          <article className="fincal-calendar-card"><div><span className="fincal-feature-number">01 / EVERY DEVICE</span><h3>Plan at your desk.<br />Check off on the go.</h3><p>Sign in with Apple, Google, or email and your files open on Windows, Android, and iPhone. Edits made offline sync when you're back online, and a change from another device is never overwritten without asking.</p></div><img src={`${imageRoot}/android/02-bills-and-pay.png`} alt="Bills & Pay on Android listing a paycheck, rent, utilities, and other bills" width="1080" height="2400" loading="lazy" /></article>
          <article className="fincal-control-card"><ShieldCheck size={32} aria-hidden="true" /><span className="fincal-feature-number">02 / YOU'RE IN CONTROL</span><h3>Nothing to link.<br />Nothing to share.</h3><p>You type in what matters. Financial Calendar never sees your bank, and your files stay yours to keep.</p><ul><li><Landmark size={17} aria-hidden="true" /> No bank logins or account numbers</li><li><FileSpreadsheet size={17} aria-hidden="true" /> Import and export Excel workbooks</li><li><Check size={17} aria-hidden="true" /> Backups kept on your device</li></ul><p className="fincal-fine-print">Financial Calendar is a planning tool, not financial advice. Totals are only as accurate as what you enter.</p></article>
          <article className="fincal-dark-card"><div><span className="fincal-feature-number">03 / ONE PRICE</span><h3>Free for 30 days.<br />Then yours for good.</h3><div className="fincal-price"><strong>$9.99</strong><span>once, for every device</span></div><p>No subscription and no ads. If you don't buy, your files stay yours to open and export.</p></div><img src={`${imageRoot}/app-icon.png`} alt="" width="512" height="512" loading="lazy" /></article>
        </div>
      </section>

      <section className="fincal-section fincal-faq" aria-labelledby="fincal-faq-heading">
        <div className="fincal-section-heading"><p className="fincal-eyebrow">Questions</p><h2 id="fincal-faq-heading">Good to know.</h2></div>
        <div className="fincal-questions">{questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="fincal-download" id="fincal-download" aria-labelledby="fincal-download-heading"><img src={`${imageRoot}/app-icon.png`} alt="" width="64" height="64" loading="lazy" /><p className="fincal-eyebrow">Your next payday starts here.</p><h2 id="fincal-download-heading">Plan the paycheck.<br />Keep the change.</h2><p>Try it free for 30 days, then $9.99 once for every device.<br />Coming soon to Windows, Android, and iPhone.</p><PlatformLinks />
      </section>

      <footer className="fincal-footer"><span>Financial Calendar <small>by Mt. Carmel Games</small></span><nav aria-label="Financial Calendar support and policies"><Link to="/apps/financial_calendar/privacy_policy">Privacy</Link><Link to="/apps/financial_calendar/terms">Terms</Link><Link to="/apps/financial_calendar/request_account_deletion">Delete account</Link><Link to="/contact">Support</Link></nav></footer>
    </div>
  );
}
