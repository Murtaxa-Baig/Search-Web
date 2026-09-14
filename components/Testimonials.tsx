"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Senior Tech Researcher",
    avatar: "AR",
    rating: 5,
    comment: "The simultaneous multi-engine search feature saved me hours during lit reviews. Being able to compare Google and Brave side by side in-app is unmatched.",
    badge: "Verified User",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Elena Rostova",
    role: "AI Developer & Enthusiast",
    avatar: "ER",
    rating: 5,
    comment: "The offline local AI search model works flawlessly even when I'm traveling in zero-cell coverage areas. Outstanding mobile implementation!",
    badge: "Power User",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    name: "Marcus Vance",
    role: "Privacy Advocate",
    avatar: "MV",
    rating: 5,
    comment: "I love the self-serve privacy standards. Account deletion link and local parameter control give complete peace of mind.",
    badge: "Verified User",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            User Feedback & Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            Loved by Researchers, Developers & Power Users
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            See how Google Search transformed daily web browsing for thousands of global users.
          </p>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  &quot;{item.comment}&quot;
                </p>
              </div>

              {/* User Info */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {item.role}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                  {item.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
