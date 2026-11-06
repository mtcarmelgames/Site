import { readFile, mkdir, copyFile } from "node:fs/promises";

// GitHub Pages needs a physical index.html at each route to return HTTP 200.
// Keep these in sync with the literal routes defined by the React router.
const root = new URL("../", import.meta.url);
const source = await readFile(new URL("src/app.jsx", root), "utf8");
const routes = [...source.matchAll(/<Route\s+path="([^"]+)"/g)].map((match) => match[1]);
if (!routes.length) throw new Error("No static routes found in src/app.jsx");

const index = new URL("dist/index.html", root);
for (const route of new Set(routes)) {
  if (route === "/") continue;
  if (!/^\/[a-zA-Z0-9_/-]+$/.test(route) || route.includes("..")) {
    throw new Error(`Unsupported static route: ${route}`);
  }
  const directory = new URL(`dist${route.replace(/\/$/, "")}/`, root);
  await mkdir(directory, { recursive: true });
  await copyFile(index, new URL("index.html", directory));
}
await copyFile(index, new URL("dist/404.html", root));
console.log(`Published ${new Set(routes).size} static route entries and the SPA fallback.`);
