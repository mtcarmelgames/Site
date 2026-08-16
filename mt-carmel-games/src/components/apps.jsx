import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Apps() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <>
      <a href="https://store.steampowered.com/app/2673790/Endless_Asphalt/" target="_blank">
        Endless Asphalt
      </a>
    </>
  );
}
