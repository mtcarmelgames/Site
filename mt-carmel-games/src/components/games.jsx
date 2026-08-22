import { useEffect } from "react";
import ReactGA from "react-ga4";
import MediaCarousel from "./carousel";

export default function Games() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <div>
      <section>
        <h2 className="center">War Nuggets</h2>
        <MediaCarousel media={[{ type: "image", src: "/images/war_nuggets/coming_soon.png" }]} />
      </section>
    </div>
  );
}
