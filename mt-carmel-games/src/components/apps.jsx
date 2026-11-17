import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { Sprout } from "lucide-react";
import ProductCarousel from "./product_carousel";
import "../css/apps.css";

// Add software here; carousel navigation appears when there is more than one product.
const products = [
  {
    id: "bitescribe",
    name: "BiteScribe",
    category: "Nutrition & wellness",
    headline: "AI-first calorie tracking you can trust.",
    description: "Describe a meal, snap a photo, and review the details before they reach your diary.",
    icon: "/images/bitescribe/landing/app-icon.png",
    path: "/apps/bitescribe",
    platforms: ["Windows", "iOS", "Android"],
    preview: { src: "/images/bitescribe/landing/product-showcase.png", alt: "BiteScribe nutrition diary shown on a laptop and iPhone in a warm workspace" },
    desktop: { src: "/images/bitescribe/landing/windows/01-diary-macros.png", alt: "BiteScribe daily nutrition and food diary on Windows" },
    phone: { src: "/images/bitescribe/landing/ios/01-diary-macros.png", alt: "BiteScribe daily nutrition and food diary on iPhone" },
  },
  {
    id: "financial_calendar",
    name: "Financial Calendar",
    category: "Bills & budgeting",
    headline: "Every bill, planned by paycheck.",
    description: "See what each paycheck has to cover before it arrives, check bills off as you pay them, and know what's left.",
    icon: "/images/financial_calendar/landing/app-icon.png",
    path: "/apps/financial_calendar",
    platforms: ["Windows", "iOS", "Android"],
    availability: "Coming soon",
    preview: { src: "/images/financial_calendar/landing/product-showcase.png", alt: "Financial Calendar pay periods on a desktop monitor and an Android phone on a sunny desk, next to a paper calendar", position: "75% center", width: 1672, height: 941 },
  },
];

export default function Apps() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location.pathname, location.search]);

  return (
    <div className="apps-page">
      <header className="apps-introduction">
        <p className="apps-eyebrow">Our software</p>
        <h1>Thoughtful software.<br />Made for everyday life.</h1>
        <p>Practical tools from Mount Carmel Games, built with care.</p>
      </header>

      <ProductCarousel products={products} />

      <aside className="apps-coming-soon">
        <Sprout size={32} aria-hidden="true" />
        <div><h2>More good things are in the works.</h2><p>We're building our next tools. Stay tuned.</p></div>
      </aside>
    </div>
  );
}
