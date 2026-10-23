/**
 * Contenido de las páginas de servicio (/servicios/[slug]/).
 * Fuente: documento del cliente (trabajo/investigacion-blog/SERVICIOS-CLIENTE.md) + búsquedas de docs/SEO.md §1.
 * Plantilla elegida en la F3.1: variante "Recorrido técnico" (HeroSplit + SubPestanas + proyectos en carrusel).
 */
import type { ImageMetadata } from 'astro';
import type { PillarId } from '../config/site';
import scotiabankTablero from '../assets/proyectos/agencias-scotiabank/galeria-2.webp';
import expeditorsPintura from '../assets/proyectos/oficinas-expeditors/portada.webp';
import vivandaExtraccion from '../assets/proyectos/vivanda-pezet/portada.webp';
import objContraincendio from '../assets/hero/obj-contraincendio.webp';
import objTablero from '../assets/hero/obj-tablero.webp';
import objMostrador from '../assets/hero/obj-mostrador.webp';
import objAireEstructura from '../assets/hero/obj-aire-estructura.webp';
import tecnicoObras from '../assets/hero/tecnico-obras.webp';
import minisoTienda from '../assets/proyectos/miniso-plaza-norte/galeria-1.webp';
import minisoIluminacion from '../assets/proyectos/miniso-plaza-norte/galeria-2.webp';
import elChinchaMostrador from '../assets/proyectos/el-chincha/galeria-3.webp';
import tinkaComunicaciones from '../assets/proyectos/tinka-carmen-de-la-legua/galeria-1.webp';
import pomicaLosa from '../assets/proyectos/pomica-almacen-productos-quimicos/galeria-2.webp';
import unalmSanitarias from '../assets/proyectos/unalm-servicios-higienicos/galeria-2.webp';
import canviaObra from '../assets/proyectos/canvia-estacionamiento/galeria-1.webp';
import chimboteEvaluacion from '../assets/proyectos/ct-chimbote/galeria-1.webp';
import chimboteTablero from '../assets/proyectos/ct-chimbote/portada.webp';
import cuscoMegado from '../assets/proyectos/ct-cusco/galeria-3.webp';
import siemensSenalizacion from '../assets/proyectos/siemens-energy/galeria-5.webp';

export interface SubService {
  id: string;
  title: string; // H3 (lleva la búsqueda secundaria)
  chip: string; // nombre corto para las etiquetas flotantes del hero
  text: string;
  items: string[];
  icon: string;
  image: ImageMetadata;
  imageAlt: string;
  /** La imagen es un objeto recortado (no una foto de obra): se muestra sobre fondo, sin recorte. */
  cutout?: boolean;
}

export interface ServiceContent {
  title: string; // <title> sin "| NEXOS Ingenieros" (≤ 46 caracteres)
  description: string; // meta description (140–160)
  h1: string;
  eyebrow: string;
  intro: string;
  highlights: { value: string; label: string }[];
  obj: ImageMetadata;
  objAlt: string;
  sectors: string[];
  subsEyebrow: string;
  projectsEyebrow: string;
  faqEyebrow: string;
  faqIntro: string;
}

