import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  //title: 'Professional Stopwatch - High Precision Timer',
  //description: 'Professional stopwatch application with analog and digital displays, lap timing, and precision controls.',
  //keywords: 'stopwatch, timer, precision timer, lap timer, analog clock, digital clock',
  author: 'Your Name',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-S5KZMZMEM7"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S5KZMZMEM7');
              `,
            }}
          />

        <title>Online Stopwatch – Free & Simple Timer | Stopwatch.lol</title>
        <meta name="description" content="A free, simple, and accurate online stopwatch and timer. Start, stop, and reset your stopwatch instantly – no downloads required. Perfect for studying, workouts, cooking, and productivity." />
        <meta name="keywords" content="online stopwatch, free stopwatch, stopwatch timer, timer online, stopwatch for study, stopwatch for workout, stopwatch online, timer, laps, reset" />
        <link rel="canonical" href="https://stopwatch.lol/" />
        <link rel="icon" href="/favicon.ico" />
        
        <meta name="theme-color" content="#1e293b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

                <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Stopwatch.lol",
              url: "https://stopwatch.lol",
              applicationCategory: "Utility",
              operatingSystem: "Any",
              description: "A free, simple, and accurate online stopwatch and timer. Start, stop, and reset instantly.",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
          "@type": "Question",
          name: "Is this stopwatch accurate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Stopwatch.lol uses precise browser timing functions to keep time as accurately as your device allows."
          }
        },
        {
          "@type": "Question",
          name: "Can I use this stopwatch on my phone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Stopwatch.lol is fully responsive and works on all modern smartphones, tablets, and desktops."
          }
        },
        {
          "@type": "Question",
          name: "Does the stopwatch work in the background?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, the stopwatch is designed to keep accurate time even if you switch tabs or minimize your browser."
          }
        },
        {
          "@type": "Question",
          name: "Is Stopwatch.lol free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Stopwatch.lol is completely free and does not require any downloads or registration."
          }
        },
        {
          "@type": "Question",
          name: "Can I record lap times?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you can record and view lap times with the Lap button."
          }
        }
      ]
    }),
  }}
        />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="c+AOAwm4irUYx0afNWNcBw" async></script>
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}