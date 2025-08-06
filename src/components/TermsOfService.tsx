import React from 'react';
import { ArrowLeft, FileText, Scale } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl">
              <Scale className="h-8 w-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              <p className="text-gray-300">Last updated: January 2025</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using FutureCode's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
              <p className="text-gray-300 mb-4">
                FutureCode provides software development services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Custom software development</li>
                <li>Web and mobile application development</li>
                <li>AI and machine learning solutions</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Cybersecurity consulting and implementation</li>
                <li>Technical consulting and support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Project Terms</h2>
              <p className="text-gray-300 mb-4">
                All projects are governed by individual contracts that specify:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Project scope and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment terms and schedule</li>
                <li>Intellectual property rights</li>
                <li>Support and maintenance terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms are specified in individual project contracts. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>50% deposit required to begin work</li>
                <li>Remaining balance due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are in USD unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                Upon full payment, clients receive ownership of custom-developed code and assets, excluding:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Third-party libraries and frameworks</li>
                <li>FutureCode's proprietary tools and methodologies</li>
                <li>Pre-existing intellectual property</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                FutureCode's liability is limited to the amount paid for services. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Indirect or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Data loss not caused by our negligence</li>
                <li>Third-party service interruptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
              <p className="text-gray-300 mb-4">
                Either party may terminate services with written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Client pays for work completed to date</li>
                <li>FutureCode delivers completed work products</li>
                <li>Confidentiality obligations continue</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <p className="text-gray-300">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-green-400">Email: legal@futurecode.dev</p>
                <p className="text-green-400">Phone: +1 (555) 123-FUTURE</p>
                <p className="text-gray-300">Address: Innovation District, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;