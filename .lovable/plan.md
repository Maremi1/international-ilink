

## Plan: Enrich the website with more visuals & media

Right now only 4 sections have imagery (Hero, About, Technology, Foundation). The other 8 sections are icon-and-text only, which makes the experience feel flat. I'll add purposeful media across the site to bring it to life — without slowing it down.

### What gets added

**1. Hero — animated background video loop**
- Replace the static globe image with a subtle looping video (slow-motion data network / earth at night) at low opacity behind the existing copy.
- Keep the static image as a poster/fallback for slow connections and reduced-motion users.

**2. Ecosystem (4 pillars) — visual headers per card**
- Add a small abstract image header to each of the 4 pillar cards (Consultancy, Investment, Academy, Technology) so the pillars become visually distinct, not just icons.

**3. Consultancy — boardroom imagery**
- Add a wide editorial photo (modern boardroom / strategy session) above the 5 service cards inside a glass frame.

**4. Academy — programs gallery**
- Replace the plain numbered cards with cards that include a subtle background image per program (digital training, leadership workshop, sales team).

**5. Investment — chart/markets visual + ticker strip**
- Add a financial-markets hero image beside the intro copy (two-column layout).
- Add an animated marquee strip below with sector tags (VC · PE · IPs · Royalties · Funds · Insurance) that scrolls horizontally.

**6. Governance — world-arc graphic**
- Add a faint world/connection-arcs SVG behind the 4 governance cards to reinforce the "borderless economy" message.

**7. Engagement — partner imagery**
- Add a small image header to each of the 3 engagement-model cards (Investors / Corporations / Institutions).

**8. Benefits — supporting photo + animated counters**
- Add a side image (team / handshake) and convert the 4 benefit blocks into animated count-up stat cards above the existing list.

**9. New "Partners & Trust" logo strip (between Benefits and Engagement)**
- A continuously-scrolling logo marquee of placeholder partner/sector logos to add credibility and motion.

**10. New "Global Footprint" interactive map (inside About or below Governance)**
- Replace the static `world-map.png` with an interactive SVG world map highlighting Kigali (HQ) and Dar es Salaam (Operations) as glowing pulse markers with hover tooltips.

**11. New "Case Study" embedded video section (between Investment and Academy)**
- A dedicated section featuring an embedded YouTube/Vimeo video player inside a glass frame with a cyan glow.
- Includes a short intro headline ("See iLink in Action") and supporting copy beside the player on desktop, stacked on mobile.
- Uses lazy-loaded iframe (loads only when scrolled into view) to protect page-load performance.
- Placeholder video URL until you provide the real one — easy to swap.

**12. Footer — brand video/montage option**
- Add a thin animated brand strip above the footer with the logo, tagline, and an animated gradient sweep.

### Technical notes

- All new images stored in `src/assets/`, generated as on-brand (deep navy + cyan + glass) so light & dark themes both work.
- Hero video: small WebM/MP4 (<2 MB), `playsInline muted loop autoplay`, with `poster={heroImg}` and `prefers-reduced-motion` guard.
- Embedded case-study video: privacy-friendly `youtube-nocookie.com` (or Vimeo) iframe, `loading="lazy"`, 16:9 aspect ratio via existing `AspectRatio` UI primitive, wrapped in `glass-card`.
- Marquees: pure CSS keyframe animation (no library needed).
- Interactive map: lightweight inline SVG with `framer-motion` pulse animation on the two markers — no external map library.
- Count-up stats: small custom hook using `requestAnimationFrame` — no extra dependency.
- All new images use `loading="lazy"` and explicit `width`/`height` to prevent CLS.
- Respect existing `glass` / `glass-card` / `text-gradient` design tokens — no new design language.

### Out of scope (ask if you want them)

- Real partner logos (will use abstract placeholder marks unless you upload them).
- Team headshots (would need photos from you).

