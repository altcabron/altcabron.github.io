/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
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
		},
	},

	plugins: []
};
