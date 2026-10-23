/** Textos y datos del Inicio (fuente: maqueta A7 aprobada + documento del cliente). */
import type { PillarId } from '../config/site';

/** Contenido de cada pilar para el hero y la sección de servicios. */
export const PILLAR_CONTENT: Record<
  PillarId,
  { tab: string; desc: string; kw1: string; kw2: string; techAlt: string; objAlt: string }
> = {
  mant: {
    tab: 'Mantenimiento',
    desc: 'Mantenimiento preventivo y correctivo de instalaciones eléctricas, tableros, pozos a tierra, aire acondicionado y sistemas contra incendio para bancos, oficinas y tiendas.',
    kw1: 'Mantenimiento de oficinas y agencias bancarias en Lima',
    kw2: 'Mantenimiento preventivo y correctivo de tiendas y centros comerciales',
    techAlt: 'Técnico de NEXOS con pinza amperimétrica y medidor',
    objAlt: 'Tablero eléctrico abierto',
  },
  retail: {
    tab: 'Retail',
    desc: 'Implementamos y remodelamos tiendas, agencias y oficinas llave en mano: drywall, acabados, iluminación, redes y mobiliario.',
    kw1: 'Implementación y remodelación de locales comerciales',
    kw2: 'Remodelación de oficinas corporativas en Lima',
    techAlt: 'Técnico de NEXOS con luminaria y taladro',
    objAlt: 'Mostrador de tienda retail',
  },
  obras: {
    tab: 'Obras',
    desc: 'Ejecutamos y supervisamos obras civiles e industriales, con proyectos de ingeniería eléctrica, sanitaria y de redes de agua.',
    kw1: 'Obras civiles e industriales en Lima, Ica y provincias',
    kw2: 'Instalaciones eléctricas, sanitarias y redes de agua',
    techAlt: 'Ingeniero de NEXOS con planos y tablet',
    objAlt: 'Aire acondicionado y estructura metálica',
  },
  indeci: {
    tab: 'INDECI',
    desc: 'Levantamos observaciones INDECI y preparamos tu local para el Certificado ITSE: pozo a tierra, tableros, luces de emergencia, retardante de fuego y contra incendio.',
    kw1: 'Levantamiento de observaciones de Defensa Civil (ITSE) en boticas y tiendas',
    kw2: 'Protocolos y medición de pozo a tierra para Defensa Civil',
    techAlt: 'Técnico de NEXOS con chaleco reflectivo y detector de humo',
    objAlt: 'Rociador, válvula y detector de humo',
  },
};

export const BENEFITS = [
  { title: 'Respuesta inmediata', text: 'Atención ágil a cada requerimiento', icon: 'M13 2L4 14h7l-1 8 9-12h-7z', tone: 'green' },
  {
    title: 'Equipo multidisciplinario',
    text: 'Ingenieros y técnicos especializados',
    icon: 'M9 5a3.2 3.2 0 1 1 0 6.4A3.2 3.2 0 0 1 9 5zM3 20a6 6 0 0 1 12 0M17 6.6a2.4 2.4 0 1 1 0 4.8M16 14.2a4.6 4.6 0 0 1 5 4.8',
    tone: 'blue',
  },
  {
    title: 'Altos estándares de seguridad',
    text: 'Mejora continua en cada obra',
    icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6zM8.5 12l2.5 2.5 4.5-5',
    tone: 'green',
  },
  {
    title: '7 regiones del Perú',
    text: 'Lima, Callao, Ica, Lambayeque, Áncash, Ucayali y Cusco',
    icon: 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z',
    tone: 'blue',
  },
] as const;

export const STEPS = [
  { n: '01', title: 'Visita técnica y diagnóstico de tu local', text: 'Evaluamos tu local o proyecto y entendemos qué necesitas.', icon: 'M3 11l9-7 9 7M5 10v10h14V10M10 20v-5h4v5' },
  { n: '02', title: 'Propuesta y presupuesto por escrito', text: 'Alcance, plazos y presupuesto por escrito, sin sorpresas.', icon: 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6' },
  {
    n: '03',
    title: 'Ejecución segura de la obra',
    text: 'Equipo multidisciplinario y altos estándares de seguridad, cuidando la operación de tu negocio.',
    icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6zM9 12l2 2 4-4',
  },
  {
    n: '04',
    title: 'Entrega, protocolos y mantenimiento programado',
    text: 'Protocolos, informe de cierre y mantenimiento programado para que nada se detenga.',
    icon: 'M5 12l5 5 9-10M4 4h16v16H4z',
  },
] as const;

export const ISO_DETAIL = [
  { code: '9001', name: 'Gestión de la calidad', text: 'Procesos estandarizados y mejora continua en cada servicio.', icon: 'M5 12l5 5 9-10' },
  { code: '14001', name: 'Gestión ambiental', text: 'Manejo responsable de residuos e impacto ambiental en obra.', icon: 'M12 21c-5-3-8-7-8-11a8 8 0 0 1 16 0c0 4-3 8-8 11zM12 21V11M12 14l-3-3M12 12l3-3' },
  { code: '37001', name: 'Gestión antisoborno', text: 'Transparencia y ética en cada contratación.', icon: 'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6zM9 12h6' },
  { code: '45001', name: 'Seguridad y salud en el trabajo', text: 'Protección de nuestro equipo y del tuyo en cada intervención.', icon: 'M4 15a8 8 0 0 1 16 0zM2 15h20M10 7V5h4v2M12 15v4' },
] as const;

export const SECTORS = [
  { href: '/servicios/implementacion-de-tiendas-retail/', name: 'Retail y centros comerciales', clients: 'MINISO · Tiendas MASS · La Tinka', icon: 'M3 9l1.5-5h15L21 9M3 9h18M3 9v11h18V9M9 20v-6h6v6' },
  { href: '/servicios/mantenimiento-de-locales-comerciales/', name: 'Bancos y agencias', clients: 'BBVA · Interbank · Scotiabank', icon: 'M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18' },
  { href: '/servicios/levantamiento-observaciones-indeci-certificado-itse/', name: 'Boticas y farmacias', clients: 'Inkafarma · Mifarma', icon: 'M9 3h6v6h6v6h-6v6H9v-6H3V9h6z' },
  { href: '/servicios/mantenimiento-de-locales-comerciales/', name: 'Oficinas corporativas', clients: 'OXXO · Expeditors · BBVA', icon: 'M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h3a1 1 0 0 1 1 1v11M8 7h4M8 11h4M8 15h4M2 21h20' },
  { href: '/servicios/mantenimiento-de-locales-comerciales/', name: 'Clínicas y salud', clients: 'Clínica Centenario Peruano Japonesa', icon: 'M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11zM12 9v5M9.5 11.5h5' },
  { href: '/servicios/obras-civiles-e-ingenieria/', name: 'Industria y agroindustria', clients: 'POMICA · Agrifresh', icon: 'M3 21V11l5 3V11l5 3V7l8 4v10zM3 21h18M8 17h1M12 17h1M16 17h1' },
] as const;
