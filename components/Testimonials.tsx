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
  },
  {
    name: "Elena Rostova",
    role: "AI Developer & Lead",
    avatar: "ER",
    rating: 5,
    comment: "The offline local AI search model works engine-level fast even in zero-cell coverage areas. Outstanding mobile implementation!",
    badge: "Power User",
  },
  {
    name: "Marcus Vance",
    role: "Privacy Advocate",
    avatar: "MV",
    rating: 5,
    comment: "I love the self-serve privacy standards. Account deletion link and local parameter control give complete peace of mind.",
    badge: "Verified User",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black text-white relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mono-tag mb-4">
            Testimonials & Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight uppercase">
            Trusted by Researchers & Power Users
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm font-mono">
            Read real feedback from developers, researchers, and privacy enthusiasts worldwide.
          </p>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 mt-6 px-4 py-2 bg-zinc-900 border border-zinc-800">
            <div className="flex text-white">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm">
                  star
                </span>
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-white">4.9 / 5.0 Rating</span>
            <span className="text-xs font-mono text-zinc-500">|</span>
            <span className="text-xs font-mono text-zinc-400">100k+ Mobile Downloads</span>
          </div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="mono-card p-6 border border-zinc-800 flex flex-col justify-between group"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-white">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">
                      star
                    </span>
                  ))}
                </div>

                <p className="text-xs font-mono text-zinc-300 leading-relaxed mb-8">
                  &quot;{item.comment}&quot;
                </p>
              </div>

              {/* User Bar */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white text-black font-mono font-bold flex items-center justify-center text-xs">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white font-mono uppercase group-hover:text-zinc-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-zinc-500 font-mono">
                      {item.role}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400">
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
