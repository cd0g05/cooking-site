import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    // Optional corner callout on the recipe tile, e.g. "#1 Favorite".
    badge: z.string().optional(),
    date: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    pdf: z.string().optional(),
    // Displayed in the meta strip under the title, in order.
    meta: z.array(z.object({ label: z.string(), value: z.string() })),
    // ISO-8601 durations for schema.org (e.g. PT1H, PT9H).
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    totalTime: z.string().optional(),
    recipeYield: z.string().optional(),
    ingredientGroups: z.array(
      z.object({ name: z.string(), items: z.array(z.string()) })
    ),
    steps: z.array(z.object({ title: z.string(), text: z.string() })),
    notes: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
  }),
});

export const collections = { recipes };
