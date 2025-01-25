/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
		},
		colors: {
			black: {
				DEFAULT: '#252525',
			},
			cream: {
				DEFAULT: '#FFF8EF'
			}
		},
		fontSize: {
			'header': '2.5rem',
			'h1': '4rem',
		},
	},

	plugins: []
};
