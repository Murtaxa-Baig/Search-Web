"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DeleteAccount() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reason, setReason] = useState("");
    const [confirmed1, setConfirmed1] = useState(false);
    const [confirmed2, setConfirmed2] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const showToast = (message: string, type: "success" | "error") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 5000);
    };

    const isFormValid = email && password && reason && confirmed1 && confirmed2;

    const handleDeleteClick = () => {
        if (!isFormValid) {
            showToast("Please fill all fields and confirm the terms.", "error");
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
                body: JSON.stringify({ email, password, reason }),
            });

            const data = await response.json();

            if (response.ok) {
                showToast(data.message || "Account deleted successfully.", "success");
                setTimeout(() => {
                    router.push("/");
                }, 500);
            } else {
                showToast(data.message || "Failed to delete account.", "error");
            }
        } catch (error) {
            console.log("error",error);
            showToast("An error occurred. Please try again later.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="flex flex-1 justify-center py-12 px-4 shadow-sm relative">
            {/* Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 20 }}
                        exit={{ opacity: 0, y: -50 }}
                        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border ${
                            toast.type === "success" 
                                ? "bg-emerald-500 border-emerald-400 text-white" 
                                : "bg-red-500 border-red-400 text-white"
                        }`}
                    >
                        <span className="material-symbols-outlined">
                            {toast.type === "success" ? "check_circle" : "error"}
                        </span>
                        <p className="font-medium">{toast.message}</p>
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
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
                        >
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-3xl">
                                        warning
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    Final Confirmation
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Are you absolutely sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
                                </p>
                            </div>
                            <div className="flex border-t border-gray-100 dark:border-gray-800">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmDelete}
                                    className="flex-1 px-6 py-4 text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border-l border-gray-100 dark:border-gray-800"
                                >
                                    Delete Forever
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="max-w-[640px] w-full flex flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-2 text-center"
                >
                    <h1 className="text-[#131118] dark:text-white text-4xl mt-8 font-black leading-tight tracking-[-0.033em]">
                        Delete Your Account
                    </h1>
                    <p className="text-[#6b608a] dark:text-gray-400 text-lg font-normal leading-normal">
                        We&apos;re sorry to see you go. This is a permanent action.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="p-1 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                    <div className="flex flex-col items-stretch justify-start md:flex-row md:items-start bg-white dark:bg-gray-900">
                        <div className="flex w-full grow flex-col items-stretch justify-center gap-3 py-6 px-6">
                            <p className="text-[#131118] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                                This action is irreversible
                            </p>
                            <motion.label
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex gap-x-3 py-2 flex-row cursor-pointer group"
                            >
                                <input
                                    checked={confirmed2}
                                    onChange={(e) => setConfirmed2(e.target.checked)}
                                    className="h-5 w-5 rounded border-gray-300 dark:border-gray-700 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors"
                                    type="checkbox"
                                />
                                <p className="text-[#131118] dark:text-gray-300 text-sm font-normal leading-normal group-hover:text-primary transition-colors">
                                    I understand my active pro subscriptions will be cancelled without refund
                                </p>
                            </motion.label>
                        </div>
                    </div>

                    <div className="px-6 pb-8 space-y-4">
                        <div className="flex flex-col gap-4">
                            <motion.label
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col w-full"
                            >
                                <p className="text-[#131118] dark:text-white text-sm font-semibold leading-normal pb-2">
                                    Your Email Address
                                </p>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 px-4 text-sm font-normal leading-normal placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                    placeholder="Enter your account email"
                                    type="email"
                                    required
                                />
                            </motion.label>
                            <motion.label
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-col w-full"
                            >
                                <p className="text-[#131118] dark:text-white text-sm font-semibold leading-normal pb-2">
                                    Reason for leaving
                                </p>
                                <select 
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 appearance-none px-4 text-sm font-normal leading-normal"
                                    required
                                >
                                    <option value="">Select a reason</option>
                                    <option value="too-expensive">Pricing is too high</option>
                                    <option value="missing-features">
                                        Missing specific features
                                    </option>
                                    <option value="switching">Switching to a competitor</option>
                                    <option value="no-longer-need">
                                        I no longer need the service
                                    </option>
                                    <option value="hard-to-use">
                                        Platform is too difficult to use
                                    </option>
                                </select>
                            </motion.label>
                            <motion.label
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col w-full"
                            >
                                <p className="text-[#131118] dark:text-white text-sm font-semibold leading-normal pb-2">
                                    Confirm your password
                                </p>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-input flex w-full rounded-lg text-[#131118] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-12 px-4 text-sm font-normal leading-normal placeholder:text-gray-400 dark:placeholder:text-gray-600"
                                    placeholder="Enter your current password"
                                    type="password"
                                    required
                                />
                            </motion.label>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col gap-3 pt-6"
                        >
                            <button 
                                onClick={handleDeleteClick}
                                disabled={isLoading}
                                className={`w-full flex items-center justify-center rounded-xl h-14 px-8 bg-red-600 text-white hover:bg-red-700 text-base font-bold leading-normal transition-all shadow-lg shadow-red-600/20 active:scale-[0.98] ${
                                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                                }`}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Deleting...</span>
                                    </div>
                                ) : (
                                    "Delete My Account"
                                )}
                            </button>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 1 }}
                    className="text-center text-[#6b608a] dark:text-gray-500 text-sm"
                >
                    Having trouble?{" "}
                    <a className="text-primary hover:underline font-medium" href="#">
                        Contact our support team
                    </a>{" "}
                    for help instead of leaving.
                </motion.p>
            </div>
        </main>
    );
}
