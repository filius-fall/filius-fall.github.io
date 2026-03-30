import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './src/content/posts/' 
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    categories: z.array(z.string()).optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': blog,
};
