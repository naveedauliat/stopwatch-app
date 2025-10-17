import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Online Stopwatch – Free & Simple Timer, No Ads, No Signup",
    template: "%s | Stopwatch.lol",
  },
  description: "A free, simple, and accurate online stopwatch and timer. Start, stop, and reset instantly – no downloads required. For workouts, study sessions, and more.",
  keywords: [
    "online stopwatch", "free stopwatch", "stopwatch timer",
    "timer online", "stopwatch for study", "stopwatch for workout",
    "laps", "reset"
  ],
  authors: [{ name: "Your Name" }],
  metadataBase: new URL("https://stopwatch.lol"),
  alternates: {
    canonical: "https://www.stopwatch.lol/",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#1e293b",
  openGraph: {
    title: "Online Stopwatch – Free & Simple Timer",
    description: "A free, simple, and accurate online stopwatch and timer. Start, stop, and reset instantly – no downloads required.",
    url: "https://stopwatch.lol/",
    siteName: "Stopwatch.lol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Stopwatch – Free & Simple Timer",
    description: "A free, simple, and accurate online stopwatch and timer. Start, stop, and reset instantly – no downloads required.",
  },
};

// ✅ viewport can also be handled by Next.js
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />

        {/* ✅ Analytics scripts stay here (not in metadata) */}
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
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="c+AOAwm4irUYx0afNWNcBw" async></script>

        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Online Stopwatch",
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
                  acceptedAnswer: { "@type": "Answer", text: "Yes, Stopwatch.lol uses precise browser timing functions to keep time as accurately as your device allows." }
                },
                {
                  "@type": "Question",
                  name: "Can I use this stopwatch on my phone?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, Stopwatch.lol is fully responsive and works on all modern smartphones, tablets, and desktops." }
                },
                {
                  "@type": "Question",
                  name: "Does the stopwatch work in the background?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, the stopwatch is designed to keep accurate time even if you switch tabs or minimize your browser." }
                },
                {
                  "@type": "Question",
                  name: "Is Stopwatch.lol free to use?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, Stopwatch.lol is completely free and does not require any downloads or registration." }
                },
                {
                  "@type": "Question",
                  name: "Can I record lap times?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes, you can record and view lap times with the Lap button." }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  )
}
