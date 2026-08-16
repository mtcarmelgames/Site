import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("config", "G-M77JN2ZYMH", {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}
