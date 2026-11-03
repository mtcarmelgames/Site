import assert from "node:assert/strict";
import test from "node:test";
import { listenForWaitlistSignup } from "./waitlist-tracking.js";

const formId = "8d928836-d3e6-11f1-a166-f13327c1fe18";

function dispatch(target, name, detail) {
  const event = new Event(name);
  event.detail = detail;
  target.dispatchEvent(event);
}

test("only an accepted signup for the BiteScribe form sends a conversion, without contact data", () => {
  const target = new EventTarget();
  const calls = [];
  const cleanup = listenForWaitlistSignup(target, formId, (...args) => calls.push(args));

  dispatch(target, "submit", { form_id: formId });
  dispatch(target, "emailoctopus:form.error", { form_id: formId });
  dispatch(target, "emailoctopus:form.success", undefined);
  dispatch(target, "emailoctopus:form.success", { form_id: "another-form" });
  assert.equal(calls.length, 0);

  dispatch(target, "emailoctopus:form.success", {
    form_id: formId,
    contact: { email_address: "example@example.com" },
  });
  assert.deepEqual(calls, [["event", "conversion", {
    send_to: "AW-18546896785/DX51CJjqtrEdEJHf7ItF",
  }]]);

  dispatch(target, "emailoctopus:form.success", { form_id: formId });
  assert.equal(calls.length, 1);
  cleanup();
});

test("cleanup removes the listener, including React Strict Mode's setup/cleanup cycle", () => {
  const target = new EventTarget();
  const calls = [];
  const gtag = (...args) => calls.push(args);
  const cleanup = listenForWaitlistSignup(target, formId, gtag);
  cleanup();
  dispatch(target, "emailoctopus:form.success", { form_id: formId });
  assert.equal(calls.length, 0);

  const cleanupAgain = listenForWaitlistSignup(target, formId, gtag);
  dispatch(target, "emailoctopus:form.success", { form_id: formId });
  assert.equal(calls.length, 1);
  cleanupAgain();
});
