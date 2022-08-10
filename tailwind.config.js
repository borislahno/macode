/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xl': {max: '1439px'},
      'xl': {max: '1199px'},
      'lg': {max: '991px'},
      'md': {max: '767px'},
      'sm': {max: '575px'},
      'xs': {max: '426px'},
      '2xs': {max: '380px'},
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: {
        light: '#010101',
        light25: 'rgba(1, 1, 1, 0.25)',
        light50: 'rgba(1, 1, 1, 0.5)',
        DEFAULT: '#000000',
      },
      gray: {
        light: '#F4F4F4',
        DEFAULT: '#CFCFCF',
        dark: '#9B9B9B',
      },
      yellow: {
        DEFAULT: '#DDF247',
      }
    },
    fontSize: {
      inherit: 'inherit',
      base: ['1rem', '1.25rem'],
      md: ['1.25rem', '1.75rem'],
      '2md': ['1.375rem', '1.625rem'],
      lg: ['1.5rem', '1.75rem'],
      '2lg': ['1.875rem', '2.25rem'],
      '3lg': ['2.125rem', '2.5rem'],
      xl: ['3rem', '3.625rem'],
      '2xl': ['3.5rem', '4.375rem'],
      '3xl': ['3.75rem', '4.7rem']
    },
    fontFamily: {
      aeonik: ['Aeonik', 'sans-serif'],
      sourceCode: ['Source Code Pro', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      inherit: 'inherit',
    },
    borderRadius: {
      none: 'none',
      full: '50%',
      DEFAULT: '10px',
      sm: '2px',
      md: '14px',
      lg: '20px',
    },
    boxShadow: {
      form: '0px 21px 127px 22px rgba(221, 242, 71, 0.3)',
    }
  },
}

