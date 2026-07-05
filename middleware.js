import { NextResponse } from "next/server";

// Normalize mixed-case pathnames to lowercase with a 308 redirect.
//
// Why: mixed-case blog URLs (e.g. /Blog/productivity-tips) were returning
// HTTP 500 instead of resolving, and mixed-case timer URLs (e.g.
// /Timer/1-minute-timer) were served with 200 as case-duplicates of the real
// lowercase pages — wasting crawl budget. All real routes are lowercase
// kebab-case, so any request whose path differs from its lowercase form is a
// stray/legacy variant that should consolidate onto the canonical lowercase URL.
export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const lower = pathname.toLowerCase();

  if (pathname !== lower) {
    const url = request.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Run on page paths only; skip Next internals, the API, and any request for a
  // file with an extension (static assets, /og_image.png, /favicon.ico, the
  // IndexNow key file, etc.) so their casing is left untouched.
  matcher: ["/((?!_next/|api/|.*\\.[^/]+$).*)"],
};
