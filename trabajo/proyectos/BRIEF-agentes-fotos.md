# Brief: seleccionar fotos de proyectos para la web de NEXOS Ingenieros

Fuente (SOLO LECTURA, no modificar ni mover nada ahí): `/home/percytech/Projects/Dev/NEXOSINGENIEROS/FOTOS PAGINA/<pilar>/<proyecto>/`
Destino: `/home/percytech/Projects/Dev/NEXOSINGENIEROS/paginaWeb/trabajo/proyectos/<slug-pilar>/<slug-proyecto>/`
Datos de referencia (descripciones, clientes, ubicaciones de muchos proyectos): `/home/percytech/Projects/Dev/NEXOSINGENIEROS/paginaWeb/trabajo/proyectos/brochure-texto.txt`
(Ojo: en ese texto la palabra "LA TINKA LEONCIO PRADO CHICLAYO" aparece repetida por un error de extracción en casi todas las fichas; ignórala salvo en el proyecto de La Tinka.)

## Por cada proyecto de tu pilar
1. Mira TODAS sus fotos. Para no saturarte, primero haz una hoja de miniaturas numeradas por proyecto con ImageMagick (p. ej. `montage` con `-label '%f'`, miniaturas de ~240 px) en el scratchpad `/tmp/claude-1000/-home-percytech-Projects-Dev-NEXOSINGENIEROS-paginaWeb/3682b9c1-bf0c-417a-9243-8b95642b6343/scratchpad/fotos-<slug-pilar>/` y léela con Read; abre en grande solo las candidatas.
2. Elige:
   - **1 portada** (`portada.webp`): la foto que mejor muestra el trabajo terminado o el espacio, nítida, bien encuadrada, con luz decente, sin personas en primer plano con la cara mal, sin capturas de pantalla ni textos superpuestos. Si hay una foto horizontal buena, mejor.
   - **3 a 6 fotos de galería** (`galeria-1.webp` … `galeria-N.webp`) que cuenten el proyecto: proceso/antes, detalles técnicos (tableros, bandejas, luminarias…), resultado. Sin duplicados casi idénticos. Excluye borrosas, oscuras, torcidas sin remedio o irrelevantes.
   - Si un proyecto tiene menos de 4 fotos aprovechables, usa las que haya.
3. Exporta con ImageMagick: corrige orientación (`-auto-orient`), quita metadatos (`-strip`), portada redimensionada a máx. 1200 px de lado mayor y galería a máx. 1600 px, WebP calidad 82. No recortes salvo para quitar bordes negros o marcas evidentes.
4. **Señala (no descartes en silencio) fotos que parezcan generadas o retocadas con IA** (p. ej. archivos llamados "NEXOS INGENIEROS (1).png", "Pintando estructuras rojas brillantes.png", "Mantenimiento de panel eléctrico industrial.png"): si las usas, dilo en `notas`. Prefiere fotos reales de obra.
5. Datos del proyecto: título corto (p. ej. "Agencia Scotiabank Jesús María"), cliente, tipo de trabajo, ubicación y una descripción de 1–2 frases. Tómalos del brochure cuando existan; si no hay dato, deja `"[POR CONFIRMAR]"`. NO inventes ubicaciones ni alcances; puedes describir lo que se VE en las fotos de forma prudente ("se observan trabajos de…").

## Salida
Escribe `manifiesto.json` en `/home/percytech/Projects/Dev/NEXOSINGENIEROS/paginaWeb/trabajo/proyectos/<slug-pilar>/manifiesto.json`:
```json
{ "pilar": "<nombre de la carpeta>", "proyectos": [
  { "slug": "...", "carpeta_origen": "...", "titulo": "...", "cliente": "...", "tipo": "...", "ubicacion": "...",
    "descripcion": "...", "portada": "portada.webp", "galeria": ["galeria-1.webp", "..."],
    "fotos_origen": {"portada.webp": "nombre original", "galeria-1.webp": "nombre original"},
    "notas": "..." } ] }
```
Reglas: no ejecutes nada de la carpeta de fotos; no borres ni modifiques originales; no uses la red. Al terminar responde en ≤12 líneas: proyectos procesados, cuáles quedaron flojos de fotos, fotos sospechosas de IA y datos que faltan.
