"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black text-white border-b border-zinc-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mono-tag mb-4">
            Technical Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight uppercase">
            Engineered for Pure Performance & Privacy
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-mono">
            Full control over multi-engine web querying, offline AI models, and user privacy rights.
          </p>
        </motion.div>

        {/* Reversed Bento Box Grid (Reversed layout order: Privacy & Local AI first, Multi-engine bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Row 1: Privacy & Account Ownership (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="md:col-span-7 mono-card p-8 border border-zinc-800 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white">shield_lock</span>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">Privacy & Data Rights</span>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase group-hover:text-zinc-300 transition-colors">
                Your Search Data, 100% Owned By You
              </h3>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                Full compliance with data privacy laws. Instant self-service account deletion, automated email confirmation link dispatch, and zero third-party tracking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 mt-6 border-t border-zinc-800">
              <a
                href="/delete-account"
                className="w-full sm:w-auto px-5 py-2.5 bg-zinc-900 border border-zinc-700 text-white hover:bg-white hover:text-black font-mono text-xs font-bold transition-colors text-center cursor-pointer"
              >
                Request Account Deletion
              </a>
              <a
                href="/privacy"
                className="w-full sm:w-auto px-5 py-2.5 bg-transparent border border-zinc-800 text-zinc-400 hover:text-white font-mono text-xs font-bold transition-colors text-center"
              >
                View Privacy Policy
              </a>
            </div>
          </motion.div>

          {/* Row 1: Downloaded Local AI (Span 5 - with grayscale neural image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="md:col-span-5 mono-card p-6 border border-zinc-800 flex flex-col justify-between group"
          >
            <div className="relative h-40 w-full overflow-hidden mb-6 border border-zinc-800 bg-zinc-900">
              <Image
                src="/images/ai_engine.jpg"
                alt="Offline AI Neural Chip"
                fill
                className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black px-2.5 py-1 border border-zinc-700 text-[10px] font-mono text-white font-bold uppercase">
                100% Offline AI
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white uppercase mb-2 group-hover:text-zinc-300 transition-colors">
                Local Offline AI Engine
              </h3>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed mb-4">
                Execute offline neural search on your phone. Query parameters without sending cellular data externally.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 border-t border-zinc-800 pt-3">
                <span className="material-symbols-outlined text-sm text-white">memory</span>
                <span>Zero Cellular Data Required</span>
              </div>
            </div>
          </motion.div>

          {/* Row 2: In-App Active WebViews (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 mono-card p-6 border border-zinc-800 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 text-white flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-xl">web_asset</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-2 group-hover:text-zinc-300 transition-colors">
                In-App WebViews Persistence
              </h3>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed mb-6">
                Active search engine web tabs stay preserved in memory. Switch between Google and Brave seamlessly.
              </p>
            </div>

            <div className="p-3 bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Memory Cache</span>
                <span className="text-white font-bold">Preserved</span>
              </div>
            </div>
          </motion.div>

          {/* Row 2: Location-Based Trends (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 mono-card p-6 border border-zinc-800 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 text-white flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-xl">my_location</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-2 group-hover:text-zinc-300 transition-colors">
                Geo-Targeting Controls
              </h3>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed mb-6">
                Optional location permissions enable hyper-local search discovery with total user toggle ownership.
              </p>
            </div>

            <div className="p-3 bg-zinc-950 border border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Geo Toggle</span>
              <span className="text-xs font-mono text-white font-bold">User-Controlled</span>
            </div>
          </motion.div>

          {/* Row 2: Profile Avatar Sync (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 mono-card p-6 border border-zinc-800 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 text-white flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-xl">account_circle</span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-2 group-hover:text-zinc-300 transition-colors">
                Workspace Personalization
              </h3>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed mb-6">
                Upload custom profile avatars via gallery permissions and sync preferences across your mobile devices.
              </p>
            </div>

            <div className="p-3 bg-zinc-950 border border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">Profile Sync</span>
              <span className="text-xs font-mono text-white font-bold">Encrypted</span>
            </div>
          </motion.div>

          {/* Row 3: Multi-Engine Query (Span 12 - Bottom placement in reversed layout) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -4 }}
            className="md:col-span-12 mono-card p-8 border border-zinc-800 flex flex-col justify-between group"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">travel_explore</span>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase group-hover:text-zinc-300 transition-colors">
                  Simultaneous Multi-Engine Search
                </h3>
              </div>
              <span className="mono-tag text-[11px]">
                5x Parallel Sync
              </span>
            </div>

            <p className="text-xs font-mono text-zinc-400 leading-relaxed mb-6">
              Dispatch your query across Google, Brave, Bing, and DuckDuckGo in parallel. Compare results side-by-side without opening multiple external browser apps.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-800 font-mono text-xs">
              <div className="p-3 bg-zinc-950 border border-zinc-800 text-center text-white">
                Google Engine
              </div>
              <div className="p-3 bg-zinc-950 border border-zinc-800 text-center text-white">
                Brave Search
              </div>
              <div className="p-3 bg-zinc-950 border border-zinc-800 text-center text-white">
                DuckDuckGo
              </div>
              <div className="p-3 bg-zinc-950 border border-zinc-800 text-center text-white">
                Microsoft Bing
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
