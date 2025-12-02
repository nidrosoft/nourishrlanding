import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Compliance | Nourishr",
  description: "GDPR Compliance Information for Nourishr - Your AI Meal Companion",
};

export default function GDPRCompliance() {
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
          <h1 className="text-4xl font-bold text-white">GDPR Compliance</h1>
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
              Nourishr is committed to protecting the privacy and rights of
              individuals in the European Union (EU) and European Economic Area
              (EEA) in accordance with the General Data Protection Regulation
              (GDPR).
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              This page outlines how we comply with GDPR requirements and explains
              your rights as a data subject.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Data Controller
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nourishr acts as the data controller for personal data collected
              through our Service. This means we determine the purposes and means
              of processing your personal data.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-900 font-medium">Contact Information:</p>
              <p className="text-gray-600 mt-2">
                Email:{" "}
                <a
                  href="mailto:nidrosoft@outlook.com"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  nidrosoft@outlook.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Legal Basis for Processing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Under GDPR, we process your personal data based on the following
              legal grounds:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-3">
              <li>
                <strong>Consent:</strong> When you have given clear consent for us
                to process your personal data for specific purposes
              </li>
              <li>
                <strong>Contract:</strong> When processing is necessary to fulfill
                our contractual obligations to you
              </li>
              <li>
                <strong>Legitimate Interests:</strong> When processing is necessary
                for our legitimate business interests, provided these do not
                override your rights
              </li>
              <li>
                <strong>Legal Obligation:</strong> When we need to comply with a
                legal requirement
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Your Rights Under GDPR
            </h2>
            <p className="text-gray-600 leading-relaxed">
              As a data subject under GDPR, you have the following rights:
            </p>

            <div className="space-y-4 mt-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Right to Access (Article 15)
                </h3>
                <p className="text-gray-600">
                  You have the right to obtain confirmation of whether we process
                  your personal data and to access that data along with information
                  about how it is processed.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Right to Rectification (Article 16)
                </h3>
                <p className="text-gray-600">
                  You have the right to have inaccurate personal data corrected and
                  incomplete data completed.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Right to Erasure (Article 17)
                </h3>
                <p className="text-gray-600">
                  Also known as the &quot;right to be forgotten,&quot; you can request the
                  deletion of your personal data under certain circumstances.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Right to Restrict Processing (Article 18)
                </h3>
                <p className="text-gray-600">
                  You can request that we limit the processing of your personal
                  data under certain conditions.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Right to Data Portability (Article 20)
                </h3>
                <p className="text-gray-600">
                  You have the right to receive your personal data in a structured,
                  commonly used, and machine-readable format.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Right to Object (Article 21)
                </h3>
                <p className="text-gray-600">
                  You can object to the processing of your personal data for direct
                  marketing purposes or when processing is based on legitimate
                  interests.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Right to Withdraw Consent (Article 7)
                </h3>
                <p className="text-gray-600">
                  Where processing is based on consent, you have the right to
                  withdraw that consent at any time.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. How to Exercise Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To exercise any of your GDPR rights, please contact us at:
            </p>
            <div className="bg-emerald-50 rounded-xl p-6 mt-4">
              <p className="text-gray-900 font-medium">
                Email:{" "}
                <a
                  href="mailto:nidrosoft@outlook.com"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  nidrosoft@outlook.com
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                Please include &quot;GDPR Request&quot; in your subject line and provide
                sufficient information for us to verify your identity.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              We will respond to your request within 30 days. In complex cases, we
              may extend this period by an additional 60 days, but we will inform
              you of any such extension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Data Protection Measures
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to
              ensure a level of security appropriate to the risk, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Encryption of personal data</li>
              <li>Regular testing and evaluation of security measures</li>
              <li>Access controls and authentication</li>
              <li>Staff training on data protection</li>
              <li>Data minimization practices</li>
              <li>Regular security audits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. International Data Transfers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When we transfer personal data outside the EU/EEA, we ensure
              appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Transfers to countries with adequate data protection laws</li>
              <li>Binding Corporate Rules where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Data Breach Notification
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In the event of a personal data breach that is likely to result in a
              risk to your rights and freedoms, we will:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                Notify the relevant supervisory authority within 72 hours of
                becoming aware of the breach
              </li>
              <li>
                Communicate the breach to affected individuals without undue delay
                if the breach is likely to result in a high risk
              </li>
              <li>Document all breaches and our response actions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Supervisory Authority
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you believe that our processing of your personal data violates
              GDPR, you have the right to lodge a complaint with a supervisory
              authority in the EU member state of your habitual residence, place of
              work, or place of the alleged infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions about our GDPR compliance or to exercise your
              rights, please contact us:
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
