import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

const ttFirsNeue = localFont({
  src: [
    {
      path: './fonts/TTFirsNeue-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TTFirsNeue-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-tt-firs-neue',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Masspers',
    default: 'Masspers',
  },
  description:
    'Quick generation of video messages that can communicate with the recipient',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru" className={ttFirsNeue.variable}>
      <body className={ttFirsNeue.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
