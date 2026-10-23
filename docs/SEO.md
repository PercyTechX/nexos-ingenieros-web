# Plan SEO y blog — Web NEXOS Ingenieros

> Estado: **BORRADOR para aprobación** · 2026-10-22
> Las frases clave son las que propuso el cliente. **Hay que validar su volumen de búsqueda** con Google Keyword Planner antes de F5 y ajustar con datos de Search Console después del lanzamiento.

## 1. Mapa de palabras clave → página
> **Actualizado 2026-10-22** con la investigación del agente `seo-evaluador` (autocompletado de Google Perú, unas 130 semillas). Detalle: [../trabajo/evaluaciones/SEO-2026-10-22.md](../trabajo/evaluaciones/SEO-2026-10-22.md).
> Las frases originales del cliente ("mantenimiento integral", "llave en mano", "contratista general", "en centros comerciales", "adecuación ITSE") **no aparecen en el autocompletado**. Quedan como texto de apoyo, no como búsqueda principal.
> **Sinónimo clave:** la gente busca **"certificado de Defensa Civil"** (y "¿es lo mismo que ITSE?"). Usarlo siempre junto a ITSE/INDECI.

| Página | Búsqueda principal | Secundarias (con evidencia) |
|---|---|---|
| Inicio `/` | **mantenimiento de locales comerciales en Lima** | empresas de mantenimiento en Lima, empresas de construcción en Lima, certificado ITSE (solo mención; no es la principal) |
| Mantenimiento `/servicios/mantenimiento-de-locales-comerciales/` | **mantenimiento de locales comerciales y oficinas en Lima** | mantenimiento de centros comerciales, mantenimiento de tableros eléctricos en Lima, mantenimiento aire acondicionado Lima, mantenimiento de sistema contra incendio Lima (si NEXOS lo presta), mantenimiento preventivo y correctivo, facility management Perú |
| Retail `/servicios/implementacion-de-tiendas-retail/` | **implementación y remodelación de locales comerciales** | implementación de tiendas, remodelación de tiendas, remodelación de oficinas Lima, acondicionamiento de locales comerciales, cableado estructurado Lima |
| Obras `/servicios/obras-civiles-e-ingenieria/` | **obras civiles en Lima** (empresa de obras civiles e industriales) | empresas de construcción en Lima, supervisión de obras civiles, instalaciones eléctricas y sanitarias, empresa de construcción Ica |
| ITSE `/servicios/levantamiento-observaciones-indeci-certificado-itse/` | **levantamiento de observaciones ITSE / Defensa Civil** | certificado ITSE, certificado de Defensa Civil, protocolo, medición y certificado de pozo a tierra (página única para evitar canibalización), señalización Defensa Civil, certificado ITSE Ica |
| Proyectos `/proyectos/[slug]/` | "<tipo de trabajo> <cliente> <ciudad>" (p. ej. implementación de tienda MASS en Ate) | — |
| Nosotros `/nosotros/` | NEXOS Ingenieros (marca) | empresa certificada ISO 9001 / 14001 / 37001 / 45001 |

**Antes de publicar:** medir el volumen de estas frases con Google Keyword Planner. El autocompletado prueba que se buscan, pero no dice cuánto.

## 2. Checklist SEO por página (on-page)
- [ ] `<title>` de ≤ 60–65 caracteres, con la búsqueda principal al inicio y "| NEXOS Ingenieros" al final.
- [ ] `meta description` de 140–160 caracteres, con beneficio y CTA.
- [ ] **Un solo H1**, que contenga la búsqueda principal. Los H2 llevan las secundarias y los H3 los detalles. La marca va en el title, el H1 y pocas H2 (sin relleno de palabras clave).
- [ ] URL corta y descriptiva.
- [ ] Imágenes con `alt` descriptivo y nombres de archivo con palabras clave (`implementacion-tienda-miniso-pucallpa.webp`).
- [ ] Enlaces internos: servicio ↔ proyectos ↔ artículos del blog ↔ cotizador.
- [ ] Datos estructurados que correspondan a la página (ver STACK §3).
- [ ] CTA visible arriba y al final.
- [ ] Contenido útil y propio, no copiado del brochure tal cual.

## 3. SEO técnico (F6)
Sitemap · robots.txt · canonical · Open Graph · rendimiento (LCP < 2,5 s, CLS < 0,1) · HTTPS · redirección www/no-www · 404 útil · `lang="es-PE"` · H1 siempre como texto real (las animaciones son solo visuales) · pantalla de entrada que no bloquea el HTML para Google.

## 4. SEO local
- **Perfil de Empresa en Google:** sede San Martín de Porres (Lima) y sede Ica, con categorías, servicios, horario, fotos de obras y enlace a la web.
- **Datos de contacto (NAP) idénticos** en la web, el Perfil de Empresa, LinkedIn, Facebook y directorios.
- Pedir **reseñas en Google** a los clientes satisfechos.
- Páginas o secciones con ciudad ("… en Lima", "… en Ica") donde corresponda, sin crear páginas vacías por distrito.

## 5. Estrategia de blog
**Reglas para cada artículo:**
1. Apunta a **una búsqueda concreta** (pregunta o problema real del cliente).
2. Responde completo, con lenguaje claro (900–1 500 palabras), ejemplos de obras de NEXOS y fotos propias.
3. **CTA** en el medio y al final, que lleva al cotizador **con el pilar preseleccionado** y a WhatsApp.
4. Enlaza a su página de servicio y a 1–2 proyectos relacionados.
5. Los temas normativos (ITSE, INDECI, pozo a tierra) los **valida el cliente** antes de publicar.
6. Ritmo: **2 artículos al mes** después del lanzamiento.

**Calendario definitivo** (2026-10-22): reemplaza la tabla tentativa de 14 artículos.
- **De dónde sale:** de 5 investigaciones de búsquedas reales en Google Perú (unas 1 500 consultas al autocompletado, más búsquedas web y normativa verificada en fuentes oficiales). Están en [../trabajo/investigacion-blog/](../trabajo/investigacion-blog/): electrico, mantenimiento-general, retail, ingenieria-obras e itse.
- **Tabla, reglas de redacción y orden de publicación:** [../trabajo/investigacion-blog/CALENDARIO.md](../trabajo/investigacion-blog/CALENDARIO.md).
- **Redactados:** 33 artículos en `web/src/content/blog/` (de 1 100 a 1 500 palabras cada uno), todos con `draft: true` y `validatedByClient: false`:
  - ITSE: 7
  - Mantenimiento: 10
  - Retail: 6
  - Obras e ingeniería: 10
- **Pendiente del cliente:** precios, casos, alcance de proyectos y revisión normativa. Está en [../trabajo/investigacion-blog/PENDIENTES-BLOG.md](../trabajo/investigacion-blog/PENDIENTES-BLOG.md).
- **Cómo no competir con las páginas de servicio:** las búsquedas con ciudad ("… en Lima") o "empresa de …" son de las páginas de servicio; los artículos atacan qué es, costo, frecuencia, norma y pasos.
- **Primeros 6 (F5):**
  - Certificado ITSE (Defensa Civil)
  - Certificado de pozo a tierra
  - Instalación eléctrica de un local comercial
  - Mantenimiento de sistema contra incendio
  - Mantenimiento de tableros eléctricos
  - Costo de un expediente técnico

## 6. Medición
- **Search Console:** impresiones, clics y posición por frase (revisión mensual).
- **Analítica:** visitas por página, eventos `cotizacion_enviada` y `whatsapp_click`, y conversiones por artículo.
- **Informe mensual:** qué artículos traen visitas, qué títulos ajustar y qué tema escribir.
