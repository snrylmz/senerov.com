import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
 })


 export const metadata = {
  title: 'Şener Yılmaz',
  description: 'Frontend Developer, curious',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
