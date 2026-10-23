# Bitácora — Web NEXOS Ingenieros

## Sesión 1 · 2026-10-04

### Reglas de trabajo (acordadas con el usuario)
- Avanzar paso a paso. Nada pasa a la siguiente fase sin aprobación explícita.
- Hacer muchas maquetas antes del diseño final y no casarse con ninguna, aunque ya exista una maqueta o un boceto.
- No asumir nada: toda propuesta se presenta como pregunta u opciones.
- Entregables previstos: plan, spec, stack tecnológico, plan SEO y maquetas.
- Objetivo del cliente: **generar impacto**, ser conocido y posicionarse en la web (SEO).

### Material del cliente (`documentosDelCliente/`)
- **Brochure 2026 (53 págs.):**
  - Quiénes somos, misión, visión y valores.
  - Servicios técnicos en las págs. 3–7.
  - 45 fichas de proyectos en las págs. 8–52.
  - Contacto en la pág. 53.
- **Borrador de información:** estructura del Inicio.
  - Hitos: +50 establecimientos y +50 clientes.
  - 6 servicios principales. "Gestión, Ingeniería y Supervisión" tiene 9 subservicios.
  - Proyectos destacados (5 por servicio) y clientes (lista por definir).
  - Datos de contacto y eslogan.
- **Logo:** arco mitad verde y mitad azul marino, con edificios y una onda azul en la base.
- **Bocetos a mano** (`mano_alsada*.jpeg`):
  - Objetivos: atraer (SEO, base de datos), medir resultados, contacto por WhatsApp y correo, generar impacto.
  - Layout: hero con carrusel y 3 círculos montados sobre una línea, luego proyectos (filtrables por tipo, lugar, servicio y zona geográfica), clientes, CTA y footer.

### Datos de la empresa
- Eslogan: "Soluciones en construcción, ingeniería y mantenimiento integral."
- Teléfono / WhatsApp: +51 984 387 498 · Correo: operaciones@nexos-ing.com
- Sedes: San Martín de Porres (Lima) e Ica.
- Clientes en el brochure: La Tinka, MINISO, Tiendas MASS, BBVA, Interbank, Scotiabank, Tiendas ÉL, Grupo EFE, Inkafarma, Mifarma, Vivanda, OXXO, Clínica Centenario Peruano Japonesa, POMICA/Agrifresh, John Holden, Lukers, Adams, Expeditors.
  - Muchos trabajos se hicieron a través de intermediarios: GDS Infraestructura, Panorama BPO, TGestiona.
- Regiones con obras: Lima, Callao, Ica, Lambayeque (Chiclayo) y Ucayali (Pucallpa).

### DECISIÓN APROBADA: los 3 pilares
| Pilar | Servicios |
|---|---|
| **Mantenimiento integral** | Mantenimiento de instalaciones, levantamiento de observaciones ITSE/INDECI, eléctricas (tableros, pozo a tierra, luminarias, letreros), sistemas contra incendio y alarma, CCTV, redes, aire acondicionado y ventilación |
| **Construcción e implementación** | Obras civiles, remodelaciones, implementación de tiendas y oficinas, drywall, acabados, estructuras metálicas |
| **Ingeniería y gestión de proyectos** | Gestión y supervisión, expedientes técnicos, costos y presupuestos, control de obra, consultoría, Invierte.pe, contrataciones del Estado, topografía, diseño estructural e hidráulico, licencias, estudio de suelos |

### Decisiones de diseño del usuario
- Hero: eslogan + botón de WhatsApp + carrusel de **proyectos destacados**.
- ~~Persona (foto stock) en el hero~~ → **eliminada de todos los diseños**.
- Los 3 círculos son los 3 pilares, montados sobre una línea o división (idea central del boceto).
- Se diseña el Inicio completo, en escritorio y móvil, con varias variantes para comparar.
- Herramienta: **Claude Design**, en un lienzo de artboards.
- **Nada oscuro**: base clara con los colores de la marca.
- Para las variantes modernas, **todas las fotos van como placeholder** con la descripción de la imagen que debe ir.
- Recursos de "web moderna" pedidos: tipografía gigante, animaciones, bento grid y formas de marca.
- Skills en **prueba** (no adoptadas; podemos descartarlas o cambiarlas): **Impeccable** (Paul Bakaus) y **Emil Kowalski** (design engineering y animación).

### Paleta de marca (provisional, sacada del logo y el brochure)
- Azul marino `#0E1A4F` · Azul `#1D4FA0` · Verde `#3FA535` (decorativo) · Verde oscuro `#24782A` (botones con texto blanco, contraste AA).

