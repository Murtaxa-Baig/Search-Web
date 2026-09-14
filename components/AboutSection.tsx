"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "5x", label: "Parallel Engines", desc: "Simultaneous query execution" },
  { value: "100%", label: "Offline Local AI", desc: "Zero cell data needed" },
  { value: "0.2s", label: "Average Switch Time", desc: "Instant WebViews in app" },
  { value: "100k+", label: "Active Downloads", desc: "Trusted global users" },
];

const workflowSteps = [
  {
    step: "01",
    title: "Type Your Query Once",
    desc: "Enter your search prompt into the unified search bar. Choose optional parameters like location toggles or local offline model preference.",
    icon: "edit_note",
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Simultaneous Dispatch",
    desc: "The app dispatches your query across Google, Brave, Bing, and DuckDuckGo in parallel while initializing active WebViews.",
    icon: "rocket_launch",
    color: "from-cyan-500 to-teal-500",
  },
  {
    step: "03",
    title: "Instant Compare & Offline AI",
    desc: "Switch between live browser result tabs seamlessly or run local offline neural responses without internet connectivity.",
    icon: "bolt",
    color: "from-purple-500 to-pink-500",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {metrics.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl text-center border border-slate-800 shadow-lg"
            >
              <h3 className="text-3xl sm:text-5xl font-black brand-gradient-text mb-2">
                {stat.value}
              </h3>
              <p className="text-sm font-bold text-white mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            3-Step Power Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            How Google Search Elevates Your Browsing
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Say goodbye to single-engine bottlenecks and constant app switching. Here is how our architecture works.
          </p>
        </motion.div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflowSteps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 rounded-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-black font-mono text-slate-700 group-hover:text-cyan-400 transition-colors">
                  {item.step}
                </span>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                  <span className="material-symbols-outlined text-white text-2xl">
                    {item.icon}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>Phase {idx + 1} Ready</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
