"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CTASection() {
    const pathname = usePathname();

    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="brand-gradient rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-black mb-6"
                        >
                            Ready to Elevate Your Visual Creative Identity?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium"
                        >
                            Experience the future of AI image generation and enhancement. Design professional-grade visual projects instantly with our advanced AI tools. Start your creative journey today.
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
                                    className="w-full sm:w-auto bg-transparent border-2 border-white/40 hover:border-white text-white font-bold py-4 px-12 rounded-xl text-lg transition-all"
                                >
                                    Explore Studio Tools
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
