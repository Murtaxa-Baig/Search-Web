"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="py-20 relative overflow-hidden bg-black text-white border-b border-zinc-800 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mono-tag mb-4"
        >
          <span className="w-2 h-2 rounded-none bg-white animate-pulse" />
          <span>24/7 Support Channel</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight uppercase"
        >
          Get in Touch with Google Search
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base font-mono text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Have questions about multi-browser querying, offline AI neural models, or account management? Our team is here to assist.
        </motion.p>
      </div>
    </section>
  );
}
