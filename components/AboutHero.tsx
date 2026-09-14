"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden hero-mesh py-24 md:py-32 border-b border-gray-200/80 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-8"
          >
            Pioneering the <br />
            Future of <br />
            <span className="brand-gradient-text">Simultaneous Multi-Search</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We are dedicated to redefining how users search, compare, and discover information across multiple search engines in parallel, both online and offline.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

