import { file } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const items = defineCollection({
  loader: file('src/content/items/items.json'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      price: z.number(),
      description: z.string().nullable(),
      image: image().array().optional(),
      enabled: z.boolean(),
      owner: z.string().nullable(),
      interested: z.array(z.string()),
    }),
})

export const collections = { items }
