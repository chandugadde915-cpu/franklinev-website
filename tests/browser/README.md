# Homepage hero regressions

These tests run against the production build. They start and stop their own server on port 3230.

```sh
npm ci
npm run build
npx playwright install chromium
npm run test:browser
```

To use an existing Chromium installation in the cloud environment:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE=/usr/bin/chromium npm run test:browser
```

The desktop, phone, and small-phone profiles cover forward/reverse and rapid hero scrubbing,
once-per-image decoding, idle redraw avoidance, resize handling, Scroll Down by pointer/touch,
Enter and Space, reduced motion, low-data fallback, CTA hit targets, and the contact phone links.
No enquiry submissions or external navigation are performed. Browser output folders are ignored.
