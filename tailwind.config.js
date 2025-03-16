// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // Enables dark mode using a class
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))', // Custom background color
				foreground: 'hsl(var(--foreground))', // Custom text color
				primary: '#000000', // Black for buttons
				'primary-foreground': '#FFFFFF', // White text inside buttons
			},
			borderRadius: {
				lg: '0.5rem', // Rounded button corners
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
