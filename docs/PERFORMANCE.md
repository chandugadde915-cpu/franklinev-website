# Franklin EV performance implementation

Implemented in the existing `chandugadde915-cpu/franklinev-website` repository on `main`. Original media, branding, content, routes and visual effects remain. No framework migration or manual production deployment.

## Pages

Home, Vehicles, Why Us, Hyre EV, About, Blog, the three blog articles, Contact, Privacy and Legal Policy were inspected and tested. Shared image delivery, fonts, caching, reduced-motion support and animation cleanup apply across routes. Sitemap, canonical URLs, API behavior and both hosting targets are retained.

## Measured mobile Lighthouse results

| Metric | Baseline | Optimized |
| --- | ---: | ---: |
| Performance | 67 | 82 |
| Accessibility | 86 | 96 |
| Best Practices | 96 | 100 |
| SEO | 100 | 100 |
| LCP | 9.4 s | 4.9 s |
| CLS | 0 | 0 |
| Total blocking time | 50 ms | 50 ms |

Single local production runs with Chromium's mobile Lighthouse simulation, not production field results or physical-device measurements. The final run uses cover-aware hero resolution to preserve sharpness. External Google Fonts and OpenStreetMap requests are restricted in this machine; the comparison includes eliminating the external font dependency. The performance 90+ and LCP 2.5s targets were **not achieved**. INP was not measured; TBT is not INP.

Reproduce after `npm ci && npm run build:godaddy`: start `PORT=3100 npm start`, then run Lighthouse against that local address with mobile defaults and the performance/accessibility/best-practices/SEO categories. Exact measured values and media metadata are in [performance-metrics.json](performance-metrics.json).

## Image delivery

232 raster sources generated 665 unique uncropped WebP variants (667 references because identical sources share output). Originals are unchanged. Variants use 480/960/1600px limits, never upscale, retain alpha and aspect ratio, and use quality 88. One largest variant per source totals **21,941,070 bytes versus 147,517,137 original bytes**, an 85.13% transfer reduction. One smallest variant per source totals 4,286,726 bytes. This comparison does not represent a reduction in checkout size: originals and responsive variants are both retained.

All ordinary images and the Framer Motion gallery use responsive delivery, async decoding and real dimensions. Critical images load eagerly; other images defer. Picture source elements also use optimized assets. URLs are whitespace-free, content-addressed and present in both hosting outputs. Tall hero canvases select enough source resolution for cover-style cropping; mobile landscape can select a smaller source. Detailed per-image sizes: [image-size-report.json](../scripts/image-size-report.json).

WebP was chosen for browser compatibility and quick sequence-frame decoding; AVIF was not added merely to duplicate every asset.

## Video delivery

| Video | Original bytes | Playback bytes |
| --- | ---: | ---: |
| Classic | 2,967,995 | 2,344,736 |
| Power | 3,275,365 | 2,628,230 |
| Battery | 240,951 | 240,951 |
| Motor | 15,391,888 | 6,590,604 |

Total: **21,876,199 → 11,804,521 bytes** (46.04% smaller). H.264, original resolution and frame rate, retained product audio, faststart and four local posters. Battery was already efficient and was retained. Measured SSIM was 0.996053 for Classic, 0.995589 for Power and 0.991382 for the motor's decodable footage. Optimized playback files decode without errors.

**Source limitation:** the supplied motor file declares 192 frames/eight seconds but only 168 frames/seven seconds decode. Its optimized copy preserves those frames and holds the final available frame for the remaining second, retaining eight-second timing. Missing original footage cannot be recovered; a clean source is needed to restore it. The original file is untouched.

ViewportVideo attaches sources near view, pauses offscreen and on background visibility, and provides functional native manual controls for reduced-motion/data-saving preferences. It does not rely on unsupported video `loading` attributes.

## JavaScript, CSS and navigation

Lighthouse-observed initial JavaScript dropped **721,343 → 590,275 bytes uncompressed**, and **725,674 → 161,601 transferred bytes**. The main shared chunk itself increased from 515,389 to approximately 549,000 bytes because it now includes responsive metadata; deferring the map reduces total initial JavaScript. Total generated JS across all routes grew from 860,480 to approximately 896,000 bytes. These distinctions avoid presenting code splitting as deletion of required functionality.

Leaflet JS and CSS now load only near the dealer section, with all 20 markers, controls and popups preserved. The previously nonfunctional Get Directions control now links to each dealer's coordinates. Initial Leaflet loading was removed; initial CSS is about 312 KB rather than 327 KB including map styles. Total CSS remains about 328 KB. Original CSS and premium effects are preserved; compression, local variable Inter/Space Grotesk fonts and caching improve delivery. Route splitting is explicit, and intent preloads use a freshness interval to avoid repeated requests.

