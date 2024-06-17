/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'fhd': '1920px', // 1920x1080
        'hd-1366': '1366px', // 1366x768
        'hd-1600': '1600px', // 1600x900
      },
      textStroke: {
        'sm': '1px',
        'md': '2px',
        'lg': '3px',
      },
      textStrokeColor: {
        'black': '#000',
        'white': '#fff',
      },
      colors: {
          custom : {
            'bg': '#040807',
            'blueBg': '#06101B',
            'blueBg1': '#0A1A2C',
            'primary': '#79B9FA',
            'secondary': '#759ABE'
          },
        },
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        'alien-ai' : ['alien-ai', 'sans-serif']
      }
    }
  },
  variants: {
    textStroke: ['responsive'],
    textStrokeColor: ['responsive'],
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-sm': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-md': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke-width': '3px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
