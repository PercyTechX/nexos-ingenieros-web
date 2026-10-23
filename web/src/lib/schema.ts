/** Datos estructurados (JSON-LD) reutilizables. Ver docs/STACK.md §4. */
import { SITE, PILLARS } from '../config/site';

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${SITE.url}/#organizacion`,
  name: SITE.name,
  legalName: SITE.legalName,
  slogan: SITE.slogan,
  url: SITE.url,
  logo: `${SITE.url}/logo-nexos.png`,
  email: SITE.email,
  telephone: SITE.phone,
  areaServed: [
    { '@type': 'City', name: 'Lima' },
    { '@type': 'City', name: 'Callao' },
    { '@type': 'City', name: 'Ica' },
    { '@type': 'Country', name: 'Perú' },
  ],
  address: SITE.offices.map((o) => ({
    '@type': 'PostalAddress',
    addressLocality: o.locality,
    addressRegion: o.region,
    addressCountry: o.country,
  })),
  knowsAbout: PILLARS.map((p) => p.name),
  sameAs: Object.values(SITE.social).filter(Boolean),
});

export const breadcrumbLd = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: new URL(it.url, SITE.url).href,
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceLd = (s: { name: string; description: string; url: string; serviceType: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  description: s.description,
  serviceType: s.serviceType,
  url: new URL(s.url, SITE.url).href,
  provider: { '@id': `${SITE.url}/#organizacion` },
  areaServed: [
    { '@type': 'City', name: 'Lima' },
    { '@type': 'City', name: 'Callao' },
    { '@type': 'City', name: 'Ica' },
    { '@type': 'Country', name: 'Perú' },
  ],
});
