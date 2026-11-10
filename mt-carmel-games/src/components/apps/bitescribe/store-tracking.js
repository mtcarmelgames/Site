// The "App store click" conversion's send_to value from Google Ads
// (Goals > Conversions > the action > Tag setup). While it is empty, store
// clicks are not reported to Google Ads.
export const storeClickDestination = "AW-18546896785/qW4DCKru3rUdEJHf7ItF";

// Reports a click on a store badge as a Google Ads conversion. The beacon
// transport lets the hit finish while the browser leaves for the store.
export function trackStoreClick(gtag, store, destination = storeClickDestination) {
  if (!destination || typeof gtag !== "function") return false;

  gtag("event", "conversion", { send_to: destination, transport_type: "beacon", store });
  return true;
}
