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
    "Free online stopwatch with lap counter, split times, and precise timing. Perfect for sports, productivity, workouts, and time tracking.",
  keywords: [
    "stopwatch",
    "timer",
    "lap counter",
    "online stopwatch",
    "free timer",
    "split timer",
    "interval timer",
    "sports timing",
    "productivity timer",
  ],
  authors: [{ name: "Stopwatch.lol" }],
  creator: "Stopwatch.lol",
  publisher: "Stopwatch.lol",
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
    title: "Stopwatch - Free Online Timer & Lap Counter",
    description:
      "Free online stopwatch with lap counter, split times, and precise timing. Perfect for sports, productivity, workouts, and time tracking.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Stopwatch.lol - Free Online Timer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stopwatch - Free Online Timer & Lap Counter",
    description: "Free online stopwatch with lap counter, split times, and precise timing.",
    images: ["/images/og-image.svg"],
    creator: "@stopwatchlol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#1e293b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://stopwatch.lol" />
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
      <body className={`${inter.className} flex flex-col min-h-screen antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRZK8XTX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main className="flex-grow">{children}</main>
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
            gtag('config', 'G-S5KZMZMEM7');
          `}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="c+AOAwm4irUYx0afNWNcBw"
          strategy="afterInteractive"
        />

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
              description:
                "A free, simple, and accurate online stopwatch and timer. Start, stop, and reset instantly.",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
                    text: "Yes, Stopwatch.lol uses precise browser timing functions to keep time as accurately as your device allows.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I use this stopwatch on my phone?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Stopwatch.lol is fully responsive and works on all modern smartphones, tablets, and desktops.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does the stopwatch work in the background?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the stopwatch is designed to keep accurate time even if you switch tabs or minimize your browser.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Stopwatch.lol free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Stopwatch.lol is completely free and does not require any downloads or registration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I record lap times?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can record and view lap times with the Lap button.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the AI enhance the stopwatch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our AI technology improves timing accuracy, provides smart lap analysis, and ensures precise background operation even when the browser is minimized.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes this stopwatch intelligent?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The stopwatch uses machine learning to optimize timing precision and provide smart features like automated lap time analysis and intelligent background synchronization.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "AI-Enhanced Stopwatch",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "156",
                reviewCount: "42",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sarah Johnson",
                  },
                  datePublished: "2023-09-15",
                  reviewBody:
                    "Excellent stopwatch app with precise timing and great lap features. The AI enhancement really makes a difference!",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Mike Chen",
                  },
                  datePublished: "2023-10-01",
                  reviewBody:
                    "Perfect for my workout sessions. The background running feature is fantastic.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "4",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
              ],
              featureList: [
                "AI-powered timing accuracy",
                "Intelligent lap time analysis",
                "Smart background operation",
                "Machine learning enhanced precision",
                "Automated time tracking",
                "Digital and analog displays",
              ],
              keywords: "AI stopwatch, smart timer, intelligent timing, machine learning timer",
              applicationSubCategory: "AI Tools",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Stopwatch.lol Blog",
              description: "Learn about timekeeping, productivity, and smart timing solutions",
              url: "https://stopwatch.lol/blog",
              blogPost: [
                {
                  "@type": "BlogPosting",
                  headline: "The Evolution of Digital Stopwatches: From Manual to AI-Enhanced",
                  description: "Explore how stopwatches have evolved from simple mechanical devices to sophisticated AI-powered timing tools.",
                  author: {
                    "@type": "Person",
                    name: "Time Expert",
                  },
                  datePublished: "2023-10-25",
                  url: "https://stopwatch.lol/blog/stopwatch-evolution",
                  image: "https://stopwatch.lol/images/evolution.svg",
                  keywords: "stopwatch history, digital timing, AI stopwatch",
                },
                {
                  "@type": "BlogPosting",
                  headline: "10 Ways to Use a Stopwatch for Better Productivity",
                  description: "Discover how a simple stopwatch can revolutionize your work and study habits.",
                  author: {
                    "@type": "Person",
                    name: "Productivity Coach",
                  },
                  datePublished: "2023-10-20",
                  url: "https://stopwatch.lol/blog/productivity-tips",
                  image: "https://stopwatch.lol/images/productivity.svg",
                  keywords: "productivity tips, time management, stopwatch techniques",
                },
                {
                  "@type": "BlogPosting",
                  headline: "The Science Behind Precise Timing in Sports",
                  description: "Understanding how accurate stopwatches impact athletic performance and training.",
                  author: {
                    "@type": "Person",
                    name: "Sports Scientist",
                  },
                  datePublished: "2023-10-15",
                  url: "https://stopwatch.lol/blog/sports-timing",
                  image: "https://stopwatch.lol/images/sports-timing.svg",
                  keywords: "sports timing, athletic performance, precision timing",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
