import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['Paper Dissection', 'Engineering', 'Notes']),
    source: z.string(),
    year: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog, papers };