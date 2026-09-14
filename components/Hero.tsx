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
  { id: "google", name: "Google", domain: "google.com/search?q=", color: "from-blue-500 to-indigo-600", icon: "search" },
  { id: "brave", name: "Brave Search", domain: "search.brave.com/search?q=", color: "from-orange-500 to-amber-600", icon: "security" },
  { id: "duck", name: "DuckDuckGo", domain: "duckduckgo.com/?q=", color: "from-emerald-500 to-teal-600", icon: "privacy_tip" },
  { id: "bing", name: "Microsoft Bing", domain: "bing.com/search?q=", color: "from-sky-500 to-cyan-600", icon: "travel_explore" },
  { id: "offline", name: "Offline AI Model", domain: "local.ai/engine?q=", color: "from-purple-500 to-pink-600", icon: "memory", offline: true },
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
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 bg-slate-950 text-white">
      {/* Dynamic Background Mesh & Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Feature Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-xs md:text-sm font-semibold text-cyan-300 mb-8 shadow-lg shadow-cyan-500/10"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Simultaneous Multi-Browser Search & Offline AI Model</span>
            <span className="material-symbols-outlined text-sm text-cyan-400">rocket_launch</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight max-w-5xl mb-6"
          >
            One Search Query. <br className="hidden sm:inline" />
            <span className="brand-gradient-text">Multiple WebViews & Offline AI.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10"
          >
            Execute your search query across Google, Brave, Bing, and DuckDuckGo in parallel. 
            Run active in-app WebViews, download local offline AI models, 
            and customize location-based search results seamlessly.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 brand-gradient text-white font-bold py-4 px-8 rounded-xl text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer"
              onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="material-symbols-outlined text-2xl">download</span>
              <span>Download Mobile App</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 glass-card hover:bg-slate-800/80 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all border border-slate-700 cursor-pointer"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="material-symbols-outlined text-2xl text-cyan-400">apps</span>
              <span>Explore Features</span>
            </motion.button>
          </motion.div>

          {/* Two-Grid Showcase: Interactive Simulator + 3D Mockup Graphic */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            
            {/* Interactive Multi-Browser Search Simulator */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="lg:col-span-7 glass-card rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Top Bar with Browser Tabs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 ml-2 hidden sm:inline font-mono">
                      Multi-Engine Simulator v2.0
                    </span>
                  </div>

                  {/* Browser Selector Tabs */}
                  <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                    {browserTabs.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                            isActive
                              ? "bg-gradient-to-r " + tab.color + " text-white shadow-md"
                              : "text-slate-400 hover:bg-slate-800/60"
                          }`}
                        >
                          <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                          <span>{tab.name}</span>
                          {tab.offline && (
                            <span className="px-1.5 py-0.2 text-[9px] bg-white/20 rounded uppercase tracking-wider">
                              OFFLINE
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Address Bar & Search Input */}
                <form onSubmit={handleSearchSubmit} className="my-4">
                  <div className="relative flex items-center bg-slate-900/90 rounded-xl p-2 border border-slate-700/80 shadow-inner">
                    <span className="material-symbols-outlined text-slate-400 ml-2 mr-2 text-xl">
                      {currentBrowser.icon}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 font-semibold hidden md:inline mr-2">
                      https://{currentBrowser.domain}
                    </span>
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Type query to test simultaneous search..."
                      className="w-full bg-transparent text-sm font-semibold text-white outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-lg brand-gradient text-white text-xs font-bold shadow hover:opacity-90 transition-opacity ml-2 shrink-0 flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">search</span>
                      <span>Search All</span>
                    </button>
                  </div>
                </form>

                {/* Quick Sample Query Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-slate-400">Try query:</span>
                  {sampleQueries.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuery(q)}
                      className="px-2.5 py-1 rounded-md text-xs bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors font-medium cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Simulated WebView Output Window */}
                <div className="relative bg-slate-950 rounded-xl p-5 border border-slate-800 min-h-[180px] flex flex-col justify-between overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isSearching ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-10 gap-3"
                      >
                        <div className="w-8 h-8 border-3 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
                        <p className="text-xs font-mono text-cyan-400 animate-pulse">
                          Dispatching parallel WebViews across 5 search engines...
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
                            <span className={`w-2.5 h-2.5 rounded-full ${currentBrowser.offline ? "bg-purple-400" : "bg-emerald-400"}`} />
                            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                              Active Tab: {currentBrowser.name}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                            {currentBrowser.offline ? "Offline Local Neural Model" : "Active In-App WebView"}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                          <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                            <span>Results for &quot;{query}&quot;</span>
                            <span className="material-symbols-outlined text-xs text-cyan-400">open_in_new</span>
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {currentBrowser.offline
                              ? "Loaded directly from local offline AI model. Zero cellular data sent to external servers. High precision parameters match."
                              : `Simultaneous query executed via ${currentBrowser.name}. In-app WebView state preserved for instant browsing.`}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 font-mono pt-1">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs text-emerald-400">check_circle</span>
                            Simultaneous 5x Engines Sync
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs text-cyan-400">speed</span>
                            Latency: 12ms
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* 3D High-Tech Mockup Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="lg:col-span-5 glass-card rounded-2xl p-4 border border-slate-800 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden mb-4 border border-slate-800">
                <Image
                  src="/images/hero_mockup.jpg"
                  alt="Google Search Multi-Engine Smartphone View"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Overlay Floating Badges */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-bold font-mono text-cyan-300">Parallel WebViews</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-purple-400">memory</span>
                  <span className="text-xs font-bold font-mono text-purple-300">Offline Neural Engine</span>
                </div>
              </div>

              <div className="p-2 space-y-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Mobile Multi-Engine Interface</span>
                  <span className="material-symbols-outlined text-cyan-400 text-sm">verified</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Experience seamless parallel browsing on your Android device. Switch between Google, Brave, Bing, DuckDuckGo, and offline AI with a single touch.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
