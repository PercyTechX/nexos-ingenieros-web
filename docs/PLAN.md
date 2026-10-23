# Plan del proyecto — Web NEXOS Ingenieros

> Estado: **APROBADO** · 2026-10-22 · Fase actual: **F1 terminada (pendiente de revisión)**
> Documentos relacionados: [SPEC.md](SPEC.md) · [STACK.md](STACK.md) · [SEO.md](SEO.md) · [PENDIENTES-CLIENTE.md](PENDIENTES-CLIENTE.md) · Bitácora: [../trabajo/BITACORA.md](../trabajo/BITACORA.md)

## 1. Objetivo
Que NEXOS Ingenieros **sea conocida y se posicione en Google** como empresa de mantenimiento integral, implementación de tiendas, obras e ingeniería y adecuación ITSE en Lima, Ica y el resto del Perú, y que la web **genere solicitudes de cotización** (por WhatsApp).

**Indicadores de éxito** (a medir desde el lanzamiento):
- Posiciones en Google para las 8 frases clave del cliente (ver [SEO.md](SEO.md)).
- Clics orgánicos mensuales (Search Console).
- Solicitudes enviadas desde el cotizador y clics en WhatsApp (eventos de analítica).

## 2. Alcance
**Incluido en la versión 1:**
- Inicio (basado en la maqueta **A7**).
- 4 páginas de servicio (una por pilar) con sus sub-servicios.
- Listado de proyectos con mapa y **una página por proyecto** (30 obras).
- Nosotros (quiénes somos, misión, visión, valores, certificaciones ISO y clientes).
- Contacto / Cotizador.
- **Blog** con categorías por pilar y los 6 primeros artículos.
- Política de privacidad y página 404.
- SEO técnico completo: títulos, metadatos, datos estructurados, sitemap, robots, Open Graph y rendimiento.

**Fuera de la versión 1 (fase 2):**
- Páginas por sub-servicio (pozo a tierra, contra incendios, aire acondicionado, UPS, topografía…).
- Páginas por sector (retail, bancos, boticas…).
- Inglés.
- Panel de administración (CMS): el blog lo mantenemos nosotros.

## 3. Decisiones tomadas
| Tema | Decisión | Fecha |
|---|---|---|
| Diseño base | Maqueta **A7** (hero oscuro, alternancia claro/oscuro, intro de primera visita, mapa de obras, cotizador) | 2026-10-22 |
| Pilares | Los 4 aprobados: Mantenimiento de locales comerciales e infraestructura · Implementación y remodelación de tiendas retail · Ejecución y supervisión de obras civiles e ingeniería · Levantamiento de observaciones INDECI y Certificado ITSE | 2026-10-12 (ratificado 2026-10-22) |
| Contenido detallado de servicios | Se toma del documento del cliente "estructura pagina web.docx" | 2026-10-22 |
| Stack | **Astro** estático + islas **Svelte 5** + **GSAP** + **Tailwind 4** + Pagefind + GA4 (Partytown) — ver STACK.md | 2026-10-22 |
| Hosting | **Yachay**, hosting compartido cPanel; despliegue automático con GitHub Actions por SFTP/FTPS | 2026-10-22 |
| Blog | Lo mantiene el equipo de desarrollo (Markdown/MDX en el repositorio). Cada artículo apunta a una frase de búsqueda y tiene un CTA | 2026-10-22 |
| Contacto | Cotizador que abre WhatsApp con el mensaje armado (no guarda datos) | 2026-10-22 |
| SEO | El H1 siempre es texto real; las animaciones son solo visuales | 2026-10-06 |
| Documentación | Archivos Markdown en `docs/` | 2026-10-22 |

## 4. Fases y entregables
Cada fase termina con una **revisión y aprobación del usuario** antes de pasar a la siguiente.

| Fase | Entregable | Criterio de "listo" |
|---|---|---|
| **F0 · Cierre de diseño** | Aprobación de la A7 como base y respuesta a los pendientes críticos del cliente | Checklist de [PENDIENTES-CLIENTE.md](PENDIENTES-CLIENTE.md) (prioridad alta) resuelto o con valor provisional acordado |
| **F1 · Base técnica** | Repositorio git, proyecto Astro, tokens de diseño, layout base, despliegue de vista previa | La vista previa carga en una URL y pasa el build y el chequeo de tipos |
| **F2 · Componentes e Inicio** | Componentes (header, footer, botones, tarjetas, acordeón, cotizador, mapa, carrusel de logos) e Inicio completo | El Inicio es igual a la A7 en escritorio y móvil, sin errores de accesibilidad graves |
| **F3 · Servicios y Proyectos** | 4 páginas de servicio, listado de proyectos y 30 fichas generadas desde datos | Cada página tiene su title, meta, H1 y datos estructurados |
| **F4 · Nosotros, Contacto y legales** | Nosotros, Contacto, Privacidad, 404 | Textos validados por el cliente |
| **F5 · Blog** | Infraestructura del blog (listado, categorías, artículo, artículos relacionados, CTA) y 6 artículos iniciales | Cada artículo cumple el checklist SEO de [SEO.md](SEO.md) |
| **F6 · SEO técnico y medición** | Sitemap, robots, datos estructurados, OG, analítica, Search Console, Perfil de Empresa en Google | Validación sin errores en las herramientas de Google |
| **F7 · QA y lanzamiento** | Pruebas en móvil y escritorio, Lighthouse, enlaces, formularios; publicación en el dominio | Lighthouse ≥ 90 en rendimiento, accesibilidad, buenas prácticas y SEO en Inicio, servicio, proyecto y artículo |
| **F8 · Crecimiento** | 2 artículos al mes, revisión mensual de Search Console, ajustes de títulos | Informe mensual |

## 5. Riesgos y cómo los cubrimos
| Riesgo | Mitigación |
|---|---|
| Fotos con apariencia de IA o de baja resolución | Marcadas en los manifiestos de `trabajo/proyectos/`; pedir fotos reales al cliente; no usar como portada las dudosas |
| Datos de proyectos incompletos | Mostrar solo lo confirmado; lista en [PENDIENTES-CLIENTE.md](PENDIENTES-CLIENTE.md) |
| Uso de logos de clientes sin permiso | Confirmación escrita del cliente antes de publicar |
| Logo de ISO | No usar el logo de la organización ISO; insignias propias y, si se tienen, los sellos del certificador |
| Afirmaciones normativas (ITSE, pozo a tierra) incorrectas | Validación del cliente antes de publicar FAQ y artículos |
| Animaciones que afecten el rendimiento | Animaciones con CSS, imágenes optimizadas, intro solo en la primera visita y medición con Lighthouse |

## 6. Próximo paso
Aprobar este plan → completar F0 → iniciar F1.