### Maquetas — lienzo de Claude Design
URL: https://claude.ai/artifact/GSzgyDnueG2UgGVPJEVFQo (privado; para que lo vea el cliente hay que compartirlo desde **Share**).

| Variante | Estado | Notas |
|---|---|---|
| A · Corporativo | Vigente (base) | Fiel al boceto: degradado azul, círculos con foto sobre la línea. Montserrat + Nunito Sans. |
| B · Industrial | Vigente, el usuario la criticó | Hero oscuro con diagonal. Se corrigió el círculo ovalado y el choque con los botones. **Choca con la regla "nada oscuro".** |
| C · Claro editorial | **Descartada** | Hay copia en `maquetas-claude-design/descartada-VarianteC.dc.html`. |
| A1 · Monumental | Nueva, sin revisar | Tipografía gigante (Archivo + Figtree), hoja de plano, círculos partidos por una línea. |
| A2 · Bento | Nueva, sin revisar | Cuadrícula bento (Bricolage Grotesque + Hanken Grotesk); los círculos van dentro de una tarjeta con línea verde→azul. |
| A3 · Arco de marca | Nueva, sin revisar | El arco del logo enmarca el carrusel y la onda del logo es la línea de los círculos; skyline que se dibuja. |

Copia local de todos los archivos: `trabajo/maquetas-claude-design/project/` (`canvas.json` + `.dc.html`).
Brief que usaron los agentes para A1–A3: `trabajo/BRIEF-variantes-A.md`. Las rutas que menciona apuntan a la carpeta temporal de la sesión 1, que ya no existe.

### Aprendizajes técnicos
- **Claude Design (formato `.dc.html`):**
  - `{{hole}}` admite solo rutas con puntos, sin expresiones. Los estados activo/inactivo se resuelven con dos `<sc-if>`.
  - Las versiones móviles son artboards de 390 px que importan la de escritorio con `<dc-import name="…">`.
  - Antes de publicar `canvas.json`, hay que leer la versión publicada, porque el editor la modifica.
- **Círculos con foto:** dar **ancho y alto fijos** (no solo `aspect-ratio`) y `overflow:hidden`. Si no, una foto vertical los vuelve óvalos (pasó en la B).
- **Riesgos en A1–A3:** usan valores dinámicos dentro de `style` (transform, opacity, animation-delay). Hay que verificar que el carrusel y los escalonados animen; en el peor caso, el carrusel de la A2 se queda fijo.
- **Imágenes:** las fotos del brochure están en baja resolución (embebidas en el PDF). Se recortaron de páginas renderizadas: `trabajo/imagenes-extraidas-brochure/`. **Hay que pedir los originales al cliente.**
- **Skills de terceros:** se clonaron `github.com/pbakaus/impeccable` y `github.com/emilkowalski/skill` y se usaron solo como texto. Impeccable trae un ejecutable que se descarga solo, y **no se ejecutó**. Las skills no quedaron instaladas.

### Pendientes y preguntas abiertas
- [ ] Que el usuario revise A1, A2 y A3 y elija o combine.
- [ ] Decidir si se elimina la B (es oscura).
- [ ] Verificar en el navegador las animaciones de A1–A3 (el usuario lo tiene que pedir).
- [ ] Pedir al cliente: fotos originales en alta resolución, lista oficial de clientes y **permiso para mostrar sus marcas**, logos, horario de atención, redes sociales, confirmación del dominio (¿nexos-ing.com?) y proyectos del pilar Ingeniería.
- [ ] Datos que calculé yo y hay que validar con el cliente: "+45 proyectos" y "5 regiones".
- [ ] Evaluar si las skills de prueba (Impeccable / Emil) aportaron o si probamos otras.
- [ ] Siguientes fases (todas requieren aprobación): plan general, spec, stack tecnológico, plan SEO.

## Sesión 2 · 2026-10-06
- El usuario trajo una referencia de hero (post de bee_ui.ux): tarjeta con muesca superior, muescas laterales tipo ticket, nav integrado y una barra grande en forma de pastilla.
- Decisiones: la pastilla es el **selector de los 3 pilares**; **los 3 círculos se eliminan** en esta variante; la tarjeta usa el degradado de la A; es la página A completa con fotos del brochure.
- Resultado: **A4 · Ticket**, en el lienzo a la derecha de la A. Archivos: `project/VarianteA4.dc.html` y `project/MovilA4.dc.html`.
  - El logo va en la muesca superior. El nav va en pastillas dentro de la tarjeta y pasa a menú hamburguesa por debajo de 1180 px.
  - Las muescas laterales reflejan la idea de "nexo".
  - El selector de pilares cambia la descripción que aparece debajo. El carrusel conserva fotos reales y debajo lleva una pastilla con "+50 clientes satisfechos".
