// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://iamrichardd.github.io',
  base: '/',
  output: 'static',
  
  
  // Performance optimizations
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  
  // Prefetch configuration for better performance
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  
  // SEO and performance integrations
  integrations: [
    tailwind({
      applyBaseStyles: false, // We'll control base styles for better performance
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark-dimmed',
        wrap: true,
      },
      gfm: true,
    }),
  ],
  
  // Vite configuration for optimal bundling
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },
  },
  
  // Markdown configuration
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
