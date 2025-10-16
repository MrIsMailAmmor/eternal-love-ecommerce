import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'burgundy-red': '#6B1E1E',
        'blush-nude': '#EAD7D1',
        'champagne-gold': '#D5BDAF',
        'warm-ivory': '#F8F4F0',
        'rich-brown': '#3B2F2F',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Outfit', 'Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
