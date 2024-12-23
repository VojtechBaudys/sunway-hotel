/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'sunway-blue': '#228be4',
			},
			backgroundImage: {
				'footer-texture': "url('https://www.sunway.ie/images/newsletterbgtop.jpg')",
			}
		},
	},
	plugins: [],
}
