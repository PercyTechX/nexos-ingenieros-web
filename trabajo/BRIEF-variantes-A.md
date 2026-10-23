# Brief: variantes modernas de la "Variante A" — Inicio de NEXOS Ingenieros

## Cliente
NEXOS Ingenieros: empresa peruana de construcción, ingeniería y mantenimiento integral (Lima e Ica).
Objetivo del cliente: **GENERAR IMPACTO**, ser conocido y posicionarse en la web. Se presenta como maqueta a un cliente.
Idioma de la web: español (Perú). `<html lang="es">`.

## Restricciones del usuario (OBLIGATORIAS)
- **NO oscuro.** Base clara (blanco / gris muy claro). El azul marino se usa solo como acento o para texto, nunca como fondo dominante de la página. Una franja o tarjeta acotada en color está bien; un hero oscuro NO.
- **Identidad de marca NEXOS:** colores del logo — azul marino `#0E1A4F`, azul `#1D4FA0`, verde `#3FA535` (decorativo) y verde oscuro `#24782A` (botones con texto blanco, contraste AA). El logo no se modifica.
- **Sin fotos.** Toda foto se reemplaza por un placeholder elegante (fondo suave de la marca + ícono de cámara en SVG de trazo + texto) que **describe qué foto debe ir ahí**: tema, encuadre, luz y estilo. Ejemplo: `[FOTO: técnico NEXOS con casco y chaleco revisando un tablero eléctrico — plano medio, luz natural, fondo de azotea]`. El placeholder debe verse intencional y premium, no como un error.
- El logo SÍ se usa (no es una foto): `<img src="/_blob/69a5340afabe913b48a41aaafb90111d" alt="NEXOS Ingenieros">` (PNG 411×264 con fondo claro casi blanco; queda bien sobre blanco).
- Recursos de "web moderna" pedidos por el usuario: **tipografía gigante, animaciones, bento grid, formas de marca** (el arco y los edificios del logo como formas gráficas grandes, degradados claros verde/azul). Cada variante los combina pero con un énfasis distinto (ver tu dirección).

