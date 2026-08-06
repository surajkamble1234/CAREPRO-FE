import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/core/context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative pt-20 sm:pt-28 pb-12 px-4 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Soft Background Spotlight Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className={`max-w-3xl text-3xl sm:text-6xl font-extrabold tracking-tight leading-[1.12] font-['Plus_Jakarta_Sans_Variable'] transition-colors ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Run your entire hospital on one intelligent HMS
      </h1>

      {/* Subtitle Description */}
      <p className={`mt-6 max-w-xl text-sm sm:text-lg leading-relaxed font-normal transition-colors ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      }`}>
        CarePro unifies Patients, OPD, IPD, Pharmacy, Billing, Claims and Ledger into one secure, role-based platform.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-row items-center justify-center gap-3 w-auto">
        <button className="px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-sm transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer">
          <span>Get started</span>
        </button>

        <button className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
          theme === 'dark' 
            ? 'bg-gray-900/90 text-white border border-gray-800 hover:bg-gray-800' 
            : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
        }`}>
          <span>Book a demo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Compliance / Security Pill Badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {['HIPAA-ready', 'ISO 27001 Certified', 'SOC 2 Type II', 'Native Tally Sync'].map((badge, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-medium shadow-sm transition-colors ${
              theme === 'dark'
                ? 'bg-gray-900/80 border-gray-800/80 text-gray-300'
                : 'bg-white border-gray-300 text-gray-700'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>{badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
