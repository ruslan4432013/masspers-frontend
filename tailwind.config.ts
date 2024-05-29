import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        neue: ['var(--font-tt-firs-neue)'],
      },
      colors: {
        primary: {
          300: '#FF7273',
          500: '#EE4143',
        },
      },
    },
  },
  plugins: [],
}
export default config
