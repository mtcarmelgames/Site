import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import { Gamepad2 } from "lucide-react";
import ProductCarousel from "./product_carousel";
import "../css/apps.css";
import "../css/games.css";

// Add future games here; the shared carousel supplies navigation automatically.
const games = [
  {
    id: "war-nuggets",
    name: "War Nuggets",
    category: "In development",
    headline: "Small Units. Big Battles.",
    description: "A first look at what we're building. More details coming soon.",
    icon: "/images/war_nuggets/game-preview.png",
    iconCrop: true,
    availability: "Coming soon",
    path: "/games/war_nuggets",
    preview: { src: "/images/war_nuggets/game-preview.png", alt: "Blue and red War Nuggets tanks on grassy terrain dotted with craters" },
  },
];

export default function Games() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location.pathname, location.search]);

  return (
    <div className="apps-page games-page">
      <header className="apps-introduction">
        <p className="apps-eyebrow">Our games</p>
        <h1>A little adventure.<br />A lot of personality.</h1>
        <p>Games from Mount Carmel Games, made to spark your imagination.</p>
      </header>

      <ProductCarousel products={games} kind="game" />

      <aside className="apps-coming-soon">
        <Gamepad2 size={32} aria-hidden="true" />
        <div><h2>More adventures are on the horizon.</h2><p>We're just getting started. Stay tuned.</p></div>
      </aside>
    </div>
  );
}
