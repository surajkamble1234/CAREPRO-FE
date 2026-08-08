import React, { useState } from 'react';
import { Activity, Sun, Moon, ChevronRight, Menu, X, Stethoscope, Bed, Pill, TestTube, Receipt, FileText } from 'lucide-react';
import { useTheme } from '@/core/context/ThemeContext';

export default function Header({ onNavigateLogin, onNavigateHome }) {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const modules = [
    { name: 'OPD Management', desc: 'Queues, Prescriptions, Doctor Desk', icon: Stethoscope },
    { name: 'IPD Admissions', desc: 'Beds, Nursing, Discharge Summaries', icon: Bed },
    { name: 'Pharmacy & Stock', desc: 'POS Counter, Medicine Master, Expiry', icon: Pill },
    { name: 'Diagnostics Lab', desc: 'Pathology, Radiology & Test Reports', icon: TestTube },
    { name: 'Billing & Cashier', desc: 'Invoices, Receipts, Advance Payment', icon: Receipt },
    { name: 'Claims & TPA', desc: 'Pre-auth, Insurance Claims Tracker', icon: FileText },
  ];

  return (
    <header className="relative pt-6 px-4 flex justify-center z-50">
      <div
        className={`w-full max-w-4xl rounded-full px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${theme === 'dark'
            ? 'bg-gray-900/90 backdrop-blur-md'
            : 'bg-white/90 backdrop-blur-md'
          }`}
      >
        {/* Brand Logo */}
        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
            <Activity className="w-4 h-4" />
          </div>
          <span
            className={`text-base font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
          >
            Care<span className="text-emerald-500">Pro</span><span className="text-amber-400 font-extrabold ml-0.5">+</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-7 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
        >
          <div
            className="relative group py-1"
            onMouseEnter={() => setIsFeaturesOpen(true)}
            onMouseLeave={() => setIsFeaturesOpen(false)}
          >
            <button className="flex items-center gap-1 cursor-pointer hover:text-emerald-500 transition-colors">
              <span>Features</span>
              <ChevronRight className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${isFeaturesOpen ? 'rotate-90 text-emerald-500' : ''}`} />
            </button>

            {/* Desktop Mega Dropdown */}
            {isFeaturesOpen && (
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[460px] p-3 rounded-2xl shadow-xl grid grid-cols-2 gap-1.5 border transition-all ${theme === 'dark'
                    ? 'bg-gray-900 border-gray-800 text-white'
                    : 'bg-white border-gray-200 text-gray-900'
                  }`}
              >
                {modules.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={idx}
                      href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`flex items-start gap-2.5 p-2 rounded-xl transition-all ${theme === 'dark'
                          ? 'hover:bg-gray-800/80 text-gray-200'
                          : 'hover:bg-gray-100 text-gray-800'
                        }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold leading-tight">{item.name}</div>
                        <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{item.desc}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <a href="#about" className="hover:text-emerald-500 transition-colors py-1">About Us</a>
          <a href="#pricing" className="hover:text-emerald-500 transition-colors py-1">Pricing</a>
          <a href="#faq" className="hover:text-emerald-500 transition-colors py-1">FAQ</a>
          <a href="#contact" className="hover:text-emerald-500 transition-colors py-1">Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all cursor-pointer ${theme === 'dark'
                ? 'text-gray-400 hover:text-white hover:bg-white/5'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={onNavigateLogin}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${theme === 'dark'
                ? 'bg-white text-gray-950 hover:bg-gray-100 shadow-sm'
                : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm'
              }`}
          >
            Login
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* CLEAN OVERLAY MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-full inset-x-4 mt-3 z-50 md:hidden p-5 rounded-3xl shadow-2xl flex flex-col transition-all ${theme === 'dark'
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-900'
            }`}
        >
          {/* Features Item */}
          <div className="border-b border-gray-800/60 pb-2.5">
            <button
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              className="w-full flex items-center justify-between text-base font-semibold py-1.5 text-emerald-400"
            >
              <span>Features</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-90' : ''}`} />
            </button>

            {isFeaturesOpen && (
              <div className="grid grid-cols-1 gap-1.5 pt-2 pl-2">
                {modules.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-xs font-medium text-gray-300 hover:text-emerald-400 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          {['About Us', 'Pricing', 'FAQ', 'Contact'].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-base font-semibold py-3 border-b border-gray-800/60 hover:text-emerald-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Mobile Login CTA */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (onNavigateLogin) onNavigateLogin();
            }}
            className={`mt-5 w-full py-3 rounded-full font-bold text-center text-sm transition-all cursor-pointer ${theme === 'dark' ? 'bg-white text-gray-950 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
          >
            Login to Portal
          </button>
        </div>
      )}
    </header>
  );
}
