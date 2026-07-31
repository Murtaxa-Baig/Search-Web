"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Movie Information Explorer",
    description: "Explore full details about any movie, including cast, crew, release dates, ratings, and where to stream them.",
    icon: "movie",
    details: ["Cast & Crew Details", "Ratings & Reviews", "Streaming Availability"],
    gradient: "brand-gradient"
  },
  {
    title: "AI-Based Recommendations",
    description: "Get personalized movie recommendations driven by advanced AI models that learn your unique cinematic tastes.",
    icon: "auto_awesome",
    details: ["Taste-Based Discovery", "Mood & Genre Matching", "Interactive AI Suggestions"],
    gradient: "identity-gradient"
  },
  {
    title: "Spoiler-Selective Summaries",
    description: "Read concise summaries of movies. Choose between spoiler-free summaries to build anticipation, or full spoilers if you want to know everything.",
    icon: "description",
    details: ["Spoiler-Free Overview", "Full Plot Breakdown", "User-Controlled Spoilers"],
    gradient: "brand-gradient"
  },
  {
    title: "Location-Based Discovery",
    description: "Enable location permissions to discover regional viewing trends, localized streaming availability, and nearby cinema showtimes.",
    icon: "location_on",
    details: ["Local Cinema Showtimes", "Regional Streaming Availability", "Localized Movie Trends"],
    gradient: "identity-gradient"
  },
  {
    title: "Profile Customization",
    description: "Personalize your account and profile page. Enable media library permission to securely upload and update your custom profile picture or avatar.",
    icon: "photo_library",
    details: ["Secure Profile Pictures", "Instant Avatar Upload", "Custom Visual Identity"],
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
            Advanced Movie Discovery Features
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to explore films, get AI recommendations, and manage your custom movie profile.
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
