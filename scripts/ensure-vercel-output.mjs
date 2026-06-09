import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, ".vercel", "output");
const functionDir = path.join(outputDir, "functions", "__server.func");
const localFunctionEntry = path.join(functionDir, "index.mjs");

if (existsSync(localFunctionEntry)) {
  process.stdout.write("[vercel-output] Existing .vercel/output function found.\n");
  process.exit(0);
}

const distClient = path.join(root, "dist", "client");
const distServer = path.join(root, "dist", "server");
const distServerEntry = path.join(distServer, "index.mjs");
const distNitro = path.join(root, "dist", "nitro.json");

if (!existsSync(distClient) || !existsSync(distServerEntry)) {
  throw new Error(
    "Expected either .vercel/output or dist/client + dist/server/index.mjs after build.",
  );
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(functionDir, { recursive: true });
await mkdir(path.join(outputDir, "static"), { recursive: true });

await cp(distClient, path.join(outputDir, "static"), { recursive: true });
await cp(distServer, functionDir, { recursive: true });

await writeFile(
  path.join(functionDir, ".vc-config.json"),
  `${JSON.stringify(
    {
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      supportsResponseStreaming: true,
      runtime: "nodejs24.x",
    },
    null,
    2,
  )}\n`,
);

await writeFile(
  path.join(outputDir, "config.json"),
  `${JSON.stringify(
    {
      version: 3,
      framework: {
        name: "nitro",
        version: "3.0.260429-beta",
      },
      overrides: {},
      routes: [
        {
          src: "/assets/(.*)",
          headers: {
            "cache-control": "public, max-age=31536000, immutable",
          },
        },
        {
          handle: "filesystem",
        },
        {
          src: "/(.*)",
          dest: "/__server",
        },
      ],
    },
    null,
    2,
  )}\n`,
);

if (existsSync(distNitro)) {
  const nitro = JSON.parse(await readFile(distNitro, "utf8"));
  nitro.serverEntry = "functions/__server.func/index.mjs";
  nitro.publicDir = "static";
  nitro.commands = {
    ...(nitro.commands ?? {}),
    deploy: "npx vercel deploy --prebuilt",
  };
  await writeFile(path.join(outputDir, "nitro.json"), `${JSON.stringify(nitro, null, 2)}\n`);
}

process.stdout.write("[vercel-output] Created .vercel/output from dist build.\n");
