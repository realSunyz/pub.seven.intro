import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';
import { expressiveCodeOptions } from './src/site.config';
import icon from 'astro-icon';

// adapter
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://sunyz.net',
  integrations: [expressiveCode(expressiveCodeOptions), tailwind({
    applyBaseStyles: false
  }), sitemap(), icon()],
  image: {
    domains: ["cdn.sunyz.net"],
    remotePatterns: [{ protocol: "https" }],
  },
  prefetch: true,
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  output: 'server'
});