export const SERVICE_CONTENT: Partial<Record<PillarId, ServiceContent & { subs: SubService[] }>> = {
  mant: {
    title: 'Mantenimiento de locales y oficinas en Lima',
    description:
      'Mantenimiento preventivo y correctivo de locales comerciales, oficinas y agencias en Lima: tableros eléctricos, aire acondicionado y sistemas contra incendio.',
    h1: 'Mantenimiento de locales comerciales y oficinas en Lima',
    eyebrow: 'Servicio 01 · Mantenimiento integral',
    intro:
      'Mantenimiento preventivo y correctivo de instalaciones eléctricas, civiles, contra incendio y de aire acondicionado, con tu local en operación. Atendemos bancos, tiendas, boticas, clínicas y oficinas en Lima, Ica y provincias.',
    highlights: [
      { value: '+297', label: 'mantenimientos realizados' },
      { value: '4', label: 'especialidades técnicas' },
      { value: 'ISO 45001', label: 'seguridad en cada intervención' },
    ],
    obj: objTablero,
    objAlt: 'Tablero eléctrico abierto',
    sectors: ['Agencias bancarias', 'Tiendas y centros comerciales', 'Boticas', 'Clínicas', 'Oficinas corporativas'],
    subsEyebrow: 'Mantenimiento preventivo y correctivo de locales comerciales y oficinas',
    projectsEyebrow: 'Proyectos de mantenimiento de locales comerciales en Lima',
    faqEyebrow: 'Preguntas frecuentes sobre mantenimiento de locales comerciales',
    faqIntro: 'Lo que más nos consultan los responsables de mantenimiento de tiendas, agencias y oficinas.',
    subs: [
      {
        id: 'electrico',
        title: 'Mantenimiento eléctrico y de tableros',
        chip: 'Eléctrico y tableros',
        text: 'Mantenimiento predictivo, preventivo y correctivo: revisamos, reparamos, instalamos y adecuamos tus instalaciones eléctricas.',
        items: [
          'Tableros eléctricos',
          'Subestaciones eléctricas',
          'Sistemas de iluminación',
          'Pozo a tierra',
          'Letreros luminosos',
          'UPS y transformadores de aislamiento',
          'Tomacorrientes',
        ],
        icon: 'M13 2L4 14h7l-1 8 9-12h-7z',
        image: scotiabankTablero,
        imageAlt: 'Medición con pinza amperimétrica en el tablero eléctrico de una agencia Scotiabank',
      },
      {
        id: 'civil',
        title: 'Infraestructura civil y acabados',
        chip: 'Civil y acabados',
        text: 'Reparamos y renovamos lo que el uso diario desgasta, sin cerrar tu local.',
        items: [
          'Pintura de fachadas, interiores y exteriores',
          'Resane, tarrajeo y reparación de muros',
          'Cambio de pisos (porcelanato, vinílico)',
          'Puertas enrollables, rejas y escaleras de gato',
          'Estructuras metálicas y protección anticorrosiva',
          'Aparatos sanitarios',
        ],
        icon: 'M4 4h13v5H4zM17 6.5h3V12h-8v3M10 15h4v6h-4z',
        image: expeditorsPintura,
        imageAlt: 'Pintura de la oficina central de Expeditors en San Isidro',
      },
      {
        id: 'incendio',
        title: 'Mantenimiento de sistemas contra incendio',
        chip: 'Contra incendio',
        text: 'Instalación, inspección, pruebas funcionales y diagnóstico de fallas de los sistemas de detección, alarma y agua contra incendio.',
        items: [
          'Detectores de humo y temperatura',
          'Estaciones manuales, sirenas y luces estroboscópicas',
          'Paneles de control',
          'Gabinetes, válvulas y rociadores',
          'Redes de tuberías y sistemas de bombeo',
        ],
        icon: 'M12 22c4 0 7-2.7 7-7 0-3.5-2.2-5.6-4-8-.6 2-1.6 3-3 3.5C12.5 7.5 11 4.5 8 2c.4 3-1.2 5-2.6 7A8 8 0 0 0 5 15c0 4.3 3 7 7 7z',
        image: objContraincendio,
        imageAlt: 'Rociador, válvula y detector de humo de un sistema contra incendio',
        cutout: true,
      },
      {
        id: 'aire',
        title: 'Mantenimiento de aire acondicionado y extracción',
        chip: 'Aire acondicionado',
        text: 'Confort, calidad del aire y eficiencia energética: mantenimiento preventivo y correctivo de tus equipos.',
        items: [
          'Split, multisplit y fan coil',
          'Equipos de expansión directa',
          'Limpieza de filtros y serpentines',
          'Revisión eléctrica, mecánica y de drenajes',
          'Sistemas de extracción de aire',
        ],
        icon: 'M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17M12 5l-2.5-2M12 5l2.5-2M12 19l-2.5 2M12 19l2.5 2',
        image: vivandaExtraccion,
        imageAlt: 'Ductos del sistema de extracción de aire instalado en la tienda Vivanda Pezet, San Isidro',
      },
    ],
  },
  retail: {
    title: 'Implementación de tiendas y locales en Lima',
    description:
      'Implementación y remodelación de tiendas, locales comerciales y oficinas en Lima y provincias: obra civil, drywall, electricidad y cableado llave en mano.',
    h1: 'Implementación y remodelación de locales comerciales en Lima',
    eyebrow: 'Servicio 02 · Implementación retail',
    intro:
      'Implementamos y remodelamos tiendas, agencias y oficinas llave en mano: obra civil, drywall, acabados, electricidad, iluminación, cableado y mobiliario, con un solo responsable y cumpliendo los plazos de apertura.',
    highlights: [
      { value: 'Llave en mano', label: 'de la obra civil al letrero' },
      { value: '4', label: 'ciudades: Lima, Ica, Chiclayo y Pucallpa' },
      { value: '+34', label: 'clientes satisfechos' },
    ],
    obj: objMostrador,
    objAlt: 'Mostrador de tienda retail',
    sectors: ['Tiendas por departamento', 'Centros comerciales', 'Tiendas de conveniencia', 'Agencias bancarias', 'Oficinas'],
    subsEyebrow: 'Implementación de tiendas, remodelación de oficinas y acondicionamiento de locales comerciales',
    projectsEyebrow: 'Proyectos de implementación de tiendas en Lima y provincias',
    faqEyebrow: 'Preguntas frecuentes sobre implementación de tiendas',
    faqIntro: 'Lo que más nos consultan las marcas que abren o renuevan tiendas, agencias y oficinas.',
    subs: [
      {
        id: 'implementacion',
        title: 'Implementación de tiendas y locales comerciales',
        chip: 'Implementación de tiendas',
        text: 'Acondicionamos el local desde cero hasta dejarlo listo para abrir, con planificación técnica y gestión de obra.',
        items: [
          'Adecuación de infraestructura',
          'Obras civiles y drywall',
          'Acabados de pisos, muros y techos',
          'Mobiliario y letreros',
          'Planificación técnica y gestión de obra',
        ],
        icon: 'M3 9l1.5-5h15L21 9M3 9h18M3 9v11h18V9M9 20v-6h6v6',
        image: minisoTienda,
        imageAlt: 'Tienda MINISO Plaza Norte implementada por NEXOS, con mobiliario y góndolas instaladas',
      },
      {
        id: 'remodelacion',
        title: 'Remodelación de tiendas y oficinas',
        chip: 'Remodelación',
        text: 'Renovamos tu tienda, agencia u oficina con el menor impacto en tu operación y dentro del plazo acordado.',
        items: [
          'Remodelación de tiendas',
          'Remodelación de oficinas y agencias',
          'Acondicionamiento de locales comerciales',
          'Pintura, enchapes y acabados',
        ],
        icon: 'M4 4h13v5H4zM17 6.5h3V12h-8v3M10 15h4v6h-4z',
        image: elChinchaMostrador,
        imageAlt: 'Mostrador y muro de madera de la tienda ÉL en Chincha tras la remodelación',
      },
      {
        id: 'electricas',
        title: 'Instalaciones eléctricas, iluminación y climatización',
        chip: 'Electricidad e iluminación',
        text: 'Dejamos la tienda energizada, iluminada y climatizada, con las protecciones que exige la norma.',
        items: [
          'Tableros y cableado eléctrico',
          'Canalización (bandejas, EMT y PVC)',
          'Iluminación',
          'Pozo a tierra (SPAT)',
          'Climatización',
          'Protección contra incendios',
        ],
        icon: 'M13 2L4 14h7l-1 8 9-12h-7z',
        image: minisoIluminacion,
        imageAlt: 'Sistema de iluminación lineal instalado en la tienda MINISO Plaza Norte',
      },
      {
        id: 'cableado',
        title: 'Cableado estructurado y sistemas de seguridad',
        chip: 'Cableado y CCTV',
        text: 'Tu local conectado y protegido desde el día de la apertura.',
        items: ['Voz y datos', 'CCTV', 'Intrusión', 'Audio y video', 'Detección y alarma'],
        icon: 'M4 6h16v10H4zM8 20h8M12 16v4',
        image: tinkaComunicaciones,
        imageAlt: 'Pantallas y sistemas de comunicaciones instalados en el local de La Tinka en Carmen de la Legua',
      },
    ],
  },
  obras: {
    title: 'Obras civiles e ingeniería en Lima e Ica',
    description:
      'Ejecución y supervisión de obras civiles e industriales en Lima, Ica y provincias: estructuras, instalaciones sanitarias, expedientes técnicos y presupuestos.',
    h1: 'Obras civiles e ingeniería en Lima, Ica y provincias',
    eyebrow: 'Servicio 03 · Obras e ingeniería',
    intro:
      'Ejecutamos y supervisamos obras civiles e industriales, y desarrollamos la ingeniería que las respalda: expedientes técnicos, presupuestos, topografía e instalaciones eléctricas, sanitarias y de agua.',
    highlights: [
      { value: 'Lima · Ica', label: 'y provincias' },
      { value: 'ISO 9001', label: 'calidad en cada obra' },
      { value: '+34', label: 'clientes satisfechos' },
    ],
    obj: objAireEstructura,
    objAlt: 'Aire acondicionado y estructura metálica',
    sectors: ['Plantas industriales y agroindustria', 'Almacenes', 'Oficinas', 'Universidades y laboratorios', 'Sector público'],
    subsEyebrow: 'Ejecución y supervisión de obras civiles e industriales',
    projectsEyebrow: 'Proyectos de obras civiles e ingeniería en Lima e Ica',
    faqEyebrow: 'Preguntas frecuentes sobre obras civiles e ingeniería',
    faqIntro: 'Lo que más nos consultan las empresas que van a construir, ampliar o supervisar una obra.',
    subs: [
      {
        id: 'ejecucion',
        title: 'Ejecución de obras civiles e industriales',
        chip: 'Obras civiles',
        text: 'Construimos, ampliamos y adecuamos infraestructura para plantas, almacenes y oficinas.',
        items: [
          'Concreto y estructuras (losas, bases, cimentaciones)',
          'Albañilería y tabiquería',
          'Pisos, veredas y rampas',
          'Impermeabilización y techados',
          'Demoliciones y carpintería metálica',
          'Bases para equipos electromecánicos',
        ],
        icon: 'M3 21V11l5 3V11l5 3V7l8 4v10zM3 21h18',
        image: pomicaLosa,
        imageAlt: 'Armado de losa aligerada en el almacén de productos químicos de POMICA en Ica',
      },
      {
        id: 'instalaciones',
        title: 'Instalaciones eléctricas, sanitarias y redes de agua',
        chip: 'Sanitarias y agua',
        text: 'Diseñamos y ejecutamos las instalaciones que hacen funcionar la obra.',
        items: [
          'Redes de agua potable y alcantarillado',
          'Instalaciones sanitarias',
          'Instalaciones eléctricas',
          'Remodelación de servicios higiénicos',
        ],
        icon: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z',
        image: unalmSanitarias,
        imageAlt: 'Tuberías sanitarias en la remodelación de los servicios higiénicos de un laboratorio de la UNALM',
      },
      {
        id: 'supervision',
        title: 'Supervisión y gestión de obras',
        chip: 'Supervisión',
        text: 'Controlamos que la obra avance en plazo, en costo y con calidad.',
        items: [
          'Supervisión, dirección y control de proyectos',
          'Avance físico y financiero',
          'Control de calidad',
          'Valorizaciones y liquidaciones',
          'Cumplimiento contractual',
        ],
        icon: 'M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9',
        image: canviaObra,
        imageAlt: 'Técnico de NEXOS en la obra de mitigación contra inundaciones del estacionamiento de CANVIA',
      },
      {
        id: 'ingenieria',
        title: 'Expedientes técnicos, presupuestos y topografía',
        chip: 'Expedientes técnicos',
        text: 'La ingeniería y los documentos que tu proyecto necesita antes, durante y después de la obra.',
        items: [
          'Expedientes técnicos, estudios y planos',
          'Metrados, presupuestos y costos unitarios',
          'Levantamientos topográficos y replanteos',
          'Informes técnicos y peritajes',
          'Inversión pública y contrataciones del Estado',
        ],
        icon: 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6',
        image: tecnicoObras,
        imageAlt: 'Ingeniero de NEXOS con planos y tablet',
        cutout: true,
      },
    ],
  },
  indeci: {
    title: 'Levantamiento de observaciones ITSE en Lima',
    description:
      'Levantamos observaciones ITSE (Defensa Civil) en tiendas, boticas y oficinas: tableros, pozo a tierra, señalización, luces de emergencia y contra incendio.',
    h1: 'Levantamiento de observaciones ITSE (Defensa Civil) en Lima',
    eyebrow: 'Servicio 04 · INDECI · Certificado ITSE',
    intro:
      'Preparamos tu local para la Inspección Técnica de Seguridad en Edificaciones (ITSE) y levantamos las observaciones de Defensa Civil: instalaciones eléctricas, pozo a tierra, señalización, iluminación de emergencia y protección contra incendios.',
    highlights: [
      { value: '4', label: 'frentes de adecuación' },
      { value: 'ISO 45001', label: 'seguridad en cada intervención' },
      { value: '+34', label: 'clientes satisfechos' },
    ],
    obj: objContraincendio,
    objAlt: 'Rociador, válvula y detector de humo',
    sectors: ['Boticas y farmacias', 'Tiendas', 'Oficinas', 'Centrales de telecomunicaciones', 'Plantas industriales'],
    subsEyebrow: 'Levantamiento de observaciones de Defensa Civil y adecuación para el certificado ITSE',
    projectsEyebrow: 'Proyectos de levantamiento de observaciones ITSE',
    faqEyebrow: 'Preguntas frecuentes sobre el certificado ITSE y Defensa Civil',
    faqIntro: 'Lo que más nos consultan antes y después de una inspección ITSE.',
    subs: [
      {
        id: 'evaluacion',
        title: 'Evaluación técnica y asesoría para la inspección ITSE',
        chip: 'Evaluación y asesoría',
        text: 'Revisamos tu local con los criterios de la inspección y te acompañamos hasta obtener el certificado.',
        items: ['Evaluación técnica de instalaciones', 'Levantamiento de observaciones ITSE', 'Asesoría para la inspección'],
        icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 14l2 2 4-4',
        image: chimboteEvaluacion,
        imageAlt: 'Técnico de NEXOS en la evaluación de instalaciones de la central de Integratel en Chimbote',
      },
      {
        id: 'electrico',
        title: 'Tableros eléctricos y pozo a tierra para Defensa Civil',
        chip: 'Tableros y pozo a tierra',
        text: 'Corregimos las observaciones eléctricas, que son las más frecuentes en una inspección.',
        items: [
          'Tableros, cableado y protecciones',
          'Pozo a tierra y aterramiento de estructuras',
          'Diagramas unifilares y directorios',
          'Megado de tableros',
          'Alimentadores',
        ],
        icon: 'M13 2L4 14h7l-1 8 9-12h-7z',
        image: cuscoMegado,
        imageAlt: 'Megado de tablero eléctrico en la central de Integratel en Cusco',
      },
      {
        id: 'senalizacion',
        title: 'Señalización y luces de emergencia',
        chip: 'Señalización',
        text: 'Rutas de evacuación claras y visibles, incluso sin energía.',
        items: [
          'Señalética fotoluminiscente',
          'Señalización de seguridad y evacuación',
          'Iluminación de emergencia',
          'Rutas de evacuación',
        ],
        icon: 'M4 4h16v12H4zM8 20h8M9 9l3 3-3 3M13 15h3',
        image: siemensSenalizacion,
        imageAlt: 'Señalización de seguridad y luz de emergencia instaladas en la planta de Siemens Energy en Lurín',
      },
      {
        id: 'incendio',
        title: 'Protección contra incendios y adecuación civil',
        chip: 'Contra incendio',
        text: 'Equipamiento contra incendio y adecuaciones de infraestructura que pide la inspección.',
        items: [
          'Extintores',
          'Gabinetes y redes de agua contra incendio',
          'Detección y alarma',
          'Puertas, escaleras y barandas',
          'Drywall y pintura anticorrosiva',
        ],
        icon: 'M12 22c4 0 7-2.7 7-7 0-3.5-2.2-5.6-4-8-.6 2-1.6 3-3 3.5C12.5 7.5 11 4.5 8 2c.4 3-1.2 5-2.6 7A8 8 0 0 0 5 15c0 4.3 3 7 7 7z',
        image: chimboteTablero,
        imageAlt: 'Técnico de NEXOS revisando un tablero junto al extintor en la central de Integratel en Chimbote',
      },
    ],
  },
};
