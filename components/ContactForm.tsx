"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        const nameParts = formData.firstName.split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : " ";

        try {
            const response = await fetch("/api/send-mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: formData.firstName || firstName,
                    lastName: formData.lastName || lastName,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message.");
            }

            setSubmitStatus({
                type: "success",
                message: "Thank you! Your message has been sent successfully. Our team will respond shortly.",
            });
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error: any) {
            setSubmitStatus({
                type: "error",
                message: error.message || "An error occurred. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Support Info Card */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 glass-card p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800 space-y-6"
            >
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Direct Support Channel
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Need immediate assistance regarding offline AI models or subscriptions? Contact support directly:
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                        <span className="material-symbols-outlined text-cyan-400 text-xl shrink-0 mt-0.5">
                            mail
                        </span>
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Email Support</p>
                            <a
                                href="mailto:supportappnaya@gmail.com"
                                className="text-sm font-bold text-cyan-600 dark:text-cyan-300 hover:underline"
                            >
                                supportappnaya@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <span className="material-symbols-outlined text-purple-400 text-xl shrink-0 mt-0.5">
                            schedule
                        </span>
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Response Time</p>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">Within 24 Hours</p>
                        </div>
                    </div>
                </div>

                <div className="pt-2 border-t border-gray-200/60 dark:border-gray-800">
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        Looking for account deletion or verification links? Visit our{" "}
                        <a href="/delete-account" className="text-cyan-500 hover:underline font-bold">
                            Delete Account Portal
                        </a>.
                    </p>
                </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-8 glass-card p-8 sm:p-10 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-xl"
            >
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                Your Full Name
                            </label>
                            <input
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 dark:text-white text-sm outline-none transition-all disabled:opacity-50"
                                placeholder="e.g. Alex Rivera"
                                required
                                type="text"
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                Email Address
                            </label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-50 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 dark:text-white text-sm outline-none transition-all disabled:opacity-50"
                                placeholder="alex@example.com"
                                required
                                type="email"
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                            Subject
                        </label>
                        <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-gray-50 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 dark:text-white text-sm outline-none transition-all disabled:opacity-50"
                            placeholder="e.g. Question regarding Offline AI downloads"
                            required
                            type="text"
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-gray-50 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 dark:text-white text-sm outline-none transition-all disabled:opacity-50"
                            placeholder="Type your message here..."
                            required
                            rows={5}
                            disabled={isSubmitting}
                        />
                    </div>

                    {submitStatus.type && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-xl text-sm font-medium flex items-center gap-2 ${
                                submitStatus.type === "success"
                                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                                    : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30"
                            }`}
                        >
                            <span className="material-symbols-outlined">
                                {submitStatus.type === "success" ? "check_circle" : "error"}
                            </span>
                            <span>{submitStatus.message}</span>
                        </motion.div>
                    )}

                    <button
                        className={`w-full brand-gradient text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 text-base cursor-pointer ${
                            isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.01]"
                        }`}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Sending...</span>
                            </span>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </form>
            </motion.div>

        </div>
    );
}

