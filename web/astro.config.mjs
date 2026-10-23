// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

// Dominio de producción (confirmar con el cliente: ver docs/PENDIENTES-CLIENTE.md #4)
const SITE = 'https://nexos-ing.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    svelte(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
    // GA4 corre fuera del hilo principal; dataLayer.push se reenvía al worker
    partytown({ config: { forward: ['dataLayer.push'] } }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
