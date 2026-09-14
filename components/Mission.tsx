"use client";

import { motion } from "framer-motion";

export default function Mission() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-b border-gray-200/80 dark:border-gray-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        Our Vision
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-4 mb-6">
                        Our Mission
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic">
                        &quot;To empower every researcher, professional, and daily web user with simultaneous multi-engine search capabilities and private offline AI intelligence, eliminating tab switching and connectivity barriers.&quot;
                    </p>
                    <div className="mt-12 flex justify-center gap-10">
                        {[
                            { label: "Engines", value: "5 Parallel" },
                            { label: "Search Mode", value: "100% Offline AI" },
                            { label: "Platforms", value: "iOS & Android" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                            >
                                <p className="text-2xl sm:text-3xl font-extrabold brand-gradient-text">{stat.value}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

