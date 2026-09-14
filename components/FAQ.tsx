"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How does simultaneous multi-browser search work?",
        answer: "When you type a search query, Google Search dispatches the search request to multiple search engines (such as Google, Brave, Bing, and DuckDuckGo) in parallel. Active WebViews for each browser engine run simultaneously inside the application, letting you switch tabs instantly with zero load latency.",
    },
    {
        question: "How does the Offline AI Search mode function?",
        answer: "Premium users can download lightweight AI neural models directly inside the application. When offline, your queries are processed locally on your device without needing cellular data or Wi-Fi, returning parameter-matched intelligent search answers.",
    },
    {
        question: "How do I manage or cancel my subscription?",
        answer: "Subscriptions can be managed or canceled anytime via your App Store (iOS) or Google Play Store (Android) settings. If canceled, premium access remains active until the end of your billing cycle.",
    },
    {
        question: "Is my search data and location information private?",
        answer: "Yes. All local search queries remain on your device, and optional location permissions are used strictly to provide localized search trends. We do not sell or track your search history across third-party networks.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="mt-16 space-y-6">
            <div className="text-center md:text-left">
                <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    Got Questions?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-3">
                    Frequently Asked Questions
                </h3>
            </div>

            <div className="space-y-3">
                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <div
                            key={index}
                            className="glass-card border border-gray-200/80 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
                        >
                            <button
                                onClick={() => setActiveIndex(isOpen ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none"
                            >
                                <span className="font-bold text-gray-900 dark:text-white text-base sm:text-lg pr-4">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="material-symbols-outlined text-cyan-500 shrink-0"
                                >
                                    expand_more
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-200/60 dark:border-gray-800/80 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

