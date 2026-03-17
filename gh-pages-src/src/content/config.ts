import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    role: z.string(),
    methods: z.array(z.string()),
    links: z.object({
      github: z.string().url(),
      site: z.string().url().optional(),
    }),
  }),
});

export const collections = { projects };
