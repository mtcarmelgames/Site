import assert from "node:assert/strict";
import test from "node:test";
import { trackStoreClick } from "./store-tracking.js";

const destination = "AW-18546896785/test-label";

test("a store click sends one beacon conversion naming the store", () => {
  const calls = [];

  assert.equal(trackStoreClick((...args) => calls.push(args), "windows", destination), true);
  assert.deepEqual(calls, [["event", "conversion", {
    send_to: destination,
    transport_type: "beacon",
    store: "windows",
  }]]);
});

test("nothing is sent before the conversion label is set or when the tag is missing", () => {
  const calls = [];

  assert.equal(trackStoreClick((...args) => calls.push(args), "windows", ""), false);
  assert.equal(trackStoreClick(undefined, "windows", destination), false);
  assert.equal(calls.length, 0);
});
