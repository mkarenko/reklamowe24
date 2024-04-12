/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {boska: ['Boska', 'sans-serif']},
		screens: {
			sm: {max: '767px'},
			md: {min: '768px', max: '992px'},
			lg: {min: '993px', max: '1199px'},
			xl: {min: '1200px'},
		},
		extend: {
			colors: {
				purple: '#132233',
				sand: '#f3be65',
				lightGreen: '#c2e796',
				darkGray: '#878787',
				lightGray: '#DFDFDF',
				font: '#212529',
				customBlue: '#0d6efd',
			},
		},
	},
	plugins: [],
};
