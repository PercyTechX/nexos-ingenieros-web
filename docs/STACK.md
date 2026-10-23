# Stack tecnológico — Web NEXOS Ingenieros

> Estado: **DEFINIDO** · 2026-10-22 · Versiones consultadas en npm el 2026-10-22 (se fijan en `package.json` al iniciar la F1).

## 1. Resumen
**Astro (sitio estático) + islas en Svelte 5 + GSAP + Tailwind CSS 4**, desplegado en **hosting compartido de Yachay (cPanel)** con despliegue automático desde GitHub.

## 2. Núcleo
| Pieza | Elección | Versión | Uso |
|---|---|---|---|
| Framework | **Astro**, salida estática (`output: 'static'`) | 7.4.x | Todas las páginas se generan como HTML en el build: rápido y óptimo para SEO |
| Lenguaje | **TypeScript** | — | Componentes, scripts y esquemas de contenido |
| Islas interactivas | **Svelte 5** (`@astrojs/svelte`) | 5.57.x / 9.1.x | Cotizador, mapa de obras, galería de la ficha, hero rotativo, filtros de proyectos y FAQ. Se hidratan solo cuando hace falta (`client:visible` / `client:idle`) |
| Animaciones | **GSAP + ScrollTrigger** | 3.15.x | Revelados al scroll, parallax, contadores, texto que se desplaza e intro. Consistente en todos los navegadores; respeta `prefers-reduced-motion` |
| Estilos | **Tailwind CSS 4** (`@tailwindcss/vite`) | 4.3.x | Tokens de marca en `@theme`: colores, tipografía, radios y sombras |
| Contenido | **Content Collections** + **Zod** | 4.6.x | `blog` (MDX), `proyectos` (JSON), `servicios` (MD), `faq` (JSON), `clientes` (JSON), validados con esquemas |
| Blog | **MDX** (`@astrojs/mdx`) | 8.1.x | Artículos con componentes (`<Cta>`, `<ProyectoCard>`, `<Nota>`) |
| Búsqueda del blog | **Pagefind** | 1.5.x | Índice estático generado en el build; funciona sin servidor |
| Imágenes | `astro:assets` + **sharp** | 0.35.x | WebP/AVIF, `srcset` y carga diferida |
| Fuente | **Fontsource** — Plus Jakarta Sans Variable | 5.3.x | Servida desde el propio dominio |
| Sitemap | `@astrojs/sitemap` | 3.7.x | `sitemap-index.xml` |
| Scripts de terceros | **Partytown** (`@astrojs/partytown`) | 2.1.x | GA4 fuera del hilo principal |
| Chequeo | `@astrojs/check` + Prettier (con el plugin de Astro y el de Svelte) | 0.9.x | Tipos y formato |

## 3. Qué es isla y qué no
| Componente | Tecnología | Hidratación |
|---|---|---|
| Header, footer, secciones estáticas y tarjetas | Astro (HTML) | Ninguna (0 JS) |
| Animaciones de scroll | GSAP en un `<script>` de Astro | Al cargar, de forma diferida |
| Intro de primera visita | Astro + script mínimo (`localStorage`) | Inmediata, sin bloquear el HTML |
| Hero rotativo (pilares, técnico, objeto) | Svelte | `client:load` (está arriba de todo) |
| Mapa de obras + lista + filtros | Svelte | `client:visible` |
| Cotizador (vista previa, validación y WhatsApp) | Svelte | `client:visible` |
| Galería de la ficha de proyecto | Svelte | `client:visible` |
| FAQ | `<details>` nativo + estilos | Ninguna (funciona sin JS) |
| Carrusel de logos | CSS | Ninguna |
| Búsqueda del blog | Pagefind UI | `client:idle` (solo en /blog) |

## 4. SEO técnico
- **Componente `<Seo>` propio:** title, description, canonical, Open Graph y Twitter Card.
- **JSON-LD:** `Organization` + `LocalBusiness` (sedes Lima e Ica), `Service` (4 pilares), `FAQPage`, `Article`, `BreadcrumbList` y `CreativeWork` (proyectos).
- `robots.txt`, sitemap e **imágenes OG por página** generadas en el build.
- URLs en minúsculas, con guiones y barra final; redirecciones en `.htaccess`.

## 5. Medición
- **Google Analytics 4** cargado con Partytown y con **aviso de cookies** (consentimiento antes de activar GA4).
- **Eventos:** `cotizacion_enviada` (con el pilar), `whatsapp_click`, `telefono_click` y `correo_click`.
- **Google Search Console** (verificación por DNS o por archivo HTML).
- **Perfil de Empresa en Google** para Lima e Ica.