- Pendiente: revisión del usuario.
- A4, ajustes del usuario:
  - **Selector con 4 servicios:** Mantenimiento Integral · Implementación Retail · Gestión de Proyectos · Adecuación ITSE. Las descripciones las redacté yo y hay que validarlas. Esto cambia los 3 pilares aprobados: pendiente decidir si aplica a toda la web (filtro de proyectos, menú Servicios).
  - **Menú (editado por el usuario en el lienzo):** Inicio · Clientes · Proyectos | Nosotros · Blog · Contáctanos (WhatsApp). Ahora es simétrico: 3 pastillas de 132 px a cada lado. El enlace "Blog" apunta a una sección que todavía no existe.
- A4: el carrusel de proyectos pasó a ser **una sola imagen por servicio**, sincronizada con el selector.
  - Las flechas ‹ › recorren los servicios en ciclo.
  - Avance automático cada 5 s; el temporizador se reinicia al hacer clic.
  - Imagen limpia, sin texto ni puntos.
  - Fotos: Mantenimiento → técnico en la azotea · Retail → MINISO · Gestión → estación topográfica · ITSE → Inkafarma.
- A4: las flechas ‹ › salieron de la imagen y ahora son las muescas laterales (semicírculos blancos de 64 px con la flecha en la mitad visible).
- A4: la imagen del servicio ahora mide lo mismo que el bloque de texto de la izquierda (en móvil, mínimo 280 px). La pastilla "+50 clientes" flota sobre el borde inferior de la imagen.
- A4: se eliminó la pastilla "+50 clientes satisfechos" del hero.
- A4: el selector de servicios es más bajo: botones de 46 px (antes 54–72) y texto de 14–16 px.
- A4: el titular tiene **efecto de escritura** (opción 1): "Soluciones en ___" escribe y borra en ciclo construcción. / ingeniería. / mantenimiento integral., con cursor verde parpadeante. El subtítulo queda fijo.
- **SEO (aprobado por el usuario):** el H1 completo existe como texto real oculto visualmente ("Soluciones en construcción, ingeniería y mantenimiento integral."); la animación es solo visual (aria-hidden). Con "reducir movimiento" se muestra la frase completa, fija. Esto aplica también a la web final y entra en el plan SEO.

### Pendientes al cierre de la sesión 2 (2026-10-06)
- [ ] ¿Los 4 servicios del selector (Mantenimiento Integral, Implementación Retail, Gestión de Proyectos, Adecuación ITSE) reemplazan a los 3 pilares en toda la web (filtro de proyectos, etc.)? Sin respuesta.
- [ ] ¿Se crea una sección o página "Blog"? (el usuario la agregó al menú; también suma para el SEO). Sin respuesta.
- [ ] Revisar en móvil la A4: la posición de las muescas-flecha (podrían caer sobre el texto) y su zona tocable (32 px visibles).
- [ ] Ritmo del efecto de escritura: el usuario debe confirmarlo.
- [ ] Siguen pendientes de la sesión 1: elegir entre A1, A2, A3 y A4; decidir si se quita la B; pedir material al cliente.
- Archivos de trabajo: ahora se editan directamente en `trabajo/maquetas-claude-design/project/` (es el root de publicación del lienzo).

## Sesión 3 · 2026-10-12
### DECISIÓN APROBADA: 4 pilares (reemplazan a los anteriores en todo el proyecto)
1. Mantenimiento de locales comerciales e infraestructura — corto: "Mantenimiento de locales"
2. Implementación y remodelación de tiendas retail — corto: "Implementación retail"
3. Ejecución y supervisión de obras civiles e ingeniería — corto: "Obras e ingeniería"
4. Levantamiento de observaciones INDECI y Certificado ITSE — corto: "INDECI · ITSE"
(Los nombres cortos los propuse yo para pastillas y filtros; hay que validarlos).

### Palabras clave SEO a evaluar (dos por pilar)
- Pilar 1: "Empresa de mantenimiento integral para bancos y oficinas en Lima" · "Servicio de mantenimiento preventivo y correctivo para tiendas"
- Pilar 2: "Empresa de implementación de tiendas en centros comerciales" · "Remodelación de oficinas corporativas y locales llave en mano"
- Pilar 3: "Contratistas generales para obras civiles e industriales en Perú" · "Proyectos de ingeniería eléctrica, sanitaria y redes de agua"
- Pilar 4: "Empresa para levantamiento de observaciones INDECI en boticas y tiendas" · "Protocolos y medición de pozo a tierra para Defensa Civil"
Idea para el plan SEO: una página por pilar, optimizada para sus 2 frases, más páginas o secciones por sector.

