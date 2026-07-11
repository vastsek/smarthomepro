// Αρχείο: src/content.config.ts
// Content Collections: τα blog posts ζουν στο src/content/blog/ ως .mdx
// αρχεία με frontmatter. Το url κάθε post είναι /blog/<όνομα-αρχείου>/.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Σύντομη περίληψη για την κάρτα στη λίστα του blog (διαφέρει από το description).
			excerpt: z.string(),
			// Εμφανίζεται ως eyebrow badge πάνω από τον τίτλο και ως κατηγορία στην κάρτα.
			category: z.string(),
			publishDate: z.coerce.date(),
			// Προαιρετική εικόνα για og:image/twitter:image (path σχετικό με το .mdx αρχείο).
			ogImage: image().optional(),
			// Προαιρετικές ερωταπαντήσεις → παράγουν FAQPage schema στη σελίδα.
			faqs: z
				.array(z.object({ question: z.string(), answer: z.string() }))
				.optional(),
			// Κείμενα του CTA box στο τέλος του άρθρου.
			cta: z.object({
				heading: z.string(),
				text: z.string().optional(),
				button: z.string(),
			}),
		}),
});

export const collections = { blog };
