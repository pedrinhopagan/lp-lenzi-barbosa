import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input-color))",
				ring: "hsl(--accent-color)",
				background: "hsl(var(--background-color))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#3B4F9D",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "#0C77A9",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				blue: {
					"50": "#f1f9fa",

					// Brand
					"100": "#EDF6F8",
					"200": "#84AEB6",
					"300": "#0C77A9",
					"400": "#3B4F9D",
					"500": "#583682",

					"600": "#377783",
					"700": "#32616c",
					"800": "#2f515b",
					"900": "#2b454e",
					"950": "#182d34",
				},
			},
			backgroundImage: {
				gradient:
					"linear-gradient(90deg, #583682, #3B4F9D, #0C77A9, #84AEB6, #EDF6F8)",
			},
			backgroundSize: {
				auto: "auto",
				cover: "cover",
				contain: "contain",
				"150%": "150%",
			},
			fontFamily: {
				main: "var(--font-main)",
				alt: "var(--font-alt)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
