/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        white: '#FFF',
        purple: '#7938B2',
        gray: {
          100: '#E1E1E6',
          200: '#A9A9B2',
          300: '#323238',
          400: '#7C7C8A',
          600: '#323238',
          800: '#202024',
          900: '#121214'
        },

        violet: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95'
        },

        purpleDark: {
          700: '#1B1520',
          800: '#0E0B11',
          900: '#09070B'
        },

        pink200: '#CE9AF4'
      },

      keyframes: {
        slideDown: {
          '0%': { height: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          '0%': { height: 'var(--radix-accordion-content-height)' },
          '100%': { height: '0' }
        }
      },

      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)'
      }
    }
  },
  plugins: []
}