## Estructura (se mantiene de la Variante A / boceto del cliente)
1. Barra de navegación: logo · Inicio, Nosotros, Servicios, Proyectos, Clientes, Contacto · botón "Cotiza por WhatsApp" (https://wa.me/51984387498). En móvil, botón hamburguesa (sin menú funcional hace falta).
2. **Hero**: eslogan "Soluciones en construcción, ingeniería y mantenimiento integral." + subtítulo + botón WhatsApp + "Ver proyectos"; a la derecha (o integrado) un **carrusel de proyectos destacados** (con flechas, puntos, auto-avance 5 s; las imágenes son placeholders descritos).
3. **Los 3 pilares en círculos montados sobre una línea/división** (pieza clave del boceto del cliente — mantén la idea de 3 círculos que cruzan una división, reinterprétala con estilo):
   - Mantenimiento integral — Instalaciones eléctricas, levantamiento de observaciones ITSE/INDECI, sistemas contra incendio y alarma, CCTV, redes, climatización.
   - Construcción e implementación — Obras civiles, remodelaciones, implementación de tiendas y oficinas, drywall, acabados, estructuras metálicas.
   - Ingeniería y gestión de proyectos — Supervisión, expedientes técnicos, costos y presupuestos, control de obra, consultoría, topografía, Invierte.pe, contrataciones del Estado.
4. **Quiénes somos + hitos**: "Somos una empresa peruana de construcción, ingeniería y mantenimiento integral, conformada por un equipo multidisciplinario con amplia experiencia, comprometidos con soluciones efectivas e integrales, mejora continua y altos estándares de seguridad. Nuestra estrategia: excelente gestión y respuesta inmediata." Hitos: **+50** establecimientos comerciales con nuestro mantenimiento integral · **+50** clientes satisfechos · **+45** proyectos ejecutados · **5** regiones (Lima, Callao, Ica, Lambayeque, Ucayali).
5. **Proyectos** con filtro por pilar (Todos / Mantenimiento / Construcción / Ingeniería) — funcional con estado.
   Datos reales:
   - Tienda MINISO La Rambla — Implementación de tienda — San Borja, Lima — Construcción
   - Tienda MASS Calle 4 — Implementación de tienda — Pisco, Ica — Construcción
   - Tienda La Tinka Leoncio Prado — Implementación de tienda — Chiclayo, Lambayeque — Construcción
   - Botica Inkafarma Cañete — Levantamiento de observaciones INDECI — Cañete, Lima — Mantenimiento
   - Agencias Scotiabank (6 sedes) — Mantenimiento de tableros eléctricos y letreros luminosos — Lima — Mantenimiento
   - Oficinas administrativas POMICA — Obra civil, 90 m² — Santiago, Ica — Construcción
   - Tienda ÉL Chincha — Remodelación de tienda — Chincha, Ica — Construcción
   - [Proyecto de ingeniería por definir] — Ingeniería
6. **Clientes**: La Tinka, MINISO, Tiendas MASS, BBVA, Interbank, Scotiabank, Grupo EFE, Inkafarma, Mifarma, Vivanda, OXXO, POMICA (como nombres/placeholder de logo; nota "[Logos oficiales pendientes]").
7. **CTA** a WhatsApp (+51 984 387 498) y correo (operaciones@nexos-ing.com).
8. **Footer**: logo, eslogan, contacto, sedes (San Martín de Porres, Lima – Perú · Ica, Ica – Perú), horario [POR DEFINIR], redes [POR DEFINIR], © 2026 NEXOS Ingenieros.

No inventes datos, cifras ni testimonios. Lo que falte va como [PLACEHOLDER].

## Skills a aplicar (léelas antes de diseñar; son solo texto)
Ruta base: `/tmp/claude-1000/-home-percytech-Projects-Dev-NEXOSINGENIEROS-paginaWeb/3682b9c1-bf0c-417a-9243-8b95642b6343/scratchpad/skills/`
- Impeccable: `impeccable/.claude/skills/impeccable/SKILL.md`, y de `reference/`: `craft-floor.md`, `mode-persuade.md`, `new-work.md`, `bolder.md`, `typeset.md`, `layout.md`, `animate.md`.
- Emil Kowalski: `emil/skills/emil-design-eng/SKILL.md` y `emil/skills/animate/SKILL.md`.
**NO ejecutes** `scripts/impeccable` ni ningún script/binario de esas carpetas, no instales nada, no uses la red. Solo lee los .md y aplica sus principios. Si una regla de las skills choca con este brief o con el formato .dc.html, gana el brief y luego el formato.

## Formato de salida: un archivo `.dc.html` (Design Component)
Escribe UN archivo en la ruta que te indiquen. Reglas que fallan en silencio si no se cumplen:
- Esqueleto exacto:
```html
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>…</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link href="https://fonts.googleapis.com/css2?family=…&amp;display=swap" rel="stylesheet">
<style>
body{margin:0;background:#ffffff}
a{color:#1D4FA0}a:hover{color:#0E1A4F}
/* clases para responsive (@media), @keyframes, animaciones de scroll, prefers-reduced-motion */
</style>
</helmet>
<div style="… raíz fluida, width:100%, overflow-x:hidden …">
  … todo el contenido …
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":1440,"height":3800}}'>
class Component extends DCLogic {
  renderVals() { return { … }; }
}
</script>
</body>
</html>
```
- Mantén la línea `<script src="./support.js"></script>` EXACTA. Cierra todo elemento no vacío y entrecomilla todo atributo.
- Es una PÁGINA fluida: sin ancho fijo en px en la raíz; contenedores con `max-width` + `margin: 0 auto`; debe funcionar a 390 px de ancho (menú colapsa, todo se apila, sin scroll horizontal). Usa `clamp()`, flex-wrap, `grid-template-columns: repeat(auto-fit, minmax(…, 1fr))`, y clases con `@media` en `<helmet><style>` donde haga falta.
- Estilos de los elementos: preferentemente `style="…"` inline (es lo que edita el panel). `<helmet><style>` para base, responsive, keyframes, hover/focus, animaciones.
- `{{hole}}` es SOLO búsqueda con puntos en lo que devuelve `renderVals()` (`{{slide.title}}`), nunca expresiones (`{{a+b}}`, `{{!x}}` fallan).
- Eventos: `onClick="{{fn}}"` con funciones devueltas por `renderVals()`. Bucles: `<sc-for list="{{items}}" as="it" hint-placeholder-count="6">…{{it.x}}…</sc-for>`. Condicionales: `<sc-if value="{{cond}}" hint-placeholder-val="{{true}}">…</sc-if>` (no hay else: usa dos flags, p.ej. `active` e `idle`). No uses `style="{{…}}"` con objetos; para estados (punto activo, chip activo) usa dos `<sc-if>`. Un hole dentro de un valor de estilo para un color de tweak está bien (`color: {{accent}}`).
- Lógica: JS clásico, `class Component extends DCLogic`, sin imports. Puedes declarar `var` de datos arriba de la clase. Tienes `this.props`, `this.state`/`setState`, `constructor`, `componentDidMount`/`componentWillUnmount`. Ejemplo de carrusel y filtro funcionando: ver `/tmp/claude-1000/-home-percytech-Projects-Dev-NEXOSINGENIEROS-paginaWeb/3682b9c1-bf0c-417a-9243-8b95642b6343/scratchpad/canvas/project/Main.dc.html` (la Variante A actual: tu base de contenido y estructura; NO copies su estética, supérala).
- Toda la UI va en el markup de `<x-dc>`; nunca construyas DOM por script (`innerHTML`, `appendChild`). Para revelar al hacer scroll usa CSS (`animation-timeline: view()` con fallback visible por defecto) o una clase activada por estado; contadores animados con `setState` en `componentDidMount` (requestAnimationFrame) — y respeta `prefers-reduced-motion`.
- `data-props` (comillas simples): pocos tweaks útiles (p.ej. un color de acento o un interruptor de animaciones). No hagas tweaks de textos.
- Red: solo un `<link>` de Google Fonts `css2` en `<helmet>` y el logo `/_blob/…`. Sin otras imágenes, sin `<iframe>`, sin emoji, íconos como SVG de trazo inline. No uses Inter, Roboto ni Arial.
- Accesibilidad: `<button>`/`<a href>` reales, `aria-label` en botones de solo ícono, objetivos táctiles ≥44 px, contraste de texto 4.5:1 (3:1 a ≥24 px). Texto blanco solo sobre `#24782A`, `#1D4FA0` o `#0E1A4F`.
- NO publiques nada ni abras navegadores; NO verifiques renderizando. Solo escribe el archivo y termina.

## Entregable del agente
Al terminar, responde en ≤12 líneas: nombre de la dirección, tipografías elegidas, cómo resolviste los 3 círculos sobre la línea, qué animaciones incluiste, altura aproximada de la página a 1440 px y a 390 px de ancho (para dimensionar el lienzo), y cualquier riesgo de formato que veas.
