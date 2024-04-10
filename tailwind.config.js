/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
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
