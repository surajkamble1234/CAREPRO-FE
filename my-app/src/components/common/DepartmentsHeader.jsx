import React from 'react';
import { useTheme } from '@/core/context/ThemeContext';
// import ScrollExpand from '@/components/ui/ScrollExpand';
import FeatureCards from '@/components/common/FeatureCards';

export default function DepartmentsHeader() {
  const { theme } = useTheme();

  return (
    <section className="relative py-16 px-4 flex flex-col items-center">
      {/* Dashed Line Divider matching Reference Site exactly */}
      <div className="w-full max-w-5xl mb-16 flex items-center justify-center relative">
        {/* Continuous Radial Dot Line */}
        <div
          className={`w-full h-[1px] ${
            theme === 'dark' ? 'opacity-40' : 'opacity-60'
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, ${theme === 'dark' ? '#6B7280' : '#9CA3AF'} 60%, transparent 40%)`,
            backgroundSize: '12px 1px',
            backgroundRepeat: 'repeat-x',
          }}
        />

        {/* Center Pill Badge */}
        <span
          className={`absolute px-4 py-1.5 rounded-md text-[11px] font-mono tracking-[0.25em] font-semibold uppercase shadow-sm transition-colors ${
            theme === 'dark'
              ? 'bg-[#121824] text-gray-400 border border-gray-800'
              : 'bg-[#F8FAFC] text-gray-600 border border-gray-300'
          }`}
        >
          BUILT FOR EVERY DEPARTMENT.
        </span>
      </div>

      {/* 2-Column Split Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left mb-12">
        {/* Left Column: Big Bold Title */}
        <h2
          className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] font-['Plus_Jakarta_Sans_Variable'] transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Made for every department in your hospital
        </h2>

        {/* Right Column: Paragraph Description */}
        <p
          className={`text-base sm:text-lg leading-relaxed font-normal transition-colors ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          CarePro is built around how hospitals actually run — from the reception desk to the pharmacy counter to the billing office — so every department stays in sync.
        </p>
      </div>

      {/* 3 Neobrutalism Dashed Feature Cards directly below BUILT FOR EVERY DEPARTMENT */}
      <FeatureCards />

      {/* 
      <div className="w-full max-w-3xl my-8">
        <ScrollExpand
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Hospital Control Center & Clinical Workspace"
          title={
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-gray-950 font-black text-2xl sm:text-4xl drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]">
                CarePro
              </span>
              <span className="text-amber-500 font-extrabold text-xl sm:text-3xl drop-shadow-[0_2px_10px_rgba(245,158,11,0.8)]">
                +
              </span>
            </div>
          }
          scrollHint="Scroll down to expand workspace"
          useWindowScroll={true}
          startWidth={40}
          startHeight={50}
          startRadius={20}
          endRadius={12}
          mediaZoom={1.15}
          scrollDistance={0.5}
          holdDistance={0.1}
          smoothing={0.06}
          overlayScrim={0.65}
          enabled
        >
          <div className="max-w-lg flex flex-col items-center gap-2.5 px-4 py-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/80 text-gray-900">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold tracking-wider uppercase border border-emerald-300">
              Enterprise Hospital OS
            </span>

            <blockquote className="text-base sm:text-xl font-extrabold text-gray-950 tracking-tight leading-snug italic font-['Plus_Jakarta_Sans_Variable']">
              “Healthcare flows seamlessly when technology works as one connected heartbeat.”
            </blockquote>

            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-md">
              Empowering clinicians, administrators, and pharmacists with unified patient records, instant Tally accounting sync, and automated clinical workflows.
            </p>
          </div>
        </ScrollExpand>
      </div>
      */}
    </section>
  );
}
