import Stopwatch from "./components/stopwatch";

export const metadata = {
  title: "AI Stopwatch - Free Online Timer with Lap Counter",
  description: "Professional AI-enhanced stopwatch with millisecond precision, lap counter, and smart timing. Free, accurate, works offline.",
  keywords: [
    "AI stopwatch",
    "online timer",
    "precision stopwatch",
    "lap counter",
    "split timer",
    "free stopwatch",
    "accurate timer",
    "sports timer",
    "workout stopwatch",
    "millisecond timer"
  ],
  openGraph: {
    title: "AI Stopwatch - Free Online Timer with Lap Counter",
    description: "Professional AI-enhanced stopwatch with millisecond precision, lap counter, and smart timing. Free, accurate, works offline.",
    type: "website",
    url: "https://stopwatch.lol",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Stopwatch.lol - AI-Enhanced Online Timer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Stopwatch - Free Online Timer with Lap Counter",
    description: "Professional AI-enhanced stopwatch with millisecond precision and smart features. Free, accurate, works offline."
  },
  alternates: {
    canonical: "https://stopwatch.lol"
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://stopwatch.lol/#webpage",
    url: "https://stopwatch.lol/",
    name: "AI-Enhanced Online Stopwatch - Free Precision Timer",
    isPartOf: {
      "@id": "https://stopwatch.lol/#website"
    },
    about: {
      "@id": "https://stopwatch.lol/#webapp"
    },
    datePublished: "2023-01-01T00:00:00+00:00",
    dateModified: "2024-11-07T00:00:00+00:00",
    description: "Professional-grade online stopwatch with AI-powered millisecond precision, lap counter, split times, and smart background operation.",
    breadcrumb: {
      "@id": "https://stopwatch.lol/#breadcrumb"
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://stopwatch.lol/"]
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this AI stopwatch accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our AI-enhanced stopwatch uses advanced algorithms and browser timing functions to achieve millisecond precision, making it more accurate than traditional digital stopwatches."
        }
      },
      {
        "@type": "Question",
        name: "How does the AI enhance the stopwatch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI technology optimizes timing accuracy, provides intelligent lap analysis, ensures precise background operation, and compensates for browser timing variations to deliver professional-grade precision."
        }
      },
      {
        "@type": "Question",
        name: "Can I use this stopwatch on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the stopwatch is fully responsive and optimized for all devices including smartphones, tablets, and desktops with touch-friendly controls."
        }
      },
      {
        "@type": "Question",
        name: "Does the stopwatch work offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, once loaded, the stopwatch works offline and maintains accuracy even without an internet connection."
        }
      },
      {
        "@type": "Question",
        name: "Can I record lap times and splits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can record unlimited lap times and view detailed split time analysis with our advanced timing features."
        }
      },
      {
        "@type": "Question",
        name: "Is the stopwatch free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Stopwatch.lol is completely free with no downloads, registration, or hidden fees required."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-8" itemScope itemType="https://schema.org/SoftwareApplication">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" itemProp="name">
            AI-Enhanced Online Stopwatch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" itemProp="description">
            Professional-grade stopwatch with AI-powered millisecond precision, smart lap counter, 
            and intelligent timing features. Free, accurate, and works everywhere.
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="bg-white/10 px-3 py-1 rounded-full">✨ AI-Powered Precision</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">⚡ Millisecond Accuracy</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🏃‍♂️ Smart Lap Counter</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">📱 Works Offline</span>
          </div>
        </div>

        <div itemProp="applicationCategory" content="UtilityApplication" style={{display: 'none'}}></div>
        <div itemProp="operatingSystem" content="Any" style={{display: 'none'}}></div>
        
        <Stopwatch />
        
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our AI-Enhanced Stopwatch?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">🎯 AI-Powered Precision</h3>
              <p className="text-white/90">
                Advanced algorithms ensure millisecond accuracy, surpassing traditional digital stopwatches.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">📊 Smart Analytics</h3>
              <p className="text-white/90">
                Intelligent lap analysis and timing insights help you track and improve performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">🔄 Background Operation</h3>
              <p className="text-white/90">
                Smart background timing ensures accuracy even when you switch tabs or apps.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">📱 Universal Compatibility</h3>
              <p className="text-white/90">
                Works perfectly on all devices - desktop, tablet, and mobile with responsive design.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">🚀 Instant & Free</h3>
              <p className="text-white/90">
                No downloads, no registration, no fees. Start timing instantly in your browser.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">🎯 Professional Features</h3>
              <p className="text-white/90">
                Lap counter, split times, pause/resume, and data export for serious athletes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
