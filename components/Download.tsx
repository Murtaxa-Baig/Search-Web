"use client";

import { motion } from "framer-motion";

const downloads = [
  {
    store: "Google Play Store",
    platform: "Android Mobile & Tablet",
    req: "Requires Android 8.0 or later",
    rating: "4.9 ★★★★★ (18.9k reviews)",
    icon: "play",
    link: "#",
    color: "from-cyan-500 to-blue-600",
  },
  {
    store: "Direct APK Download",
    platform: "Sideload / Developer APK",
    req: "Universal ARM64 / x86 Build",
    rating: "Direct Download • Fast Mirror",
    icon: "apk",
    link: "#",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function Download() {
  return (
    <section
      id="download"
      className="py-24 relative overflow-hidden bg-slate-950 text-white border-t border-slate-800"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Official Release v2.0
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            Get Google Search for Android
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base sm:text-lg">
            Start searching simultaneously across multiple search engines and experience 
            the power of local offline AI search on your mobile device.
          </p>
        </motion.div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {downloads.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between items-center text-center shadow-2xl relative overflow-hidden group cursor-pointer"
            >
              {/* Card Header */}
              <div className="w-full flex flex-col items-center gap-4 mb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform`}>
                  {card.icon === "play" ? (
                    <svg className="w-10 h-10 fill-current" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                  ) : (
                    <span className="material-symbols-outlined text-4xl text-white">android</span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white mb-1">
                    {card.store}
                  </h3>
                  <p className="text-xs font-mono font-bold text-cyan-400">
                    {card.platform}
                  </p>
                </div>
              </div>

              {/* Card Footer info & button */}
              <div className="w-full space-y-4">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-white">{card.rating}</p>
                  <p className="font-mono text-slate-400">{card.req}</p>
                </div>

                <a
                  href={card.link}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl brand-gradient text-white font-bold text-base shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">get_app</span>
                  <span>Install via {card.store}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security & Trial Note */}
        <p className="mt-12 text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm text-emerald-400">verified_user</span>
          <span>Verified Clean APK • Fast Download • 100% Data Encryption</span>
        </p>

      </div>
    </section>
  );
}
