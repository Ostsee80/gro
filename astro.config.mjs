// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gro-erodiertechnik.com',
  // Für Design-Entwürfe im Unterordner, z. B. BASE_PATH=/entwurf-hell
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-DE', en: 'en-US' } },
      filter: (page) => !/\/(404|kontakt\/(danke|fehler)|en\/contact\/(thank-you|error))\/?$/.test(page),
    }),
  ],
});
