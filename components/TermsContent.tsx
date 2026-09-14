"use client";

import { motion } from "framer-motion";

export default function TermsContent() {
  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 border-b border-gray-200/80 dark:border-gray-800 pb-8 text-center md:text-left"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Official Legal Terms</span>
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Terms & Conditions
        </h1>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm">
          <span className="text-gray-500 dark:text-gray-400 font-medium">
            Last Updated: July 31, 2026
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
          <a
            className="text-cyan-500 font-bold hover:underline flex items-center gap-1"
            href="mailto:supportappnaya@gmail.com"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            <span>supportappnaya@gmail.com</span>
          </a>
        </div>
      </motion.header>

      <div className="space-y-10">
        {[
          {
            id: "acceptance",
            title: "1. Acceptance of Agreement",
            content: (
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                By accessing or using Google Search (“Service”), you agree to be
                legally bound by these Terms & Conditions. If you disagree with
                any provision, you must immediately cease use of the Service.
              </p>
            ),
          },
          {
            id: "definitions",
            title: "2. Definitions",
            content: (
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="font-bold text-gray-900 dark:text-white min-w-[100px]">
                    “Platform”:
                  </span>
                  <span>Refers to the Google Search website, mobile application, and simultaneous search services.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-900 dark:text-white min-w-[100px]">
                    “User”:
                  </span>
                  <span>
                    Refers to any individual accessing or using the Service.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gray-900 dark:text-white min-w-[100px]">
                    “User Data”:
                  </span>
                  <span>
                    Refers to any custom search parameters, selected browser presets, offline model downloads, or user profile details.
                  </span>
                </li>
              </ul>
            ),
          },
          {
            id: "services",
            title: "3. Description of Services",
            content: (
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Google Search provides simultaneous multi-browser search execution, in-app active WebViews integration, and local offline AI model search functionality for mobile users.
              </p>
            ),
          },
          {
            id: "subscriptions",
            title: "4. Subscriptions & 3-Day Free Trial",
            content: (
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Google Search offers auto-renewable weekly and monthly subscription plans granting full access to offline AI search models, parallel WebViews, and customizable location trends.
                </p>
                <p>
                  New users are eligible for a **3-day free trial**, allowing complete access to test all feature capabilities before billing commences.
                </p>
                <p>
                  Subscriptions may be canceled at any time via App Store or Google Play Store settings. Upon cancellation, access remains available until the billing cycle ends.
                </p>
              </div>
            ),
          },
          {
            id: "usage",
            title: "5. Acceptable Use Policy",
            content: (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You explicitly agree NOT to:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Attempt to reverse engineer search models or binary assets",
                    "Use automated scripts to abuse search parameters",
                    "Distribute malicious content via in-app WebViews",
                    "Circumvent subscription verification barriers",
                    "Violate third-party search engine policies",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-2.5 items-center p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs font-semibold text-gray-800 dark:text-gray-200"
                    >
                      <span className="material-symbols-outlined text-red-500 text-sm shrink-0">
                        block
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            id: "intellectual",
            title: "6. Intellectual Property",
            content: (
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                AppNaya Technologies owns all proprietary designs, software code, offline AI models, and brand logos associated with Google Search. Users retain ownership of personal profile settings and search query parameters.
              </p>
            ),
          },
          {
            id: "liability",
            title: "7. Limitation of Liability",
            content: (
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  To the maximum extent permitted by law, Google Search and AppNaya Technologies shall not be liable for indirect damages, third-party search result variations, or temporary network outages.
                </p>
              </div>
            ),
          },
          {
            id: "contact",
            title: "8. Legal Inquiries",
            content: (
              <div className="text-center p-8 rounded-2xl glass-card border border-cyan-500/20 shadow-lg space-y-4">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Contact Legal & Support
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                  For formal legal notices or questions regarding these terms, reach out directly to our support inbox:
                </p>
                <a
                  href="mailto:supportappnaya@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 brand-gradient text-white rounded-xl font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  <span>supportappnaya@gmail.com</span>
                </a>
              </div>
            ),
          },
        ].map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 shadow-sm"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {section.title}
            </h2>
            {section.content}
          </motion.section>
        ))}
      </div>
    </div>
  );
}

