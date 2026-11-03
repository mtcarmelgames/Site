const conversionDestination = "AW-18546896785/DX51CJjqtrEdEJHf7ItF";

// The EmailOctopus embed dispatches this document event only after its API
// accepts the signup. Do not forward event.detail.contact (subscriber PII).
export function listenForWaitlistSignup(eventTarget, formId, gtag) {
  let tracked = false;

  function onSuccess(event) {
    if (tracked || event.detail?.form_id !== formId) return;

    tracked = true;
    gtag("event", "conversion", { send_to: conversionDestination });
  }

  eventTarget.addEventListener("emailoctopus:form.success", onSuccess);
  return () => eventTarget.removeEventListener("emailoctopus:form.success", onSuccess);
}