### Recortes para el hero (`trabajo/imagenes-hero/`)
- 8 SVG con PNG embebido y fondo transparente. Se exportaron a WebP en `trabajo/imagenes-hero/recortes-webp/` y se subieron al lienzo.
- Técnicos (es la misma persona en las 4 fotos, así que conviene no mostrar varias juntas): 1 → mantenimiento · 2 → obras · 3 → retail · 4 → INDECI.
- Objetos: tablero → mantenimiento · mostrador → retail · aire acondicionado + estructura → obras · contra incendio → INDECI.

### A5 · Pilares (referencia de Antixor, adaptada a NEXOS)
- Decisiones del usuario: hero que **rota por pilar** (técnico + objeto); versión **clara con acentos** (bandas azul marino acotadas, footer claro); testimonios reemplazados por **Clientes**.
- Secciones:
  - Hero claro: H1 fijo (SEO), descripción del pilar que rota cada 5 s, pestañas 01–04 con barra de progreso, técnico sobre un disco de marca con arco verde y azul, objeto flotando y franja de 4 beneficios.
  - Servicios: los 4 pilares con sus frases SEO, más una foto inclinada con acentos verdes.
  - Banda "¿Por qué NEXOS?" con hitos y objetos recortados.
  - Proyectos en tarjetas con flechas.
  - Franja de CTA a WhatsApp.
  - Sectores (6 tarjetas: retail, bancos, boticas, oficinas, salud, industria).
  - Clientes y footer claro.
- Tipografía: Plus Jakarta Sans.
- A4 actualizada a los 4 pilares: selector, descripciones y filtro de proyectos (Todos · Mantenimiento · Retail · Obras · INDECI · ITSE).
- A5: se quitaron las etiquetas "Pilar 01–04" del hero. El usuario calificó la versión clara con **6/10 (poco impacto)**. La A5 se conserva.
- **A6 · Impacto** (nueva, a la derecha de la A5). Dirección del usuario: mixta, intercalando secciones claras y oscuras, y "cada experiencia, incluso el scroll, dinámica".
  - Orden de secciones: hero OSCURO → cinta de clientes clara en movimiento → servicios CLAROS → "¿Por qué NEXOS?" OSCURO → proyectos CLAROS → sectores OSCUROS → cotizador CLARO → CTA y footer OSCUROS.
  - Movimiento:
    - barra de progreso de lectura;
    - técnico que entra con desenfoque y un número gigante en contorno por pilar;
    - anillo girando;
    - texto gigante que se desplaza al hacer scroll;
    - objetos con parallax;
    - contadores que suben al entrar en pantalla;
    - revelados desde izquierda y derecha;
    - hover que eleva las tarjetas o hace brillar el borde.
  - En las tarjetas de servicio se usan objetos, no técnicos, para no repetir a la misma persona.
- **Cotizador** (solo en la A6), con la idea de gds.pe/#cotizar adaptada (sin copiar textos ni diseño; ojo: GDS fue intermediario de NEXOS y es competencia).
  - Paso 1, opcional: qué necesitas (4 pilares + otro), tipo de local, tamaño, ubicación y urgencia.
  - Paso 2: nombre*, empresa, teléfono o correo (al menos uno) y un mensaje.
  - Envío: abre WhatsApp con el resumen y muestra una confirmación.
  - Pendiente de confirmar con el cliente: plazo de respuesta, atención de emergencias en 24–48 h y política de privacidad.
- A5/A6: el técnico de retail (recorte horizontal, 900×778) salía más pequeño porque estaba limitado al ancho del contenedor. Ahora puede ocupar hasta el 135 % del ancho y queda a la misma altura que los demás. Para la web final: idealmente, recortes con proporción similar.
- A6: el recuadro del formulario del cotizador pasó a fondo oscuro (azul marino con brillos verde y azul de la marca); la sección alrededor sigue clara. Campos de vidrio oscuro, botones verdes y paso activo en verde.
- A6 (prueba): el navbar y el footer usan el logo blanco transparente (`trabajo/imagenes-hero/recortes-webp/logo-blanco.webp`, generado quitando el fondo azul marino a `logo-nexos02.jpeg`). Si no convence, se vuelve al logo anterior sobre recuadro blanco. Pendiente: pedir al cliente el logo original en SVG o PNG transparente (versiones para fondo oscuro y claro).

