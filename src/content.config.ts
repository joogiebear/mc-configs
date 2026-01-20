import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categoryEnum = z.enum([
  'Economy',
  'Items',
  'Minions',
  'Chat',
  'Permissions',
  'World Management',
  'Combat',
  'Skills',
  'Quests',
  'Cosmetics',
  'Utilities',
  'Other',
]);

export type Category = z.infer<typeof categoryEnum>;

const configs = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/configs' }),
  schema: z.object({
    title: z.string(),
    plugin: z.string(),
    version: z.string(),
    minecraftVersion: z.string(),
    category: categoryEnum,
    description: z.string(),
    lastUpdated: z.coerce.date(),
    files: z.array(z.object({
      name: z.string(),
      path: z.string(),
    })),
  }),
});

export const collections = { configs };
