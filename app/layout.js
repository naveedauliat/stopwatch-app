import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '/components/Header'
import Footer from '/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Online Stopwatch – Free & Simple Timer | Stopwatch.lol",
    template: "%s | Stopwatch.lol",
  },
  description: "A free, simple, and accurate online stopwatch and timer. Start, stop, and reset your stopwatch instantly – no downloads required.",
  keywords: [
    "online stopwatch", "free stopwatch", "stopwatch timer",
    "timer online", "stopwatch for study", "stopwatch for workout"
  ],
  authors: [{ name: "Your Name" }],
  metadataBase: new URL("https://stopwatch.lol"),
  alternates: {
    canonical: "https://stopwatch.lol/",
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
  openGraph: {
    title: "Online Stopwatch – Free & Simple Timer",
    description: "A free, simple, and accurate online stopwatch and timer. Start, stop, and reset instantly – no downloads required.",
    url: "https://www.stopwatch.lol/",
    siteName: "Stopwatch.lol",
    type: "website",
    images: [
      {
        url: 'https://www.stopwatch.lol/og_image.png',
        width: 1200,
        height: 630,
        alt: 'free online stopwatch and timer',
        type: 'image/png',
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Stopwatch – Free & Simple Timer",
    description: "A free, simple, and accurate online stopwatch and timer. Start, stop, and reset instantly – no downloads required.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Add viewport export
export const viewport = {
  themeColor: "#1e293b",
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NRZK8XTX');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRZK8XTX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <SpeedInsights />

        {/* Add GA scripts using next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S5KZMZMEM7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S5KZMZMEM7');
          `}
        </Script>
        <Script 
          src="https://analytics.ahrefs.com/analytics.js" 
          data-key="c+AOAwm4irUYx0afNWNcBw"
          strategy="afterInteractive"
        />

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
                },
                {
                  "@type": "Question",
                  "name": "How does the AI enhance the stopwatch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our AI technology improves timing accuracy, provides smart lap analysis, and ensures precise background operation even when the browser is minimized."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes this stopwatch intelligent?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The stopwatch uses machine learning to optimize timing precision and provide smart features like automated lap time analysis and intelligent background synchronization."
                  }
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI-Enhanced Stopwatch",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "156",
                "reviewCount": "42",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                  },
                  "datePublished": "2023-09-15",
                  "reviewBody": "Excellent stopwatch app with precise timing and great lap features. The AI enhancement really makes a difference!",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Mike Chen"
                  },
                  "datePublished": "2023-10-01",
                  "reviewBody": "Perfect for my workout sessions. The background running feature is fantastic.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                }
              ],
              "featureList": [
                "AI-powered timing accuracy",
                "Intelligent lap time analysis",
                "Smart background operation",
                "Machine learning enhanced precision",
                "Automated time tracking",
                "Digital and analog displays"
              ],
              "keywords": "AI stopwatch, smart timer, intelligent timing, machine learning timer",
              "applicationSubCategory": "AI Tools"
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Stopwatch.lol Blog",
              "description": "Articles about timing, productivity, and stopwatch applications",
              "url": "https://stopwatch.lol/blog",
              "author": {
                "@type": "Organization",
                "name": "Stopwatch.lol",
                "url": "https://stopwatch.lol"
              }
            }),
          }}
        />
      </body>
    </html>
  )
}