## Sesión 4 · 2026-10-21
- **A7 · Impacto + intro**: duplicado de la A6 (la A6 se conserva), con **pantalla de entrada para la primera visita**.
  - Fondo azul marino con brillos de marca.
  - Logo blanco que entra con desenfoque, rodeado por un anillo verde que se dibuja.
  - Eslogan oficial en 2 líneas ("…y **mantenimiento integral.**" en verde) y barra de carga.
  - A los ~2,7 s la pantalla sube y deja ver la página; hay botón "Saltar".
  - La primera visita se recuerda en `localStorage` (`nexos_intro_visto`).
  - En la maqueta, el tweak **introSiempre** (activado) la muestra en cada carga para poder revisarla; en la web real se desactivaría.
  - Con "reducir movimiento" se muestra 1,2 s y sin animaciones.
  - En el artboard móvil (8000 px de alto) va desactivada, porque se centraría a mitad de la página; en un teléfono real funciona bien.
- Nota SEO/rendimiento para el plan: la pantalla de entrada debe ser liviana y no bloquear el contenido para Google (el HTML ya está debajo). Conviene que dure poco o que solo salga en la primera visita, como está ahora.
- **Logos de clientes** (33 en la lista del usuario): se descargaron 32 en `trabajo/logos-clientes/`.
  - `originales/` tiene los archivos descargados; `web/` tiene los WebP normalizados (120 px de alto).
  - Las fuentes de cada logo están en `fuentes-parte1.csv` y `fuentes-parte2.csv`.
  - Faltan **Tiendas ÉL** (no se encontró logo oficial) e **Integratel** (no tiene logo propio publicado; en Perú opera como Movistar).
  - Revisar: Inkafarma (la versión puede ser antigua), Comunidad Andina (versión "Secretaría General"), Clorox (se usó el rombo de la marca; existe también el logo corporativo "The Clorox Company"), Panorama (su web dice "Panorama Outsourcing") y TGestiona (la prensa dice que saldría del Perú).
  - Instituto Arzobispo Loayza, John Holden y TGestiona solo estaban en blanco; se recolorearon en azul marino.
  - Los logos pequeños (Palpa, Adams, Dicar, Pomica) pueden verse algo borrosos.
  - **Antes de publicar la web se necesita el permiso del cliente para mostrar las marcas.**
- A7: la cinta de nombres pasó a ser un **carrusel de logos en 2 filas en sentidos opuestos**: gris, que se pone a color al pasar el cursor; la fila se pausa con el cursor encima y los bordes se desvanecen.
- **Cifras nuevas del cliente** (por aplicar): "[N?] establecimientos comerciales confían en nuestro mantenimiento integral", "297 mantenimientos realizados", "34 clientes satisfechos". Falta el número de la primera línea. Reemplazan "+50 clientes" y "+45 proyectos".
- **Cifras oficiales del cliente:** **+34 clientes satisfechos** y **+297 mantenimientos realizados**. Se dejaron de usar "+50 establecimientos", "+50 clientes" y "+45 proyectos".
- **Normas ISO de NEXOS:** 9001 Calidad · 14001 Ambiental · 37001 Antisoborno · 45001 Seguridad y salud.
  - OJO: la organización ISO prohíbe que las empresas certificadas usen su logo. Se usan insignias propias con el número y el nombre de la norma.
  - Pendiente: pedir los sellos del organismo certificador y confirmar la vigencia de cada certificado.
- A7, sección **Clientes** (antes del cotizador):
  - título y 2 contadores animados (+34 y +297);
  - carrusel de logos en 2 filas, que se movió aquí desde debajo del hero;
  - bloque "Gestión bajo normas internacionales" con 4 insignias ISO.
- A7, "¿Por qué NEXOS?": las cifras pasan a +34 clientes satisfechos · +297 mantenimientos realizados · 5 regiones.
- **Proyectos reales** (fuente: `/home/percytech/Projects/Dev/NEXOSINGENIEROS/FOTOS PAGINA`, 31 carpetas y ~370 fotos):
  - 4 agentes eligieron para cada obra una portada y 2–6 fotos de galería. Resultado: 30 proyectos y 148 fotos WebP en `trabajo/proyectos/<pilar>/<slug>/`, con `manifiesto.json` por pilar (datos, fotos de origen y notas).
  - Copia publicada en el lienzo: `project/fotos/` (enlazada por ruta relativa).
  - En la web se muestra solo el cliente final; el intermediario (GDS, TGestiona, Panorama) queda en los manifiestos.
  - **Fotos sospechosas de IA o retocadas:** cada caso está anotado en `notas` de los manifiestos.
    - Retail usa varias porque son las únicas en Mass Paraíso, Mass Llanos, Mass Libertad y Mass Ruiseñores.
    - En CANVIA y CT Cusco no se usaron.
    - Los PNG "NEXOS INGENIEROS (n)" parecen fotos reales reexportadas.
    - **Confirmar con el cliente.**
  - **Datos por confirmar:** Laboratorio Forense (cliente), UNALM, CANVIA, CT Chimbote y CT Cusco (alcance y dirección), Siemens (sede, deducida del sello de las fotos), Scotiabank (qué agencias), Adams Megaplaza.
  - Proyectos con pocas fotos: POMICA (4 obras) y Agrifresh.
