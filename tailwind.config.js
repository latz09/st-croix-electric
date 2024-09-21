/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: '#C4203B',
			secondary: '#FFD41C',
			// tertiary: '#ffee65',
			dark: '#211F20',
			light: '#FFFFFF',
		},
	},
	plugins: [],
};
