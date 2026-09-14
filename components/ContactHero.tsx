"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden hero-mesh">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 mb-4"
                >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>24/7 Support Channel</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
                >
                    Get in Touch with <span className="brand-gradient-text">Google Search</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                >
                    Have questions about simultaneous multi-browser querying, offline AI model downloads, or subscription management? Our dedicated team is here to assist.
                </motion.p>
            </div>
        </section>
    );
}

