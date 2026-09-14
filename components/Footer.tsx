import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-zinc-800 relative overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-zinc-800 pb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 border border-zinc-800 text-white">
                <Logo size={24} />
              </div>
              <span className="text-xl font-black text-white tracking-tight uppercase">
                Google Search
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Multi-browser simultaneous search mobile application. Execute parallel web queries across Google, Brave, Bing, and DuckDuckGo with local offline AI model intelligence.
            </p>
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[11px] font-bold text-white uppercase">
              <span className="w-2 h-2 bg-white animate-pulse" />
              <span>All Systems Operational (99.9% Uptime)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Navigation
              </h4>
              <ul className="text-zinc-400 space-y-2 text-xs">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#download" className="hover:text-white transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Support
              </h4>
              <ul className="text-zinc-400 space-y-2 text-xs">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/delete-account" className="hover:text-white transition-colors">
                    Delete Account
                  </Link>
                </li>
                <li>
                  <Link href="/delete-account/confirm" className="hover:text-white transition-colors">
                    Confirm Deletion
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Legal
              </h4>
              <ul className="text-zinc-400 space-y-2 text-xs">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-xs text-zinc-500">
          <p>
            Copyright © 2026{" "}
            <a
              href="http://www.appnayatech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline transition-colors font-bold"
            >
              AppNaya Technologies
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Security</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Offline AI </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
