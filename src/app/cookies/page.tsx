import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Nourishr",
  description: "Cookie Policy for Nourishr - Your AI Meal Companion",
};

export default function CookiePolicy() {
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
          <h1 className="text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="text-white/80 mt-2">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are placed on your device when you
              visit a website or use an application. They are widely used to make
              websites and apps work more efficiently and to provide information to
              the owners.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Cookies help us understand how you use Nourishr, remember your
              preferences, and improve your overall experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Types of Cookies We Use
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.1 Essential Cookies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              These cookies are necessary for the Service to function properly.
              They enable core functionality such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>User authentication and session management</li>
              <li>Security features and fraud prevention</li>
              <li>Remembering your login status</li>
              <li>Enabling basic app functionality</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.2 Functional Cookies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              These cookies allow us to remember your preferences and provide
              enhanced features:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Your dietary preferences and restrictions</li>
              <li>Language and region settings</li>
              <li>Customized meal recommendations</li>
              <li>Recently viewed restaurants and dishes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.3 Analytics Cookies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              These cookies help us understand how users interact with our Service:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Pages and features you visit most often</li>
              <li>How you navigate through the app</li>
              <li>Error messages you encounter</li>
              <li>Performance metrics and load times</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.4 Marketing Cookies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              These cookies may be used to deliver relevant advertisements and
              track the effectiveness of our marketing campaigns:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Personalized recommendations</li>
              <li>Promotional content based on your interests</li>
              <li>Social media integration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Third-Party Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may use third-party services that set their own cookies,
              including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                <strong>Google Analytics:</strong> For understanding user behavior
                and improving our Service
              </li>
              <li>
                <strong>Firebase:</strong> For app analytics and crash reporting
              </li>
              <li>
                <strong>Social Media Platforms:</strong> For sharing features and
                social login
              </li>
              <li>
                <strong>Payment Processors:</strong> For secure transaction
                processing
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. How Long Do Cookies Last?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies can be either &quot;session&quot; or &quot;persistent&quot; cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                <strong>Session Cookies:</strong> These are temporary and are
                deleted when you close your browser or app
              </li>
              <li>
                <strong>Persistent Cookies:</strong> These remain on your device
                for a set period or until you delete them manually
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Managing Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You have control over cookies and can manage them in several ways:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Browser Settings
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Most web browsers allow you to control cookies through their settings.
              You can:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>View and delete existing cookies</li>
              <li>Block all cookies or specific types</li>
              <li>Set preferences for certain websites</li>
              <li>Receive notifications when cookies are set</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Mobile Device Settings
            </h3>
            <p className="text-gray-600 leading-relaxed">
              On mobile devices, you can manage tracking and cookies through:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>iOS: Settings → Privacy → Tracking</li>
              <li>Android: Settings → Privacy → Ads</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Opt-Out Tools
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You can opt out of certain third-party cookies using:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                Google Analytics Opt-out:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-emerald-600 hover:text-emerald-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tools.google.com/dlpage/gaoptout
                </a>
              </li>
              <li>
                Network Advertising Initiative:{" "}
                <a
                  href="https://optout.networkadvertising.org"
                  className="text-emerald-600 hover:text-emerald-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  optout.networkadvertising.org
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Impact of Disabling Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Please note that disabling certain cookies may affect the
              functionality of our Service. You may experience:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Inability to stay logged in</li>
              <li>Loss of personalized preferences</li>
              <li>Reduced functionality of certain features</li>
              <li>Less relevant meal recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Updates to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes
              in our practices or for other operational, legal, or regulatory
              reasons. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about our use of cookies, please contact
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
