"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function DeleteConfirmFormContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // States
    const [token, setToken] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isTokenManual, setIsTokenManual] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    // Refs for OTP boxes
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const showToast = (message: string, type: "success" | "error") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 5000);
    };

    // Load token from URL search parameters
    useEffect(() => {
        const urlToken = searchParams.get("token");
        if (urlToken) {
            setToken((prev) => (prev !== urlToken ? urlToken : prev));
            setIsTokenManual(false);
        } else {
            setIsTokenManual(true);
        }
    }, [searchParams]);


    // Countdown logic after success
    useEffect(() => {
        if (isSuccess && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (isSuccess && countdown === 0) {
            router.push("/");
        }
    }, [isSuccess, countdown, router]);

    // Handle OTP character change
    const handleOtpChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspaces in OTP boxes
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace") {
            if (!otp[index] && index > 0) {
                const newOtp = [...otp];
                newOtp[index - 1] = "";
                setOtp(newOtp);
                inputRefs.current[index - 1]?.focus();
            } else {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            }
        }
    };

    // Handle pasting the entire 6-digit OTP
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();
        if (!/^\d{6}$/.test(pastedData)) {
            showToast("Please paste a valid 6-digit confirmation code.", "error");
            return;
        }

        const digits = pastedData.split("");
        setOtp(digits);
        inputRefs.current[5]?.focus();
    };

    const isCodeComplete = otp.every((digit) => digit !== "");
    const canSubmit = token && isCodeComplete && !isLoading;

    const handleConfirmDelete = async () => {
        if (!canSubmit) return;

        setIsLoading(true);
        const secretCode = otp.join("");

        try {
            const response = await fetch(`/api/delete-account/confirm`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, secretCode }),
            });

            const data = await response.json();

            if (response.ok && (data.success || !data.error)) {
                showToast(data.message || "Account permanently deleted.", "success");
                setIsSuccess(true);
            } else {
                showToast(data.message || data.error || "Invalid code or token. Please try again.", "error");
            }
        } catch (error) {
            console.error("Confirm delete error:", error);
            showToast("An error occurred. Please try again later.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[580px] mx-auto px-4 py-16 flex flex-col items-stretch justify-center relative min-h-[60vh]">
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

            <AnimatePresence mode="wait">
                {!isSuccess ? (
                    <motion.div
                        key="confirm-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                    >
                        <div className="text-center space-y-2">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                                Final Verification
                            </span>
                            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                Confirm Account Deletion
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Enter your security token and 6-digit confirmation code to permanently purge your profile.
                            </p>
                        </div>

                        {/* Critical warning block */}
                        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                            <span className="material-symbols-outlined text-red-500 text-2xl shrink-0 mt-0.5 animate-pulse">
                                warning
                            </span>
                            <div className="space-y-1">
                                <h3 className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                                    IRREVERSIBLE DELETION
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                    This action cannot be undone. All custom browser preferences, search logs, offline model downloads, and active subscriptions will be purged.
                                </p>
                            </div>
                        </div>

                        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-gray-800 shadow-xl space-y-6">
                            
                            {/* Token Status / Manual Switch */}
                            {token && !isTokenManual ? (
                                <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-xl">
                                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                                        <span className="material-symbols-outlined text-base">lock</span>
                                        <span>Security Token Loaded</span>
                                    </div>
                                    <button 
                                        onClick={() => setIsTokenManual(true)}
                                        className="text-xs text-cyan-500 hover:underline font-bold transition-all cursor-pointer"
                                    >
                                        Edit Token
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                        Security Deletion Token
                                    </label>
                                    <input
                                        value={token}
                                        onChange={(e) => setToken(e.target.value)}
                                        className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-xs font-mono text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500/50"
                                        placeholder="Paste token from email link if not loaded"
                                        type="text"
                                    />
                                </div>
                            )}

                            {/* OTP Entry Grid */}
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 text-center uppercase tracking-wider">
                                    Enter 6-Digit Code
                                </label>
                                
                                <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
                                    {otp.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            ref={(el) => { inputRefs.current[idx] = el; }}
                                            onChange={(e) => handleOtpChange(e.target.value, idx)}
                                            onKeyDown={(e) => handleKeyDown(e, idx)}
                                            className="w-11 h-14 sm:w-13 sm:h-15 text-center text-xl sm:text-2xl font-black rounded-xl border-2 border-gray-300 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all outline-none"
                                        />
                                    ))}
                                </div>
                                <p className="text-center text-xs text-gray-400">
                                    Type or paste the 6-digit confirmation code from your email.
                                </p>
                            </div>

                            <button
                                onClick={handleConfirmDelete}
                                disabled={!canSubmit}
                                className={`w-full flex items-center justify-center gap-2 rounded-xl py-4 bg-red-600 text-white font-bold text-base transition-all shadow-lg shadow-red-600/20 cursor-pointer ${
                                    !canSubmit ? "opacity-50 cursor-not-allowed shadow-none" : "hover:bg-red-700 hover:scale-[1.01]"
                                }`}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Purging Account Data...</span>
                                    </div>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-lg">delete_forever</span>
                                        <span>Delete Permanently Now</span>
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="text-center">
                            <Link
                                href="/delete-account"
                                className="text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-cyan-400 transition-all inline-flex items-center gap-1"
                            >
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                <span>Back to Account Deletion Request</span>
                            </Link>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card border border-gray-200/80 dark:border-gray-800 p-8 rounded-3xl shadow-2xl text-center space-y-6 max-w-md mx-auto"
                    >
                        <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto border border-red-500/20 relative">
                            <span className="material-symbols-outlined text-4xl">
                                check_circle
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                Account Deleted
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                                Your Google Search profile and all associated data have been permanently removed.
                            </p>
                        </div>

                        <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900 inline-block border border-gray-200/60 dark:border-gray-800">
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                Redirecting to home page in <strong className="text-cyan-400 font-bold">{countdown}</strong> seconds...
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function DeleteConfirmForm() {
    return (
        <Suspense fallback={
            <div className="flex-grow flex items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
            </div>
        }>
            <DeleteConfirmFormContent />
        </Suspense>
    );
}

