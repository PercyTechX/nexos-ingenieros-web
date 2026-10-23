# NEXOS Ingenieros — web (Astro)

Documentación del proyecto: [../docs/](../docs/) (PLAN, SPEC, STACK, SEO, PENDIENTES-CLIENTE).

## Comandos
| Comando | Acción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en http://localhost:4321 |
| `npm run check` | Chequeo de tipos y plantillas |
| `npm run build` | `astro check` + build estático en `dist/` + índice de búsqueda (Pagefind) |
| `npm run preview` | Sirve `dist/` localmente |
| `npm run format` | Formatea con Prettier |

## Contenido
- `src/content/proyectos/proyectos.json`: obras (una página por obra). `clientInternal` **no se publica**.
- `src/content/clientes/clientes.json`: logos del carrusel (requiere permiso del cliente).
- `src/content/faq/faq.json`: preguntas frecuentes (`needsValidation` = falta validación del cliente).
- `src/content/servicios/*.md`: páginas de servicio (F3).
- `src/content/blog/*.mdx`: artículos (F5). El esquema exige `title` ≤ 65, `description` 120–165, `keyword`, `pillar`, `cover` y `cta`.
- Datos de la empresa: `src/config/site.ts` (los `TODO` son pendientes del cliente).

## Despliegue
Push a `develop` → vista previa · push a `main` → producción (Yachay, cPanel), vía `.github/workflows/deploy-yachay.yml`.
