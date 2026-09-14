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
  },
  {
    store: "Direct APK Download",
    platform: "Sideload / Developer APK",
    req: "Universal ARM64 / x86 Build",
    rating: "Direct Download • Fast Mirror",
    icon: "apk",
    link: "#",
  },
];

export default function Download() {
  return (
    <section
      id="download"
      className="py-24 relative overflow-hidden bg-black text-white border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mono-tag mb-4">
            Official Mobile Release v2.0
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight uppercase">
            Get Google Search for Android
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-xs sm:text-sm font-mono">
            Execute simultaneous queries across multiple search engines and run local offline AI models on your mobile hardware.
          </p>
        </motion.div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {downloads.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="mono-card p-8 border border-zinc-800 flex flex-col justify-between items-center text-center group cursor-pointer"
            >
              {/* Card Header */}
              <div className="w-full flex flex-col items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-bold">
                  {card.icon === "play" ? (
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                  ) : (
                    <span className="material-symbols-outlined text-3xl">android</span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-black text-white font-mono uppercase mb-1">
                    {card.store}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    {card.platform}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="w-full space-y-4">
                <div className="p-3 bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 space-y-1">
                  <p className="font-bold text-white">{card.rating}</p>
                  <p className="text-zinc-500">{card.req}</p>
                </div>

                <a
                  href={card.link}
                  className="w-full mono-btn-primary py-3 px-6 text-xs font-mono uppercase tracking-widest cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">get_app</span>
                  <span>Install via {card.store}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Note */}
        <p className="mt-12 text-xs font-mono text-zinc-500 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm text-white">verified_user</span>
          <span>Verified Clean APK • Fast Download Mirror • End-to-End Privacy Protection</span>
        </p>

      </div>
    </section>
  );
}
