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
          100: '#F3F3F3',
          200: '#E8E8E8',
          300: '#cfcfcf',
          400: '#C5C5C5',
          500: '#35393a',
        },
        primary: {
          300: '#FF7273',
          500: '#EE4143',
          700: '#E52D36',
        },
      },
      gridTemplateColumns: {
        '24_70': '24% 70%',
        '30_68': '30% 68%',
        '35_60': '35% 60%',
        '40_55': '40% 55%',
        '40_58': '40% 58%',
        '60_40': '60% 40%',
      },
      boxShadow: {
        md_blur: '0 4px 87.3px 0 #00000026',
      },
    },
  },
}
export default config
