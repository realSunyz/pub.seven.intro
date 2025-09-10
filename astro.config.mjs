import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import expressiveCode from 'astro-expressive-code'
import { expressiveCodeOptions } from './src/site.config'
import icon from 'astro-icon'

// adapter
import cloudflare from '@astrojs/cloudflare'

import yeskunallumami from '@yeskunall/astro-umami'

// https://astro.build/config
export default defineConfig({
	site: 'https://sunyz.dev',
	integrations: [
		expressiveCode(expressiveCodeOptions),
		tailwind({
			applyBaseStyles: false
		}),
		sitemap(),
		icon(),
		yeskunallumami({
			domains: ['sunyz.dev'],
			endpointUrl: 'https://analytics.sunyz.net',
			id: '2f6fcd4d-5697-476d-8bf0-08319e974695',
		})
	],
	image: {
		domains: ['cdn.sunyz.net'],
		remotePatterns: [{ protocol: 'https' }]
	},
	prefetch: true,
	adapter: cloudflare({
		//    imageService: 'cloudflare'
	}),
	output: 'server'
})
