import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://franklinev-website.vercel.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { path: "/", priority: "1.0" },
          { path: "/vehicles", priority: "0.9" },
          { path: "/contact", priority: "0.8" },
          { path: "/about", priority: "0.7" },
          { path: "/privacy", priority: "0.4" },
        ];
        const urls = paths.map(({ path, priority }) =>
          [
            "  <url>",
            `    <loc>${BASE_URL}${path}</loc>`,
            "    <changefreq>weekly</changefreq>",
            `    <priority>${priority}</priority>`,
            "  </url>",
          ].join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