- A7 › Proyectos: filtro por pilar con contadores (Todos 30 · Mantenimiento 8 · Retail 11 · Obras 8 · ITSE 3), tarjetas con portada, número de fotos y "Ver proyecto", y botón "Ver más proyectos" (de 6 en 6).
- **Ficha de proyecto** (página propia; el usuario la eligió por SEO): artboard `ProyectoFicha.dc.html` + móvil.
  - Cabecera oscura con ruta (Inicio / Proyectos / Pilar), H1 y datos.
  - Galería grande con flechas, contador y miniaturas.
  - "Sobre el proyecto", tarjeta de datos con CTA de cotizar y WhatsApp, y proyectos relacionados del mismo pilar.
  - En la maqueta, una barra amarilla permite elegir cuál de los 30 proyectos previsualizar.
  - Para la web real: una URL por proyecto (/proyectos/<slug>), con su title y meta description, y datos estructurados.
- A7, reorganización:
  - Las 2 tarjetas animadas (+34 clientes satisfechos, clara · +297 mantenimientos realizados, azul marino con número verde) pasan a "¿Por qué NEXOS?", donde reemplazan a las 3 tarjetas anteriores. Se quitó "5 regiones" de esa sección.
  - El bloque de normas ISO también va en "¿Por qué NEXOS?", adaptado al fondo oscuro.
  - "Clientes" queda con el título y el carrusel de logos.
- A7: "¿Por qué NEXOS?" se dividió en dos secciones:
  - **Oscura:** texto a la izquierda (título, misión y botón "Trabaja con nosotros") y las 2 cifras grandes a la derecha (+34, +297). Se quitó el objeto aire/estructura y queda solo el tablero, tenue.
  - **Clara nueva, "Certificaciones":** a la izquierda, el texto "Trabajamos bajo normas internacionales"; a la derecha, 4 tarjetas ISO grandes, cada una con sello, nombre de la norma y una línea de lo que garantiza.
  - Las descripciones de las normas son genéricas y conviene validarlas con el cliente.

## Sesión 5 · 2026-10-22
- `documentosDelCliente/fotos-proyectos/` (creada por el usuario) tiene ahora los **originales en alta resolución de las 148 fotos elegidas** (199 MB), ordenados como `<n-pilar>/<slug-proyecto>/portada|galeria-N.<ext>`, con los mismos nombres que en los manifiestos. Es la fuente para la web final. Las versiones optimizadas siguen en `trabajo/proyectos/` y en el lienzo.
- Nuevo material del usuario en `/home/percytech/Projects/Dev/NEXOSINGENIEROS/`: carpeta **"Mejores Fotos"** (45 fotos sueltas: incluye algunas de las sospechosas de IA y 2 con marca de agua), **"estructura pagina web.docx"** y **"CLIENTES Y LOCALES.xlsx"**. Pendiente: revisarlos.
- A7, **cotizador rediseñado** a partir de la referencia del usuario, con los colores de NEXOS.
  - Una sola tarjeta oscura (azul marino con retícula de puntos y brillos verde y azul).
  - **Izquierda:** título "¿Listo para que tu local **funcione sin pausas**?", 3 viñetas (dos con [POR CONFIRMAR]) y los canales de contacto flotando: Correo, **WhatsApp** (destacado en verde), Llamar y LinkedIn (enlace por definir).
  - **Derecha:** panel azul con 3 bloques en una sola vista.
    1. ¿Qué necesitas? (5 opciones con iniciales).
    2. Tus datos: nombre*, empresa, celular*, ubicación y urgencia.
    3. Vista previa del mensaje en vivo, con barra de avance (%).
  - Botón verde "Enviar por WhatsApp" y aviso de privacidad.
  - Respecto a la versión anterior se quitaron el tamaño, el tipo de local, el correo y el mensaje libre, y ya no hay pasos.
