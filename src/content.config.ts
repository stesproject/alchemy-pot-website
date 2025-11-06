import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean().optional(),
      featured: z.boolean().optional(),
      downloadUrl: z.array(z.object({ label: z.string(), url: z.string() })),
      media: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      date: z.coerce.date(),
    }),
});

const games = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/games" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean().optional(),
      featured: z.boolean().optional(),
      downloadUrl: z.array(z.object({ label: z.string(), url: z.string() })),
      media: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      date: z.coerce.date(),
    }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/resources" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      downloadUrl: z
        .array(z.object({ label: z.string(), url: z.string() }))
        .optional(),
      featured: z.boolean().optional(),
      media: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      image: z
        .object({
          src: z.string(),
          alt: z.string(),
        })
        .optional(),
      date: z.coerce.date(),
    }),
});

const assets = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/assets" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      downloadUrl: z
        .array(z.object({ label: z.string(), url: z.string() }))
        .optional(),
      featured: z.boolean().optional(),
      media: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      date: z.coerce.date(),
    }),
});

const godot2dtopdowntemplate = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/godot-2d-topdown-template",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().optional(),
      media: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      date: z.coerce.date(),
    }),
});

export const collections = {
  blog,
  projects,
  games,
  resources,
  assets,
  "godot-2d-topdown-template": godot2dtopdowntemplate,
};
