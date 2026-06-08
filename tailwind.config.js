/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6E3',
        'cream-deep': '#F7EDD3',
        orange: {
          DEFAULT: '#E0863C',
          deep: '#C8702A',
          soft: '#F2C99B',
        },
        ink: '#3A3027',
      },
      fontFamily: {
        sans: ['"PingFang TC"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 24px -10px rgba(200, 112, 42, 0.25)',
      },
      maxWidth: {
        phone: '430px',
      },
    },
  },
  plugins: [],
};
