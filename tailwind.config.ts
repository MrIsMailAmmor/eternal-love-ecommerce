import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Outfit', 'Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