- A7: se quitó el desvanecimiento ligado al scroll (a6-zoom) de la tarjeta del cotizador; hacía que se viera lavada o borrosa mientras no se terminaba de llegar a ella. Otras secciones conservan revelados de ese tipo.
- A7 cotizador: se quitó "Aún no estoy seguro" (quedan las 4 opciones). "Tus datos" queda en **Razón social*, RUC (opcional, 11 dígitos) y Correo electrónico***; se quitaron nombre, celular, ubicación y urgencia. La vista previa y la barra de avance se calculan con esos campos.
- A7, orden actual de las secciones: Hero (oscuro) → Servicios (claro) → ¿Por qué NEXOS? (oscuro) → **Proyectos ejecutados** (blanco) → **Certificaciones** (gris claro) → Sectores (oscuro) → Clientes (claro) → Cotizador → CTA y footer (oscuro).
- A7, **Proyectos ejecutados rediseñado como "Mapa de obras"** (elegido por el usuario entre 3 propuestas).
  - **Fondo:** plano técnico (retícula azul tenue) con el texto en contorno "OBRAS · PERÚ", que se desplaza al bajar.
  - **Mapa:** tarjeta azul marino con el contorno real del Perú (Natural Earth, dominio público, proyectado con coordenadas reales). Puntos que laten en Lima y Callao, Ica, Chiclayo, Chimbote, Pucallpa y Cusco, con la cantidad de obras. Al tocar un punto se filtra la lista; "Ver todo el Perú" quita el filtro.
  - **Lista:** filas con miniatura, pilar, título, cliente, lugar y número de fotos. Al pasar el cursor por una fila se ilumina su ciudad en el mapa, y cada fila lleva a la ficha.
  - Los filtros por pilar se combinan con la ciudad.
  - El Laboratorio Forense (ubicación por confirmar) no aparece en el mapa y se indica en una nota.
  - Asignación de ciudades: Lima por defecto. Ica agrupa Pisco, Chincha y Santiago (POMICA, Agrifresh). Tinka Carmen de la Legua cuenta en "Lima y Callao".
- A7: se agregaron dos secciones oscuras para el SEO y la alternancia claro/oscuro.
  - **Cómo trabajamos** (después de Proyectos): 4 pasos (visita técnica, propuesta, ejecución segura, entrega y seguimiento) unidos por una línea verde→azul que se dibuja al bajar, números en contorno y CTA "Agenda tu visita técnica" con la nota [confirmar si es sin costo].
  - **Preguntas frecuentes** (antes del cotizador): acordeón con 9 preguntas (2–3 por pilar), filtro por pilar y bloque "¿No encuentras tu respuesta?".
    - Respuestas en BORRADOR: validar con el cliente, en especial la vigencia del ITSE, la normativa y la frecuencia de medición del pozo a tierra.
    - En la web real llevará datos estructurados FAQPage.
- Orden final de la A7: Hero D · Servicios C · ¿Por qué? D · Proyectos (mapa) C · Cómo trabajamos D · Certificaciones C · Sectores D · Clientes C · FAQ D · Cotizador C · Footer D. Los artboards de la A7 se alargaron (9400 px en escritorio y 16000 px en móvil).
- A7, Cómo trabajamos: se quitó la línea que unía los pasos (pedido del usuario).
- A7, lista del mapa de obras: barra de desplazamiento con el estilo de la marca (8 px, pista azul claro, barra azul que se pone verde al pasar el cursor, sin flechas) y degradado al final de la lista que indica que hay más. En Firefox se ve fina, con los mismos colores.
- **SEO de títulos (A7 y ficha)**:
  - `<title>`: "Mantenimiento de locales comerciales, obras y certificado ITSE en Lima | NEXOS Ingenieros", más una meta description.
  - **H1:** "NEXOS Ingenieros · Lima, Ica y provincias — Soluciones en construcción, ingeniería y mantenimiento integral" (la marca va como etiqueta dentro del H1).
  - **H2:** cada uno lleva su frase de búsqueda como etiqueta verde pequeña DENTRO del H2, más el gancho grande. Por ejemplo: "Servicios de mantenimiento, implementación de tiendas, obras civiles y certificado ITSE", "Empresa certificada ISO 9001, ISO 14001, ISO 37001 e ISO 45001", "Preguntas frecuentes sobre mantenimiento, INDECI y certificado ITSE", "Cotiza tu mantenimiento, obra o certificado ITSE".
  - **H3:** nombres completos de los pilares, pasos descriptivos, sectores y preguntas de la FAQ (sin el "+/−" como texto).
  - Las columnas del footer y el CTA final dejaron de ser títulos.
  - La marca aparece en el title, el H1 y 2 H2 (¿Por qué NEXOS? y Clientes); no en todos, para evitar el relleno de palabras clave.
  - Ficha: title "Proyecto: <obra> | <pilar> | NEXOS Ingenieros" (dinámico en la web real) y H2 "<trabajo> para <cliente>".
  - Pendiente para el plan SEO: validar las frases con datos reales de búsqueda (Google Keyword Planner y Search Console).
