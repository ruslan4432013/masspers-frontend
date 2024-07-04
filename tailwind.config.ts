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
        '24_70': '24% 70%',
        '40_55': '40% 55%',
        '40_58': '40% 58%',
        '60_40': '60% 40%',
      },
    },
  },
}
export default config
