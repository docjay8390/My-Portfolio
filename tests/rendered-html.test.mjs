import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Bernie Fernando \| IT Officer Portfolio<\/title>/i);
  assert.match(html, /Bernie Fernando/);
  assert.match(html, /Hi, I&#x27;m Bernie|Hi, I&apos;m Bernie|Hi, I&#39;m Bernie/);
  assert.match(html, /Bernie Fernando portrait/);
  assert.match(html, /IT Officer/);
  assert.match(html, /Project proof|project proof/i);
  assert.match(html, /RazorVibe Responsive Build/);
  assert.match(html, /A practical first 90 days/);
  assert.doesNotMatch(html, /Candidate dashboard|codex-preview|SkeletonPreview|react-loading-skeleton|Your site is taking shape/i);
});

test("portfolio files are no longer starter placeholders", async () => {
  const [page, layout, css, packageJson, resume, profile] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../public/Bernie-Fernando-Resume.md", import.meta.url), "utf8"),
    readFile(new URL("../public/profile.png", import.meta.url)),
  ]);

  assert.match(page, /Copy interview brief/);
  assert.match(page, /Hi, I&apos;m Bernie/);
  assert.match(page, /\/profile\.png/);
  assert.doesNotMatch(page, /Candidate dashboard/);
  assert.match(page, /portfolio-theme/);
  assert.match(page, /FoodTiger Restaurant Prototype/);
  assert.match(layout, /Bernie Fernando \| IT Officer Portfolio/);
  assert.match(css, /@import "tailwindcss"/);
  assert.match(css, /html\[data-theme="dark"\]/);
  assert.match(css, /\.personal-hero/);
  assert.match(packageJson, /"name": "bernie-fernando-portfolio"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton|site-creator-vinext-starter/);
  assert.match(resume, /Bernie S\. Fernando/);
  assert.ok(profile.length > 100_000);

  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
  await assert.rejects(access(new URL("../app/_sites-preview/preview.css", import.meta.url)));
  await assert.rejects(access(new URL("../public/_sites-preview", templateRoot)));
});
