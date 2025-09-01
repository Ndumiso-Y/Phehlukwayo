/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 
          DEFAULT: '#0C3B5E', 
          dark: '#06243A', 
          light: '#1E5A8C',
          50: '#F0F6FC',
          100: '#E1EDF9',
          200: '#C3DBF3',
          300: '#9FC4ED',
          400: '#6BA8E5',
          500: '#387FD8',
          600: '#1E5A8C',
          700: '#0C3B5E',
          800: '#06243A',
          900: '#041A2B'
        },
        accent: { 
          DEFAULT: '#C59D5F', 
          dark: '#9B7A48', 
          light: '#D4B378',
          50: '#FDF9F3',
          100: '#FBF3E7',
          200: '#F7E7CF',
          300: '#F1D8B0',
          400: '#E9C488',
          500: '#D4B378',
          600: '#C59D5F',
          700: '#9B7A48',
          800: '#7A5F38',
          900: '#5D4928'
        },
        teal: { 
          DEFAULT: '#0E7C7B', 
          dark: '#0A5857', 
          light: '#14B8A6',
          50: '#F0FDFC',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0E7C7B',
          800: '#0A5857',
          900: '#134E4A'
        }
      },
      boxShadow: { 
        soft: '0 6px 30px rgba(0,0,0,0.08)',
        'soft-lg': '0 10px 40px rgba(0,0,0,0.12)',
        'soft-xl': '0 20px 60px rgba(0,0,0,0.15)',
        'brand': '0 8px 32px rgba(12,59,94,0.2)',
        'accent': '0 8px 32px rgba(197,157,95,0.3)',
        'teal': '0 8px 32px rgba(14,124,123,0.3)'
      },
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','Helvetica Neue','Arial']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounce 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}