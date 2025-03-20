const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: [
    "./src/app.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [

  ],
};