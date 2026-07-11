// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://smarthomepro.gr',
  markdown: {
    // Χωρίς αυτόματη «τυπογραφική» αντικατάσταση εισαγωγικών/παύλων στα MDX,
    // ώστε τα κείμενα να μένουν ακριβώς όπως γράφτηκαν.
    smartypants: false,
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      // Εξαίρεση της σελίδας ευχαριστίας (noindex) από το sitemap.
      filter: (page) => !page.includes('/efxaristoume/'),
    }),
  ],
});
