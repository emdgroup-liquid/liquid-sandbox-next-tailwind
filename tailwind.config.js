const liquidPreset = require('@emdgroup-liquid/liquid/dist/css/tailwind-preset.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [liquidPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
}
