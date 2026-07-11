# smarthomepro.gr

Εταιρικό site της **SmartHomePro** (πρώην biT Automations) — λύσεις έξυπνου
σπιτιού KNX, μελέτη/εγκατάσταση αυτοματισμών και ασθενή ρεύματα στην Αθήνα
και την Αττική.

## Stack

- [Astro 5](https://astro.build) — static site (SSG), χωρίς JS framework
- [Tailwind CSS 3](https://tailwindcss.com)
- Self-hosted Inter μέσω `@fontsource/inter`
- Hosting: **Netlify** (auto-deploy από το `main` branch)
- Φόρμα επικοινωνίας: Netlify Forms (σελίδα ευχαριστίας `/efxaristoume/`)
- Το `netlify.toml` περιέχει τα 301 redirects από το παλιό domain
  bitautomations.gr (domain alias στο ίδιο Netlify site)

## Εντολές

| Εντολή            | Τι κάνει                                     |
| :---------------- | :------------------------------------------- |
| `npm install`     | Εγκατάσταση dependencies                      |
| `npm run dev`     | Dev server στο `localhost:4321`               |
| `npm run build`   | Production build στο `./dist/`                |
| `npm run preview` | Τοπικό preview του build                      |

## Δομή

```text
src/
├── assets/images/    # Εικόνες περιεχομένου (περνούν από astro:assets → WebP/srcset)
├── components/       # Hero, Header, Footer, Contact, Projects, Stats κ.λπ.
├── data/projects.ts  # Τα έργα (portfolio) — ΕΝΑ αρχείο για όλα
├── layouts/Layout.astro  # Κοινό layout: meta, OG, JSON-LD schemas, fonts
└── pages/            # index, projects/, blog/, efxaristoume, 404
public/images/        # Λογότυπα & partner logos (σερβίρονται αυτούσια)
```

## Πώς προσθέτω νέο έργο

1. Βάλε τις φωτογραφίες σε `src/assets/images/projects/<slug-εργου>/`
   (μεγάλες φωτό OK — βελτιστοποιούνται αυτόματα στο build).
2. Στο `src/data/projects.ts` πρόσθεσε ένα αντικείμενο στο array `projects`
   με `slug`, `title`, `location`, `category`, `tags`, `description`,
   `longDescription` και `gallery` με `img('<slug>/<αρχείο>.jpg')` ανά εικόνα.
   - `imageFit: 'contain'` για screenshots εφαρμογών, `'cover'` για φωτογραφίες.
   - Προαιρετικά `sections`/`specs` για αναλυτικό case study, ή
     `status: 'in-progress'` για έργο σε εξέλιξη (δείχνει placeholder).
3. Η σελίδα `/projects/<slug>/` δημιουργείται αυτόματα. Για να φαίνεται το
   έργο και στην αρχική, πρόσθεσε το slug στο `featuredSlugs` του
   `src/components/Projects.astro`.

## Πώς προσθέτω νέο blog post

1. Αντίγραψε ένα υπάρχον αρχείο από `src/pages/blog/` (π.χ.
   `ti-einai-to-knx.astro`) με νέο όνομα-slug.
2. Ενημέρωσε `title`, `description`, `publishDate` και το περιεχόμενο.
   Το `publishDate` παράγει αυτόματα το BlogPosting schema. Πέρασε και
   `breadcrumbs` + προαιρετικά `ogImage` (δες το `prasino-spiti-knx.astro`).
3. Πρόσθεσε το post στη λίστα `posts` του `src/pages/blog/index.astro`.

## SEO

Το `Layout.astro` παράγει αυτόματα: canonical, OG/Twitter meta,
ProfessionalService schema (με sameAs σε Facebook/Instagram/Google Maps),
BlogPosting (με `publishDate`), BreadcrumbList (με `breadcrumbs`) και
sitemap (`@astrojs/sitemap`). Το άρθρο κόστους έχει επιπλέον FAQPage schema.
