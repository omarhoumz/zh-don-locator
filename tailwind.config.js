module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        homepage: 'minmax(300px, 30%) 1fr',
      },
      gridTemplateRows: {
        homepage: '1fr minmax(300px, 30%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
