"use client";

import { motion } from "framer-motion";

export default function PrivacyContent() {
  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl mt-8 font-black text-[#131118] dark:text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#6b608a] dark:text-[#a097bd] text-lg font-normal leading-normal mb-6">
          How we handle your audio data, voice transformations, and protect your
          privacy in our AI-powered voice ecosystem.
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            Last Updated: May 13, 2026
          </span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a
            className="text-primary font-medium hover:underline flex items-center gap-1"
            href="mailto:Appnayatecnologoes@gmail.com"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            Appnayatecnologoes@gmail.com
          </a>
        </div>
      </motion.header>

      <div className="space-y-12">
        {[
          {
            id: "introduction",
            title: "1. Introduction",
            content: (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This Privacy Policy outlines how Voice Lab collects, processes,
                and protects your audio data and personal information. We are committed to ensuring your creative voice projects remain secure and private.
              </p>
            ),
          },
          {
            id: "information-collected",
            title: "2. Information Collected",
            content: (
              <>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  We collect:
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      check_circle
                    </span>
                    <span>Account Information (Full Name, Email via Firebase)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      check_circle
                    </span>
                    <span>Audio Data (Recordings and uploaded audio files for processing)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      check_circle
                    </span>
                    <span>Device Information (Model, OS version)</span>
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: "permissions",
            title: "3. Device Permissions",
            content: (
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  To provide our core features, the app requires the following permissions:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">
                      mic
                    </span>
                    <div>
                      <h4 className="font-bold text-[#131118] dark:text-white text-base">
                        Microphone
                      </h4>
                      <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                        Required for real-time voice changing, voice recording, and capturing audio for processing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">
                      photo_library
                    </span>
                    <div>
                      <h4 className="font-bold text-[#131118] dark:text-white text-base">
                        Photo Library
                      </h4>
                      <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                        Required to save your generated audio files and voice projects to your device, and to import media for customization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: "purpose",
            title: "4. Purpose of Data Processing",
            content: (
              <>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Your data is used to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Generate AI Text-to-Speech audio",
                    "Apply Voice Changer transformations",
                    "Process and add Sound Effects",
                    "Enable Voice Download and Export",
                    "Facilitate Sharing of voice projects",
                    "Sync your creative library across devices",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white dark:bg-[#1c182b] border border-[#f1f0f5] dark:border-[#2a2636]"
                    >
                      <p className="text-sm font-medium text-[#131118] dark:text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ),
          },
          {
            id: "security",
            title: "5. Data Security & Encryption",
            content: (
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Voice Lab utilizes industry-standard encryption for data in transit and at rest. Your audio projects are stored securely, and we implement strict access controls to ensure your creations remain private.
                </p>
              </div>
            ),
          },
          {
            id: "third-party",
            title: "6. Third-Party Data Processors",
            content: (
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  We use:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">
                      security
                    </span>
                    <div>
                      <h4 className="font-bold text-[#131118] dark:text-white text-base">
                        Firebase
                      </h4>
                      <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                        Authentication and secure database management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">
                      graphic_eq
                    </span>
                    <div>
                      <h4 className="font-bold text-[#131118] dark:text-white text-base">
                        AI Processing Engines
                      </h4>
                      <p className="text-sm text-[#6b608a] dark:text-[#a097bd]">
                        Secure processing of audio for TTS and voice effects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: "retention",
            title: "7. Data Retention Policy",
            content: (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We retain your creative projects as long as your account is active. You can delete your audio files or your entire account at any time.
              </p>
            ),
          },
          {
            id: "user-rights",
            title: "8. User Rights",
            content: (
              <>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Users may request:
                </p>
                <div className="space-y-3">
                  {[
                    "Access to stored audio projects",
                    "Correction of account details",
                    "Complete deletion of all audio data",
                    "Account termination",
                  ].map((right, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-[#f1f0f5] dark:bg-white/5 cursor-pointer"
                    >
                      <span className="font-medium text-[#131118] dark:text-white">
                        {right}
                      </span>
                      <span className="material-symbols-outlined text-[#6b608a]">
                        chevron_right
                      </span>
                    </motion.div>
                  ))}
                </div>
              </>
            ),
          },
          {
            id: "contact",
            title: "9. Contact Information",
            content: (
              <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="text-xl font-bold text-[#131118] dark:text-white mb-2">
                  Questions or Data Requests?
                </h4>
                <p className="text-[#6b608a] dark:text-[#a097bd] mb-6">
                  For privacy concerns or data requests, please contact us at:
                </p>
                <a
                  href="mailto:Appnayatecnologoes@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <span className="material-symbols-outlined">mail</span>
                  Appnayatecnologoes@gmail.com
                </a>
              </div>
            ),
          },
        ].map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#131118] dark:text-white">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              {section.title}
            </h2>
            {section.content}
          </motion.section>
        ))}
      </div>
    </div>
  );
}
