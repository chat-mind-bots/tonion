import type { Config } from "tailwindcss";

const config: Config = {
	mode: "jit",
	darkMode: "class",
	content: [
		"./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		height: {
			viewportStable: "var(--telegram-viewport-stable-height)",
			viewport: "var(--telegram-viewport-height)",
		},
		colors: {
			colors: {
				"telegram-background": "var(--telegram-bg-color)",
				"telegram-background-secondary": "var(--telegram-secondary-bg-color)",
				"telegram-text": "var(--telegram-text-color)",
				"telegram-hint": "var(--telegram-hint-color)",
				"telegram-link": "var(--telegram-link-color)",
				"telegram-button-background": "var(--telegram-button-color)",
				"telegram-button-text": "var(--telegram-button-text-color)",
				"telegram-button-background-secondary":
					"var(--telegram-secondary-bg-color)",
				"telegram-accent-text": "var(--telegram-accent-text-color)",

				"telegram-destructive-text": "var(--telegram-destructive-text-color)",
				"telegram-header-bg": "var(--telegram-header-bg-color)",
				"telegram-section-bg": "var(--telegram-section-bg-color)",
				"telegram-section-header-text":
					"var(--telegram-section-header-text-color)",
				"telegram-subtitle-text": "var(--telegram-theme-subtitle-text-color)",
			},
		},
		textColor: {
			"telegram-background": "var(--telegram-bg-color)",
			"telegram-background-secondary": "var(--telegram-secondary-bg-color)",
			"telegram-text": "var(--telegram-text-color)",
			"telegram-hint": "var(--telegram-hint-color)",
			"telegram-link": "var(--telegram-link-color)",
			"telegram-button-background": "var(--telegram-button-color)",
			"telegram-button-text": "var(--telegram-button-text-color)",
			"telegram-button-background-secondary":
				"var(--telegram-secondary-bg-color)",
			"telegram-accent-text": "var(--telegram-accent-text-color)",

			//not tested
			"telegram-destructive-text": "var(--telegram-destructive-text-color)",
			"telegram-header-bg": "var(--telegram-header-bg-color)",
			"telegram-section-bg": "var(--telegram-section-bg-color)",
			"telegram-section-header-text": "var(--telegram-section-header-text-color)",
			"telegram-subtitle-text": "var(--telegram-theme-subtitle-text-color)",
		},
	},
	plugins: [],
};
export default config;
