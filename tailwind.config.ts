import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F1E6',
          50: '#FCFAF6',
          100: '#F7F1E6',
          200: '#EFE6D8',
          300: '#E2D3BC',
        },
        terracotta: {
          DEFAULT: '#9C4A3C',
          50: '#FBF0EE',
          100: '#F6DCD8',
          500: '#9C4A3C',
          600: '#843C30',
          700: '#6C3026',
        },
        burgundy: {
          DEFAULT: '#5C2328',
          50: '#F8ECEE',
          100: '#EFCFD3',
          800: '#5C2328',
          900: '#42171B',
        },
        gold: {
          DEFAULT: '#B8934A',
          100: '#F5EDDC',
          500: '#B8934A',
          600: '#9D7A37',
        },
        charcoal: {
          DEFAULT: '#241F1C',
          50: '#8C8580',
          800: '#241F1C',
          900: '#171412',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        nunito: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(36, 31, 28, 0.06)',
        card: '0 14px 40px -15px rgba(156, 74, 60, 0.08)',
        glow: '0 0 25px rgba(184, 147, 74, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
