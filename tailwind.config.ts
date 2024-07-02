import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  plugins: [],
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
      gridTemplateColumns: {
        '40_55': '40% 55%',
      },
    },
  },
}
export default config
