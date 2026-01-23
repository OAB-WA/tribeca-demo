import { DM_Sans } from 'next/font/google'

// Self-hosted via next/font (no runtime Google Fonts request)
export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

