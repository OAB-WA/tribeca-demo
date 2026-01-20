import { DM_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

// Performance Optimization: Load Font Awesome locally via next/font to prevent layout shift and improve loading
export const fontAwesomeSolid = localFont({
  src: '../public/webfonts/fa-solid-900.woff2',
  variable: '--font-fa-solid',
  display: 'block',
})

export const fontAwesomeBrands = localFont({
  src: '../public/webfonts/fa-brands-400.woff2',
  variable: '--font-fa-brands',
  display: 'block',
})

export const fontAwesomeRegular = localFont({
  src: '../public/webfonts/fa-regular-400.woff2',
  variable: '--font-fa-regular',
  display: 'block',
})
