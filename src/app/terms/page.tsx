import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Nourishr",
  description: "Terms of Service for Nourishr - Your AI Meal Companion",
};

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          <p className="text-white/80 mt-2">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the Nourishr application (&quot;App&quot;) and related
              services (collectively, the &quot;Service&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you do not agree to these
              Terms, please do not use the Service.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              These Terms constitute a legally binding agreement between you and
              Nourishr (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your use
              of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nourishr is an AI-powered meal recommendation application that helps
              users decide what to eat based on their preferences, dietary
              restrictions, mood, and available ingredients. The Service includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Personalized meal recommendations</li>
              <li>Restaurant and dish suggestions</li>
              <li>Recipe recommendations for home cooking</li>
              <li>Dietary preference management</li>
              <li>Integration with food delivery services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. User Accounts
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To access certain features of the Service, you may be required to
              create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as necessary</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Acceptable Use
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the Service</li>
              <li>Use automated systems to access the Service without permission</li>
              <li>Collect user information without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Service and its original content, features, and functionality are
              owned by Nourishr and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              You may not copy, modify, distribute, sell, or lease any part of our
              Service or included software, nor may you reverse engineer or attempt
              to extract the source code of that software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Service may contain links to or integrate with third-party
              websites, services, or applications (such as food delivery platforms).
              We are not responsible for the content, privacy policies, or practices
              of these third parties. Your use of such services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT
              THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Nourishr does not provide medical or nutritional advice. Always
              consult with a healthcare professional regarding dietary decisions,
              especially if you have allergies, medical conditions, or specific
              nutritional needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOURISHR SHALL NOT BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY
              OR INDIRECTLY.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Indemnification
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify and hold harmless Nourishr and its officers,
              directors, employees, and agents from any claims, damages, losses, or
              expenses arising from your use of the Service or violation of these
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Modifications to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify
              users of any material changes by posting the updated Terms on the App
              and updating the &quot;Last updated&quot; date. Your continued use of the
              Service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your access to the Service immediately,
              without prior notice or liability, for any reason, including breach of
              these Terms. Upon termination, your right to use the Service will
              immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the
              laws of the United States, without regard to its conflict of law
              provisions. Any disputes arising from these Terms shall be resolved in
              the courts of the United States.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
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
