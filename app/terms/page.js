export const metadata = {
  title: "Terms of Service - Stopwatch.lol",
  description: "Terms of service and usage conditions for Stopwatch.lol online timer. Read our user agreement and service policies.",
  openGraph: {
    title: "Terms of Service - Stopwatch.lol",
    description: "Terms of service and usage conditions for Stopwatch.lol online timer.",
    type: "website",
    url: "https://stopwatch.lol/terms"
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Stopwatch.lol",
    description: "Terms of service and usage conditions for Stopwatch.lol online timer."
  },
  alternates: {
    canonical: "https://stopwatch.lol/terms"
  }
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-white/80">
              Last updated: November 8, 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* 1. Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">1</span>
                Agreement to Terms
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  By accessing and using Stopwatch.lol (&ldquo;Service&rdquo;), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service. This Terms of Service agreement applies to all users of the website.
                </p>
              </div>
            </section>

            {/* 2. Use License */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">2</span>
                Use License
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  Permission is granted to temporarily download one copy of Stopwatch.lol per device for personal, non-commercial transitory viewing only.
                </p>
                <p><strong>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</strong></p>
                <p>Under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </section>

            {/* 3. Service Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">3</span>
                Service Description
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  Stopwatch.lol provides a free online stopwatch and timing service with the following features:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI-enhanced precision timing</li>
                  <li>Lap counter and split timing</li>
                  <li>Offline functionality</li>
                  <li>Background operation</li>
                  <li>Educational blog content</li>
                  <li>Timing-based games and challenges</li>
                </ul>
                <p>
                  The service is provided &ldquo;as is&rdquo; without any guarantees of accuracy for critical timing applications.
                </p>
              </div>
            </section>

            {/* 4. Acceptable Use */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">4</span>
                Acceptable Use Policy
              </h2>
              <div className="text-white/90 space-y-4">
                <p>You agree not to use the service:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>For any unlawful purpose or to solicit unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                </ul>
              </div>
            </section>

            {/* 5. Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">5</span>
                Disclaimer
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  The materials on Stopwatch.lol are provided on an &lsquo;as is&rsquo; basis. Stopwatch.lol makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  <strong>Critical Timing Notice:</strong> While we strive for accuracy, this stopwatch should not be used for critical timing applications where precise measurement is essential for safety, competition results, or legal purposes.
                </p>
              </div>
            </section>

            {/* 6. Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">6</span>
                Limitations of Liability
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  In no event shall Stopwatch.lol or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Stopwatch.lol, even if Stopwatch.lol or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
                <p>
                  Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </div>
            </section>

            {/* 7. Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">7</span>
                Privacy Policy
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service.
                </p>
                <p>
                  By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </div>
            </section>

            {/* 8. Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">8</span>
                Modifications to Terms
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  Stopwatch.lol may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
                <p>
                  We will notify users of any material changes by posting a notice on our website or through other communication methods.
                </p>
              </div>
            </section>

            {/* 9. Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">9</span>
                Contact Information
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p><strong>Email:</strong> legal@stopwatch.lol</p>
                  <p><strong>Website:</strong> https://stopwatch.lol</p>
                  <p><strong>Last Updated:</strong> November 8, 2024</p>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12 pt-8 border-t border-white/20">
            <a 
              href="/"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Stopwatch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}