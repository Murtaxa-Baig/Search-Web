"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Neural Text-to-Speech",
    description: "Leverage state-of-the-art neural networks to synthesize text into high-fidelity, human-centric voices. Engineered for natural prosody and emotional depth.",
    icon: "record_voice_over",
    details: ["Global Linguistic Coverage", "Neural-Dynamic Prosody Control", "Custom Frequency Shaping"],
    gradient: "brand-gradient"
  },
  {
    title: "Dynamic Voice Morphing",
    description: "Transform vocal identity in real-time with zero-latency precision. Access an elite roster of curated personas or design your own unique acoustic signature.",
    icon: "settings_voice",
    details: ["Zero-Latency Processing", "Professional Persona Library", "Advanced Timbre Modulation"],
    gradient: "identity-gradient"
  },
  {
    title: "Cinematic Soundscapes",
    description: "Integrate studio-grade sound effects designed by acoustic engineers. Add atmospheric weight and cinematic impact to your audio productions.",
    icon: "graphic_eq",
    details: ["High-Fidelity SFX Engine", "Spatial Audio Textures", "Instant Spectral Preview"],
    gradient: "brand-gradient"
  },
  {
    title: "Professional Mastering & Export",
    description: "Deploy high-quality lossless exports compatible with any professional DAW or media platform. Ensure your output meets industry standards.",
    icon: "download",
    details: ["Lossless Audio Compression", "Industry-Standard Formats", "Automated Gain Staging"],
    gradient: "identity-gradient"
  },
  {
    title: "Unified Distribution Hub",
    description: "Streamline your workflow with integrated sharing protocols. Distribute your content across social ecosystems and collaborative networks instantly.",
    icon: "share",
    details: ["Direct Social Integration", "Secure Distribution Links", "Enterprise Collaboration Tools"],
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
            Advanced Audio Capabilities
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to create, transform, and share professional-grade audio content.
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
