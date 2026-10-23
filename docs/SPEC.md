# Especificación funcional — Web NEXOS Ingenieros

> Estado: **BORRADOR para aprobación** · 2026-10-22
> Referencia visual: lienzo de Claude Design, variante **A7** + **Ficha de proyecto**: https://claude.ai/artifact/GSzgyDnueG2UgGVPJEVFQo (copia local: `trabajo/maquetas-claude-design/project/`)

## 1. Mapa del sitio y URLs
| Página | URL | Fuente del contenido |
|---|---|---|
| Inicio | `/` | Maqueta A7 |
| Servicios (índice) | `/servicios/` | 4 pilares |
| Mantenimiento de locales comerciales e infraestructura | `/servicios/mantenimiento-de-locales-comerciales/` | Documento del cliente (eléctricas, civil y acabados, contra incendios, mecánicas) |
| Implementación y remodelación de tiendas retail | `/servicios/implementacion-de-tiendas-retail/` | Documento del cliente |
| Ejecución y supervisión de obras civiles e ingeniería | `/servicios/obras-civiles-e-ingenieria/` | Documento del cliente (8 servicios de ingeniería y 12 tipos de obra) |
| Levantamiento de observaciones INDECI y Certificado ITSE | `/servicios/levantamiento-observaciones-indeci-certificado-itse/` | Documento del cliente (8 servicios ITSE) |
| Proyectos | `/proyectos/` | 30 obras (`trabajo/proyectos/*/manifiesto.json`) |
| Ficha de proyecto | `/proyectos/[slug]/` | Una por obra |
| Nosotros | `/nosotros/` | Quiénes somos (documento del cliente), misión, visión, valores, ISO, clientes |
| Blog | `/blog/` · `/blog/[slug]/` · `/blog/categoria/[pilar]/` | Markdown/MDX |
| Contacto / Cotizar | `/contacto/` | Cotizador |
| Política de privacidad | `/politica-de-privacidad/` | Por redactar |
| 404 | `/404` | — |

**Navegación principal:** Inicio · Servicios (submenú con los 4 pilares) · Proyectos · Nosotros · Blog · **Cotiza tu proyecto** (botón).
**Footer:** servicios, proyectos destacados, contacto, sedes, redes, legales.

## 2. Inicio (A7) — secciones en orden
> Actualizado 2026-10-22: se quitaron **Sectores** y **Cómo trabajamos** (redundantes en el Inicio; "Cómo trabajamos" se reutiliza en las páginas de servicio). **Clientes** pasó a franja compacta debajo del hero y la **FAQ** a claro.

| # | Sección | Tono | Comportamiento |
|---|---|---|---|
| 0 | Pantalla de entrada | Oscuro | Solo en la primera visita (`localStorage`), ~2,7 s, botón "Saltar"; sin animación con `prefers-reduced-motion` |
| 1 | Hero | Oscuro | Alto = pantalla; H1 "Mantenimiento de locales comerciales, obras e ingeniería"; rota el técnico, el objeto y la descripción por pilar cada 5 s; pestañas 01–04; franja de beneficios |
| 2 | Clientes (tarjeta flotante) | Difuminado oscuro → claro | Tarjeta blanca sobre un degradado ink → azul de marca → azul claro que une el hero con Servicios; H2 pequeño "Empresas que confían en NEXOS Ingenieros" + logos en 2 filas en movimiento (gris → color) |
| 3 | Servicios | Claro (gris) | 4 tarjetas con objeto recortado y frases SEO; enlace a cada página de servicio |
| 4 | ¿Por qué NEXOS? | Oscuro | Texto + bento 2×2 de cifras animadas (+34 clientes, +297 mantenimientos, 7 regiones, 4 normas ISO) con ícono, contador, contexto y barra que se llena |
| 5 | Proyectos (mapa de obras) | Claro (plano técnico) | Mapa del Perú con puntos por ciudad, filtro por pilar y lista enlazada a las fichas |
| 6 | Certificaciones | Oscuro | 4 tarjetas ISO (9001, 14001, 37001, 45001) |
| 7 | Preguntas frecuentes | Claro (blanco) | Acordeón con filtro por pilar; datos estructurados FAQPage |
| 8 | Cotizador | Claro (gris, tarjeta oscura) | Ver §5 |
| 9 | CTA + footer | Oscuro | — |

## 3. Página de servicio (plantilla)
1. Hero con H1 = nombre del pilar + ciudad ("… en Lima"), descripción y CTA.
2. Sub-servicios en tarjetas (del documento del cliente), cada uno con H3.
3. Proyectos relacionados del pilar (tarjetas → fichas).
4. Cómo trabajamos (componente `ComoTrabajamos`, que se quitó del Inicio).
5. FAQ del pilar.
6. Cotizador con el pilar preseleccionado (`/contacto/?servicio=…`).
7. Artículos del blog del pilar.

## 4. Ficha de proyecto (plantilla)
Ruta (Inicio / Proyectos / Pilar) · H1 con el nombre de la obra · datos (cliente final, ubicación, servicio, trabajo) · galería con flechas y miniaturas · descripción · CTA "¿Necesitas algo similar?" · proyectos relacionados.
- Se muestra solo el **cliente final**; el intermediario (GDS, TGestiona, Panorama) no se publica.
- Los datos sin confirmar no se muestran.

## 5. Cotizador
- **Campos:** ¿Qué necesitas? (4 pilares) · Razón social* · RUC (11 dígitos, opcional) · Correo electrónico*.
- **Vista previa** del mensaje en vivo y barra de avance.
- **Al enviar:** se valida, se abre `wa.me/51984387498` con el mensaje y se muestra la confirmación.
- No se guardan datos en el sitio (se indica en la página).
- **Evento de analítica** `cotizacion_enviada`, con el pilar.

## 6. Blog
- **Listado** con filtro por categoría (los 4 pilares) y paginación.
- **Artículo:** H1, fecha, tiempo de lectura, imagen destacada, índice, cuerpo, **CTA en el medio y al final** (al cotizador con el pilar preseleccionado), artículos relacionados y datos estructurados `Article` / `BreadcrumbList`.
- **Metadatos** (frontmatter): `title`, `description`, `keyword`, `pillar`, `date`, `updated`, `cover`, `coverAlt`, `cta`.

## 7. Requisitos no funcionales
- **Responsive:** 360 px a 1440 px o más; menú hamburguesa en móvil.
- **Accesibilidad:** WCAG 2.2 AA (contraste, foco visible, navegación por teclado, `alt` en imágenes, `prefers-reduced-motion`).
- **Rendimiento:** LCP < 2,5 s en 4G, CLS < 0,1, imágenes WebP/AVIF responsivas y carga diferida.
- **Idioma:** `es-PE`.
- **Navegadores:** Chrome, Edge, Safari y Firefox (2 últimas versiones). Los efectos ligados al scroll degradan a contenido estático.

## 8. Contenido pendiente
Ver [PENDIENTES-CLIENTE.md](PENDIENTES-CLIENTE.md).
