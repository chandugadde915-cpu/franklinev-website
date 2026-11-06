import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  compressPublicAssets: { gzip: true, brotli: true },
  routeRules: {
    "/optimized/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
    "/fonts/**": {
      headers: { "cache-control": "public, max-age=86400, stale-while-revalidate=604800" },
    },
    "/api/**": { headers: { "cache-control": "no-store" } },
  },
});
