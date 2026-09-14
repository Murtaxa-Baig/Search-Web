"use client";

import { motion } from "framer-motion";

const comparisonData = [
  {
    feature: "Multi-Engine Querying",
    traditional: "Single engine at a time",
    googleSearch: "Parallel 5x Engines Sync",
  },
  {
    feature: "Offline AI Search",
    traditional: "Requires active internet",
    googleSearch: "100% Offline Neural Model",
  },
  {
    feature: "In-App WebView Switching",
    traditional: "Manual app & tab switching",
    googleSearch: "Instant 1-Tap In-App WebViews",
  },
  {
    feature: "Location Trend Controls",
    traditional: "Opaque background tracking",
    googleSearch: "Granular User Permissions",
  },
  {
    feature: "Data Self-Management",
    traditional: "Complex request flows",
    googleSearch: "Instant Self-Serve Deletion",
  },
];

export default function SearchComparison() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mono-tag mb-4">
            Comparison Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight uppercase">
            Standard Mobile Browsers vs Google Search
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm font-mono">
            Compare key architectural capabilities between standard single-tab browsers and our multi-engine solution.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mono-card p-6 border border-zinc-800 overflow-x-auto"
        >
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="pb-4 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Capability / Feature</th>
                <th className="pb-4 text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Standard Mobile Browsers</th>
                <th className="pb-4 text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  <span>Google Search App</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 font-mono text-xs">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/60 transition-colors">
                  <td className="py-4 font-bold text-white uppercase">
                    {row.feature}
                  </td>
                  <td className="py-4 text-zinc-400 flex items-center gap-2">
                    <span className="material-symbols-outlined text-zinc-600 text-sm">close</span>
                    <span>{row.traditional}</span>
                  </td>
                  <td className="py-4 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black font-bold">
                      <span className="material-symbols-outlined text-black text-sm">check_circle</span>
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
