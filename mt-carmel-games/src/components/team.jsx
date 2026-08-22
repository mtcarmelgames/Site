import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Apps() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <>
      <h1 className="center">Coming Soon</h1>
    </>
  );
}
