# RunDebrief website

Published on GitHub Pages from this repository's main branch.

- Free HTTPS address: https://basamasa.github.io/
- Branded share link: https://basamasa.github.io/rundebrief/ (redirects to the canonical homepage)
- Privacy: https://basamasa.github.io/privacy.html
- Terms: https://basamasa.github.io/eula.html

The GitHub subdomain has no separate registration cost. No custom domain was purchased or connected.

## Editing

`index.html` is the new landing page. `assets/site.css` and `assets/site.js` provide its styling and screenshot switcher. Legal pages share `assets/legal.css`. This is a static site with no build or package installation required. Preview with `python3 -m http.server 8795` and open localhost:8795.

The optimized screenshot JPEGs come from the actual September 27, 2026 RunDebrief simulator captures in the sibling metronomeZone repository, under `docs/launch-2026/store-assets/raw/iphone-18-pro-max`. They retain the complete app screen and visible example-data labels. `assets/icon.png` is the app's existing BrandMark. No customer data is used. Assets, fonts and scripts load locally; no analytics, forms or tracking were added.

## Release switch

This is a preview of an unreleased update. The current App Store link deliberately says it opens the older HeartRateHub version. After the new build is publicly available, verify the actual listing, then update the hero preview note, release section, the last two FAQ answers and metadata descriptions. Only then change the CTA to download RunDebrief and state the actual regional price. Do not publish a speculative price as a live offer.

The new homepage is independently written. Legacy HTML Codex assets remain in the repository; original attribution is retained in the footer and LICENSE.txt is unchanged.

## Verification on September 27, 2026

Desktop, 768px tablet, 390px phone and 320px phone layouts checked in the browser. Screenshot selection, mobile screenshot scrolling, FAQ expansion and internal navigation checked. Reduced-motion styles, visible keyboard focus, image alternatives, semantic landmarks and a skip link are provided. Sitemap, robots file, canonical/social metadata and a 404 page are included. This is not a full assistive-technology audit.
