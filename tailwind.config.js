/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
			rotate: {
				'-180': '-180deg',
				 '-90': '-90deg',
				'-45': '-45deg',
				 '0': '0',
				 '45': '45deg',
				 '90': '90deg',
				'135': '135deg',
				 '180': '180deg',
				 '36': '-24deg',
				'270': '270deg',
				'23': '24deg'
			   }
    },
  },
  plugins: [],
}
