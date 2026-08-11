import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  AlertCircle,
  Calendar,
  Stethoscope,
  Bed,
  BedDouble,
  CheckCircle2,
  RefreshCw,
  FlaskConical,
  Microscope,
  Activity,
  PlusSquare,
  Pill,
  Package,
  Boxes,
  ClipboardCheck,
  Store,
  BadgePlus,
  UserCheck,
  Truck,
  FileSpreadsheet,
  RotateCcw,
  Receipt,
  CreditCard,
  Banknote,
  ShieldCheck,
  BookOpen,
  FileText,
  FileCheck,
  Wallet,
  ArrowUpRight,
  Building2,
  ArrowDownLeft,
  FileLock,
  DollarSign,
  CalendarDays,
  UserPlus,
  Clock,
  BadgeDollarSign,
  BarChart3,
  Timer,
  Settings,
  Database,
  Sliders,
  LogOut,
  X,
  ChevronRight,
  UserCheck2,
} from 'lucide-react';
import { useTheme } from '@/core/context/ThemeContext';

export function CareProSidebar({
  user,
  onLogout,
  activeTab,
  setActiveTab,
  isOpen,
  isCollapsed,
  onClose,
  onToggleCollapse,
}) {
  const { theme } = useTheme();
  const [currentTab, setCurrentTab] = useState(activeTab || 'Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, isTop: true },

    { category: 'Clinical' },
    { name: 'Patients', icon: Users },
    { name: 'Emergency', icon: AlertCircle, badge: 2 },
    { name: 'Appointments', icon: Calendar },
    { name: 'OPD', icon: Stethoscope },
    { name: 'IPD', icon: Bed },
    { name: 'Bed', icon: BedDouble },
    { name: 'Clearances', icon: CheckCircle2, badge: 7 },
    { name: 'Bed turnaround', icon: RefreshCw },
    { name: 'Diagnostics', icon: FlaskConical },
    { name: 'Test Catalog', icon: Microscope },
    { name: 'OT Board', icon: Activity },
    { name: 'OT Requests', icon: PlusSquare },

    { category: 'Supply' },
    { name: 'Medicines', icon: Pill },
    { name: 'Inventory', icon: Package },
    { name: 'Item Master', icon: Boxes },
    { name: 'Procurement', icon: ClipboardCheck },
    { name: 'Store', icon: Store },
    { name: 'Implants', icon: BadgePlus },
    { name: 'Store Access', icon: UserCheck },
    { name: 'Vendors', icon: Truck },
    { name: 'Medicine Requests', icon: FileSpreadsheet },
    { name: 'Auto-reorder', icon: RotateCcw },

    { category: 'Finance' },
    { name: 'Billing', icon: Receipt },
    { name: 'Payments', icon: CreditCard },
    { name: 'Counter cash', icon: Banknote },
    { name: 'Claims / TPA', icon: ShieldCheck },
    { name: 'Ledger & COA', icon: BookOpen },
    { name: 'Books & statements', icon: FileText },
    { name: 'Vouchers', icon: FileCheck },
    { name: 'Expenses', icon: Wallet },
    { name: 'Payables', icon: ArrowUpRight },
    { name: 'Bank reconciliation', icon: Building2 },
    { name: 'Receivables', icon: ArrowDownLeft },
    { name: 'Compliance', icon: FileLock },
    { name: 'Tally', icon: FileSpreadsheet, hasArrow: true },
    { name: 'Case costing', icon: DollarSign },

    { category: 'People' },
    { name: 'Ward Scheduling', icon: CalendarDays },
    { name: 'Doctor Roster', icon: UserPlus },
    { name: 'Staff Directory', icon: Users },
    { name: 'Attendance', icon: Clock, hasArrow: true },
    { name: 'Payroll', icon: BadgeDollarSign, hasArrow: true },
    { name: 'Registration', icon: UserCheck2, hasArrow: true },
    { name: 'Leave Allocation', icon: CalendarDays },

    { category: 'MIS Reporting' },
    { name: 'MIS Home', icon: BarChart3 },
    { name: 'Clinical & Care', icon: BarChart3, hasArrow: true },
    { name: 'Finance & Accountant', icon: BarChart3, hasArrow: true },
    { name: 'Supply & People', icon: BarChart3, hasArrow: true },
    { name: 'Governance', icon: BarChart3, hasArrow: true },

    { category: 'Turnaround (TAT)' },
    { name: 'TAT', icon: Timer },

    { category: 'System' },
    { name: 'Reports', icon: FileText },
    { name: 'Settings', icon: Settings },
    { name: 'Masters', icon: Database },
    { name: 'Feature Flags', icon: Sliders },
    { name: 'Roles & Permissions', icon: ShieldCheck },
  ];

  const handleSelect = (name) => {
    setCurrentTab(name);
    if (setActiveTab) setActiveTab(name);
    if (window.innerWidth < 1024 && onClose) onClose();
  };

  const username = user?.name || user?.role || 'superadmin';
  const roleDisplay = user?.role || 'Super Admin';

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
        />
      )}

      {/* Full Height Sticky Sidebar Container with Collapsed Icon Mode Support */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 bg-[#031E17] text-white flex flex-col justify-between h-screen p-3 sm:p-4 border-r border-[#083025] shrink-0 font-['Plus_Jakarta_Sans',sans-serif] select-none transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        } ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full justify-between overflow-hidden">
          <div>
            {/* Brand Header */}
            {!isCollapsed ? (
              <div className="flex flex-col items-center justify-center text-center px-2 pt-1 pb-1 relative">
                {/* Mobile Close Button */}
                <button
                  onClick={onClose}
                  className="lg:hidden absolute top-1 right-1 p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col items-center justify-center gap-0.5">
                  <h1 className="text-3xl font-extrabold tracking-tight text-white font-['Outfit',sans-serif] inline-flex items-baseline justify-center">
                    CarePro<span className="text-amber-400 font-extrabold text-2xl ml-0.5">+</span>
                  </h1>
                  <div className="text-[10px] font-extrabold tracking-[0.22em] text-[#00D084] uppercase mt-0.5">
                    SMART CARE. SIMPLIFIED.
                  </div>
                  <div className="text-[11px] text-gray-300 font-normal flex items-center justify-center gap-1 mt-1">
                    <span>Powered by</span>
                    <span className="font-bold text-[#F7EEDD]">Maxzom</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Collapsed Compact Brand Icon */
              <div className="flex flex-col items-center justify-center pt-2 pb-1 gap-1">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00D084] to-[#043D2E] flex items-center justify-center text-white font-black text-lg shadow-md font-['Outfit',sans-serif]">
                  CP<span className="text-amber-400 text-xs font-black">+</span>
                </div>
              </div>
            )}

            {/* Native SVG SMIL Continuous Running ECG Machine Waveform Animation */}
            <div className={`mt-3 mb-3 relative overflow-hidden h-7 flex items-center ${isCollapsed ? 'px-0' : 'px-2'}`}>
              <div className="w-full overflow-hidden h-full">
                <svg
                  viewBox="0 0 400 30"
                  className="w-[200%] h-full stroke-[#00D084] fill-none stroke-[2.5] overflow-visible"
                >
                  <g>
                    <path d="M0 15 H50 L58 4 L66 26 L74 8 L82 22 L90 15 H200 H250 L258 4 L266 26 L274 8 L282 22 L290 15 H400" />
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      from="0 0"
                      to="-200 0"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* Navigation Menu (Complete HMS Modules List) */}
            <nav className="flex flex-col gap-1 mt-2 overflow-y-auto no-scrollbar max-h-[calc(100vh-250px)] pr-1">
              {menuItems.map((item, idx) => {
                if (item.category) {
                  if (isCollapsed) return <div key={idx} className="my-1.5 border-t border-[#083025]" />;
                  return (
                    <div key={idx} className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest px-3.5 pt-3 pb-1">
                      {item.category}
                    </div>
                  );
                }

                const IconComp = item.icon;
                const isActive = currentTab === item.name;

                if (isCollapsed) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleSelect(item.name)}
                      title={item.name}
                      className={`w-11 h-11 mx-auto flex items-center justify-center rounded-xl transition-all cursor-pointer relative group my-0.5 ${
                        isActive
                          ? 'bg-[#F7EEDD] text-[#031E17] shadow-md font-bold'
                          : 'text-gray-300 hover:bg-[#062D23] hover:text-white'
                      }`}
                    >
                      <IconComp className={`w-4 h-4 ${isActive ? 'text-[#031E17]' : 'text-gray-300'}`} />
                      {item.badge && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                }

                return (
                  <button
                    key={item.name}
                    onClick={() => handleSelect(item.name)}
                    className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#F7EEDD] text-[#031E17] shadow-sm font-bold scale-[1.01]'
                        : 'text-gray-300 hover:bg-[#062D23] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComp className={`w-4 h-4 ${isActive ? 'text-[#031E17]' : 'text-gray-300'}`} />
                      <span>{item.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {item.badge && (
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            isActive ? 'bg-[#031E17] text-white' : 'bg-emerald-500/20 text-emerald-300'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      {item.hasArrow && (
                        <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#031E17]' : 'text-gray-400'}`} />
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Logged In User Profile Box at Bottom */}
          <div className="pt-2 border-t border-[#083025] mt-auto shrink-0">
            {!isCollapsed ? (
              <div className="flex items-center justify-between p-2 rounded-xl bg-[#062D23]/70 hover:bg-[#062D23] transition-colors border border-emerald-500/10">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold text-xs shrink-0">
                    {username.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-white truncate">{username}</span>
                    <span className="text-[10px] text-gray-400 truncate">{roleDisplay}</span>
                  </div>
                </div>
                <button
                  onClick={onLogout}
                  title="Log out"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onLogout}
                title={`Logged in as ${username} (${roleDisplay}) - Click to Log out`}
                className="w-11 h-11 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold text-xs cursor-pointer hover:bg-red-500/20 hover:text-red-300 transition-colors"
              >
                {username.substring(0, 2).toUpperCase()}
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
