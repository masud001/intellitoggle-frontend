/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./app/**/*.{js,vue,ts}",
		"./components/**/*.{js,vue,ts}",
		"./pages/**/*.{js,vue,ts}",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			screens: {
				"xs": "320px",
				"sm": "375px",
				"mobile": "393px",
				"md": "768px",
				"lg": "1024px",
				"xl": "1280px",
				"2xl": "1536px",
				"tablet": "768px",
				"3xl": "1440px",
				"4xl": "1920px",
			},
			fontFamily: {
				"sans": ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
				"satoshi": ["Satoshi", "ui-sans-serif", "system-ui", "sans-serif"],
				"dm-sans": ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
				"merriweather-sans": ["Merriweather Sans", "ui-sans-serif", "system-ui", "sans-serif"],
				"roboto": ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
				"plus-jakarta-sans": ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
