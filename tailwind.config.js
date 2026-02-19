/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: {
          50: '#e0f7f9',
          100: '#b6edf1',
          200: '#88e2ea',
          300: '#56d5e0',
          400: '#2fc6d4',
          500: '#1B5A64',   // Deep, confident teal (your main color)
          600: '#174c56',
          700: '#123c45',
          800: '#0e2e35',
          900: '#081f23',
        },

        secondary: {
          50: '#fff3e6',
          100: '#ffe0cc',
          200: '#ffc299',
          300: '#ffa366',
          400: '#ff8740',
          500: '#FF6B1B', // Vibrant coral
          600: '#e65f18',
          700: '#b34813',
          800: '#80320d',
          900: '#4d1c07',
        },

        accent: {
          50: '#f1f5f3',  // subtle mint-gray
          100: '#d8e1de',
          200: '#bbcfc9',
          300: '#9dbbb4',
          400: '#7ea7a0',
          500: '#5b7d78',   // Gray + green core (moss tone)
          600: '#49655f',
          700: '#374c47',
          800: '#26332f',
          900: '#151b18',
        },


        success: {
          DEFAULT: '#20B66F',  // Slightly deeper green (success)
          dark: '#15824F',
          light: '#C8F4DE',
        },

        cancel: {
          DEFAULT: '#EF4E4E',  // More solid, modern error red
          dark: '#B91C1C',
          light: '#FDE0E0',
        },

        confirm: {
          DEFAULT: '#0DAAD3',  // Bluish-teal confirm tone (close to primary)
          dark: '#087E9C',
          light: '#CCF2FA',
        },

        info: {
          DEFAULT: '#3C82F6',  // Cleaner blue (same as original)
          dark: '#1D4ED8',
          light: '#DBEAFE',
        },

        add: {
          DEFAULT: '#1BBF8B',  // Brighter action green (near success)
          dark: '#0F9D68',
          light: '#C9F5E4',
        },

        edit: {
          DEFAULT: '#F5A500',  // Slightly deeper, warm amber
          dark: '#B36A00',
          light: '#FEF2C3',
        },

        dark: '#121212',
        light: '#f5f5f5',

      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        hindi: ['Mukta', 'sans-serif']
      },
      backgroundImage: theme => ({
        'gradient-light': `linear-gradient(to right, ${theme('colors.light')} 0%, ${theme('colors.primary.50')} 100%)`,
        'gradient-dark': `linear-gradient(to right, ${theme('colors.primary.800')} 0%, ${theme('colors.primary.900')} 100%)`,
        'gradient-primary': `linear-gradient(to right, ${theme('colors.primary.600')} 0%, ${theme('colors.primary.900')} 100%)`,
        'gradient-secondary': `linear-gradient(to right, ${theme('colors.secondary.500')} 0%, ${theme('colors.secondary.800')} 100%)`,

        //Primary 
        // Light blends
        'gradient-primary-50-100': `linear-gradient(to right, ${theme('colors.primary.50')} 0%, ${theme('colors.primary.100')} 100%)`,
        'gradient-primary-100-200': `linear-gradient(to right, ${theme('colors.primary.100')} 0%, ${theme('colors.primary.200')} 100%)`,
        'gradient-primary-200-300': `linear-gradient(to right, ${theme('colors.primary.200')} 0%, ${theme('colors.primary.300')} 100%)`,

        // Mid-tone blends
        'gradient-primary-300-400': `linear-gradient(to right, ${theme('colors.primary.300')} 0%, ${theme('colors.primary.400')} 100%)`,
        'gradient-primary-400-500': `linear-gradient(to right, ${theme('colors.primary.400')} 0%, ${theme('colors.primary.500')} 100%)`,
        'gradient-primary-500-600': `linear-gradient(to right, ${theme('colors.primary.500')} 0%, ${theme('colors.primary.600')} 100%)`,

        // Dark blends
        'gradient-primary-600-700': `linear-gradient(to right, ${theme('colors.primary.600')} 0%, ${theme('colors.primary.700')} 100%)`,
        'gradient-primary-700-800': `linear-gradient(to right, ${theme('colors.primary.700')} 0%, ${theme('colors.primary.800')} 100%)`,
        'gradient-primary-800-900': `linear-gradient(to right, ${theme('colors.primary.800')} 0%, ${theme('colors.primary.900')} 100%)`,

        // Light-to-dark sweeps
        'gradient-primary-light-dark': `linear-gradient(to right, ${theme('colors.primary.50')} 0%, ${theme('colors.primary.900')} 100%)`,
        'gradient-primary-light-mid': `linear-gradient(to right, ${theme('colors.primary.50')} 0%, ${theme('colors.primary.500')} 100%)`,
        'gradient-primary-mid-dark': `linear-gradient(to right, ${theme('colors.primary.400')} 0%, ${theme('colors.primary.900')} 100%)`,

        // Diagonal blends
        'gradient-primary-diagonal': `linear-gradient(135deg, ${theme('colors.primary.300')} 0%, ${theme('colors.primary.700')} 100%)`,
        'gradient-primary-soft-diagonal': `linear-gradient(135deg, ${theme('colors.primary.50')} 0%, ${theme('colors.primary.300')} 100%)`,
        'gradient-primary-deep-diagonal': `linear-gradient(135deg, ${theme('colors.primary.600')} 0%, ${theme('colors.primary.900')} 100%)`,

        // Radial
        'gradient-primary-radial-light': `radial-gradient(circle, ${theme('colors.primary.50')} 0%, ${theme('colors.primary.500')} 100%)`,
        'gradient-primary-radial-dark': `radial-gradient(circle, ${theme('colors.primary.400')} 0%, ${theme('colors.primary.900')} 100%)`,

        // Accent overlay styles
        'gradient-primary-glow': `linear-gradient(to right, ${theme('colors.primary.300')} 0%, ${theme('colors.primary.500')} 50%, ${theme('colors.primary.700')} 100%)`,
        'gradient-primary-shimmer': `linear-gradient(90deg, ${theme('colors.primary.400')}, ${theme('colors.primary.500')}, ${theme('colors.primary.600')})`,

        // Secondary 
        // Light blends
        'gradient-secondary-50-100': `linear-gradient(to right, ${theme('colors.secondary.50')} 0%, ${theme('colors.secondary.100')} 100%)`,
        'gradient-secondary-100-200': `linear-gradient(to right, ${theme('colors.secondary.100')} 0%, ${theme('colors.secondary.200')} 100%)`,
        'gradient-secondary-200-300': `linear-gradient(to right, ${theme('colors.secondary.200')} 0%, ${theme('colors.secondary.300')} 100%)`,

        // Mid-tone blends
        'gradient-secondary-300-400': `linear-gradient(to right, ${theme('colors.secondary.300')} 0%, ${theme('colors.secondary.400')} 100%)`,
        'gradient-secondary-400-500': `linear-gradient(to right, ${theme('colors.secondary.400')} 0%, ${theme('colors.secondary.500')} 100%)`,
        'gradient-secondary-500-600': `linear-gradient(to right, ${theme('colors.secondary.500')} 0%, ${theme('colors.secondary.600')} 100%)`,

        // Dark blends
        'gradient-secondary-600-700': `linear-gradient(to right, ${theme('colors.secondary.600')} 0%, ${theme('colors.secondary.700')} 100%)`,
        'gradient-secondary-700-800': `linear-gradient(to right, ${theme('colors.secondary.700')} 0%, ${theme('colors.secondary.800')} 100%)`,
        'gradient-secondary-800-900': `linear-gradient(to right, ${theme('colors.secondary.800')} 0%, ${theme('colors.secondary.900')} 100%)`,

        // Light-to-dark sweeps
        'gradient-secondary-light-dark': `linear-gradient(to right, ${theme('colors.secondary.50')} 0%, ${theme('colors.secondary.900')} 100%)`,
        'gradient-secondary-light-mid': `linear-gradient(to right, ${theme('colors.secondary.50')} 0%, ${theme('colors.secondary.500')} 100%)`,
        'gradient-secondary-mid-dark': `linear-gradient(to right, ${theme('colors.secondary.400')} 0%, ${theme('colors.secondary.900')} 100%)`,

        // Diagonal blends
        'gradient-secondary-diagonal': `linear-gradient(135deg, ${theme('colors.secondary.300')} 0%, ${theme('colors.secondary.700')} 100%)`,
        'gradient-secondary-soft-diagonal': `linear-gradient(135deg, ${theme('colors.secondary.50')} 0%, ${theme('colors.secondary.300')} 100%)`,
        'gradient-secondary-deep-diagonal': `linear-gradient(135deg, ${theme('colors.secondary.600')} 0%, ${theme('colors.secondary.900')} 100%)`,

        // Radial
        'gradient-secondary-radial-light': `radial-gradient(circle, ${theme('colors.secondary.50')} 0%, ${theme('colors.secondary.500')} 100%)`,
        'gradient-secondary-radial-dark': `radial-gradient(circle, ${theme('colors.secondary.400')} 0%, ${theme('colors.secondary.900')} 100%)`,

        // Accent overlay styles
        'gradient-secondary-glow': `linear-gradient(to right, ${theme('colors.secondary.300')} 0%, ${theme('colors.secondary.500')} 50%, ${theme('colors.secondary.700')} 100%)`,
        'gradient-secondary-shimmer': `linear-gradient(90deg, ${theme('colors.secondary.400')}, ${theme('colors.secondary.500')}, ${theme('colors.secondary.600')})`,

        //Accents 
        // Light blends
        'gradient-accent-50-100': `linear-gradient(to right, ${theme('colors.accent.50')} 0%, ${theme('colors.accent.100')} 100%)`,
        'gradient-accent-100-200': `linear-gradient(to right, ${theme('colors.accent.100')} 0%, ${theme('colors.accent.200')} 100%)`,
        'gradient-accent-200-300': `linear-gradient(to right, ${theme('colors.accent.200')} 0%, ${theme('colors.accent.300')} 100%)`,

        // Mid-tone blends
        'gradient-accent-300-400': `linear-gradient(to right, ${theme('colors.accent.300')} 0%, ${theme('colors.accent.400')} 100%)`,
        'gradient-accent-400-500': `linear-gradient(to right, ${theme('colors.accent.400')} 0%, ${theme('colors.accent.500')} 100%)`,
        'gradient-accent-500-600': `linear-gradient(to right, ${theme('colors.accent.500')} 0%, ${theme('colors.accent.600')} 100%)`,

        // Dark blends
        'gradient-accent-600-700': `linear-gradient(to right, ${theme('colors.accent.600')} 0%, ${theme('colors.accent.700')} 100%)`,
        'gradient-accent-700-800': `linear-gradient(to right, ${theme('colors.accent.700')} 0%, ${theme('colors.accent.800')} 100%)`,
        'gradient-accent-800-900': `linear-gradient(to right, ${theme('colors.accent.800')} 0%, ${theme('colors.accent.900')} 100%)`,

        // Light-to-dark sweeps
        'gradient-accent-light-dark': `linear-gradient(to right, ${theme('colors.accent.50')} 0%, ${theme('colors.accent.900')} 100%)`,
        'gradient-accent-light-mid': `linear-gradient(to right, ${theme('colors.accent.50')} 0%, ${theme('colors.accent.500')} 100%)`,
        'gradient-accent-mid-dark': `linear-gradient(to right, ${theme('colors.accent.400')} 0%, ${theme('colors.accent.900')} 100%)`,

        // Diagonal blends
        'gradient-accent-diagonal': `linear-gradient(135deg, ${theme('colors.accent.300')} 0%, ${theme('colors.accent.700')} 100%)`,
        'gradient-accent-soft-diagonal': `linear-gradient(135deg, ${theme('colors.accent.50')} 0%, ${theme('colors.accent.300')} 100%)`,
        'gradient-accent-deep-diagonal': `linear-gradient(135deg, ${theme('colors.accent.600')} 0%, ${theme('colors.accent.900')} 100%)`,

        // Radial
        'gradient-accent-radial-light': `radial-gradient(circle, ${theme('colors.accent.50')} 0%, ${theme('colors.accent.500')} 100%)`,
        'gradient-accent-radial-dark': `radial-gradient(circle, ${theme('colors.accent.400')} 0%, ${theme('colors.accent.900')} 100%)`,

        // Accent overlay styles
        'gradient-accent-glow': `linear-gradient(to right, ${theme('colors.accent.300')} 0%, ${theme('colors.accent.500')} 50%, ${theme('colors.accent.700')} 100%)`,
        'gradient-accent-shimmer': `linear-gradient(90deg, ${theme('colors.accent.400')}, ${theme('colors.accent.500')}, ${theme('colors.accent.600')})`,
      }),
    },
  },
  plugins: [],
}