## Hero, animations and React

Initial hero frame requests fell from 30 to 5 in the browser check. There is no idle warmup of the entire sequence. Neighborhood loading follows scroll direction; decoded image caches are bounded at 16 mobile/28 desktop entries. Stale listeners are removed, discarded loads are cancelled, duplicate canvas draws are skipped, and resize/unmount cleanup is centralized. Forward/reverse scrubbing and compact fallback remain.

The invalid FAQ hook in a map callback moved into FaqItem; opening a question no longer renders the entire homepage. Counter spring values update their text node instead of rendering React on every tick. Framer Motion respects reduced motion. Offscreen/background decorative CSS animations pause; completed counter requestAnimationFrame IDs no longer accumulate. The vehicle slideshow pauses offscreen, in hidden tabs and under reduced motion. Existing hover transforms and transition timings remain. Navbar mobile focus, Escape, body-scroll cleanup and desktop-resize closure are supported.

Model/color selection exposes pressed state; battery cards are keyboard-operable without changing their appearance. Both enquiry forms have synchronous duplicate-submit guards. Their existing endpoint validates and acknowledges submissions; it still **does not save leads or send email**. No delivery service or credentials were invented.

## Verification

- `npm ci`: passed using the lockfile; dependencies/lockfiles unchanged.
- `npm run lint`: passed, zero errors and six existing Fast Refresh warnings. Baseline: 188 errors, six warnings. Relevant formatting and hook errors were fixed; generated Vercel output is excluded from lint.
- `npx tsc --noEmit`: passed. Baseline had five TypeScript diagnostics.
- `npm run build`, `npm run build:godaddy`, `npm run build:vercel`: passed. Node startup, native Vercel web handler, route/cache configuration and optimized asset inclusion checked.
- `npm test`: 16 production integration tests passed; none skipped. Covers all 12 pages, sitemap, enquiry validation, media files, faststart and cache headers.
- Chromium: 36 page checks across 390px, 768px and 1440px widths passed without local broken images, horizontal overflow or JavaScript errors.
- Interaction checks: mobile navigation; both models; all 10 model/color combinations and 40 thumbnail selections; gallery previous/next; keyboard battery selection; eight FAQs; all four video playbacks; 20 map markers and directions; dealer search; Contact and Hyre enquiry submissions; reduced-motion compact hero.
- Preference checks passed: data-saving defers video transfer until manual play; rapid hero reversal; Escape closes the menu; desktop resize restores body scrolling; simulated background visibility pauses video; both picture sources select optimized images.

OpenStreetMap tile requests are blocked by this cloud machine's network policy. Marker/control behavior is tested, but live tile delivery here is not established. Physical Android/iPhone hardware, WebKit, field Core Web Vitals and live deployment were not tested. Large global CSS, a substantial shared JS chunk and remaining LCP are further opportunities; no styling was deleted just to meet a score.

## Rebuilding media

Generated media is committed and **not regenerated during ordinary builds**. For intentional media refreshes, `python scripts/optimize-media.py` requires Pillow 13+ with WebP support and FFmpeg with libx264/libwebp. Review the source corruption note before replacing the motor video. Generated output names include source/settings hashes; both originals and compressed files remain available.

## Modified source/configuration files

- `.gitignore`
- `eslint.config.js`
- `package.json`
- `scripts/ensure-vercel-output.mjs`
- `src/components/Counter.tsx`
- `src/components/Footer.tsx`
- `src/components/ModelCard.tsx`
- `src/components/Navbar.tsx`
- `src/router.tsx`
- `src/routes/__root.tsx`
- `src/routes/about.tsx`
- `src/routes/blog.best-electric-scooter-hyderabad-daily-commute.tsx`
- `src/routes/blog.home-charging-electric-scooter.tsx`
- `src/routes/blog.power-plus-vs-rapid.tsx`
- `src/routes/blog.tsx`
- `src/routes/contact.tsx`
- `src/routes/hyre-ev.tsx`
- `src/routes/index.tsx`
- `src/routes/sitemap[.]xml.ts`
- `src/routes/vehicles.tsx`
- `src/routes/why-us.tsx`
- `src/styles.css`
- `vercel.json`
- `vite.config.ts`

New files include `nitro.config.ts`, image/video manifests, responsive image/video components, deferred dealer-map modules, the media-generation script and size report, Node integration tests, this report, local fonts/licenses, and `public/optimized/` assets.
