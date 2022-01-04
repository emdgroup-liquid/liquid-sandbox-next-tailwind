const liquidPreset = require('@emdgroup-liquid/liquid/dist/css/tailwind-preset.js')

module.exports = {
  presets: [liquidPreset],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
