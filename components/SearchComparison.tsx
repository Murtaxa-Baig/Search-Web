"use client";

import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "Multi-Engine Querying",
    traditional: "Single engine at a time",
    googleSearch: "Parallel 5x Engines Sync",
    highlight: true,
  },
  {
    feature: "Offline AI Search",
    traditional: "Requires active internet",
    googleSearch: "100% Offline Neural Model",
    highlight: true,
  },
  {
    feature: "In-App WebView Switching",
    traditional: "Manual app & tab switching",
    googleSearch: "Instant 1-Tap In-App WebViews",
    highlight: false,
  },
  {
    feature: "Location Trend Controls",
    traditional: "Opaque background tracking",
    googleSearch: "Granular User Permissions",
    highlight: false,
  },
  {
    feature: "Data Self-Management",
    traditional: "Complex request flows",
    googleSearch: "Instant Self-Serve Deletion",
    highlight: true,
  },
];

export default function SearchComparison() {
  return (
    <section className="py-24 bg-slate-900/60 text-white relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Speed & Intelligence Matrix
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            Why Google Search Outperforms Traditional Mobile Browsers
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Compare key architectural differences between standard single-tab browsers and our multi-engine offline AI solution.
          </p>
        </motion.div>

        {/* Comparison Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-4 sm:p-8 border border-slate-800 shadow-2xl overflow-x-auto"
        >
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="pb-4 text-sm font-bold text-slate-400">Capability / Feature</th>
                <th className="pb-4 text-sm font-bold text-slate-400">Standard Mobile Browsers</th>
                <th className="pb-4 text-sm font-bold text-cyan-400 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">bolt</span>
                  <span>Google Search App</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 text-sm font-semibold text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 text-sm text-slate-400 flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-400 text-sm">close</span>
                    <span>{row.traditional}</span>
                  </td>
                  <td className="py-4 text-sm font-bold text-cyan-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                      <span>{row.googleSearch}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
