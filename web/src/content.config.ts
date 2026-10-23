/**
 * Colecciones de contenido. Cada entrada se valida con Zod: si falta un dato obligatorio
 * (título, descripción, palabra clave, CTA…), el build falla y avisa.
 */
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const pillar = z.enum(['mant', 'retail', 'obras', 'indeci']);
const city = z.enum(['lima', 'ica', 'chiclayo', 'chimbote', 'pucallpa', 'cusco']);

/** Obras ejecutadas: una página por proyecto en /proyectos/[id]/ */
const proyectos = defineCollection({
  loader: file('src/content/proyectos/proyectos.json'),
  schema: ({ image }) =>
    z.object({
      pillar,
      title: z.string(),
      seoTitle: z.string().max(46).optional(), // <title> cuando el título es muy largo
      client: z.string(), // cliente final (lo que se publica)
      clientInternal: z.string(), // incluye intermediario: NO se publica
      place: z.string(),
      city,
      type: z.string(),
      description: z.string(),
      cover: image(),
      gallery: z.array(image()),
      pending: z.boolean(), // hay datos por confirmar con el cliente
      order: z.number(),
    }),
});

/** Logos del carrusel de clientes (requiere permiso del cliente antes de publicar). */
const clientes = defineCollection({
  loader: file('src/content/clientes/clientes.json'),
  schema: ({ image }) => z.object({ name: z.string(), logo: image() }),
});

/** Preguntas frecuentes (alimentan la sección FAQ y el JSON-LD FAQPage). */
const faq = defineCollection({
  loader: file('src/content/faq/faq.json'),
  schema: z.object({
    pillar,
    question: z.string(),
    answer: z.string(),
    needsValidation: z.boolean(),
    order: z.number(),
    home: z.boolean().default(true), // false: solo en la página de su servicio
  }),
});

/** Páginas de servicio (una por pilar) — se completan en la F3. */
const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    pillar,
    title: z.string().max(65),
    description: z.string().min(120).max(165),
    h1: z.string(),
    keyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
  }),
});

/** Blog: cada artículo apunta a una búsqueda y lleva CTA (docs/SEO.md §5). */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65),
      description: z.string().min(120).max(165),
      keyword: z.string(),
      pillar,
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      cover: image(),
      coverAlt: z.string(),
      cta: z.object({ label: z.string(), text: z.string() }),
      relatedProjects: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      validatedByClient: z.boolean().default(false),
    }),
});

export const collections = { proyectos, clientes, faq, servicios, blog };
