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
        dark: {
          300: '#cfcfcf',
          500: '#35393a',
        },
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
