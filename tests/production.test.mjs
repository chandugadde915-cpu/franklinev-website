import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { setTimeout } from "node:timers/promises";

const root = new URL("../", import.meta.url);
const images = JSON.parse(readFileSync(new URL("scripts/image-size-report.json", root)));
const videos = JSON.parse(readFileSync(new URL("src/data/video-manifest.json", root)));
const base = "http://127.0.0.1:3198";
let server;
before(async () => {
  server = spawn(process.execPath, ["dist/server/index.mjs"], {
    cwd: root,
    env: { ...process.env, PORT: "3198" },
    stdio: "pipe",
  });
  for (let i = 0; i < 100; i++) {
    if (
      await fetch(base)
        .then((r) => r.ok)
        .catch(() => false)
    )
      return;
    await setTimeout(100);
  }
  throw new Error("Production server failed to start");
});
after(() => server?.kill());

test("every responsive image variant exists in source and production output", () => {
  for (const [original, image] of Object.entries(images)) {
    assert.ok(existsSync(new URL(`public${original}`, root)), original);
    assert.ok(image.width > 0 && image.height > 0);
    for (const variant of image.variants) {
      assert.ok(variant.width <= image.width, variant.src);
      assert.ok(!/\s/.test(variant.src), "srcset URLs must not contain whitespace");
      for (const dir of ["public", "dist/client"])
        assert.ok(existsSync(new URL(`${dir}${variant.src}`, root)), variant.src);
    }
  }
});

test("all playback videos have faststart and a local poster", () => {
  for (const video of Object.values(videos)) {
    const data = readFileSync(new URL(`public${video.src}`, root));
    assert.ok(data.indexOf(Buffer.from("moov")) < data.indexOf(Buffer.from("mdat")), video.src);
    assert.ok(existsSync(new URL(`public${video.poster}`, root)), video.poster);
  }
});

for (const path of [
  "/",
  "/vehicles",
  "/why-us",
  "/hyre-ev",
  "/about",
  "/blog",
  "/contact",
  "/privacy",
  "/legal-policy",
  "/blog/best-electric-scooter-hyderabad-daily-commute",
  "/blog/home-charging-electric-scooter",
  "/blog/power-plus-vs-rapid",
]) {
  test(`production SSR: ${path}`, async () => {
    const response = await fetch(base + path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /<h1[\s>]/);
    assert.match(html, /rel="canonical"/);
  });
}
test("sitemap and enquiry validation retain their existing behavior", async () => {
  assert.equal((await fetch(base + "/sitemap.xml")).status, 200);
  const submit = (data) =>
    fetch(base + "/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  assert.equal((await submit({})).status, 400);
  assert.equal(
    (await submit({ full_name: "Performance test", phone: "9000000000", city: "Hyderabad" }))
      .status,
    202,
  );
});
test("hashed image caching and compression work on the Node hosting target", async () => {
  const src = Object.values(images)[0].variants[0].src;
  const response = await fetch(base + src);
  assert.match(response.headers.get("cache-control"), /immutable/);
});

test("homepage exposes a native Scroll Down button for the battery section", async () => {
  const html = await fetch(base).then((response) => response.text());
  assert.match(
    html,
    /<button[^>]*class="scroll-hint"[^>]*aria-label="Scroll down to the next section"[^>]*aria-controls="battery"/,
  );
});

for (const path of ["/", "/contact"]) {
  test(`updated phone number is rendered at ${path}`, async () => {
    const html = await fetch(base + path).then((response) => response.text());
    assert.ok(html.includes("+91 9989189777"));
    assert.ok(!html.includes("+91 89770 07062"));
    assert.ok(!html.includes("tel:+918977007062"));
    assert.ok(html.includes("+91 89770 40935"));
    assert.ok(html.includes("+91 89770 40936"));
    if (path === "/contact") assert.ok(html.includes('href="tel:+919989189777"'));
  });
}
