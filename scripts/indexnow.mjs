#!/usr/bin/env node
// Submit all sitemap URLs to IndexNow (Bing, Yandex, Naver, and — via Bing —
// Microsoft Copilot). Run AFTER a production deploy is live:
//
//   node scripts/indexnow.mjs
//
// The verification key file already exists at
//   public/wdjc6r89phy1ej1nbsaeuts55s417tyw.txt
// (its contents equal the key below), which is how IndexNow verifies ownership.
//
// Requires Node 18+ (global fetch). No dependencies.

const HOST = "stopwatch.lol";
const KEY = "wdjc6r89phy1ej1nbsaeuts55s417tyw";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function main() {
  const res = await fetch(SITEMAP_URL, { headers: { "User-Agent": "indexnow-submit" } });
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xml = await res.text();

  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urlList.length === 0) throw new Error("No <loc> URLs found in sitemap");

  console.log(`Submitting ${urlList.length} URLs to IndexNow…`);

  const submit = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  // IndexNow returns 200 (accepted) or 202 (accepted, pending). Anything else is an error.
  console.log(`IndexNow responded: ${submit.status} ${submit.statusText}`);
  if (submit.status !== 200 && submit.status !== 202) {
    const body = await submit.text().catch(() => "");
    throw new Error(`IndexNow rejected the submission: ${submit.status} ${body}`);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
