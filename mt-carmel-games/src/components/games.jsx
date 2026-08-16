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
        <h2 className="center">Endless Asphalt</h2>
        <MediaCarousel
          media={[
            { type: "video", src: "/images/endless_asphalt/Gameplay Trailer Final.mp4" },
            { type: "image", src: "/images/endless_asphalt/Library Header.png" },
            { type: "image", src: "/images/endless_asphalt/Survive Intersections.jpg" },
            { type: "image", src: "/images/endless_asphalt/Level Bosses 1.jpg" },
          ]}
        />
      </section>
      <section>
        <h2 className="center">War Nuggets</h2>
        <MediaCarousel media={[{ type: "image", src: "/images/war_nuggets/coming_soon.png" }]} />
      </section>
    </div>
  );
}
