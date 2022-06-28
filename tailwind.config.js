/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			primary: ['Public Sans', 'sans-serif'],
		},
		flex: {
			auto: '0 0 auto',
		},
		extend: {
			colors: {
				transparent: 'transparent',
				primary: 'currentColor',
				green: {
					DEFAULT: '#a2cd39',
					dark: '#10642b',
				},
			},
		},
	},
	plugins: [require('daisyui')],
};
