/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		colors: {
		  accentsgreen: "var(--accentsgreen)",
		  "brand-primary": "var(--brand-primary)",
		  "brand-secondary": "var(--brand-secondary)",
		  "gray-100": "var(--gray-100)",
		  "gray-500": "var(--gray-500)",
		  "indigo-500": "var(--indigo-500)",
		  "pink-500": "var(--pink-500)",
		  "primary-800": "var(--primary-800)",
		  "success-500": "var(--success-500)",
		  "text-darker": "var(--text-darker)",
		},
		fontFamily: {
		  body: "var(--body-font-family)",
		  "heading-h3": "var(--heading-h3-font-family)",
		  "heading-h4": "var(--heading-h4-font-family)",
		  "m3-headline-small": "var(--m3-headline-small-font-family)",
		  text: "var(--text-font-family)",
		  "text-sm-regular": "var(--text-sm-regular-font-family)",
		  "text-xs-medium": "var(--text-xs-medium-font-family)",
		  "text-xs-regular": "var(--text-xs-regular-font-family)",
		},
	  },
	},
	plugins: [],
  };
  