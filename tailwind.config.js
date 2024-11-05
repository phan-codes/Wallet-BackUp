/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				Ubuntu: 'Ubuntu Sans',
				Pacifico: 'Pacifico',
				Jacquard: 'Jacquard 12',
			},
			backgroundImage: {
				hero: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.8),  rgba(0,0,0,0.7)), url('/src/assets/herobg.jpg')",
			},

			screens: {
				'h-sm': { raw: '(min-height: 350px)' },
				'h-md': { raw: '(max-height: 690px)' },
				'h-lg': { raw: '(min-height: 712px)' },
				'h-xl': { raw: '(min-height: 900px)' },
			},
		},
	},
	plugins: [],
};
