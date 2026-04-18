import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://stopwatch.lol"),
  title: {
    default: "Stopwatch - Free Online Timer & Lap Counter",
    template: "%s | Stopwatch.lol",
  },
  description:
    "Free online stopwatch with lap counter, split times, and millisecond precision. Perfect for sports, productivity, workouts, and time tracking.",

  keywords: [
    "online stopwatch",
    "free stopwatch",
    "online timer",
    "lap counter",
    "split timer",
    "interval timer",
    "sports timing",
    "productivity timer",
    "workout timer",
    "digital timer",
    "millisecond timer",
    "precision timing",
    "stopwatch online",
    "countdown timer",
    "background timer",
  ],
  authors: [{ name: "Stopwatch.lol Team", url: "https://stopwatch.lol" }],
  creator: "Stopwatch.lol",
  publisher: "Stopwatch.lol",
  category: "Productivity Tools",
  classification: "Web Application",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stopwatch.lol",
    siteName: "Stopwatch.lol",
    title: "Free Online Stopwatch - Lap Counter & Millisecond Precision",
    description:
      "Professional-grade online stopwatch with millisecond precision, lap counter, and split times. Free, accurate, and works everywhere.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Stopwatch.lol - Free Online Stopwatch with Lap Counter",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Stopwatch - Lap Counter & Millisecond Precision",
    description:
      "Professional online stopwatch with millisecond precision, lap counter, and split times. Free and works everywhere.",
    images: ["/og_image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  verification: {
    other: {
      "msvalidate.01": "8A5A3C0DDDEB3C5FD46D17C1723BF37A",
    },
  },
  alternates: {
    canonical: "https://stopwatch.lol",
    languages: {
      "en-US": "https://stopwatch.lol",
    },
  },
  other: {
    "msapplication-TileColor": "#1e293b",
    "theme-color": "#1e293b",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e293b" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://stopwatch.lol/#website",
        url: "https://stopwatch.lol/",
        name: "Stopwatch.lol - Free Online Stopwatch",
        description:
          "Free online stopwatch with millisecond precision, lap counter, split times, and background operation.",
        publisher: {
          "@id": "https://stopwatch.lol/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://stopwatch.lol/#organization",
        name: "Stopwatch.lol",
        url: "https://stopwatch.lol/",
        logo: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": "https://stopwatch.lol/#/schema/logo/image/",
          url: "https://stopwatch.lol/images/og-image.svg",
          contentUrl: "https://stopwatch.lol/images/og-image.svg",
          width: 1200,
          height: 630,
          caption: "Stopwatch.lol",
        },
        image: {
          "@id": "https://stopwatch.lol/#/schema/logo/image/",
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://stopwatch.lol/#webapp",
        name: "Online Stopwatch",
        url: "https://stopwatch.lol/",
        applicationCategory: "UtilityApplication",
        applicationSubCategory: "Timer & Productivity Tools",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        softwareVersion: "2.0",
        dateCreated: "2023-01-01",
        dateModified: "2024-11-07",
        description:
          "Professional-grade free online stopwatch with millisecond precision, lap counter, split times, and background operation.",
        featureList: [
          "Millisecond precision timing",
          "Lap time recording",
          "Split time tracking",
          "Background operation",
          "Offline functionality",
          "Mobile responsive design",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        author: {
          "@id": "https://stopwatch.lol/#organization",
        },
        publisher: {
          "@id": "https://stopwatch.lol/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" itemScope itemType="https://schema.org/WebSite">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NRZK8XTX');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} flex flex-col min-h-screen antialiased`}
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRZK8XTX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main className="flex-grow" itemProp="mainContentOfPage">
          {children}
        </main>
        <Footer />
        <SpeedInsights />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S5KZMZMEM7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S5KZMZMEM7', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
          `}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="c+AOAwm4irUYx0afNWNcBw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
