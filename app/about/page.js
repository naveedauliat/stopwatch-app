export const metadata = {
  title: "About Us - Stopwatch.lol",
  description: "Learn about our mission to provide precise, AI-enhanced timing solutions. Discover the team and technology behind Stopwatch.lol.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8">About Stopwatch.lol</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At Stopwatch.lol, we&apos;re dedicated to providing the most accurate and user-friendly timing solution on the web. 
              Our AI-enhanced stopwatch combines precision timing with intelligent features to deliver an exceptional user experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Technology</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">AI Enhancement</h3>
                <p className="text-gray-300">
                  Our stopwatch utilizes machine learning algorithms to ensure precise timing and intelligent background operation.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Modern Stack</h3>
                <p className="text-gray-300">
                  Built with Next.js and React, featuring real-time updates and seamless performance across all devices.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>High-precision timing mechanism</li>
              <li>Background operation support</li>
              <li>Lap time recording and analysis</li>
              <li>Digital and analog displays</li>
              <li>Cross-platform compatibility</li>
              <li>Intelligent performance optimization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment</h2>
            <p className="text-gray-300">
              We&apos;re committed to maintaining a free, ad-free service while continuously improving our features and accuracy. 
              Your timing needs are our top priority, and we&apos;re constantly working to enhance your experience.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}