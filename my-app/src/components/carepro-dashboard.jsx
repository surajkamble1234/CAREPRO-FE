import React, { useState } from 'react';
import {
  Wallet,
  Users,
  Stethoscope,
  Activity,
  Truck,
  Bed,
  LogOut,
  Package,
  Calendar,
  Moon,
  Sun,
  Bell,
  PanelLeft,
  UserCheck,
  TrendingUp,
  Percent,
  RefreshCw,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '@/core/context/ThemeContext';

export function CareProDashboard({ user, onLogout, onToggleSidebar, isSidebarCollapsed }) {
  const { theme, toggleTheme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('This Month');

  const filterPills = [
    'Today',
    'Yesterday',
    'This Week',
    'This Month',
    'Last Month',
    'This Quarter',
    'This FY',
  ];

  const kpiCards = [
    {
      title: 'REVENUE',
      value: '₹16,298.00',
      subtext: '9 payments',
      icon: Wallet,
      badgeColor: 'bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400',
    },
    {
      title: 'PATIENTS',
      value: '13',
      subtext: '57 total registered',
      icon: Users,
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400',
    },
    {
      title: 'OPD FOOTFALL',
      value: '8',
      subtext: 'Visits today',
      icon: Stethoscope,
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    },
    {
      title: 'IPD FOOTFALL',
      value: '5',
      subtext: '15 inpatients',
      icon: Activity,
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
    },
    {
      title: 'ER FOOTFALL',
      value: '1',
      subtext: '1 arrival',
      icon: Truck,
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400',
    },
    {
      title: 'BED OCCUPANCY',
      value: '18 / 155',
      percentageBadge: '12%',
      subtext: '134 available',
      icon: Bed,
      badgeColor: 'bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400',
    },
    {
      title: 'PENDING DISCHARGES',
      value: '6',
      subtext: 'of 15 inpatients',
      icon: LogOut,
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    },
    {
      title: 'STOCK ALERTS',
      value: '4',
      pillBadge: 'Reorder',
      subtext: '2 expiring ≤30d',
      icon: Package,
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400',
    },
    {
      title: 'OUTSTANDING DUES',
      value: '₹1,29,616.65',
      subtext: 'Across 17 open bills',
      icon: Wallet,
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    },
    {
      title: 'TOTAL STAFF',
      value: '51',
      subtext: '23 doctors',
      icon: UserCheck,
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400',
    },
  ];

  // Income by Category Area Chart Data
  const incomeCategoryData = [
    { category: 'Collections', val: 520000, dues: 40000 },
    { category: 'Outstanding dues', val: 120000, dues: 129000 },
    { category: 'OPD', val: 45000, dues: 15000 },
    { category: 'IPD', val: 480000, dues: 250000 },
    { category: 'Pharmacy', val: 110000, dues: 30000 },
    { category: 'Pathology', val: 85000, dues: 12000 },
    { category: 'Radiology', val: 95000, dues: 18000 },
    { category: 'Optical', val: 32000, dues: 5000 },
    { category: 'General', val: 65000, dues: 8000 },
  ];

  // Doctor Revenue Stacked Data
  const doctorRevenueData = [
    { name: 'Dr. Amit Ch...', consultation: 85000, lab: 25000, surgery: 40000 },
    { name: 'Dr. Arjun R...', consultation: 42000, lab: 18000, surgery: 22000 },
    { name: 'Dr. Sunita ...', consultation: 60000, lab: 15000, surgery: 0 },
    { name: 'Dr. Anjali ...', consultation: 28000, lab: 8000, surgery: 0 },
    { name: 'Dr. Imran K...', consultation: 25000, lab: 6000, surgery: 0 },
  ];

  // Patient Footfall Wave Chart Data
  const footfallData = [
    { date: 'Aug 1', opd: 22, ipd: 8, er: 1 },
    { date: 'Aug 2', opd: 38, ipd: 14, er: 2 },
    { date: 'Aug 3', opd: 25, ipd: 10, er: 0 },
    { date: 'Aug 4', opd: 48, ipd: 18, er: 3 },
    { date: 'Aug 5', opd: 30, ipd: 12, er: 1 },
    { date: 'Aug 6', opd: 58, ipd: 22, er: 4 },
    { date: 'Aug 7', opd: 32, ipd: 15, er: 2 },
    { date: 'Aug 8', opd: 65, ipd: 25, er: 5 },
  ];

  return (
    <div className="flex-1 bg-[#031E17] p-2 sm:p-3 min-h-screen flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sleek Rounded Canvas Box matching qa.carehms.blocsys.com/admin */}
      <div
        className={`flex-1 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 shadow-xl ${
          theme === 'dark' ? 'bg-[#091410] text-white' : 'bg-[#F2F7F4] text-gray-900'
        }`}
      >
        {/* Top Bar Header */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200/40 dark:border-gray-800/40">
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors cursor-pointer border border-gray-200 dark:border-gray-800"
              title="Toggle Sidebar Mode"
            >
              <PanelLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold tracking-tight">Dashboard</h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <div className="p-2 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Date & Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          {/* Date Range Picker */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0D1E19] text-xs font-semibold shadow-xs w-fit">
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            <span>01 Aug 2026</span>
            <span className="text-gray-400 font-normal">to</span>
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
            <span>08 Aug 2026</span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {filterPills.map((pill) => {
              const isSelected = activeFilter === pill;
              return (
                <button
                  key={pill}
                  onClick={() => setActiveFilter(pill)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#031E17] text-white shadow-sm font-bold dark:bg-emerald-500 dark:text-gray-950'
                      : 'bg-white dark:bg-[#0D1E19] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#122A23]'
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </div>

        {/* HMS KPI Cards 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpiCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md ${
                  theme === 'dark'
                    ? 'bg-[#0D1E19]/90 border-emerald-950/60 hover:border-emerald-800/60'
                    : 'bg-white border-emerald-900/10 hover:border-emerald-500/30'
                }`}
              >
                <div>
                  <div className="text-[11px] font-bold tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-2">
                    {card.title}
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                        {card.value}
                      </span>
                      {card.percentageBadge && (
                        <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                          {card.percentageBadge}
                        </span>
                      )}
                      {card.pillBadge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400">
                          {card.pillBadge}
                        </span>
                      )}
                    </div>
                    <div className={`p-2.5 rounded-2xl ${card.badgeColor} shrink-0`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium pt-2 border-t border-gray-100 dark:border-gray-800/60">
                  {card.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Income by Category Chart Section */}
        <div className="p-5 rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-[#0D1E19] shadow-xs mb-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold">Income by category</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Collections, dues & income per category — 1 Aug – 8 Aug 2026
            </p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={incomeCategoryData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorDues" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.15} />
                <XAxis dataKey="category" tick={{ fontSize: 11 }} />
                <YAxis tickFormatter={(v) => `₹${v / 100000}L`} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Amount']} />
                <Area type="monotone" dataKey="val" stroke="#4F46E5" fillOpacity={1} fill="url(#colorVal)" name="Collections" />
                <Area type="monotone" dataKey="dues" stroke="#EF4444" fillOpacity={1} fill="url(#colorDues)" name="Outstanding Dues" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2-Column Section: Doctor Revenue & Patient Footfall */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Doctor Revenue Stacked Bar Chart */}
          <div className="p-5 rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-[#0D1E19] shadow-xs">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Doctor revenue</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Top doctors by attributed billed value — 1 Aug – 8 Aug 2026
                </p>
              </div>
            </div>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={doctorRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.15} />
                  <XAxis type="number" tickFormatter={(v) => `₹${v / 1000}K`} tick={{ fontSize: 11 }} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={90} />
                  <Tooltip formatter={(val) => `₹${Number(val).toLocaleString()}`} />
                  <Bar dataKey="consultation" stackId="a" fill="#818CF8" radius={[0, 4, 4, 0]} name="Consultation" />
                  <Bar dataKey="lab" stackId="a" fill="#60A5FA" name="Lab" />
                  <Bar dataKey="surgery" stackId="a" fill="#F472B6" name="Surgery" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Patient Footfall Wave Chart */}
          <div className="p-5 rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-[#0D1E19] shadow-xs flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500" /> Patient footfall
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  OPD, IPD & ER arrivals — 1 Aug – 8 Aug 2026
                </p>
              </div>
              <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={footfallData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.15} />
                    <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="opd" stroke="#60A5FA" fill="#60A5FA" fillOpacity={0.2} name="OPD" />
                    <Area type="monotone" dataKey="ipd" stroke="#34D399" fill="#34D399" fillOpacity={0.2} name="IPD" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-3 border-t border-gray-100 dark:border-gray-800/60 mt-2">
              <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800/40 text-center">
                <div className="text-[10px] text-gray-500">OPD</div>
                <div className="text-base font-bold text-blue-600">35</div>
              </div>
              <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800/40 text-center">
                <div className="text-[10px] text-gray-500">IPD</div>
                <div className="text-base font-bold text-emerald-600">19</div>
              </div>
              <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800/40 text-center">
                <div className="text-[10px] text-gray-500">ER</div>
                <div className="text-base font-bold text-amber-600">2</div>
              </div>
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-center border border-emerald-500/20">
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Total</div>
                <div className="text-base font-extrabold text-emerald-700 dark:text-emerald-300">56</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Pending Approvals & Stock Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Approvals Widget */}
          <div className="p-5 rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-[#0D1E19] shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">Pending approvals</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Waiting on you</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400 text-xs font-bold">
                2 pending
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                    <Percent className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Discounts to approve</div>
                    <div className="text-xs text-gray-400">Billing approvals</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">0</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-500">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Refunds to approve</div>
                    <div className="text-xs text-gray-400">Payment approvals</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">0</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Stock Alerts Widget */}
          <div className="p-5 rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-[#0D1E19] shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">Stock alerts</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">4 items at or below reorder level</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400 text-xs font-bold flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> 2 expiring ≤30d
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                    <Package className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Amoxicillin 500mg Capsule</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">0 / 100</span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-red-500/15 text-red-600">OUT</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                    <Package className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Disposable Syringe 5ml</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">0 / 200</span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-red-500/15 text-red-600">OUT</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                    <Package className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Surgical Gloves (pair)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">0 / 300</span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-red-500/15 text-red-600">OUT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
