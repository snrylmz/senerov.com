import './globals.css'
import { Analytics } from '@vercel/analytics/react';

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: [
    {
      path: '../fonts/iAWriterQuattroS-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/iAWriterQuattroS-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})

 export const metadata = {
  title: 'Şener Yılmaz',
  description: 'Frontend Developer, curious',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={myFont.className}>{children} <Analytics /></body>
    </html>
  )
}
