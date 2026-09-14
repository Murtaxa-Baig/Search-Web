"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DeleteAccount() {
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [customReason, setCustomReason] = useState("");
    const [confirmed2, setConfirmed2] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerificationSent, setIsVerificationSent] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const showToast = (message: string, type: "success" | "error") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 5000);
    };

    const finalReason = reason === "other" ? customReason : reason;
    const isFormValid = email && reason && (reason !== "other" || customReason) && confirmed2;

    const handleDeleteClick = () => {
        if (!isFormValid) {
            showToast("Please fill all required fields and confirm the terms.", "error");
            return;
        }
        setIsModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        setIsLoading(true);
        setIsModalOpen(false);

        try {
            const response = await fetch(`/api/delete-account`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, reason: finalReason }),
            });

            const data = await response.json();

            if (response.ok && (data.success || !data.error)) {
                showToast(data.message || "Verification email dispatched successfully.", "success");
                setIsVerificationSent(true);
            } else {
                showToast(data.message || data.error || "Failed to initiate deletion request.", "error");
            }
        } catch (error) {
            console.log("error", error);
            showToast("An error occurred. Please try again later.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="flex flex-1 justify-center py-16 px-4 relative min-h-[75vh] items-center">
            {/* Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 20 }}
                        exit={{ opacity: 0, y: -50 }}
                        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border text-sm font-bold ${
                            toast.type === "success"
                                ? "bg-emerald-500 border-emerald-400 text-white"
                                : "bg-red-500 border-red-400 text-white"
                        }`}
                    >
                        <span className="material-symbols-outlined text-xl">
                            {toast.type === "success" ? "check_circle" : "error"}
                        </span>
                        <p>{toast.message}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative glass-card w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-red-500/30"
                        >
                            <div className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
                                    <span className="material-symbols-outlined text-red-500 text-3xl">
                                        warning
                                    </span>
                                </div>
                                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                                    Initiate Account Deletion
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Are you sure you want to request account deletion? We will send a confirmation magic link and 6-digit code to <strong className="text-cyan-400">{email}</strong> to verify your identity.
                                </p>
                            </div>
                            <div className="flex border-t border-gray-200/80 dark:border-gray-800">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmDelete}
                                    className="flex-1 px-6 py-4 text-sm font-bold text-red-500 hover:bg-red-500/10 transition-colors border-l border-gray-200/80 dark:border-gray-800 cursor-pointer"
                                >
                                    Send Verification
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="max-w-[640px] w-full flex flex-col gap-6 relative z-10">
                <AnimatePresence mode="wait">
                    {!isVerificationSent ? (
                        <motion.div
                            key="request-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="flex flex-col gap-2 text-center">
                                <span className="text-xs font-extrabold uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 w-fit mx-auto">
                                    Account Management
                                </span>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                    Delete Your Account
                                </h1>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                    Permanently remove your Google Search user profile, search configurations, and saved data.
                                </p>
                            </div>

                            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-xl space-y-6">
                                
                                {/* Warning Notice */}
                                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                                    <span className="material-symbols-outlined text-red-500 text-xl shrink-0 mt-0.5">
                                        report_problem
                                    </span>
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                                            Irreversible Action
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Deleting your account will purge your saved browser preferences, offline model history, and user credentials. Active pro subscriptions will be cancelled.
                                        </p>
                                    </div>
                                </div>

                                {/* Form Controls */}
                                <div className="space-y-5">
                                    
                                    <label className="flex flex-col gap-2">
                                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                            Registered Email Address
                                        </span>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500/50"
                                            placeholder="enter your account email"
                                            type="email"
                                            required
                                        />
                                    </label>

                                    <label className="flex flex-col gap-2">
                                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                            Reason for Leaving
                                        </span>
                                        <select
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500/50"
                                            required
                                        >
                                            <option value="">Select a reason</option>
                                            <option value="Pricing is too high">Pricing is too high</option>
                                            <option value="Missing specific features">Missing specific features</option>
                                            <option value="Switching to a competitor">Switching to a competitor</option>
                                            <option value="I no longer need the service">I no longer need the service</option>
                                            <option value="Platform is too difficult to use">Platform is too difficult to use</option>
                                            <option value="other">Other (Please specify)</option>
                                        </select>
                                    </label>

                                    {reason === "other" && (
                                        <motion.label
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="flex flex-col gap-2"
                                        >
                                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                                Specify Your Reason
                                            </span>
                                            <input
                                                value={customReason}
                                                onChange={(e) => setCustomReason(e.target.value)}
                                                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500/50"
                                                placeholder="Let us know how we can improve..."
                                                type="text"
                                                required
                                            />
                                        </motion.label>
                                    )}

                                    {/* Confirmation Checkbox */}
                                    <label className="flex items-start gap-3 cursor-pointer pt-2">
                                        <input
                                            checked={confirmed2}
                                            onChange={(e) => setConfirmed2(e.target.checked)}
                                            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
                                            type="checkbox"
                                        />
                                        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                                            I understand that active pro subscriptions will be cancelled without refund and data cannot be recovered.
                                        </span>
                                    </label>

                                </div>

                                <button
                                    onClick={handleDeleteClick}
                                    disabled={isLoading || !isFormValid}
                                    className={`w-full flex items-center justify-center gap-2 rounded-xl py-4 bg-red-600 text-white font-bold text-base transition-all shadow-lg shadow-red-600/20 cursor-pointer ${
                                        isLoading || !isFormValid ? "opacity-50 cursor-not-allowed shadow-none" : "hover:bg-red-700 hover:scale-[1.01]"
                                    }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Requesting...</span>
                                        </div>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-lg">delete_forever</span>
                                            <span>Request Account Deletion</span>
                                        </>
                                    )}
                                </button>

                            </div>

                            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                                Need help with your account?{" "}
                                <Link className="text-cyan-500 hover:underline font-bold" href="/contact">
                                    Contact Support Team
                                </Link>
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="verification-sent"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 20 }}
                            className="glass-card border border-gray-200/80 dark:border-gray-800 p-8 rounded-3xl shadow-2xl text-center space-y-6 max-w-lg mx-auto"
                        >
                            <div className="w-20 h-20 bg-cyan-500/10 text-cyan-500 rounded-full flex items-center justify-center mx-auto border border-cyan-500/20 relative">
                                <span className="material-symbols-outlined text-4xl animate-bounce">
                                    mark_email_read
                                </span>
                                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                                </span>
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                    Verification Dispatched!
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                                    We have sent a verification email with a deletion link and code to:
                                </p>
                                <p className="text-cyan-600 dark:text-cyan-400 font-bold text-base sm:text-lg select-all">
                                    {email}
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 text-left border border-gray-200/60 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300 space-y-2.5">
                                <div className="flex items-start gap-2.5">
                                    <span className="material-symbols-outlined text-emerald-500 text-base shrink-0 mt-0.5">link</span>
                                    <p><strong>Option 1:</strong> Click the secure <strong>"Permanently Delete My Account"</strong> link inside the email.</p>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="material-symbols-outlined text-cyan-500 text-base shrink-0 mt-0.5">pin</span>
                                    <p><strong>Option 2:</strong> Copy the 6-digit confirmation code and enter it on our verification portal.</p>
                                </div>
                            </div>

                            <p className="text-[11px] text-red-500 dark:text-red-400 font-medium">
                                * Link and code expire in 15 minutes.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
                                <Link
                                    href="/delete-account/confirm"
                                    className="px-6 py-3 brand-gradient text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
                                >
                                    <span>Enter Code Manually</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                                <button
                                    onClick={() => setIsVerificationSent(false)}
                                    className="px-6 py-3 glass-card text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-xs cursor-pointer"
                                >
                                    Back to Form
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

