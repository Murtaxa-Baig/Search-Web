"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Image Quality Enhancer",
    description: "Upscale and optimize image quality using state-of-the-art AI. Restore details, remove noise, and bring low-resolution photos to life in high definition instantly.",
    icon: "auto_awesome",
    details: ["AI Resolution Upscaling", "Detail Restoration", "Smart Noise Reduction"],
    gradient: "brand-gradient"
  },
  {
    title: "Prompt-to-Image Generation",
    description: "Convert textual prompts into rich visual masterpieces. Generate a wide range of styles including anime, photorealistic, 3D, and conceptual art.",
    icon: "palette",
    details: ["Multi-Style Art Engine", "High-Fidelity Rendering", "Custom Aspect Ratios"],
    gradient: "identity-gradient"
  },
  {
    title: "Curated Prompts Library",
    description: "Access a large collection of professionally engineered prompts. Get inspired and optimize your generations with verified, high-performance templates.",
    icon: "library_books",
    details: ["Curated Style Collections", "Keyword Optimization", "Instant Prompt Copying"],
    gradient: "brand-gradient"
  },
  {
    title: "Token-Based Subscriptions",
    description: "Choose from flexible token-based subscription models tailored to your volume. Includes a 3-day free trial, allowing you to explore the app and cancel anytime.",
    icon: "stars",
    details: ["3-Day Free Trial", "Token Rollovers", "Cancel Anytime Guarantee"],
    gradient: "identity-gradient"
  },
  {
    title: "Secure Permissions",
    description: "Privacy-first permissions designed to prioritize your data. Location permission enables local features, and Media Library permission enables profile and upload updates.",
    icon: "shield",
    details: ["Location-Based Features", "Profile & Upscale Uploads", "Secure Data Protocols"],
    gradient: "brand-gradient"
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white dark:bg-gray-900 py-20 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#131118] dark:text-white mb-4">
            Advanced AI Image Features
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to generate, enhance, and manage state-of-the-art visual assets.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className={`${feature.gradient} text-white p-8 rounded-2xl shadow-lg flex flex-col h-full transition-all duration-300`}
            >
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <span className="material-symbols-outlined text-3xl text-white">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="opacity-90 mb-6 text-sm flex-1 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2 opacity-90 text-xs">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
