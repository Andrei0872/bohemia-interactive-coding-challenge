import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'gray-1': '#e4e4e4',
      'gray-dark-1': '#656565',
    }
  },
  plugins: [],
} satisfies Config

