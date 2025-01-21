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
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    downloadURL: z.array(z.object({ label: z.string(), url: z.string() })),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    index: z.number(),
  }),
});

const assets = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/assets" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    downloadURL: z.string(),
    index: z.number(),
  }),
});

const godot2dTopdownTemplate = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/godot-2d-topdown-template",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    index: z.number(),
  }),
});

export const collections = {
  blog,
  projects,
  resources,
  assets,
  godot2dTopdownTemplate,
};
