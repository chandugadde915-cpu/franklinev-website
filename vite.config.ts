// The Lovable configuration supplies the TanStack, React, Tailwind and Nitro plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const preset = process.env.NITRO_PRESET || (process.env.VERCEL ? "vercel" : "node_server");

export default defineConfig({
  nitro: {
    preset,
    ...(preset === "vercel"
      ? {
          output: {
            dir: ".vercel/output",
            serverDir: ".vercel/output/functions/__server.func",
            publicDir: ".vercel/output/static",
          },
        }
      : {}),
  },
  tanstackStart: {
    router: { autoCodeSplitting: true },
    server: { entry: "server" },
  },
});
