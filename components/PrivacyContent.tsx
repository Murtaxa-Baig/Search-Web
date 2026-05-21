"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "subscription-credits", label: "4. Subscription & Credits Policy" },
  { id: "legal-basis", label: "5. Legal Basis for Processing" },
  { id: "third-party", label: "6. Third-Party Services" },
  { id: "elevenlabs-disclaimer", label: "7. ElevenLabs Disclaimer" },
  { id: "data-retention", label: "8. Data Retention" },
  { id: "international-transfers", label: "9. International Transfers" },
  { id: "user-rights", label: "10. User Rights" },
  { id: "cookies-tech", label: "11. Cookies & Technical Info" },
  { id: "childrens-privacy", label: "12. Children's Privacy" },
  { id: "policy-updates", label: "13. Policy Updates" },
  { id: "contact-info", label: "15. Contact Information" },
  { id: "acceptance-policy", label: "16. Acceptance of Policy" },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header section with modern brand identity */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 pb-10 border-b border-gray-200 dark:border-gray-800 text-center md:text-left"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Privacy Protection Guaranteed
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#131118] dark:text-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-[#6b608a] dark:text-[#a097bd] text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-8">
          Voice Labs – AI Voice Changer is dedicated to maintaining transparent information about how we collect, use, process, and protect your data while using our AI-powered voice technologies.
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-base">calendar_today</span>
            <span>Last Updated: <span className="font-semibold text-gray-800 dark:text-gray-200">May 21, 2026</span></span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-base">mail</span>
            <span>Contact Email: </span>
            <a
              className="text-primary font-semibold hover:underline"
              href="mailto:Appnayatecnologoes@gmail.com"
            >
              Appnayatecnologoes@gmail.com
            </a>
          </div>
        </div>
      </motion.header>

      {/* Main Content & Navigation Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Sticky Navigation */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
          <div className="sticky top-24 max-h-[calc(100vh-140px)] overflow-y-auto pr-4 space-y-6 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeSection === section.id
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-white"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeSection === section.id ? "bg-white" : "bg-transparent"}`}></span>
                    <span className="truncate">{section.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            {/* Quick Contact Info Box */}
            <div className="p-5 rounded-2xl brand-gradient text-white shadow-lg space-y-3">
              <h4 className="font-bold text-lg">Need Support?</h4>
              <p className="text-xs text-white/80 leading-relaxed">
                If you have questions about this policy or your data rights, our privacy officer is ready to help.
              </p>
              <a
                href="mailto:Appnayatecnologoes@gmail.com"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-white text-primary rounded-xl text-xs font-bold shadow-md hover:bg-opacity-95 transition-all"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                Send Email
              </a>
            </div>
          </div>
        </aside>

        {/* Right Side: Document Content */}
        <div className="col-span-11 lg:col-span-8 xl:col-span-9 space-y-16">
          
          {/* Section 1: Introduction */}
          <motion.section
            id="introduction"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">1</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Introduction</h2>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                This Privacy Policy explains how **Voice Labs – AI Voice Changer** collects, uses, stores, and protects user information when using our mobile application, website, and AI voice services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                By using Voice Labs, you agree to the practices described in this Privacy Policy.
              </p>
            </div>
          </motion.section>

          {/* Section 2: Information We Collect */}
          <motion.section
            id="information-collect"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">2</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Information We Collect</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Account Information */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined p-2 rounded-xl bg-primary/10">account_circle</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Account Information</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Full Name</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Email Address</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>Authentication details through third-party login providers</span>
                  </li>
                </ul>
              </div>

              {/* Usage Information */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-brand-purple">
                  <span className="material-symbols-outlined p-2 rounded-xl bg-brand-purple/10">monitoring</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Usage Information</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>Voice generation activity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>Credits usage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>Subscription information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>Device type and operating system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                    <span>App analytics, crash reports, performance diagnostic info</span>
                  </li>
                </ul>
              </div>

              {/* Audio & Content Data */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-brand-blue">
                  <span className="material-symbols-outlined p-2 rounded-xl bg-brand-blue/10">audio_file</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Audio & Content Data</h3>
                </div>
                <p className="text-xs text-gray-500">Depending on the feature used, we may temporarily process:</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    <span>Text entered for Text-to-Speech generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    <span>Uploaded voice recordings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    <span>AI-generated voice outputs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    <span>Sound effect prompts</span>
                  </li>
                </ul>
              </div>

              {/* Media & Device Permissions */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-green-500">
                  <span className="material-symbols-outlined p-2 rounded-xl bg-green-500/10">photo_library</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Media & Device Permissions</h3>
                </div>
                <p className="text-xs text-gray-500">With your permission, Voice Labs may access:</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Photos and media files</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Device gallery/images</span>
                  </li>
                </ul>
                <div className="p-3 bg-green-500/5 rounded-xl border border-green-500/10 text-xs text-green-600 dark:text-green-400 leading-relaxed">
                  <strong>Access scope:</strong> Used solely for updating profile pictures and account personalization. We do not access your files without explicit permission, and we never sell or publicly share your personal images.
                </div>
              </div>

            </div>
          </motion.section>

          {/* Section 3: How We Use Your Information */}
          <motion.section
            id="how-we-use"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">3</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">How We Use Your Information</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We processes and utilizes the information we collect for the following key purposes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { text: "Create and manage user accounts", icon: "manage_accounts" },
                  { text: "Process AI voice generations", icon: "settings_voice" },
                  { text: "Provide AI Voice Changer features", icon: "swap_calls" },
                  { text: "Generate AI sound effects", icon: "volume_up" },
                  { text: "Manage subscriptions and billing", icon: "credit_card" },
                  { text: "Track credits usage", icon: "toll" },
                  { text: "Improve app performance and reliability", icon: "speed" },
                  { text: "Prevent fraud, abuse, or unauthorized access", icon: "shield_lock" },
                  { text: "Provide customer support and technical assistance", icon: "contact_support" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                    <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 4: Subscription & Credits Policy */}
          <motion.section
            id="subscription-credits"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">4</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Subscription & Credits Policy</h2>
            </div>
            
            <div className="space-y-6">
              {/* Grid 1: Credits & Subscription Plans */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Free Credits */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8"></div>
                  <div className="flex items-center gap-3 text-primary mb-3">
                    <span className="material-symbols-outlined">stars</span>
                    <h3 className="font-bold text-lg text-[#131118] dark:text-white">Free Credits</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    Voice Labs provides:
                  </p>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
                    <div className="text-3xl font-black text-primary">300 Credits</div>
                    <div className="text-xs text-[#6b608a] dark:text-[#a097bd] mt-1">For Text-to-Speech (New Users)</div>
                  </div>
                </div>

                {/* Subscription Plans */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full -mr-8 -mt-8"></div>
                  <div className="flex items-center gap-3 text-brand-purple mb-3">
                    <span className="material-symbols-outlined">card_membership</span>
                    <h3 className="font-bold text-lg text-[#131118] dark:text-white">Subscription Plans</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    We offer auto-renewable plans:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-brand-purple/5 border border-brand-purple/10 rounded-xl text-center">
                      <span className="text-sm font-bold text-brand-purple block">Weekly Plan</span>
                    </div>
                    <div className="p-3 bg-brand-purple/5 border border-brand-purple/10 rounded-xl text-center">
                      <span className="text-sm font-bold text-brand-purple block">Monthly Plan</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    These subscriptions automatically renew unless canceled through your App Store or Google Play account settings.
                  </p>
                </div>

              </div>

              {/* Card 2: Feature Access Details */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-brand-blue">
                  <span className="material-symbols-outlined">key</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Feature Access Rules</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <h4 className="font-bold text-sm text-[#131118] dark:text-white">Text-to-Speech</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Users may use free credits, purchase additional credits, or subscribe to premium plans for higher generation limits. Extra purchased credits can **only** be used for Text-to-Speech generation.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <h4 className="font-bold text-sm text-[#131118] dark:text-white">AI Voice Changer & AI Sound Effects</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      These premium features require an **active auto-renewable subscription plan**. Additional purchased credits **cannot** be used for AI Voice Changer or AI Sound Effects unless explicitly stated within the app.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Billing & Renewals */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-yellow-600 dark:text-yellow-500">
                  <span className="material-symbols-outlined">event_repeat</span>
                  <h3 className="font-bold text-lg text-[#131118] dark:text-white">Billing & Renewals</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">check_circle</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Payments are processed securely through **Apple App Store** or **Google Play Store**.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">check_circle</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Subscriptions renew automatically unless canceled at least **24 hours** before the end of the billing period.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">check_circle</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Renewal charges occur within **24 hours** prior to the end of the current subscription period.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">check_circle</span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Users can manage or cancel subscriptions anytime from their device's account settings.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.section>

          {/* Section 5: Legal Basis for Processing */}
          <motion.section
            id="legal-basis"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">5</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Legal Basis for Processing</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We process your information in compliance with standard legal guidelines under the following bases:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "User Consent", desc: "Given when enabling device permissions or submitting details.", icon: "done_all" },
                  { label: "Contractual Necessity", desc: "Required to deliver voice generation services.", icon: "handshake" },
                  { label: "Legitimate Interests", desc: "Improving platform security, performance & reliability.", icon: "troubleshoot" },
                  { label: "Legal Compliance", desc: "Meeting legal records, audits, or regulatory demands.", icon: "gavel" }
                ].map((basis, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <span className="material-symbols-outlined text-primary text-xl">{basis.icon}</span>
                    <h4 className="font-bold text-sm text-[#131118] dark:text-white">{basis.label}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{basis.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 6: Third-Party Services & Data Processors */}
          <motion.section
            id="third-party"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">6</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Third-Party Services & Data Processors</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
                  We partner with trusted service providers to run secure processing, database systems, and billing services. These third parties only process data necessary to provide app functionality:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* ElevenLabs */}
                  <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#131118] dark:text-white">ElevenLabs</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-500">AI Voice</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Used for state-of-the-art AI voice generation and voice processing. Any data processed through ElevenLabs is governed by their own privacy policies and terms.
                    </p>
                  </div>

                  {/* Firebase */}
                  <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#131118] dark:text-white">Firebase</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-orange-500/10 text-orange-500">Backend / Analytics</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Used for user authentication, usage analytics, secure cloud databases, real-time crash reporting, and reliable server infrastructure.
                    </p>
                  </div>

                  {/* RevenueCat & Stores */}
                  <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#131118] dark:text-white">RevenueCat / Stores</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-green-500/10 text-green-500">Sub Billing</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Handles subscription lifecycle management, secure purchase verification, and robust mobile payment billing services.
                    </p>
                  </div>

                  {/* Cloud Infrastructure */}
                  <div className="p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#131118] dark:text-white">Cloud Infrastructure</h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-500">Secure Hosting</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Top-tier cloud service providers are utilized to manage secure data hosting, object data storage, and global performance optimization.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 7: Disclaimer Regarding ElevenLabs */}
          <motion.section
            id="elevenlabs-disclaimer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">7</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Disclaimer Regarding ElevenLabs</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/20 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-amber-500/10 pointer-events-none">
                <span className="material-symbols-outlined text-8xl">warning</span>
              </div>
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-500">
                <span className="material-symbols-outlined text-2xl">info</span>
                <h3 className="font-bold text-lg">Important Association Disclaimer</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Voice Labs – AI Voice Changer is built using advanced AI technologies powered in part by **ElevenLabs** services.
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  We are not affiliated with, endorsed by, or officially associated with ElevenLabs.
                </p>
                <p>
                  All trademarks, service marks, product names, and company names belong to their respective owners. Any information processed through ElevenLabs services is strictly subject to ElevenLabs’ own privacy practices and policies.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Data Retention */}
          <motion.section
            id="data-retention"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">8</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Data Retention</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We retain user information only as long as necessary to fulfill the following requirements:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Provide services & experience",
                  "Maintain active subscriptions",
                  "Comply with legal obligations",
                  "Resolve unexpected disputes",
                  "Prevent platform abuse & fraud"
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-xs text-primary leading-relaxed">
                <strong>Audio generation cleanup:</strong> Temporary raw audio recordings or AI outputs may be automatically deleted immediately after completion of processing. Users maintain the absolute right to request full account deletion at any time.
              </div>
            </div>
          </motion.section>

          {/* Section 9: International Data Transfers */}
          <motion.section
            id="international-transfers"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">9</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">International Data Transfers</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Your information may be processed and stored in countries outside your local jurisdiction where our third-party infrastructure providers operate (such as securely configured data centers in the United States and globally).
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                We use commercially reasonable safeguards to help protect transferred data, ensuring privacy regulations are strictly adhered to.
              </p>
            </div>
          </motion.section>

          {/* Section 10: User Rights */}
          <motion.section
            id="user-rights"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">10</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">User Rights</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Depending on your geographic region, you may possess the following legal rights regarding your personal information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Access to Personal Data", desc: "Request details and copy of the personal information stored in our secure database.", icon: "database" },
                  { title: "Correction of Information", desc: "Request updates to correct or complete any outdated/inaccurate data records.", icon: "edit_note" },
                  { title: "Deletion of Account Data", desc: "Request permanent removal of your account, media library, and personal metadata.", icon: "delete_forever" },
                  { title: "Withdrawal of Consent", desc: "Revoke permissions previously granted (e.g. mic, library, notification permissions).", icon: "cancel" },
                  { title: "Account Termination", desc: "Voluntarily terminate account usage and services at any time.", icon: "no_accounts" },
                ].map((right, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 transition-transform hover:-translate-y-0.5">
                    <span className="material-symbols-outlined text-primary p-2 rounded-lg bg-primary/10 mt-0.5">{right.icon}</span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-[#131118] dark:text-white">{right.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-gray-500 text-center dark:text-gray-400">
                To initiate any data rights requests, please submit your request to our support email: 
                <a className="text-primary font-bold ml-1 hover:underline text-sm" href="mailto:Appnayatecnologoes@gmail.com">Appnayatecnologoes@gmail.com</a>.
              </p>
            </div>
          </motion.section>

          {/* Section 11: Cookies & Technical Information */}
          <motion.section
            id="cookies-tech"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">11</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Cookies & Technical Information</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Voice Labs may implement standard technical tracking and performance technologies:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Essential Sessions", desc: "Maintaining secure login state across page interactions.", icon: "login" },
                  { title: "Device Identifiers", desc: "Recognizing specific device environments safely.", icon: "ad_units" },
                  { title: "Analytics Tools", desc: "Aggregating feature usage for experience tracking.", icon: "insights" },
                  { title: "Performance Diagnostics", desc: "Monitoring connection speed, crashes, and memory leaks.", icon: "query_stats" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-center space-y-2">
                    <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                    <h4 className="font-bold text-xs text-[#131118] dark:text-white">{item.title}</h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                These core technologies are solely executed to improve service functionality, platform security, and user experience.
              </p>
            </div>
          </motion.section>

          {/* Section 12: Children’s Privacy */}
          <motion.section
            id="childrens-privacy"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">12</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Children’s Privacy</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-red-500/10 pointer-events-none">
                <span className="material-symbols-outlined text-8xl">child_care</span>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <span className="material-symbols-outlined">block</span>
                <span className="font-bold text-sm">Age Safeguard Warning</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Voice Labs is not intended for children under the age of **13**. We do not knowingly collect or request personal information from children.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                If we become aware that we have inadvertently collected information from a child under 13, we will take immediate steps to delete all such data promptly from our secure databases.
              </p>
            </div>
          </motion.section>

          {/* Section 13: Policy Updates */}
          <motion.section
            id="policy-updates"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">13</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Policy Updates</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We reserve the right to modify, revise, or update this Privacy Policy at any time.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl text-xs text-gray-500 dark:text-gray-400 leading-relaxed space-y-2">
                <p>
                  • Changes become effective **immediately** upon publication within the application or website.
                </p>
                <p>
                  • Continued use of Voice Labs after updates are posted constitutes your explicit acceptance of the revised Privacy Policy.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 15: Contact Information */}
          <motion.section
            id="contact-info"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">15</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Contact Information</h2>
            </div>
            
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center space-y-6 relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
              
              <h4 className="text-xl font-extrabold text-[#131118] dark:text-white">
                Privacy Concerns or Legal Requests?
              </h4>
              <p className="text-sm text-[#6b608a] dark:text-[#a097bd] max-w-lg mx-auto">
                For general privacy concerns, data collection inquiries, legal requests, or account-related inquiries, please contact our support team.
              </p>
              
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-white dark:bg-[#120F20] border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email Address</span>
                  <a
                    href="mailto:Appnayatecnologoes@gmail.com"
                    className="text-base font-extrabold text-[#131118] dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Appnayatecnologoes@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 16: Acceptance of Policy */}
          <motion.section
            id="acceptance-policy"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm">16</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#131118] dark:text-white">Acceptance of Policy</h2>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151224] border border-gray-100 dark:border-gray-800/80 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2.5 rounded-xl">assignment_turned_in</span>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-[#131118] dark:text-white text-base">Acknowledgment & Agreement</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    By using **Voice Labs – AI Voice Changer**, you acknowledge that you have read, understood, and agreed to be bound by all guidelines, procedures, and practices detailed in this Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
