import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Nourishr",
  description: "Privacy Policy for Nourishr - Your AI Meal Companion",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/80 mt-2">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nourishr (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our mobile application
              and related services (collectively, the &quot;Service&quot;).
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Please read this Privacy Policy carefully. By using the Service, you
              agree to the collection and use of information in accordance with
              this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.1 Personal Information
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We may collect personally identifiable information that you
              voluntarily provide, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Name and email address</li>
              <li>Profile information and preferences</li>
              <li>Dietary restrictions and allergies</li>
              <li>Location data (with your permission)</li>
              <li>Payment information (processed securely by third parties)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.2 Usage Information
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We automatically collect certain information when you use the
              Service:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Device information (type, operating system, unique identifiers)</li>
              <li>Log data (access times, pages viewed, app crashes)</li>
              <li>Usage patterns and preferences</li>
              <li>Meal selections and search history</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.3 Cookies and Tracking Technologies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to track activity
              on our Service and hold certain information. See our Cookie Policy
              for more details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>To provide and maintain the Service</li>
              <li>To personalize your meal recommendations</li>
              <li>To improve our AI algorithms and user experience</li>
              <li>To communicate with you about updates and promotions</li>
              <li>To process transactions and send related information</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                <strong>Service Providers:</strong> With third-party vendors who
                assist in providing the Service
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger,
                acquisition, or sale of assets
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>With Your Consent:</strong> For any other purpose with your
                explicit consent
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication measures</li>
              <li>Secure data storage practices</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              However, no method of transmission over the Internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a longer
              retention period is required by law. When your data is no longer
              needed, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to delete your data</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:nidrosoft@outlook.com"
                className="text-emerald-600 hover:text-emerald-700"
              >
                nidrosoft@outlook.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Service is not intended for children under 13 years of age. We do
              not knowingly collect personal information from children under 13. If
              you are a parent or guardian and believe your child has provided us
              with personal information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place to
              protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page and
              updating the &quot;Last updated&quot; date. You are advised to review this
              Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact
              us:
            </p>
            <p className="text-gray-900 font-medium mt-2">
              Email:{" "}
              <a
                href="mailto:nidrosoft@outlook.com"
                className="text-emerald-600 hover:text-emerald-700"
              >
                nidrosoft@outlook.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
