import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#6B1E1E',
        secondary: '#3B2F2F',
        accent: '#D5BDAF',
        'warm-ivory': '#F8F4F0',
        'blush-nude': '#EAD7D1',
        'primary-light': '#D5BDAF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
