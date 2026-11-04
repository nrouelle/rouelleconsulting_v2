// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// build.format: 'file' serves pages as flat *.html, but the sitemap
// integration derives URLs from clean routes (no extension) — patch
// them back to the real served .html paths and restore the
// priority/changefreq values from the previous hand-maintained sitemap.
const sitemapMeta = {
  '/': { priority: 1.0, changefreq: 'monthly' },
  '/developpeuse-freelance-lyon': { priority: 0.9, changefreq: 'monthly' },
  '/diagnostic-application-metier': { priority: 0.8, changefreq: 'monthly' },
  '/audit-application-metier': { priority: 0.8, changefreq: 'monthly' },
  '/quand-refondre-application-metier': { priority: 0.7, changefreq: 'monthly' },
  '/ateliers-metiers': { priority: 0.6, changefreq: 'monthly' },
  '/version-1': { priority: 0.6, changefreq: 'monthly' },
  '/reproduire-outil-existant': { priority: 0.6, changefreq: 'monthly' },
  '/feature-first': { priority: 0.6, changefreq: 'monthly' },
  '/ia-quotidien-developpeuse': { priority: 0.6, changefreq: 'monthly' },
  '/mentions-legales': { priority: 0.1, changefreq: 'yearly' },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rouelleconsulting.fr',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const meta = sitemapMeta[url.pathname];
        if (url.pathname !== '/') {
          url.pathname = `${url.pathname}.html`;
        }
        item.url = url.toString();
        if (meta) {
          item.priority = meta.priority;
          item.changefreq = meta.changefreq;
        }
        return item;
      },
    }),
  ],
});
