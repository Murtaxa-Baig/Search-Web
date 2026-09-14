"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-950 text-white">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Aurora Obsidian Bento Grid
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            Engineered for Unmatched Search Speed & Intelligence
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Discover how Google Search transforms multi-engine browsing, offline AI query processing, and privacy controls into a single app.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="bento-grid">

          {/* Card 1: Multi-Engine Query (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bento-card bento-span-2 flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="material-symbols-outlined text-2xl text-white">travel_explore</span>
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                5x Engine Sync
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Simultaneous Multi-Engine Search
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dispatch your query across Google, Brave, Bing, and DuckDuckGo in parallel. Compare results side-by-side without opening multiple external browser tabs.
              </p>
            </div>

            {/* Visual Engine Pill Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <span className="material-symbols-outlined text-blue-400 block mb-1">search</span>
                <span className="text-xs font-bold text-slate-200">Google</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <span className="material-symbols-outlined text-orange-400 block mb-1">security</span>
                <span className="text-xs font-bold text-slate-200">Brave</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <span className="material-symbols-outlined text-emerald-400 block mb-1">privacy_tip</span>
                <span className="text-xs font-bold text-slate-200">DuckDuckGo</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <span className="material-symbols-outlined text-sky-400 block mb-1">travel_explore</span>
                <span className="text-xs font-bold text-slate-200">Bing</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Offline Local AI (With Graphic) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bento-card flex flex-col justify-between group"
          >
            <div className="relative h-44 w-full rounded-xl overflow-hidden mb-6 border border-slate-800">
              <Image
                src="/images/ai_engine.jpg"
                alt="Offline AI Neural Chip Illustration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-purple-500/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-purple-500/40 text-[11px] font-mono text-purple-300 font-bold">
                100% Offline AI
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Downloaded Local AI Engine
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Run lightweight neural models on your mobile hardware. Search parameters and receive intelligent answers without internet or cell connectivity.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                <span className="material-symbols-outlined text-sm">memory</span>
                <span>Zero Data Usage</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: In-App WebViews */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bento-card flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20">
                <span className="material-symbols-outlined text-2xl">web_asset</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                In-App Active WebViews
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Never lose your browsing session. Live WebView windows persist in memory so you can flip back and forth between search engines instantly.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-mono">Tab Persistence</span>
                <span className="text-emerald-400 font-bold">Active</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Smart Geo-Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bento-card flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20">
                <span className="material-symbols-outlined text-2xl">my_location</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                Location-Based Trends
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Optional location permissions allow tailored regional trends and hyper-local search discovery while giving you total control over location toggles.
              </p>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-xs font-mono text-slate-300">Geo-Targeting</span>
              <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                Customizable
              </span>
            </div>
          </motion.div>

          {/* Card 5: Privacy & Account Controls (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="bento-card bento-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 group"
          >
            <div className="space-y-3 max-w-lg">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-400">shield_lock</span>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">Privacy & User Rights</span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                Your Data, Your Ownership
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full transparency with end-to-end user privacy standards. Instant self-service account deletion dispatch, data erasure tools, and profile avatar customization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="/delete-account"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs font-bold transition-colors text-center"
              >
                Delete Account
              </a>
              <a
                href="/privacy"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 text-xs font-bold transition-colors text-center"
              >
                Privacy Policy
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
