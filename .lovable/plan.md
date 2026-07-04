
# Agam Gavriel — Luxury Beauty Landing Page

A mobile-first, RTL Hebrew landing page for a bridal / evening / fashion makeup & hair artist, focused on lead generation via call, WhatsApp, and a contact form.

## Design direction

- Aesthetic: high-end bridal editorial. White, warm beige, nude, soft taupe, deep espresso for text.
- Typography: elegant serif display (Cormorant Garamond) + clean sans body (Assistant, supports Hebrew).
- Layout: airy, generous whitespace, soft shadows, subtle fade/slide-in on scroll.
- RTL by default (`<html lang="he" dir="rtl">`), Hebrew primary copy, small English subtitles.

## Sections (single page + policy sub-routes)

1. **Sticky header** — Logo "Agam Gavriel" (serif) on the right (RTL leading edge). Desktop: inline nav links. Mobile: hamburger opens slide-out sheet.
2. **Hero** — Full-viewport hero with AI-generated bridal beauty image, Hebrew headline, English subtitle, two CTAs (Call, WhatsApp).
3. **About / tagline strip** — Short luxury blurb, "מגיעה למקום ההתארגנות".
4. **Services** — 3 elegant cards: כלות / ערב / אופנה, each with AI-generated image + short description.
5. **Portfolio** — Instagram-style responsive grid (6–9 AI-generated beauty images) with hover zoom + soft overlay. Link to Instagram.
6. **Contact / Availability form** — Zod-validated fields (Name, Phone, Email, Event Date, Service dropdown, Message). CTA "בדיקת זמינות". Submission opens pre-filled WhatsApp message (no backend required for MVP).
7. **Footer** — Social icons (Instagram real link, TikTok/Facebook placeholder), links to Accessibility Statement, Terms, Privacy, Contact.
8. **Floating WhatsApp button** (bottom-right) — pre-filled Hebrew/English message.
9. **Floating Accessibility widget** (bottom-left) — font size +/−, high contrast, grayscale, reset. State persisted to localStorage; applies CSS classes on `<html>`.

## Routes (TanStack Start)

- `/` — main landing
- `/accessibility` — הצהרת נגישות
- `/terms` — תנאי שימוש
- `/privacy` — מדיניות פרטיות
- `/contact` — contact info page (phone, WhatsApp, form)

Each route sets its own `head()` with Hebrew title + description + og tags. Root `head()` updated with real brand metadata (replace "Lovable App").

## Assets

Generate with imagegen (fast tier), saved to `src/assets/`:
- `hero.jpg` — bridal editorial portrait
- `service-bridal.jpg`, `service-evening.jpg`, `service-fashion.jpg`
- `portfolio-1..6.jpg` — varied beauty shots

## Technical

- Tailwind v4 tokens in `src/styles.css`: nude/beige palette, serif+sans font vars.
- Fonts via `@fontsource/cormorant-garamond` + `@fontsource/assistant` (Hebrew support).
- Contact info constants in `src/lib/contact.ts`: phone `+972547541004`, Instagram `https://www.instagram.com/agamgavriel_/`.
- WhatsApp URL: `https://wa.me/972547541004?text=...` (encoded).
- Call link: `tel:+972547541004`.
- Form: react-hook-form + zod, on submit opens WhatsApp with filled details (MVP; no DB).
- Accessibility widget: small React component, portal-free, applies `.a11y-large`, `.a11y-xlarge`, `.a11y-contrast`, `.a11y-grayscale` classes on `<html>`.
- Motion: light framer-motion fade/slide on scroll.
- SEO: unique title/description/og per route; single `<h1>` per page; alt text on all imagery; `lang="he"`, `dir="rtl"`.

## Out of scope (MVP)

- Backend form storage / email (form uses WhatsApp handoff). Can add Lovable Cloud + email later.
- CMS integration (content lives in typed constants files for easy editing).
