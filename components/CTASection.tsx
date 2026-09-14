"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CTASection() {
    const pathname = usePathname();

    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-y border-gray-200/80 dark:border-gray-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="brand-gradient rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight"
                        >
                            Ready for Faster, Multi-Browser Search?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-base sm:text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
                        >
                            Execute queries simultaneously across Google, Brave, Bing, and DuckDuckGo, or download local offline AI models. Download the app today.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <Link href="/#features" className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => {
                                        if (pathname === "/") {
                                            e.preventDefault();
                                            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/40 hover:border-white text-white font-bold py-4 px-10 rounded-xl text-base transition-all cursor-pointer"
                                >
                                    Explore Search Features
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