## 6. Hosting y despliegue — Yachay (hosting compartido cPanel)

**Plan elegido: Yachay "Hosti 200"** (dato del 2026-10-22, según la web de Yachay)
| Característica | Valor | Comentario para esta web |
|---|---|---|
| Precio | **S/ 190.00 al año** | — |
| Sitios web | 50 | Sobra: usamos 1 (más un subdominio de vista previa) |
| Cuentas de correo | 100 | Útil si el correo `@nexos-ing.com` se aloja aquí (confirmar dónde está hoy) |
| Espacio | 200 GB | La web compilada pesa decenas de MB |
| RAM | 2 GB | Suficiente: la web es estática y no ejecuta código en el servidor |
| SSL | Gratuito | HTTPS obligatorio (lo fuerza el `.htaccess`) |

**Por confirmar con Yachay antes del primer despliegue:** acceso **SFTP o FTPS** (para el despliegue automático), servidor **Apache/LiteSpeed** con `.htaccess`, límite de **inodos/archivos**, compresión Brotli/gzip y creación del subdominio `preview.`.
- **Qué se publica:** la carpeta `dist/` (HTML, CSS, JS e imágenes) en `public_html/`. No se necesita Node en el servidor.
- **Despliegue automático:** **GitHub Actions** → `npm ci && npm run build` → subida por **SFTP/FTPS** (si cPanel lo permite, con `lftp mirror --delete` o la acción `FTP-Deploy`). Las credenciales van en los *secrets* del repositorio.
- **`.htaccess` en `public/`:** HTTPS forzado, redirección www/no-www, compresión gzip/br, caché larga para `/_astro/*` (archivos con hash), página 404 propia y redirecciones de URLs.
- **SSL:** AutoSSL / Let's Encrypt desde cPanel.
- **Vista previa:** para revisar antes de publicar, un subdominio (por ejemplo `preview.nexos-ing.com`) o una carpeta protegida con contraseña en el mismo hosting, desplegada desde la rama `develop`.
- **Por confirmar con Yachay:** acceso SFTP/FTPS, PHP no requerido, límite de inodos (la web tendrá ~1 000–2 000 archivos por las imágenes optimizadas), soporte de `.htaccess` (Apache/LiteSpeed) y Brotli.

## 7. Repositorio y flujo de trabajo
- **git** + GitHub (privado). Ramas: `main` → producción, `develop` → vista previa, y ramas por fase o funcionalidad.
- **Paquetes:** npm 11. Node 26 en local; en CI se fija una versión LTS de Node compatible con Astro 7.
- **CI** en cada push: `astro check`, build y Lighthouse CI (opcional) sobre la vista previa.

## 8. Estructura de carpetas
```
paginaWeb/
├── docs/                    # Plan, spec, stack, SEO y pendientes
├── documentosDelCliente/    # Material original del cliente (no se publica)
├── trabajo/                 # Maquetas, recortes, manifiestos y bitácora
└── web/                     # Proyecto Astro
    ├── src/
    │   ├── content/         # blog/ (mdx) · proyectos/ (json) · servicios/ (md) · faq/ (json) · clientes/ (json)
    │   ├── components/      # Astro: Header, Footer, Seo, Section…  ·  islands/ (Svelte): Hero, MapaObras, Cotizador, Galeria
    │   ├── layouts/         # Base, Servicio, Proyecto, Articulo
    │   ├── pages/           # rutas (index, servicios/[slug], proyectos/[slug], blog/…)
    │   ├── scripts/         # animaciones GSAP, intro y consentimiento de cookies
    │   ├── styles/          # global.css con @theme (tokens Tailwind)
    │   └── assets/          # fotos, recortes y logos (optimizados por Astro)
    ├── public/              # favicon, robots.txt, .htaccess
    ├── .github/workflows/   # deploy-yachay.yml
    └── astro.config.mjs
```

## 9. Alternativas evaluadas (2026-10-22)
Next.js (más JS y complejidad), Eleventy y Hugo (menos herramientas para las interacciones del diseño), WordPress (rendimiento, mantenimiento y seguridad) y Webflow/Framer (suscripción y dependencia de la plataforma). Se eligió Astro por su rendimiento y SEO, por el blog en Markdown mantenido por el equipo, porque funciona en hosting compartido y porque permite sumar un CMS en el futuro sin rehacer la web.
