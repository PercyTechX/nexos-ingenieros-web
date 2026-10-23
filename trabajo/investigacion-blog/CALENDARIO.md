# Calendario unificado del blog (2026-10-22)

Sale de las 5 investigaciones de esta carpeta (electrico, mantenimiento-general, retail, ingenieria-obras e itse), sin temas repetidos. Hay 33 artículos para redactar ahora. Los temas que dependen del cliente quedan en la lista de espera.
Todos se escriben como **borrador** (`draft: true`, `validatedByClient: false`) hasta que el cliente valide normas, precios y proyectos.

## Reglas de redacción (todas las agentes)
- **Archivo:** `web/src/content/blog/<slug>.md`. Esquema en `web/src/content.config.ts` (colección `blog`).
  - `title`: hasta 65 caracteres (lo ideal son 60).
  - `description`: de 120 a 165 caracteres; si no, el build falla.
  - `cover`: `../../assets/proyectos/<id>/portada.webp` o `galeria-N.webp`, de un proyecto relacionado que exista.
  - `coverAlt`: descriptivo.
  - `cta`: `{ label, text }`.
  - `relatedProjects`: ids de `proyectos.json`.
  - `date`: 2026-10-22.
  - `draft`: true.
- **Extensión:** de 900 a 1500 palabras, en español de Perú, con tuteo y claro, para un responsable de local o de mantenimiento. Nada de relleno ni frases de marketing vacías.
- **Estructura:**
  - el cuerpo **no lleva H1**, porque el H1 sale del `title`;
  - abre con un párrafo que responde la búsqueda en 2 o 3 frases;
  - sigue con H2 y H3 que usan las búsquedas secundarias y las preguntas reales de la investigación;
  - termina con una sección "Preguntas frecuentes" en H2, con 3 a 5 preguntas en H3.
- **Normas y datos:** solo los verificados en la investigación, citados con su nombre y número. Lo que la investigación marcó como "sin verificar" no se afirma, o se marca con `<!-- VALIDAR: ... -->`.
- **Precios:** **nunca se inventan.** Se explican los factores que mueven el precio. Si la investigación trae un monto oficial (por ejemplo, un TUPA), se cita con la fuente y la aclaración de que cambia según el distrito. Donde haga falta un rango de NEXOS, va `<!-- PRECIO CLIENTE: ... -->`.
- **Proyectos de NEXOS:** se usa como ejemplo real 1 o 2 proyectos de `web/src/content/proyectos/proyectos.json`, con el campo `client` y **nunca** `clientInternal`. Se enlazan con `[texto](/proyectos/<id>/)`. No se inventan datos que no estén en su `description`.
- **Enlaces internos:**
  - **a su página de servicio:**
    - mant → `/servicios/mantenimiento-de-locales-comerciales/`
    - retail → `/servicios/implementacion-de-tiendas-retail/`
    - obras → `/servicios/obras-civiles-e-ingenieria/`
    - indeci → `/servicios/levantamiento-observaciones-indeci-certificado-itse/`
  - **a otros artículos del blog:** `/blog/<slug>/`, solo con los slugs de esta tabla.
- **CTA:**
  - **en el medio:** un párrafo destacado en negrita que lleva al cotizador `[Cotiza con NEXOS](/?servicio=<pilar>#cotizar)`;
  - **al final:** un cierre con el mismo enlace y WhatsApp `https://wa.me/51984387498`.
- **Canibalización:** las búsquedas con ciudad ("… en Lima") y "empresa de …" quedan para las páginas de servicio. Los artículos van por qué es, cuánto cuesta, cada cuánto, norma y pasos.
- Al final del archivo, un comentario `<!-- FUENTES: url1, url2 ... -->` con las fuentes que usaste.

## Artículos

