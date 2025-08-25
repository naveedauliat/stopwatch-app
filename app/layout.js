import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Professional Stopwatch - High Precision Timer',
  description: 'Professional stopwatch application with analog and digital displays, lap timing, and precision controls.',
  keywords: 'stopwatch, timer, precision timer, lap timer, analog clock, digital clock',
  author: 'Your Name',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e293b" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}