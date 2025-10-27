export const metadata = {
  title: "Contact Us - Stopwatch.lol",
  description: "Get in touch with the Stopwatch.lol team. We're here to help with your questions and feedback about our precision timing tools.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300 mb-4">
                Have questions or feedback? We'd love to hear from you. Our team is here to help with any inquiries about our stopwatch and timing solutions.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:contact@stopwatch.lol" className="text-blue-300 hover:text-blue-200">
                    contact@stopwatch.lol
                  </a>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com/stopwatchlol" className="text-blue-300 hover:text-blue-200">Twitter</a>
                    <a href="https://github.com/stopwatchlol" className="text-blue-300 hover:text-blue-200">GitHub</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">Quick Support</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">Response Time</h3>
                <p className="text-gray-300">We typically respond to inquiries within 24 hours during business days.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Technical Support</h3>
                <p className="text-gray-300">For technical issues, please include your browser and device information.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}