| # | slug | Título (≤60) | Búsqueda principal | Pilar | Fuente | Prioridad |
|---|---|---|---|---|---|---|
| 1 | certificado-itse-defensa-civil | Certificado ITSE (Defensa Civil): requisitos, costo y vigencia | certificado ITSE / certificado de Defensa Civil | indeci | itse ★1 | alta |
| 2 | que-revisa-defensa-civil-checklist-itse | Qué revisa Defensa Civil en tu local: checklist ITSE 2026 | qué revisa Defensa Civil / checklist ITSE | indeci | itse (Anexo 12a) | alta |
| 3 | levantamiento-de-observaciones-itse | Levantamiento de observaciones ITSE: plazo, informe y pasos | levantamiento de observaciones ITSE (informe, plazo) | indeci | itse ★2 | alta |
| 4 | certificado-de-pozo-a-tierra | Certificado de pozo a tierra: protocolo, ohmios y vigencia | certificado / protocolo de pozo a tierra | indeci | itse ★3 + electrico E1 | alta |
| 5 | tablero-electrico-itse-observaciones | Tablero eléctrico e ITSE: 9 observaciones y cómo evitarlas | qué debe tener un tablero eléctrico (ITSE) | indeci | electrico E3 + E7 | alta |
| 6 | senalizacion-luces-emergencia-defensa-civil | Señalización y luces de emergencia para Defensa Civil | señalización Defensa Civil · luces de emergencia | indeci | itse #12 | media-alta |
| 7 | renovacion-certificado-itse | Renovación del certificado ITSE: requisitos y plazos | renovación certificado ITSE | indeci | itse | media-alta |
| 8 | mantenimiento-de-pozo-a-tierra | Mantenimiento de pozo a tierra: cada cuánto, pasos y precio | mantenimiento de pozo a tierra | mant | electrico E2 | alta |
| 9 | mantenimiento-de-tableros-electricos | Mantenimiento de tableros eléctricos: qué incluye y precio | mantenimiento de tableros eléctricos | mant | electrico E4 | alta |
| 10 | megado-de-tableros-electricos | Megado de tableros eléctricos: qué es y protocolo | megado / medición de aislamiento | mant | electrico E5 | media |
| 11 | niveles-de-iluminacion-oficinas-tiendas | Niveles de iluminación en oficinas y tiendas: lux y norma | lux recomendados oficina / tienda | mant | electrico E6 + retail A7 | media |
| 12 | mantenimiento-sistema-contra-incendio | Mantenimiento de sistema contra incendio: norma y frecuencia | mantenimiento sistema contra incendio | mant | mant-general 1 (+ detectores y alarma NFPA 72 como H2) | alta |
| 13 | plan-de-mantenimiento-preventivo-locales | Plan de mantenimiento preventivo para locales comerciales | plan de mantenimiento preventivo | mant | mant-general 2 (preventivo vs. correctivo en H2) | alta |
| 14 | mantenimiento-aire-acondicionado | Mantenimiento de aire acondicionado: frecuencia y precio | mantenimiento aire acondicionado (precio, cada cuánto) | mant | mant-general 3 | alta |
| 15 | detraccion-mantenimiento-locales | Detracción en mantenimiento de locales: ¿4 % o 12 %? | detracción mantenimiento | mant | mant-general 4 (validación de contador) | media-alta |
| 16 | pintura-de-locales-comerciales | Pintura de locales comerciales: precio por m² y resane | pintura de locales / precio por m² | mant | mant-general 5 | media |
| 17 | mantenimiento-puertas-enrollables | Mantenimiento de puertas enrollables: cada cuánto y costo | mantenimiento de puertas enrollables | mant | mant-general 6 | media |
| 18 | instalacion-electrica-local-comercial | Instalación eléctrica de un local comercial: guía y normas | instalación eléctrica local comercial | retail | retail A1 | alta |
| 19 | remodelar-local-comercial | Remodelar un local comercial: costo, permisos y pasos | remodelación de locales comerciales (costo) | retail | retail A2 | alta |
| 20 | implementar-tienda-centro-comercial | Implementar una tienda en centro comercial: pasos y plazos | implementación de tienda en centro comercial | retail | retail A3 | alta |
| 21 | remodelacion-de-oficinas-costo | Remodelación de oficinas: costo por m² y qué incluye | costo remodelación de oficinas | retail | retail A4 | media-alta |
| 22 | licencia-funcionamiento-local-comercial | Licencia de funcionamiento e ITSE para un local comercial | licencia de funcionamiento local comercial | retail | retail A5 (el detalle de la ITSE enlaza al #1) | media |
| 23 | cableado-estructurado-oficinas-tiendas | Cableado estructurado en oficinas y tiendas: precio y normas | cableado estructurado (precio por punto) | retail | retail A6 | media |
| 24 | costo-expediente-tecnico-de-obra | ¿Cuánto cuesta un expediente técnico de obra en Perú? | costo expediente técnico | obras | obras 1 | alta |
| 25 | supervision-de-obra-privada | Supervisión de obra privada: funciones, costo y contrato | supervisión de obra privada | obras | obras 2 | alta |
| 26 | drywall-o-ladrillo-oficinas | Drywall o ladrillo para oficinas: precio por m² y usos | drywall o ladrillo | obras | obras 3 | alta |
| 27 | levantamiento-topografico-precio | Levantamiento topográfico: precio en Perú y entregables | levantamiento topográfico precio | obras | obras 4 | media-alta |
| 28 | costo-de-construccion-por-m2 | Costo de construcción por m² en Perú 2026: qué lo define | costo de construcción por m² | obras | obras 5 | media |
| 29 | techar-almacen-losa-aligerada-o-techo-liviano | Losa aligerada o techo liviano: cómo techar un almacén | techar almacén / losa aligerada | obras | obras 6 | media |
| 30 | impermeabilizar-techo-filtraciones | Filtraciones en techos de concreto: cómo impermeabilizar | impermeabilización de techos / filtraciones | obras | obras 7 | media |
| 31 | ampliacion-de-plazo-ley-32069 | Ampliación de plazo de obra con la Ley 32069: causales | ampliación de plazo de obra | obras | obras 8 (revisión de abogado) | media |
| 32 | valorizacion-de-obra-ley-32069 | Valorización de obra con la Ley 32069: cálculo y plazos | valorización de obra | obras | obras 9 | media-baja |
| 33 | ioarr-ficha-tecnica-estandar | IOARR y ficha técnica estándar: guía para municipalidades | ficha técnica estándar / IOARR | obras | obras 10 (caso de Palpa) | media-baja |

## Orden de publicación sugerido (2 por mes después del lanzamiento; los 6 primeros van en F5)
1, 4, 18, 12, 9, 24 → 2, 13, 19, 14, 8, 25 → 3, 5, 20, 26, 6, 21 → el resto.

## Lista de espera (depende del cliente o de una norma que todavía no tenemos)
- Termografía en tableros (¿NEXOS la hace?).
- Plan de seguridad para Defensa Civil (¿lo elabora?).
- ¿Cuántos extintores necesita tu local? (hay que conseguir la NTP 350.043-1).
- Rampa según la A.120 (hace falta un caso propio).
- Letrero luminoso: permiso municipal.
- Transformador de aislamiento y UPS.
- Estructuras metálicas y pintura anticorrosiva.
- Detectores de humo y alarma NFPA 72 como artículo propio (hoy es un H2 del #12).
