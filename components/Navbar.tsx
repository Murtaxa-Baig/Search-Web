"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 15;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`sticky top-0 z-50 glass-nav transition-all duration-300 ${
        scrolled ? "shadow-xl shadow-cyan-950/10 border-b border-cyan-500/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative p-1.5 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all shadow-md">
              <Logo size={36} className="transition-transform group-hover:scale-105" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-gray-900 dark:text-white text-xl font-extrabold tracking-tight group-hover:text-cyan-400 transition-colors">
                  Google Search
                </span>
                <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full brand-gradient text-white shadow-sm">
                  v2.0
                </span>
              </div>
              <span className="text-[11px] text-gray-500 dark:text-gray-400 hidden sm:block font-medium">
                Simultaneous Search & Offline AI
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-cyan-500/10 focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-gray-200 dark:border-gray-800/80 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <NavLinks mobile onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

type NavLinksProps = {
  mobile?: boolean;
  onClick?: () => void;
};

function NavLinks({ mobile = false, onClick }: NavLinksProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const links = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/contact", label: "Contact", icon: "mail" },
    { href: "/terms", label: "Terms", icon: "description" },
    { href: "/privacy", label: "Privacy", icon: "shield" },
  ];

  return (
    <>
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={`relative flex items-center gap-2 text-sm font-semibold transition-all duration-200 py-1 ${
              active
                ? "text-cyan-600 dark:text-cyan-400"
                : "text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
            }`}
          >
            {mobile && (
              <span className="material-symbols-outlined text-lg opacity-70">
                {link.icon}
              </span>
            )}
            <span>{link.label}</span>
            {active && !mobile && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-1 left-0 right-0 h-0.5 brand-gradient rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}

      <Link
        href="/#download"
        onClick={(e) => {
          if (pathname === "/") {
            e.preventDefault();
            document
              .getElementById("download")
              ?.scrollIntoView({ behavior: "smooth" });
          }
          onClick?.();
        }}
        className={`${
          mobile ? "mt-3 w-full justify-center" : ""
        } inline-flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-xl brand-gradient text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all`}
      >
        <span className="material-symbols-outlined text-lg">download</span>
        <span>Download App</span>
      </Link>
    </>
  );
}

