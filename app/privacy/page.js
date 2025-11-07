export const metadata = {
  title: "Privacy Policy - Stopwatch.lol",
  description: "Privacy policy for Stopwatch.lol. Learn how we protect your data and what information we collect when you use our timer.",
  openGraph: {
    title: "Privacy Policy - Stopwatch.lol",
    description: "Privacy policy for Stopwatch.lol. Learn how we protect your data and privacy.",
    type: "website",
    url: "https://stopwatch.lol/privacy"
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Stopwatch.lol",
    description: "Privacy policy for Stopwatch.lol. Learn how we protect your data and privacy."
  },
  alternates: {
    canonical: "https://stopwatch.lol/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/80">
              Last updated: November 8, 2024
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 px-4 py-2 rounded-full border border-green-400/30 mt-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-sm">Privacy-First Design</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Privacy Overview */}
            <section className="bg-blue-500/10 rounded-xl p-6 border border-blue-400/20">
              <h2 className="text-xl font-bold text-blue-200 mb-3">🔒 Your Privacy Matters</h2>
              <p className="text-white/90">
                Stopwatch.lol is designed with privacy in mind. We collect minimal data, 
                operate primarily offline, and prioritize your privacy above all else. 
                Most features work without any data collection.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">1</span>
                Information We Collect
              </h2>
              <div className="text-white/90 space-y-4">
                <h3 className="text-lg font-semibold text-white">Automatically Collected Information</h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Usage Analytics:</strong> Basic website usage statistics (page views, session duration)</li>
                    <li><strong>Technical Data:</strong> Browser type, device type, screen resolution for optimization</li>
                    <li><strong>Performance Data:</strong> Load times and error reports to improve service quality</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold text-white">Information You Provide</h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Newsletter Subscription:</strong> Email address (only if you subscribe)</li>
                    <li><strong>Contact Forms:</strong> Name and email when you contact us</li>
                    <li><strong>Feedback:</strong> Any feedback or suggestions you provide</li>
                  </ul>
                </div>

                <h3 className="text-lg font-semibold text-white">Local Storage</h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Timing Data:</strong> Stored locally on your device for offline functionality</li>
                    <li><strong>User Preferences:</strong> Settings and customizations saved locally</li>
                    <li><strong>Session Data:</strong> Temporary data for current timing sessions</li>
                  </ul>
                  <p className="text-white/70 text-sm mt-2">
                    <em>Note: Local storage remains on your device and is not transmitted to our servers.</em>
                  </p>
                </div>
              </div>
            </section>

            {/* 2. How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">2</span>
                How We Use Your Information
              </h2>
              <div className="text-white/90 space-y-4">
                <p>We use the collected information for the following purposes:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-400/20">
                    <h4 className="font-semibold text-green-200 mb-2">✅ Service Improvement</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Optimize performance and accuracy</li>
                      <li>• Fix bugs and technical issues</li>
                      <li>• Enhance user experience</li>
                    </ul>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/20">
                    <h4 className="font-semibold text-blue-200 mb-2">📊 Analytics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Understand usage patterns</li>
                      <li>• Measure feature popularity</li>
                      <li>• Plan future improvements</li>
                    </ul>
                  </div>
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/20">
                    <h4 className="font-semibold text-purple-200 mb-2">📧 Communication</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Send newsletter updates (opt-in only)</li>
                      <li>• Respond to support requests</li>
                      <li>• Notify about important changes</li>
                    </ul>
                  </div>
                  <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-400/20">
                    <h4 className="font-semibold text-orange-200 mb-2">🔒 Security</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Prevent abuse and spam</li>
                      <li>• Maintain service security</li>
                      <li>• Protect user data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">3</span>
                Information Sharing and Disclosure
              </h2>
              <div className="text-white/90 space-y-4">
                <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/20">
                  <h4 className="font-semibold text-red-200 mb-2">🚫 We DO NOT Sell Your Data</h4>
                  <p className="text-sm">
                    We never sell, rent, or trade your personal information to third parties for commercial purposes.
                  </p>
                </div>

                <p>We may share your information only in these limited circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> Trusted third-party services that help operate our website (analytics, hosting)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfer:</strong> In case of merger, acquisition, or asset sale (users will be notified)</li>
                  <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
                </ul>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Third-Party Services We Use:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Analytics:</strong> Google Analytics (anonymized data)</li>
                    <li>• <strong>Hosting:</strong> Vercel (for website hosting)</li>
                    <li>• <strong>Email:</strong> Newsletter service provider (if you subscribe)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">4</span>
                Data Security
              </h2>
              <div className="text-white/90 space-y-4">
                <p>We implement appropriate security measures to protect your information:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">🔐 Technical Safeguards</h4>
                    <ul className="text-sm space-y-1">
                      <li>• HTTPS encryption for all data transmission</li>
                      <li>• Secure hosting infrastructure</li>
                      <li>• Regular security updates and monitoring</li>
                      <li>• Access controls and authentication</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">📋 Administrative Safeguards</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Limited access to personal data</li>
                      <li>• Employee privacy training</li>
                      <li>• Regular privacy policy reviews</li>
                      <li>• Incident response procedures</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/70 text-sm">
                  <em>Note: No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</em>
                </p>
              </div>
            </section>

            {/* 5. Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">5</span>
                Your Privacy Rights
              </h2>
              <div className="text-white/90 space-y-4">
                <p>You have the following rights regarding your personal information:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-400/20">
                      <h4 className="font-semibold text-blue-200">📋 Access</h4>
                      <p className="text-sm">Request copies of your personal data</p>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-3 border border-green-400/20">
                      <h4 className="font-semibold text-green-200">✏️ Rectification</h4>
                      <p className="text-sm">Request correction of inaccurate data</p>
                    </div>
                    <div className="bg-red-500/10 rounded-lg p-3 border border-red-400/20">
                      <h4 className="font-semibold text-red-200">🗑️ Erasure</h4>
                      <p className="text-sm">Request deletion of your data</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-400/20">
                      <h4 className="font-semibold text-orange-200">⏸️ Restriction</h4>
                      <p className="text-sm">Request limitation of data processing</p>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-400/20">
                      <h4 className="font-semibold text-purple-200">📤 Portability</h4>
                      <p className="text-sm">Request transfer of your data</p>
                    </div>
                    <div className="bg-gray-500/10 rounded-lg p-3 border border-gray-400/20">
                      <h4 className="font-semibold text-gray-200">❌ Objection</h4>
                      <p className="text-sm">Object to data processing</p>
                    </div>
                  </div>
                </div>
                <p>To exercise these rights, contact us at <strong>privacy@stopwatch.lol</strong></p>
              </div>
            </section>

            {/* 6. Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">6</span>
                Cookies and Tracking
              </h2>
              <div className="text-white/90 space-y-4">
                <p>We use minimal cookies and tracking technologies:</p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">🍪 Cookie Types:</h4>
                  <ul className="space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage (anonymized)</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>
                <p>You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
              </div>
            </section>

            {/* 7. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">7</span>
                Children's Privacy
              </h2>
              <div className="text-white/90 space-y-4">
                <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-400/20">
                  <p>
                    Our service is safe for children and does not knowingly collect personal information from children under 13. 
                    The stopwatch functionality works without any data collection, making it safe for educational use.
                  </p>
                </div>
                <p>
                  If we discover that a child under 13 has provided us with personal information, 
                  we will delete such information immediately. If you believe a child has provided 
                  personal information, please contact us at privacy@stopwatch.lol.
                </p>
              </div>
            </section>

            {/* 8. Changes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">8</span>
                Changes to Privacy Policy
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Updating the "Last updated" date</li>
                  <li>Sending an email notification (if you're subscribed to our newsletter)</li>
                  <li>Displaying a notice on our website for significant changes</li>
                </ul>
                <p>
                  Your continued use of the service after changes become effective constitutes acceptance of the revised Privacy Policy.
                </p>
              </div>
            </section>

            {/* 9. Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center text-blue-300 text-sm font-bold">9</span>
                Contact Us
              </h2>
              <div className="text-white/90 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">📧 Email</h4>
                      <p>privacy@stopwatch.lol</p>
                      <p className="text-white/70 text-sm">For privacy-related inquiries</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">🌐 Website</h4>
                      <p>https://stopwatch.lol</p>
                      <p className="text-white/70 text-sm">Visit our main website</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white/70 text-sm">
                      <strong>Response Time:</strong> We typically respond to privacy inquiries within 48 hours.
                    </p>
                  </div>
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