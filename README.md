# Web NEXOS Ingenieros

Sitio web de **NEXOS Ingenieros**: soluciones en construcción, ingeniería y mantenimiento integral (Lima, Ica y todo el Perú).

| Carpeta | Contenido |
|---|---|
| [`docs/`](docs/) | Plan, especificación, stack, plan SEO/blog y pendientes del cliente |
| [`web/`](web/) | Proyecto **Astro 7** (Svelte 5 · Tailwind 4 · GSAP · MDX · Pagefind) |
| [`trabajo/`](trabajo/) | Bitácora, maquetas (Claude Design) y manifiestos de fotos |
| `documentosDelCliente/` | Material original del cliente (**no se versiona**) |

- **Estado:** F1 · Base técnica terminada → siguiente: F2 · Componentes e Inicio. Ver [`docs/PLAN.md`](docs/PLAN.md).
- **Hosting:** Yachay, plan Hosti 200 (cPanel). Despliegue automático con [`.github/workflows/deploy-yachay.yml`](.github/workflows/deploy-yachay.yml) (`main` → producción, `develop` → vista previa).
- **Arrancar en local:** `cd web && npm install && npm run dev`
