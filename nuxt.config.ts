// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@nuxt/image",
		"@nuxt/scripts",
		"@nuxt/test-utils",
		"@nuxt/ui",
		"@nuxt/content",
		"@nuxt/fonts",
	],
	ssr: true,
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	compatibilityDate: "2025-07-15",
	nitro: {
		experimental: {
			wasm: true,
		},
		// Skip prerendering of image optimization routes
		prerender: {
			ignore: [
				"/.netlify/images",
			],
		},
	},
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	eslint: {
		config: {
			stylistic: {
				semi: true,
				indent: "tab",
				quotes: "double",
			},
		},
	},
	fonts: {
		families: [
			{ name: "Inter", provider: "google" },
			{ name: "DM Sans", provider: "google" },
			{ name: "Merriweather Sans", provider: "google" },
			{ name: "Roboto", provider: "google" },
			{ name: "Plus Jakarta Sans", provider: "google" },
		],
	},
	image: {
		// Configure fallback behavior for missing images
		presets: {
			default: {
				modifiers: {
					format: "webp",
					quality: 80,
				},
			},
		},
	},
});
