/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {boska: ['Boska', 'sans-serif']},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				purple: '#132233',
				sand: '#f3be65',
				lightGreen: '#c2e796',
				darkGray: '#878787',
				lightGray: '#DFDFDF',
				font: '#212529',
			},
		},
	},
	plugins: [],
};
