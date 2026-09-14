import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#070913] text-white py-16 border-t border-gray-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-gray-800/80 pb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <Logo size={32} />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Google Search
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              The ultimate multi-browser simultaneous search application. Open parallel in-app WebViews, execute offline AI search queries, and manage local search preferences effortlessly.
            </p>
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.9% Uptime)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
                Navigation
              </h4>
              <ul className="text-gray-400 space-y-2 text-xs font-medium">
                <li>
                  <Link href="/" className="hover:text-cyan-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="hover:text-cyan-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#download" className="hover:text-cyan-400 transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
                Support
              </h4>
              <ul className="text-gray-400 space-y-2 text-xs font-medium">
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/delete-account" className="hover:text-cyan-400 transition-colors">
                    Delete Account
                  </Link>
                </li>
                <li>
                  <Link href="/delete-account/confirm" className="hover:text-cyan-400 transition-colors">
                    Confirm Deletion
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
                Legal
              </h4>
              <ul className="text-gray-400 space-y-2 text-xs font-medium">
                <li>
                  <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-xs text-gray-500">
          <p>
            Copyright © 2026{" "}
            <a
              href="http://www.appnayatech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors font-bold"
            >
              AppNaya Technologies
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Security</span>
            <span>•</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Offline AI v2.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

