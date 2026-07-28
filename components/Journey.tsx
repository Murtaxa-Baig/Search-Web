"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        year: "2024",
        title: "The Founding",
        description: "A small team of engineers and writers came together with a vision to democratize high-end AI writing tools.",
        icon: "rocket_launch",
    },
    {
        year: "2025",
        title: "1M Users Strong",
        description: "Our platform reached its first major milestone, helping over a million users worldwide express their visual creativity.",
        icon: "groups",
    },
    {
        year: "2026",
        title: "Global Expansion",
        description: "Launched our flagship mobile apps and expanded our suite to 8 specialized AI writing categories.",
        icon: "public",
    },
];

export default function Journey() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center text-[#131118] dark:text-white mb-20"
                >
                    Our Journey
                </motion.h2>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full timeline-line hidden md:block"></div>
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`w-full md:w-[45%] text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left order-2 md:order-3"
                                    } order-2 mt-6 md:mt-0`}
                            >
                                <span className="text-brand-pink font-bold text-sm mb-2 block">
                                    {milestone.year}
                                </span>
                                <h3 className="text-xl font-bold text-[#131118] dark:text-white mb-3">
                                    {milestone.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {milestone.description}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="z-10 w-12 h-12 bg-white dark:bg-gray-800 border-4 border-primary rounded-full flex items-center justify-center order-1 md:order-2"
                            >
                                <span className="material-symbols-outlined text-primary text-xl">
                                    {milestone.icon}
                                </span>
                            </motion.div>
                            <div
                                className={`hidden md:block w-[45%] ${index % 2 === 0 ? "order-3" : "order-1"
                                    }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