- Se revisó **"estructura pagina web.docx"** del cliente (está en la raíz de `paginaWeb/`): texto de quiénes somos, descripción detallada de cada pilar con sub-servicios, lista oficial de proyectos y su descripción, y +34 / +297 (falta el número de "+00 establecimientos").
  - Sus nombres de pilares difieren; el usuario decidió **mantener los aprobados**.
  - Aportes: Laboratorio Forense = Lab. Forense Digital DIREJCRI-PNP Jesús María (Consorcio Ejecutor Forense Digital); CANVIA = mitigación contra inundaciones internas; UNALM = remodelación de SS.HH. de laboratorio de enseñanza; ITSE = levantamiento de observaciones; retail = implementación de instalaciones eléctricas y comunicaciones.
  - Nuevo: proyecto Municipalidad de Palpa (sin fotos).
  - Conflicto: Adams Plaza Norte (doc) vs. Megaplaza (carpeta).
- **Fin de la fase de maquetas → inicio de planificación.** El usuario pidió blog (lo mantenemos nosotros; cada artículo con foco SEO y CTA), stack **Astro** y documentación en archivos del proyecto.
- Documentos creados (BORRADOR para aprobación): `docs/PLAN.md`, `docs/SPEC.md`, `docs/STACK.md`, `docs/SEO.md` y `docs/PENDIENTES-CLIENTE.md`.
- Decisiones abiertas en STACK: estilos (Tailwind 4 recomendado vs. CSS propio), medición (GA4 vs. Plausible/Umami) y hosting (Cloudflare Pages recomendado). El proyecto aún no es un repositorio git.
- **Stack DEFINIDO:** Astro 7 estático + islas **Svelte 5** (hero, mapa, cotizador, galería) + **GSAP/ScrollTrigger** + **Tailwind 4** + MDX + Pagefind + **GA4 con Partytown** (con aviso de cookies). Hosting **Yachay, hosting compartido cPanel**, con despliegue por GitHub Actions → SFTP/FTPS. Detalle en `docs/STACK.md`.
- **Plan aprobado. F1 · Base técnica TERMINADA** (2026-10-22, pendiente de revisión del usuario):
  - Repositorio git en `paginaWeb/` (rama `main`, sin commits todavía). `.gitignore` excluye `documentosDelCliente/` y los binarios de `trabajo/`. El "estructura pagina web.docx" se movió a `documentosDelCliente/`.
  - Proyecto Astro 7.4 en `web/`: Svelte 5, MDX, sitemap, Partytown, Tailwind 4 (tokens de marca en `src/styles/global.css`), GSAP (`src/scripts/reveal.ts`), Fontsource y Pagefind.
  - `src/config/site.ts`: datos de la empresa y los 4 pilares (los TODO son pendientes del cliente). `src/lib/schema.ts`: JSON-LD. `Seo.astro` y `BaseLayout.astro`.
  - Colecciones con esquema Zod: `proyectos` (30, con las descripciones oficiales del documento del cliente), `clientes` (32 logos), `faq` (9), `servicios` y `blog` (vacías).
  - 191 imágenes en `src/assets/`.
  - `public/`: robots.txt, `.htaccess` (HTTPS, sin www, barra final, caché, cabeceras), og/default.jpg y favicons a partir del logo.
  - `.github/workflows/deploy-yachay.yml`: build y luego lftp por SFTP/FTPS (main → producción, develop → vista previa). Solo despliega si existen los secrets.
  - Build: 0 errores; preview local OK (200, 404 propia y sitemap).
- Hosting definido: **Yachay plan "Hosti 200"**: S/ 190 al año, 50 sitios, 100 correos, 200 GB, 2 GB de RAM y SSL gratis. Documentado en `docs/STACK.md` §6. Por confirmar: SFTP/FTPS, `.htaccess`, inodos y el correo actual.
- **Repositorio en GitHub (privado):** https://github.com/PercyTechX/nexos-ingenieros-web. Ramas `main` y `develop`. Primer commit `b4eb789` (F1).
  - Autor del repo local: "Jesús Percy Nazario Portilla" (configurado solo en este repo; el user.name global estaba vacío).
  - El workflow "Deploy Yachay" compila en GitHub (`astro check` + build + Pagefind) y omite la subida hasta que existan los secrets (YACHAY_HOST, YACHAY_USER, YACHAY_PASSWORD, YACHAY_PROTOCOL, YACHAY_REMOTE_DIR, YACHAY_REMOTE_DIR_PREVIEW).
