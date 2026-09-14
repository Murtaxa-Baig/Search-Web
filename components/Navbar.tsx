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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b ${
        scrolled ? "border-zinc-800 shadow-2xl" : "border-zinc-900"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="p-2 bg-zinc-900 border border-zinc-700 text-white rounded-none group-hover:border-white transition-colors">
              <Logo size={28} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white text-xl font-black tracking-tight uppercase group-hover:text-zinc-300 transition-colors">
                  Google Search
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-white text-black rounded-none">
                  
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono hidden sm:block">
                Simultaneous Search & Offline AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2.5 text-white bg-zinc-900 border border-zinc-800 rounded-none hover:border-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>

        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <NavLinks mobile onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
    { href: "/#features", label: "Features", icon: "apps" },
    { href: "/#testimonials", label: "Testimonials", icon: "rate_review" },
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
            className={`relative flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 py-1 ${
              active
                ? "text-white underline underline-offset-8 decoration-2"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {mobile && (
              <span className="material-symbols-outlined text-base opacity-70">
                {link.icon}
              </span>
            )}
            <span>{link.label}</span>
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
        } mono-btn-primary py-2.5 px-5 text-xs font-mono tracking-widest`}
      >
        <span className="material-symbols-outlined text-base">download</span>
        <span>Get App</span>
      </Link>
    </>
  );
}
