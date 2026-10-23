/**
 * Datos de la empresa (NAP) usados en toda la web, SEO y datos estructurados.
 * Lo marcado con TODO está pendiente del cliente: ver docs/PENDIENTES-CLIENTE.md
 */
export const SITE = {
  name: 'NEXOS Ingenieros',
  legalName: 'NEXOS Ingenieros', // TODO: razón social exacta
  slogan: 'Soluciones en construcción, ingeniería y mantenimiento integral',
  url: 'https://nexos-ing.com',
  locale: 'es-PE',
  phone: '+51 984 387 498',
  phoneHref: 'tel:+51984387498',
  whatsapp: '51984387498',
  email: 'operaciones@nexos-ing.com',
  hours: '', // TODO: horario de atención (#2)
  offices: [
    // TODO: direcciones exactas (#6)
    { name: 'Sede Lima', locality: 'San Martín de Porres', region: 'Lima', country: 'PE' },
    { name: 'Sede Ica', locality: 'Ica', region: 'Ica', country: 'PE' },
  ],
  social: {
    // TODO: enlaces reales (#3)
    linkedin: '',
    facebook: '',
    instagram: '',
  },
  stats: { clientes: 34, mantenimientos: 297 },
  iso: [
    { code: '9001', name: 'Gestión de la calidad' },
    { code: '14001', name: 'Gestión ambiental' },
    { code: '37001', name: 'Gestión antisoborno' },
    { code: '45001', name: 'Seguridad y salud en el trabajo' },
  ],
  gaId: '', // TODO: ID de medición GA4 (G-XXXXXXX)
} as const;

/** Pilares aprobados (2026-10-12, ratificados 2026-10-22). */
export const PILLARS = [
  {
    id: 'mant',
    slug: 'mantenimiento-de-locales-comerciales',
    num: '01',
    short: 'Mantenimiento',
    name: 'Mantenimiento de locales comerciales e infraestructura',
  },
  {
    id: 'retail',
    slug: 'implementacion-de-tiendas-retail',
    num: '02',
    short: 'Implementación retail',
    name: 'Implementación y remodelación de tiendas retail',
  },
  {
    id: 'obras',
    slug: 'obras-civiles-e-ingenieria',
    num: '03',
    short: 'Obras e ingeniería',
    name: 'Ejecución y supervisión de obras civiles e ingeniería',
  },
  {
    id: 'indeci',
    slug: 'levantamiento-observaciones-indeci-certificado-itse',
    num: '04',
    short: 'INDECI · ITSE',
    name: 'Levantamiento de observaciones INDECI y Certificado ITSE',
  },
] as const;

export type PillarId = (typeof PILLARS)[number]['id'];

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
