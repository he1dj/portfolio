import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  loader: glob({
    pattern: '**/[^_]*/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: image(),
      imageAlt: z.string(),
      tags: z.array(z.string()),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/[^_]*/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      imageAlt: z.string(),
      date: z.date(),
      tech: z.array(z.string()),
      github: z.string().url().optional(),
      liveUrl: z.string().url().optional(),
      featured: z.boolean().optional(),
    }),
});

export const collections = { blog, projects };
