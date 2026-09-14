"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const sampleQueries = [
  "Latest Tech Innovations 2026",
  "Best Offline AI Models",
  "Simultaneous Web Search Tips",
];

const browserTabs = [
  { id: "google", name: "Google", domain: "google.com/search?q=", icon: "search" },
  { id: "brave", name: "Brave Search", domain: "search.brave.com/search?q=", icon: "security" },
  { id: "duck", name: "DuckDuckGo", domain: "duckduckgo.com/?q=", icon: "privacy_tip" },
  { id: "bing", name: "Microsoft Bing", domain: "bing.com/search?q=", icon: "travel_explore" },
  { id: "offline", name: "Offline AI Model", domain: "local.ai/engine?q=", icon: "memory", offline: true },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("google");
  const [query, setQuery] = useState("Simultaneous Multi-Browser Search");
  const [isSearching, setIsSearching] = useState(false);

  const currentBrowser = browserTabs.find((b) => b.id === activeTab) || browserTabs[0];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 500);
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32 bg-black text-white grid-pattern-bw border-b border-zinc-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Text Block */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          
          {/* Black & White Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mono-tag mb-8"
          >
            <span className="w-2 h-2 rounded-none bg-white animate-pulse" />
            <span>Multi-Browser Search & Offline AI Engine</span>
            <span className="material-symbols-outlined text-xs">rocket_launch</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase leading-[1.05] tracking-tight max-w-5xl mb-6 font-sans"
          >
            One Search Query. <br className="hidden sm:inline" />
            <span className="text-zinc-400">Multiple WebViews & Offline AI.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10"
          >
            Execute queries across Google, Brave, Bing, and DuckDuckGo in parallel. 
            Run active in-app WebViews and execute local offline AI neural models with zero data usage.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
              className="mono-btn-primary cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">download</span>
              <span>Download Mobile App</span>
            </button>

            <button
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="mono-btn-outline cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">apps</span>
              <span>Explore Features</span>
            </button>
          </motion.div>

        </div>

        {/* Reversed Two-Column Grid: Left (Simulator), Right (3D Monochrome Graphic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Column 1: Interactive Multi-Browser Search Simulator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-7 mono-card p-6 border border-zinc-800 flex flex-col justify-between"
          >
            <div>
              {/* Window Controls & Browser Tabs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-zinc-600 rounded-none" />
                    <span className="w-2.5 h-2.5 bg-zinc-600 rounded-none" />
                    <span className="w-2.5 h-2.5 bg-zinc-600 rounded-none" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 ml-2 font-bold uppercase tracking-wider">
                    Multi-Engine Simulator v2.0
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  {browserTabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all whitespace-nowrap cursor-pointer rounded-none border ${
                          isActive
                            ? "bg-white text-black border-white"
                            : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                        <span>{tab.name}</span>
                        {tab.offline && (
                          <span className="px-1 py-0.2 text-[9px] bg-black text-white border border-zinc-700">
                            OFFLINE
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Address Input */}
              <form onSubmit={handleSearchSubmit} className="my-4">
                <div className="relative flex items-center bg-zinc-950 p-2 border border-zinc-800">
                  <span className="material-symbols-outlined text-zinc-500 ml-2 mr-2 text-lg">
                    {currentBrowser.icon}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 font-semibold hidden md:inline mr-2">
                    https://{currentBrowser.domain}
                  </span>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type query to test simultaneous search..."
                    className="w-full bg-transparent text-xs font-mono font-bold text-white outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-white text-black text-xs font-mono font-bold hover:bg-zinc-200 transition-colors ml-2 shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">search</span>
                    <span>Search</span>
                  </button>
                </div>
              </form>

              {/* Quick Sample Queries */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-mono text-zinc-500">Query samples:</span>
                {sampleQueries.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(q)}
                    className="px-2.5 py-1 text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-white transition-colors cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Output Display */}
              <div className="relative bg-zinc-950 p-5 border border-zinc-800 min-h-[170px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {isSearching ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-8 gap-3"
                    >
                      <div className="w-6 h-6 border-2 border-white/20 border-t-white animate-spin" />
                      <p className="text-xs font-mono text-zinc-400 animate-pulse">
                        Dispatching parallel queries across 5 search engines...
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-white" />
                          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                            Active Tab: {currentBrowser.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 border border-zinc-800">
                          {currentBrowser.offline ? "Offline Local Neural Model" : "Active In-App WebView"}
                        </span>
                      </div>

                      <div className="p-3.5 bg-zinc-900 border border-zinc-800 space-y-1.5">
                        <h4 className="text-xs font-mono font-bold text-white flex items-center gap-2">
                          <span>Results for &quot;{query}&quot;</span>
                          <span className="material-symbols-outlined text-xs text-zinc-400">open_in_new</span>
                        </h4>
                        <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                          {currentBrowser.offline
                            ? "Processed via local offline AI model. Zero data dispatched to external servers."
                            : `Simultaneous query executed via ${currentBrowser.name}. WebView session active.`}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1">
                        <span>Latency: 12ms</span>
                        <span>Encrypted Session</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Column 2: 3D Mockup Graphic in High-Contrast Monochrome */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-5 mono-card p-5 border border-zinc-800 flex flex-col justify-between group"
          >
            <div className="relative h-64 sm:h-80 w-full overflow-hidden mb-4 border border-zinc-800 bg-zinc-900">
              <Image
                src="/images/hero_mockup.jpg"
                alt="Google Search Multi-Engine Smartphone View"
                fill
                className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Floating Monospaced Badges */}
              <div className="absolute top-4 left-4 bg-black/90 px-3 py-1 border border-zinc-700 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white animate-pulse" />
                <span className="text-[11px] font-mono font-bold text-white">Parallel WebViews</span>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/90 px-3 py-1 border border-zinc-700 flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-white">memory</span>
                <span className="text-[11px] font-mono font-bold text-white">Offline Neural Model</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white uppercase font-mono flex items-center gap-2">
                <span>Multi-Engine Interface</span>
                <span className="material-symbols-outlined text-sm text-white">verified</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                Seamless parallel browsing on mobile hardware. Switch between search engines and local AI instantly.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
