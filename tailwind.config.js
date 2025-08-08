/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5722',
          dark: '#E64A19',
        },
        textPrimary: '#2D3748',
        textSecondary: '#4A5568',
        'primary-light': '#FF833A',
        'primary-dark': '#B23F00',
        background: {
          light: '#FFF9F5',
          dark: '#FFF1E6'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(230, 81, 0, 0.15)',
        'card-hover': '0 8px 24px rgba(230, 81, 0, 0.2)'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E65100 0%, #FF833A 100%)',
        'gradient-light': 'linear-gradient(135deg, #FFF9F5 0%, #FFF1E6 100%)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDelay: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '50%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        fadeInDelay: 'fadeIn 0.5s ease-in 0.2s',
        bounce: 'bounce 2s infinite'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    }
  },
  plugins: [],
} 