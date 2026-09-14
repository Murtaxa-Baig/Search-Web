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
    desc: "Enter your search prompt into the unified search bar. Select local parameter toggles or offline model execution.",
    icon: "edit_note",
  },
  {
    step: "02",
    title: "Simultaneous Dispatch",
    desc: "The app dispatches your query across Google, Brave, Bing, and DuckDuckGo in parallel while initializing active WebViews.",
    icon: "rocket_launch",
  },
  {
    step: "03",
    title: "Instant Compare & Offline AI",
    desc: "Switch between live browser result tabs seamlessly or run local offline neural responses without internet connectivity.",
    icon: "bolt",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden border-b border-zinc-800">
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
              className="mono-card p-6 text-center border border-zinc-800"
            >
              <h3 className="text-3xl sm:text-5xl font-black text-white font-mono mb-2">
                {stat.value}
              </h3>
              <p className="text-xs font-mono font-bold text-white uppercase mb-1">
                {stat.label}
              </p>
              <p className="text-[11px] font-mono text-zinc-500">
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
          <div className="mono-tag mb-4">
            Workflow Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight uppercase">
            3-Step Multi-Search Process
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xs sm:text-sm font-mono">
            Say goodbye to single-engine bottlenecks and manual tab switching.
          </p>
        </motion.div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflowSteps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="mono-card p-8 border border-zinc-800 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-black font-mono text-zinc-700 group-hover:text-white transition-colors">
                  {item.step}
                </span>
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-mono uppercase mb-3 group-hover:text-zinc-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-white">
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
