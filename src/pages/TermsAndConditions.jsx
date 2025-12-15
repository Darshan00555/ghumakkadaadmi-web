import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-200">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-orange-400 transition-colors hover:text-orange-300"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Terms and Conditions</h1>
          <p className="text-slate-400">Last updated: December 15, 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8 leading-relaxed text-slate-300">
          {/* Introduction */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              Welcome to Ghumakkad Aadmi! These Terms and Conditions govern your use of our website
              and the content we provide. By accessing or using our website, you agree to be bound
              by these terms. If you do not agree with any part of these terms, please do not use
              our website.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">2. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and
              provision of this agreement. Additionally, when using particular services, you shall
              be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          {/* Use of Content */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">3. Use of Content</h2>
            <p className="mb-4">
              All content on this website, including but not limited to videos, images, text,
              graphics, and logos, is the property of Ghumakkad Aadmi or its content creators and is
              protected by copyright and intellectual property laws.
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>You may view and download content for personal, non-commercial use only</li>
              <li>
                You may not reproduce, distribute, or create derivative works without permission
              </li>
              <li>You may not use our content for commercial purposes without explicit consent</li>
              <li>Proper attribution must be given when sharing our content on social media</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              4. Intellectual Property Rights
            </h2>
            <p>
              All intellectual property rights in the website and its content (including but not
              limited to videos, photographs, text, graphics, logos, and software) are owned by
              Ghumakkad Aadmi or our licensors. Nothing in these terms grants you any legal rights
              in the website or content other than as necessary to enable you to access the website.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">5. User Responsibilities</h2>
            <p className="mb-4">When using our website, you agree to:</p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Not use the website for any unlawful purpose</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not transmit any viruses, malware, or harmful code</li>
              <li>Not harass, abuse, or harm other users</li>
              <li>Respect the intellectual property rights of others</li>
              <li>Provide accurate information when contacting us</li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services (such as YouTube,
              Instagram, or affiliate partners). We are not responsible for the content, privacy
              policies, or practices of any third-party sites. We encourage you to review the terms
              and privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">7. Disclaimers</h2>
            <p className="mb-4">
              The content on this website is provided for general information and entertainment
              purposes only:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>Travel information and recommendations are based on personal experiences</li>
              <li>We do not guarantee the accuracy, completeness, or timeliness of information</li>
              <li>Travel conditions, prices, and availability may change without notice</li>
              <li>
                Always verify information with official sources before making travel decisions
              </li>
              <li>We are not responsible for any travel-related incidents or losses</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Ghumakkad Aadmi shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or any loss of data,
              use, goodwill, or other intangible losses resulting from your use of the website or
              content.
            </p>
          </section>

          {/* Privacy and Data Protection */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              9. Privacy and Data Protection
            </h2>
            <p>
              Your use of our website is also governed by our Privacy Policy. We collect and process
              personal data in accordance with applicable data protection laws. By using our
              website, you consent to such processing and warrant that all data provided by you is
              accurate.
            </p>
          </section>

          {/* User-Generated Content */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">10. User-Generated Content</h2>
            <p>
              If you submit comments, feedback, or other content to us (via email, social media, or
              other channels), you grant us a non-exclusive, royalty-free, perpetual, and worldwide
              license to use, reproduce, modify, and display such content for promotional and
              business purposes.
            </p>
          </section>

          {/* Sponsorships and Affiliates */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              11. Sponsorships and Affiliate Disclosure
            </h2>
            <p>
              Some content on our website may include sponsored content or affiliate links. We will
              clearly disclose such relationships. Our opinions remain our own, and we only promote
              products or services we genuinely believe in.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">12. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be
              effective immediately upon posting to the website. Your continued use of the website
              after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">13. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the
              laws of India. Any disputes arising from these terms shall be subject to the exclusive
              jurisdiction of the courts in India.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">14. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
              <p className="mb-2">
                <strong className="text-white">Email:</strong>{' '}
                <a
                  href="mailto:hello@ghumakkadaadmi.in"
                  className="text-orange-400 hover:text-orange-300"
                >
                  hello@ghumakkadaadmi.in
                </a>
              </p>
              <p>
                <strong className="text-white">Website:</strong>{' '}
                <a href="https://darkwings.me" className="text-orange-400 hover:text-orange-300">
                  darkwings.me
                </a>
              </p>
            </div>
          </section>

          {/* Severability */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">15. Severability</h2>
            <p>
              If any provision of these Terms and Conditions is found to be invalid or
              unenforceable, the remaining provisions shall continue to be valid and enforceable to
              the fullest extent permitted by law.
            </p>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
          <p className="mb-6 text-slate-400">
            By using our website, you acknowledge that you have read and understood these Terms and
            Conditions.
          </p>
          <Link
            to="/"
            className="inline-block rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
