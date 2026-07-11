# PLAN.md — Βελτιώσεις smarthomepro.gr

Πλάνο εργασιών από code review (Ιούλιος 2026). Υλοποίηση **ένα commit τη φορά**,
με push μετά από κάθε commit ώστε να ελέγχεται το αποτέλεσμα live στο Netlify.
Πριν από κάθε commit: `npx astro build` πρέπει να περνάει χωρίς errors.

## Context του project

- Astro 5 static site, Tailwind 3, hosting στο **Netlify**, domain smarthomepro.gr.
- Δομή: `src/pages/` (index, blog/*, projects/*), `src/components/`, `src/layouts/Layout.astro`, `src/data/projects.ts`.
- Οι εικόνες βρίσκονται στο `public/images/` (ΔΕΝ περνούν από Astro optimization).
- Υπάρχει ήδη: sitemap integration + robots.txt, canonical, JSON-LD ProfessionalService & BlogPosting schema στο Layout.

---

## Commit 1 — Λειτουργική φόρμα επικοινωνίας (Netlify Forms) ✅ (ίσως έχει ήδη γίνει — έλεγξε πρώτα)

Αν το `src/components/Contact.astro` ΔΕΝ έχει `data-netlify="true"`, κάνε τα εξής:

- `Contact.astro`: στο `<form>` πρόσθεσε `name="contact"`, `method="POST"`, `action="/efxaristoume/"`, `data-netlify="true"`, `netlify-honeypot="bot-field"`. Πρόσθεσε hidden input `form-name` με value `contact` και κρυφό honeypot πεδίο `bot-field`. Πρόσθεσε `name` και `required` σε όλα τα inputs/select/textarea.
- Νέα σελίδα `src/pages/efxaristoume.astro`: σελίδα ευχαριστίας στα ελληνικά (τσεκάρισμα ✓, "Λάβαμε το μήνυμά σας", τηλέφωνο 210 220 0607, κουμπιά προς αρχική και blog).
- `Layout.astro`: πρόσθεσε προαιρετικό prop `noindex?: boolean` που κάνει το robots meta `noindex, nofollow`. Χρήση στη σελίδα ευχαριστίας.
- `astro.config.mjs`: filter στο sitemap ώστε να εξαιρείται το `/efxaristoume/`.

Μετά το push: στο Netlify dashboard → Forms → **Enable form detection**, και ρύθμιση email notification προς info@smarthomepro.gr.

## Commit 2 — Διορθώσεις meta στο Layout

- Viewport: `width=device-width` → `width=device-width, initial-scale=1`.
- Πρόσθεσε `<meta property="og:locale" content="el_GR" />`.
- Τα twitter meta να χρησιμοποιούν `name=` αντί για `property=`.
- Νέο προαιρετικό prop `ogImage?: string` στο Layout (default το υπάρχον `/images/og-cover.jpg`). Το ίδιο image να χρησιμοποιείται σε og:image, twitter:image ΚΑΙ στο BlogPosting schema.

## Commit 3 — Per-page OG images

- Κάθε blog post να περνάει το δικό του `ogImage` (υπάρχουν εικόνες στο `public/images/blog/`).
- Στο `src/pages/projects/[slug].astro` το ogImage να είναι η πρώτη εικόνα του gallery του project (αν υπάρχει).

## Commit 4 — Βελτιστοποίηση εικόνων (το πιο βαρύ — μπορεί να σπάσει σε 2 commits)

Πρόβλημα: 19MB στο `public/images/`, μεμονωμένα JPG έως 4.7MB (π.χ. `projects/sepolia/cameras-photo2.jpg`), σχεδόν καμία εικόνα δεν έχει `loading="lazy"` ή width/height.

- Μετακίνησε τις εικόνες περιεχομένου (hero, showcase, projects, blog) σε `src/assets/` και χρησιμοποίησε `<Image>` / `<Picture>` από `astro:assets` παντού (Hero, B2BSection, Projects, blog posts, [slug].astro). Αυτό δίνει αυτόματα WebP, srcset, width/height.
- Hero image: `loading="eager"` + `fetchpriority="high"` (είναι το LCP element). Όλες οι υπόλοιπες: `loading="lazy"`.
- Τα partner logos και τα δύο logo αρχεία μπορούν να μείνουν στο public/ αλλά με ρητά width/height στα `<img>`.
- Στόχος: καμία τελική εικόνα πάνω από ~300KB. Verify με `du -sh dist/`.

## Commit 5 — Custom 404

- Νέο `src/pages/404.astro`: φιλικό μήνυμα στα ελληνικά, links προς αρχική/έργα/blog, noindex.

## Commit 6 — Accessibility & fonts

- `Header.astro`: στο `#menu-btn` πρόσθεσε `aria-label="Μενού πλοήγησης"` και `aria-expanded` που εναλλάσσεται από το υπάρχον script.
- Αντικατάσταση Google Fonts CDN με self-hosted `@fontsource/inter` (weights 300/400/600/800) — αφαίρεσε τα preconnect/stylesheet links.

## Commit 7 — Εμπλουτισμός structured data

Στο `Layout.astro`, στο ProfessionalService schema πρόσθεσε:
- `openingHoursSpecification`: Δευτέρα–Παρασκευή 09:00–17:00.
- `logo` (ImageObject με το SmartHomePro_Hor_B.png).
- `sameAs`: array με Google Business Profile / social URLs (ζήτα τα URLs από τον χρήστη πριν το commit — ΜΗΝ βάλεις placeholder links).
- `@id`: `https://smarthomepro.gr/#business`.

## Commit 8 — BreadcrumbList schema

- Πρόσθεσε BreadcrumbList JSON-LD στα project pages (Αρχική → Έργα → [τίτλος]) και στα blog posts (Αρχική → Blog → [τίτλος]). Ιδανικά ως νέο προαιρετικό prop `breadcrumbs` στο Layout ή ως μικρό component.

## Commit 9 — FAQ schema στο άρθρο κόστους

- Στο `src/pages/blog/kostos-exypnou-spitiou-knx.astro`: πρόσθεσε FAQPage JSON-LD με 3-4 ερωταπαντήσεις που ΥΠΑΡΧΟΥΝ ήδη στο κείμενο του άρθρου (μην εφευρίσκεις περιεχόμενο — αντλησέ το από το άρθρο).

## Commit 10 — Homepage H2 με keyword

- Στην αρχική, ένα H2 ψηλά (π.χ. στο B2BSection ή Stats) να περιέχει τη φράση «Έξυπνο Σπίτι KNX» + «Αθήνα/Αττική», χωρίς να αλλοιωθεί το design. Το H1 του Hero μένει ως έχει (branding).

## Commit 11 — README

- Αντικατάσταση του default Astro starter README με σύντομη περιγραφή: τι είναι το project, stack (Astro 5 + Tailwind + Netlify), εντολές dev/build, πώς προστίθεται νέο έργο στο `src/data/projects.ts` και νέο blog post.

---

## Εκτός scope για τώρα (μελλοντικά)

- Μετάβαση blog σε Content Collections (`src/content/blog/`).
- Σελίδες ανά υπηρεσία (Ξενοδοχειακές λύσεις/GRMS, Μελέτη KNX, Ασθενή ρεύματα).
- Testimonials section + Review schema.
- Analytics (Plausible/Umami) — απόφαση χρήστη.

## Κανόνες

1. Ένα commit ανά ενότητα, με περιγραφικό μήνυμα στα αγγλικά (π.χ. "Add per-page OG images").
2. Build πριν από κάθε commit. Push μετά από κάθε commit και ΣΤΑΣΗ για επιβεβαίωση από τον χρήστη.
3. Μην αλλάζεις design/layout/κείμενα πέρα από όσα περιγράφονται.
4. Όπου χρειάζονται στοιχεία που δεν υπάρχουν (social URLs, διεύθυνση, φωτογραφίες), ρώτα τον χρήστη — μην βάζεις placeholders.
