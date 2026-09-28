import fs from "node:fs";
import assert from "node:assert/strict";
import { nationwideAsset, nationwideStudy } from "../src/data/nationwide.js";

const requiredFiles = [
  "src/data/referenceContent.js",
  "src/components/SiteLink.jsx",
  "src/components/ReplicaHeader.jsx",
  "src/components/ReplicaFooter.jsx",
  "src/components/ReplicaPrimitives.jsx",
  "src/pages/ReferenceHome.jsx",
  "src/pages/ReferenceWork.jsx",
  "src/pages/ReferenceAbout.jsx",
  "src/pages/ReferenceServices.jsx",
  "src/pages/ReferenceCaseStudy.jsx",
  "src/styles/replica.css",
  "src/data/nationwide.js",
  "src/pages/NationwideCaseStudy.jsx",
  "src/styles/nationwide.css",
];

const missing = requiredFiles.filter((file) => !fs.existsSync(file));
if (missing.length) {
  throw new Error(`Missing replica files: ${missing.join(", ")}`);
}

const checked = requiredFiles
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

if (/Awwwards/i.test(checked)) {
  throw new Error("The award widget is forbidden in replica source.");
}

if (/label:\s*["']Writing["']/i.test(checked)) {
  throw new Error("Writing navigation is forbidden in replica source.");
}

const app = fs.readFileSync("src/App.jsx", "utf8");
for (const route of [
  "/work",
  "/about",
  "/services",
  "/work/call-of-duty",
  "/work/gr1m01re",
  "/work/nationwide-arena",
]) {
  if (!app.includes(route)) {
    throw new Error(`Missing route: ${route}`);
  }
}

const header = fs.readFileSync("src/components/ReplicaHeader.jsx", "utf8");
for (const behavior of ["aria-expanded", "Escape", "is-open"]) {
  if (!header.includes(behavior)) {
    throw new Error(`Missing mobile navigation behavior: ${behavior}`);
  }
}

for (const socialLink of ["LinkedIn", "GitHub"]) {
  if (!header.includes(`"${socialLink}"`)) {
    throw new Error(`Missing top navigation link: ${socialLink}`);
  }
}

const siteLink = fs.readFileSync("src/components/SiteLink.jsx", "utf8");
if (!siteLink.includes('target={href.startsWith("http") ? "_blank"')) {
  throw new Error("External navigation links must open in a new tab.");
}

const primitives = fs.readFileSync("src/components/ReplicaPrimitives.jsx", "utf8");
const home = fs.readFileSync("src/pages/ReferenceHome.jsx", "utf8");
if (primitives.includes("profile-block__portrait")) {
  throw new Error("The home profile must not render a placeholder portrait.");
}
if (home.includes("profile-story-link")) {
  throw new Error("The home profile CTA must not render as a standalone empty rail.");
}
if (!primitives.includes("profile-block__actions")) {
  throw new Error("The home profile CTA must sit directly beneath the biography copy.");
}

const css = fs.readFileSync("src/styles/replica.css", "utf8");
const about = fs.readFileSync("src/pages/ReferenceAbout.jsx", "utf8");
if (about.includes("about-hero__portrait") || css.includes("about-hero__portrait")) {
  throw new Error("The About hero must not reserve space for a placeholder portrait.");
}
if (!/\.about-hero \.section-intro\s*\{[^}]*max-width:\s*none/.test(css)) {
  throw new Error("The About title should use the full content width.");
}

if (!/\.hero\s*\{[^}]*align-items:\s*center/.test(css)) {
  throw new Error("Homepage hero should vertically center the Builder Spec against the left content.");
}

if (!/\.hero h1\s*\{[^}]*font-size:\s*clamp\(2\.75rem,\s*5\.2vw,\s*4\.6rem\)/.test(css)) {
  throw new Error("Homepage hero title should use the compact desktop scale that keeps its CTAs in the first fold.");
}
for (const rule of ["@media (max-width: 960px)", "@media (max-width: 720px)", "prefers-reduced-motion", ":focus-visible"]) {
  if (!css.includes(rule)) {
    throw new Error(`Missing responsive or accessibility rule: ${rule}`);
  }
}

assert.deepEqual(nationwideStudy.platforms, ["Desktop Web", "Mobile Web", "iOS", "Android"]);
assert.equal(nationwideStudy.mobileImage.label, "Mobile Web");
assert.equal(nationwideStudy.href, "https://practitioner.digital/nationwide-arena/");
const images = new Set([
  nationwideStudy.image.src,
  nationwideStudy.mobileImage.src,
  ...nationwideStudy.features.map((feature) => nationwideAsset(feature.image)),
]);
for (const src of images) {
  const bytes = fs.readFileSync(`public${src}`);
  assert.equal(bytes.toString("ascii", 0, 4), "RIFF", `Invalid image: ${src}`);
  assert.equal(bytes.toString("ascii", 8, 12), "WEBP", `Expected a WebP screenshot: ${src}`);
}
console.log("Replica structure, Nationwide content and screenshots, and exclusions verified.");
