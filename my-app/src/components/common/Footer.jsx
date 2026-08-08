import React from 'react';
import { Activity, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/core/context/ThemeContext';
import StrokeText from '@/components/ui/StrokeText';

export default function Footer() {
  const { theme } = useTheme();

  const dashedLineStyle = {
    backgroundImage: `linear-gradient(to right, ${theme === 'dark' ? '#6B7280' : '#9CA3AF'} 60%, transparent 40%)`,
    backgroundSize: '12px 1px',
    backgroundRepeat: 'repeat-x',
  };

  return (
    <footer
      className={`relative pt-12 sm:pt-16 pb-6 px-4 overflow-hidden flex flex-col items-center transition-colors ${
        theme === 'dark' ? 'bg-[#000000] text-gray-100' : 'bg-[#FFFFFF] text-gray-900'
      }`}
    >
      {/* Top Ambient Glow Effect */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[120px] blur-[90px] rounded-full pointer-events-none -z-10 ${
          theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/15'
        }`}
      />

      {/* Top Dashed Line Divider matching reference weight */}
      <div className="w-full max-w-6xl mb-8 sm:mb-12">
        <div className={`w-full h-[1px] ${theme === 'dark' ? 'opacity-40' : 'opacity-60'}`} style={dashedLineStyle} />
      </div>

      {/* Main Container: All 4 Sections Aligned in 1 Horizontal Row */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 text-left mb-12 sm:mb-16 items-start">
        {/* Section 1: Brand & Bio (Spans 2 columns) */}
        <div className="md:col-span-2 flex flex-col gap-3.5">
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
              <Activity className="w-4 h-4" />
            </div>
            <span
              className={`text-xl font-bold tracking-tight inline-flex items-center ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Care<span className="text-emerald-500">Pro</span>
              <span className="text-xs font-extrabold text-amber-400 self-start -mt-0.5 ml-0.5 leading-none">
                +
              </span>
            </span>
          </div>
          <p
            className={`text-sm leading-relaxed font-normal ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            The hospital operating system for OPD, IPD, pharmacy, billing and Tally Sync — live data, from any device.
          </p>
        </div>

        {/* Section 2: Product */}
        <div className="flex flex-col gap-3">
          <h4
            className={`text-xs font-bold tracking-widest uppercase ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-900'
            }`}
          >
            Product
          </h4>
          <ul className="flex flex-col gap-2 text-sm font-medium">
            {['Features', 'Pricing', 'Get started'].map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`transition-colors ${
                    theme === 'dark' ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Company */}
        <div className="flex flex-col gap-3">
          <h4
            className={`text-xs font-bold tracking-widest uppercase ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-900'
            }`}
          >
            Company
          </h4>
          <ul className="flex flex-col gap-2 text-sm font-medium">
            {['About Us', 'Contact', 'FAQ'].map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`transition-colors ${
                    theme === 'dark' ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Legal */}
        <div className="flex flex-col gap-3">
          <h4
            className={`text-xs font-bold tracking-widest uppercase ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-900'
            }`}
          >
            Legal
          </h4>
          <ul className="flex flex-col gap-2 text-sm font-medium">
            {['Privacy Policy', 'Terms of Service', 'Security & HIPAA'].map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`transition-colors ${
                    theme === 'dark' ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Middle Dashed Line Divider matching reference weight */}
      <div className="w-full max-w-6xl mb-6 sm:mb-8">
        <div className={`w-full h-[1px] ${theme === 'dark' ? 'opacity-40' : 'opacity-60'}`} style={dashedLineStyle} />
      </div>

      {/* Bottom Legal & Social Bar */}
      <div
        className={`w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium mb-8 sm:mb-12 text-center sm:text-left ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        <div>© {new Date().getFullYear()} CarePro+. All rights reserved.</div>

        <div className="flex items-center gap-2">
          <span>A product by</span>
          <div className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-white shadow-sm border border-gray-200 inline-flex items-center justify-center">
            <img
              src="/Maxzom.png"
              alt="Maxzom Logo"
              className="h-4 sm:h-5 w-auto object-contain shrink-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
          >
            <span>Twitter</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* React Bits GSAP StrokeText Animated Watermark */}
      <div className="w-full max-w-6xl flex items-center justify-center select-none overflow-hidden pt-2 sm:pt-4 pb-2 relative">
        <div className="relative inline-flex items-center justify-center">
          <StrokeText
            text="CarePro"
            strokeColor={theme === 'dark' ? '#10B981' : '#059669'}
            fillColor={theme === 'dark' ? '#047857' : '#10B981'}
            strokeWidth={1.8}
            drawDuration={1.8}
            fillDelay={0.3}
            stagger={0.06}
            fontSize={120}
            fontWeight={800}
            letterSpacing={-4}
            fillMode="wipe"
            trigger="loop"
          />
          {/* Glowing Amber Plus Icon */}
          <span className="absolute top-1 sm:top-2 right-0 translate-x-2 text-3xl sm:text-6xl font-extrabold text-amber-400 leading-none drop-shadow-[0_4px_20px_rgba(251,191,36,0.6)]">
            +
          </span>
        </div>

        {/* Ambient Mist / Smoke Overlay Layer over StrokeText */}
        <div
          className={`absolute bottom-0 inset-x-0 h-20 sm:h-28 pointer-events-none bg-gradient-to-t ${
            theme === 'dark'
              ? 'from-[#000000] via-[#000000]/60 to-transparent'
              : 'from-[#FFFFFF] via-[#FFFFFF]/60 to-transparent'
          }`}
        />
      </div>
    </footer>
  );
}
