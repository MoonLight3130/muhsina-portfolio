/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#07070d',
          darker: '#040408',
          card: 'rgba(14, 11, 24, 0.75)',
          cardHover: 'rgba(23, 17, 38, 0.85)',
        },
        brand: {
          purple: '#9333ea',
          violet: '#a855f7',
          magenta: '#d946ef',
          pink: '#ec4899',
          cyan: '#38bdf8',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'neon-magenta': '0 0 25px rgba(217, 70, 239, 0.45)',
        'neon-purple': '0 0 30px rgba(147, 51, 234, 0.45)',
        'neon-cyan': '0 0 25px rgba(56, 189, 248, 0.4)',
        'glow-sm': '0 0 15px rgba(168, 85, 247, 0.3)',
        'glow-lg': '0 0 40px rgba(217, 70, 239, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
