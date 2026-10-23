/** Utilidades del blog: qué artículos se publican, categorías por pilar y tiempo de lectura. */
import { getCollection, type CollectionEntry } from 'astro:content';
import { PILLARS, type PillarId } from '../config/site';

export type Post = CollectionEntry<'blog'>;

/**
 * Los borradores (draft: true) se ven en cualquier build local (con noindex y notas de pendientes) para revisarlos.
 * El despliegue de GitHub Actions (CI=true) no los genera; PUBLIC_HIDE_DRAFTS=true fuerza lo mismo en local.
 */
export const SHOW_DRAFTS = !process.env.CI && import.meta.env.PUBLIC_HIDE_DRAFTS !== 'true';

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => SHOW_DRAFTS || !data.draft);
  const rank = (p: Post) => (PRIORITY.indexOf(p.id) + 1 || PRIORITY.length + 1);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf() || rank(a) - rank(b));
}

/** Desempate entre artículos de la misma fecha: orden de publicación de trabajo/investigacion-blog/CALENDARIO.md. */
const PRIORITY = [
  'certificado-itse-defensa-civil', 'certificado-de-pozo-a-tierra', 'instalacion-electrica-local-comercial',
  'mantenimiento-sistema-contra-incendio', 'mantenimiento-de-tableros-electricos', 'costo-expediente-tecnico-de-obra',
  'que-revisa-defensa-civil-checklist-itse', 'plan-de-mantenimiento-preventivo-locales', 'remodelar-local-comercial',
  'mantenimiento-aire-acondicionado', 'mantenimiento-de-pozo-a-tierra', 'supervision-de-obra-privada',
  'levantamiento-de-observaciones-itse', 'tablero-electrico-itse-observaciones', 'implementar-tienda-centro-comercial',
  'drywall-o-ladrillo-oficinas', 'senalizacion-luces-emergencia-defensa-civil', 'remodelacion-de-oficinas-costo',
];

/** Categorías del blog: una por pilar, con URL corta. */
export const CATEGORIES: { pillar: PillarId; slug: string; label: string; h1: string; description: string }[] = [
  {
    pillar: 'mant',
    slug: 'mantenimiento',
    label: 'Mantenimiento',
    h1: 'Mantenimiento de locales comerciales y oficinas',
    description:
      'Guías de mantenimiento de tableros eléctricos, pozo a tierra, aire acondicionado y sistemas contra incendio para locales comerciales, oficinas y plantas.',
  },
  {
    pillar: 'retail',
    slug: 'implementacion-retail',
    label: 'Implementación retail',
    h1: 'Implementación y remodelación de tiendas y oficinas',
    description:
      'Costos, permisos y pasos para implementar o remodelar tiendas, locales en centros comerciales y oficinas: instalaciones eléctricas, cableado y licencias.',
  },
  {
    pillar: 'obras',
    slug: 'obras-e-ingenieria',
    label: 'Obras e ingeniería',
    h1: 'Obras civiles, supervisión e ingeniería',
    description:
      'Expediente técnico, supervisión de obra, topografía, costos por m², impermeabilización y contrataciones del Estado explicados por ingenieros de NEXOS.',
  },
  {
    pillar: 'indeci',
    slug: 'itse-defensa-civil',
    label: 'ITSE · Defensa Civil',
    h1: 'Certificado ITSE y Defensa Civil',
    description:
      'Requisitos del certificado ITSE de Defensa Civil, qué revisa el inspector, cómo levantar observaciones, pozo a tierra, señalización y luces de emergencia.',
  },
];

export const categoryOf = (pillar: PillarId) => CATEGORIES.find((c) => c.pillar === pillar)!;
export const pillarOf = (pillar: PillarId) => PILLARS.find((p) => p.id === pillar)!;

/** Minutos de lectura (≈200 palabras por minuto, sin contar comentarios ni marcas de Markdown). */
export function readingTime(body = ''): number {
  const words = body
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .split(/\s+/)
    .filter((w) => /\p{L}|\d/u.test(w)).length;
  return Math.max(1, Math.round(words / 200));
}

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('es-PE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
