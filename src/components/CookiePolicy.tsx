import React from 'react';
import { ArrowLeft, Cookie, Settings } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex items-center space-x-4 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl">
              <Cookie className="h-8 w-8 text-orange-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Cookie Policy
                </span>
              </h1>
              <p className="text-gray-300">Last updated: January 2025</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>To ensure our website functions properly</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To improve user experience and website performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you such as setting privacy preferences or filling in forms.
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance.
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Functional Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and providing personalized content.
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Marketing Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies track visitors across websites to display relevant advertisements and measure the effectiveness of marketing campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-300 mb-4">
                We may use third-party services that set cookies on our website, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing functionality</li>
                <li>Customer support tools for chat functionality</li>
                <li>Email marketing services for newsletter subscriptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Managing Cookies</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
                <li>Privacy settings: Adjust privacy settings on social media platforms</li>
                <li>Contact us: Email us to request cookie preference changes</li>
              </ul>
              
              <div className="mt-6 p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Settings className="h-5 w-5 text-orange-400" />
                  <span className="font-semibold text-orange-400">Important Note</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Disabling certain cookies may affect the functionality of our website and your user experience.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes by posting the new policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-orange-400">Email: cookies@futurecode.dev</p>
                <p className="text-orange-400">Phone: +1 (555) 123-FUTURE</p>
                <p className="text-gray-300">Address: Innovation District, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;