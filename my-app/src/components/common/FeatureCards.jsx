import React from 'react';
import { ChevronRight, Stethoscope, Users, LineChart, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useTheme } from '@/core/context/ThemeContext';

export default function FeatureCards() {
  const { theme } = useTheme();

  const cards = [
    {
      badge: 'OPD & IPD TRIAGE',
      title: 'Purpose-built for hospital operations',
      description: 'Streamlined doctor desks, triage management, and emergency bed allocation.',
      date: 'OPD & IPD',
      icon: Stethoscope,
      bgGradient: 'from-[#0D1527] to-[#111C35]',
      mockup: (
        <div className="p-4 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-md border border-gray-200 dark:border-gray-700/60 text-xs flex flex-col gap-2">
          <div className="flex items-center justify-between font-bold text-gray-900 dark:text-white border-b pb-1">
            <span>Triage Priority</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px]">Active</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-gray-100 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300">
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span className="truncate">Emergency Desk: Dr. Sarah Vance</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <span>Queue: 14 Patients</span>
            <span>Avg Wait: 4m</span>
          </div>
        </div>
      ),
    },
    {
      badge: 'PATIENT FLOW',
      title: 'Manage every patient journey end-to-end',
      description: 'From reception registration to pharmacy POS checkout and discharge summaries.',
      date: 'CARE LIFECYCLE',
      icon: Users,
      bgGradient: 'from-[#0F1B2B] to-[#14243B]',
      mockup: (
        <div className="p-4 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-md border border-gray-200 dark:border-gray-700/60 text-xs flex flex-col gap-2">
          <div className="flex items-center justify-between font-bold text-gray-900 dark:text-white border-b pb-1">
            <span>Patient Tracker</span>
            <span className="text-[10px] text-emerald-500 font-medium">In Progress</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="text-[11px]">OPD Consultation & Prescription</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="text-[11px]">Pharmacy POS Bill Cleared</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      badge: 'ANALYTICS & TALLY',
      title: 'Give staff more time for patients',
      description: 'Automated billing, Tally sync, and real-time revenue analytics dashboards.',
      date: 'AUTOMATION',
      icon: LineChart,
      bgGradient: 'from-[#0C1A24] to-[#122736]',
      mockup: (
        <div className="p-4 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-md border border-gray-200 dark:border-gray-700/60 text-xs flex flex-col gap-2">
          <div className="flex items-center justify-between font-bold text-gray-900 dark:text-white border-b pb-1">
            <span>Cycle Revenue</span>
            <span className="text-[10px] text-blue-400 font-semibold">+24% vs last mo</span>
          </div>
          <div className="flex items-center justify-between text-gray-600 dark:text-gray-300 text-[11px]">
            <span>Tally Sync Status:</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Live
            </span>
          </div>
          <div className="h-8 w-full bg-gradient-to-r from-emerald-500/20 via-teal-500/30 to-blue-500/20 rounded-md flex items-end p-1 gap-1">
            <div className="w-1/4 h-3 bg-emerald-500 rounded-sm" />
            <div className="w-1/4 h-5 bg-teal-400 rounded-sm" />
            <div className="w-1/4 h-4 bg-blue-400 rounded-sm" />
            <div className="w-1/4 h-6 bg-emerald-400 rounded-sm" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full max-w-6xl px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="group/card relative">
            {/* Dashed Shadow Backdrop matching your code snippet */}
            <span
              className={`absolute inset-0 border-2 border-dashed rounded-2xl transition-transform ${
                theme === 'dark'
                  ? 'border-gray-700 bg-gray-950'
                  : 'border-gray-400 bg-gray-100'
              }`}
            />

            {/* Hover Lift Card Container */}
            <a
              href="#"
              className={`group/link relative flex h-96 flex-col justify-between rounded-2xl border-2 p-5 transition-all duration-300 group-hover/card:-translate-x-1.5 group-hover/card:-translate-y-1.5 shadow-xl ${
                theme === 'dark'
                  ? 'border-gray-800 bg-gray-900 text-white hover:border-emerald-500/60 hover:bg-gray-900/95'
                  : 'border-gray-200 bg-white text-gray-900 hover:border-emerald-500/60 hover:bg-gray-50'
              }`}
            >
              {/* Top Interactive UI Mockup Header */}
              <div className="w-full overflow-hidden rounded-xl bg-gray-950/60 p-1 border border-gray-800/80 shadow-inner">
                {card.mockup}
              </div>

              {/* Bottom Details Section matching screenshot */}
              <div className="flex flex-col gap-2 mt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-500 uppercase">
                  <card.icon className="w-3.5 h-3.5" />
                  <span>{card.badge}</span>
                </span>

                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold tracking-tight leading-snug group-hover/link:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-gray-800/80 group-hover/link:bg-emerald-500 group-hover/link:text-gray-950 flex items-center justify-center text-gray-400 transition-colors shrink-0">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-gray-400 line-clamp-2 mt-1">
                  {card.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
