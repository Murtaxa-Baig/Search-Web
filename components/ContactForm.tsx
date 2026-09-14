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
        className="lg:col-span-4 mono-card p-8 border border-zinc-800 space-y-6"
      >
        <div>
          <h3 className="text-lg font-bold text-white font-mono uppercase mb-2">
            Direct Support Channel
          </h3>
          <p className="text-xs font-mono text-zinc-400 leading-relaxed">
            Need assistance regarding offline AI models or subscriptions? Contact support directly:
          </p>
        </div>

        <div className="space-y-4 font-mono text-xs">
          <div className="flex items-start gap-3 p-3.5 bg-zinc-950 border border-zinc-800">
            <span className="material-symbols-outlined text-white text-lg shrink-0 mt-0.5">
              mail
            </span>
            <div>
              <p className="text-zinc-500 font-bold uppercase">Email Support</p>
              <a
                href="mailto:supportappnaya@gmail.com"
                className="font-bold text-white hover:underline"
              >
                supportappnaya@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 bg-zinc-950 border border-zinc-800">
            <span className="material-symbols-outlined text-white text-lg shrink-0 mt-0.5">
              schedule
            </span>
            <div>
              <p className="text-zinc-500 font-bold uppercase">Response Time</p>
              <p className="font-bold text-white">Within 24 Hours</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800">
          <p className="text-xs font-mono text-zinc-400">
            Need account deletion? Visit our{" "}
            <a href="/delete-account" className="text-white underline font-bold">
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
        className="lg:col-span-8 mono-card p-8 sm:p-10 border border-zinc-800"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                Your Full Name
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 p-4 focus:border-white text-white font-mono text-xs outline-none transition-all disabled:opacity-50"
                placeholder="e.g. Alex Rivera"
                required
                type="text"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 p-4 focus:border-white text-white font-mono text-xs outline-none transition-all disabled:opacity-50"
                placeholder="alex@example.com"
                required
                type="email"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              Subject
            </label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-800 p-4 focus:border-white text-white font-mono text-xs outline-none transition-all disabled:opacity-50"
              placeholder="e.g. Question regarding Offline AI downloads"
              required
              type="text"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-zinc-950 border border-zinc-800 p-4 focus:border-white text-white font-mono text-xs outline-none transition-all disabled:opacity-50"
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
              className={`p-4 font-mono text-xs flex items-center gap-2 border ${
                submitStatus.type === "success"
                  ? "bg-zinc-900 text-white border-white"
                  : "bg-zinc-900 text-red-400 border-red-500"
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {submitStatus.type === "success" ? "check_circle" : "error"}
              </span>
              <span>{submitStatus.message}</span>
            </motion.div>
          )}

          <button
            className={`w-full mono-btn-primary py-4 text-xs font-mono uppercase tracking-widest cursor-pointer ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </button>
        </form>
      </motion.div>

    </div>
  );
}
