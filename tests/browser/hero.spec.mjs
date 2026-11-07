import { test, expect } from "@playwright/test";

const scrollButton = (page) =>
  page.getByRole("button", { name: "Scroll down to the next section" });

async function scrub(page, progress) {
  return page.evaluate((progress) => {
    const hero = document.getElementById("hero");
    const top = hero.getBoundingClientRect().top + scrollY;
    const travel = hero.offsetHeight - innerHeight;
    scrollTo({ top: top + travel * progress, behavior: "instant" });
    return Math.round(progress * 91) + 1;
  }, progress);
}

for (const input of ["pointer", "Enter", "Space"]) {
  test(`Scroll Down reaches the battery section using ${input}`, async ({ page }, testInfo) => {
    await page.goto("/");
    const button = scrollButton(page);
    await expect(button).toBeVisible();
    await expect(button).toHaveAttribute("aria-controls", "battery");
    const box = await button.boundingBox();
    expect(box.height).toBeGreaterThanOrEqual(44);
    expect(box.y + box.height).toBeLessThanOrEqual(page.viewportSize().height);
    if (input === "pointer") {
      const point = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
      expect(
        await page.evaluate(
          ({ x, y }) => !!document.elementFromPoint(x, y)?.closest(".scroll-hint"),
          point,
        ),
      ).toBe(true);
      if (testInfo.project.use.hasTouch) await page.touchscreen.tap(point.x, point.y);
      else await page.mouse.click(point.x, point.y);
    } else {
      await button.focus();
      await page.keyboard.press(input);
    }
    await expect
      .poll(() => page.locator("#battery").evaluate((el) => el.getBoundingClientRect().top))
      .toBeLessThan(110);
    expect(
      await page.locator("#battery").evaluate((el) => el.getBoundingClientRect().top),
    ).toBeGreaterThanOrEqual(0);
  });
}

test("hero follows forward/reverse/rapid scrolling without repeated decodes or idle redraws", async ({
  page,
}) => {
  const failures = [];
  const requests = [];
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") failures.push(message.text());
  });
  page.on("response", (response) => {
    if (response.url().includes("/optimized/frame-") && response.status() >= 400)
      failures.push(response.url());
  });
  page.on("request", (request) => {
    if (request.url().includes("/optimized/frame-")) requests.push(request.url());
  });
  await page.addInitScript(() => {
    window.heroTrace = { frames: [], repeatedDecodes: 0 };
    const counts = new WeakMap();
    const decode = HTMLImageElement.prototype.decode;
    HTMLImageElement.prototype.decode = function () {
      if (this.src.includes("/optimized/frame-")) {
        const count = (counts.get(this) ?? 0) + 1;
        counts.set(this, count);
        if (count > 1) window.heroTrace.repeatedDecodes++;
      }
      return decode.call(this);
    };
    const draw = CanvasRenderingContext2D.prototype.drawImage;
    CanvasRenderingContext2D.prototype.drawImage = function (image, ...args) {
      const match = image.src?.match(/\/frame-(\d+)-/);
      if (match) window.heroTrace.frames.push(Number(match[1]));
      return draw.call(this, image, ...args);
    };
  });
  await page.goto("/");
  await expect(page.locator("#hero")).toHaveClass(/is-sequence-ready/);
  await expect.poll(() => page.evaluate(() => window.heroTrace.frames.at(-1))).toBe(1);
  await page.waitForTimeout(300);
  expect(requests.length).toBeLessThanOrEqual(3);
  expect(await page.evaluate(() => window.heroTrace.frames[0])).toBe(1);
  for (const progress of [0.2, 0.55, 1, 0.45, 0]) {
    const frame = await scrub(page, progress);
    await expect.poll(() => page.evaluate(() => window.heroTrace.frames.at(-1))).toBe(frame);
  }
  await page.route("**/optimized/frame-*.webp", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    await route.continue();
  });
  for (const progress of [0.9, 0.1, 0.8, 0.25]) await scrub(page, progress);
  await expect.poll(() => page.evaluate(() => window.heroTrace.frames.at(-1))).toBe(24);
  await page.waitForTimeout(500);
  const count = await page.evaluate(() => window.heroTrace.frames.length);
  await page.waitForTimeout(300);
  expect(await page.evaluate(() => window.heroTrace.frames.length)).toBe(count);
  expect(await page.evaluate(() => window.heroTrace.repeatedDecodes)).toBe(0);
  const pixels = await page.locator("canvas").evaluate((el) => el.width * el.height);
  expect(pixels).toBeLessThanOrEqual(1600 * 817);
  await page.setViewportSize({ width: 768, height: 900 });
  await expect
    .poll(() => page.evaluate(() => window.heroTrace.frames.length))
    .toBeGreaterThan(count);
  expect(failures).toEqual([]);
  await page.unrouteAll({ behavior: "wait" });
});

test("reduced motion and low data retain the control without downloading sequence frames", async ({
  page,
}) => {
  const requests = [];
  page.on("request", (request) => {
    if (request.url().includes("/optimized/frame-")) requests.push(request.url());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("#hero")).toHaveClass(/is-compact/);
  await expect(scrollButton(page)).toBeVisible();
  await scrollButton(page).focus();
  await page.keyboard.press("Enter");
  await expect
    .poll(() => page.locator("#battery").evaluate((el) => el.getBoundingClientRect().top))
    .toBeLessThan(110);
  expect(requests).toEqual([]);
  const dataPage = await page.context().newPage();
  const dataRequests = [];
  dataPage.on("request", (request) => {
    if (request.url().includes("/optimized/frame-")) dataRequests.push(request.url());
  });
  await dataPage.addInitScript(() =>
    Object.defineProperty(navigator, "connection", {
      configurable: true,
      value: {
        saveData: true,
        effectiveType: "4g",
        addEventListener() {},
        removeEventListener() {},
      },
    }),
  );
  await dataPage.goto("/");
  await expect(dataPage.locator("#hero")).toHaveClass(/is-compact/);
  await expect(scrollButton(dataPage)).toBeVisible();
  expect(dataRequests).toEqual([]);
  await dataPage.close();
});

test("hero CTAs remain navigable and do not overlap Scroll Down", async ({ page }) => {
  for (const [name, path] of [
    ["Explore Models", "/vehicles"],
    ["Book a Test Ride", "/contact"],
  ]) {
    await page.goto("/");
    await expect(page.locator("#hero")).toHaveClass(/is-sequence-ready/);
    await scrub(page, 1);
    await expect
      .poll(() =>
        page
          .locator(".cinema-hero-content")
          .evaluate((el) => Number(el.style.getPropertyValue("--launch-progress"))),
      )
      .toBe(1);
    const link = page.locator("#hero").getByRole("link", { name, exact: true });
    await expect(link).toBeVisible();
    const a = await link.boundingBox();
    const b = await scrollButton(page).boundingBox();
    expect(
      a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y,
    ).toBe(false);
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${path}$`));
  }
});

test("footer and Contact replace only the requested phone number", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("footer")).toContainText("+91 9989189777");
  await expect(page.locator("footer")).not.toContainText("+91 89770 07062");
  await page.goto("/contact");
  const phone = page.locator('main a[href="tel:+919989189777"]');
  await expect(phone).toHaveText("+91 9989189777");
  await expect(page.locator('main a[href="tel:+918977040935"]')).toBeVisible();
  await expect(page.locator('main a[href="tel:+918977040936"]')).toBeVisible();
  await expect(page.locator('a[href="tel:+918977007062"]')).toHaveCount(0);
});
