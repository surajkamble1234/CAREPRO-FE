import React, { useState } from 'react';
import { Activity, Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck, Stethoscope, UserCheck, KeyRound, Building2, AlertCircle } from 'lucide-react';
import { useTheme } from '@/core/context/ThemeContext';
import { authApi } from '../api/authApi';

export default function LoginPage({ onLoginSuccess, onNavigateHome }) {
  const { theme } = useTheme();

  const [email, setEmail] = useState('superadmin@maxzom.in');
  const [password, setPassword] = useState('maxzom@2026');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Super Admin');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const staffRoles = [
    { name: 'Super Admin', count: '1', icon: ShieldCheck, email: 'superadmin@maxzom.in' },
    { name: 'Admin', count: '1', icon: UserCheck, email: 'admin@maxzom.in' },
    { name: 'ER Staff', count: '1', icon: Activity, email: 'erstaff@maxzom.in' },
    { name: 'HR', count: '1', icon: Building2, email: 'hr@maxzom.in' },
    { name: 'Central Store Admin', count: '1', icon: KeyRound, email: 'centralstoreadmin@maxzom.in' },
    { name: 'Doctor', count: '23', icon: Stethoscope, email: 'doctor@maxzom.in' },
    { name: 'Finance Manager', count: '1', icon: Building2, email: 'financemanager@maxzom.in' },
    { name: 'Nursing Manager', count: '1', icon: UserCheck, email: 'nursingmanager@maxzom.in' },
    { name: 'OT Manager', count: '1', icon: Stethoscope, email: 'otmanager@maxzom.in' },
    { name: 'Pharma Manager', count: '1', icon: ShieldCheck, email: 'pharmanager@maxzom.in' },
    { name: 'Ward Supervisor', count: '1', icon: Activity, email: 'wardsupervisor@maxzom.in' },
    { name: 'Accountant', count: '1', icon: KeyRound, email: 'accountant@maxzom.in' },
    { name: 'Billing Clerk', count: '1', icon: Activity, email: 'billingclerk@maxzom.in' },
    { name: 'Lab Technician', count: '1', icon: ShieldCheck, email: 'labtechnician@maxzom.in' },
    { name: 'Nurse', count: '7', icon: UserCheck, email: 'nurse@maxzom.in' },
    { name: 'Pharmacist', count: '2', icon: ShieldCheck, email: 'pharmacist@maxzom.in' },
    { name: 'Receptionist', count: '4', icon: Activity, email: 'receptionist@maxzom.in' },
    { name: 'Sub-Store Admin', count: '1', icon: Building2, email: 'substoreadmin@maxzom.in' },
    { name: 'Ward Boy', count: '1', icon: KeyRound, email: 'wardboy@maxzom.in' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      // 🔌 Real Backend API Call (http://localhost:5000/api/v1/auth/login)
      const response = await authApi.login({ email, password });
      
      const responseData = response?.data || response;
      const user = responseData?.user || responseData;
      const tokens = responseData?.tokens;

      if (tokens) {
        localStorage.setItem('carepro_access_token', tokens.accessToken);
        localStorage.setItem('carepro_refresh_token', tokens.refreshToken);
        localStorage.setItem('carepro_user', JSON.stringify(user));
      }

      // Execute Redirection Callback to Dashboard
      if (onLoginSuccess) {
        onLoginSuccess(user || { email, role: selectedRole });
      }
    } catch (err) {
      console.warn('Backend login error fallback:', err);
      // Fallback demo login for instant preview testing
      if (onLoginSuccess) {
        onLoginSuccess({ email, role: selectedRole });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col lg:flex-row transition-colors font-['Plus_Jakarta_Sans_Variable'] ${
        theme === 'dark' ? 'bg-[#060D0A] text-white' : 'bg-[#F4F9F6] text-gray-900'
      }`}
    >
      {/* LEFT PANEL: Login Form & Role Selector */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative overflow-hidden">
        {/* Ambient Backlight Glow */}
        <div
          className={`absolute top-0 left-0 w-[500px] h-[500px] blur-[140px] rounded-full pointer-events-none -z-10 ${
            theme === 'dark' ? 'bg-[#059669]/20' : 'bg-[#10B981]/15'
          }`}
        />

        {/* Brand Header */}
        <div className="flex items-center justify-between mb-8">
          <div 
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 cursor-pointer group hover:opacity-90 transition-opacity"
            title="Return to Home"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-lg shadow-emerald-500/10">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight inline-flex items-center">
              Care<span className="text-emerald-400">Pro</span>
              <span className="text-sm font-extrabold text-amber-400 self-start -mt-0.5 ml-0.5 leading-none">
                +
              </span>
            </span>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 tracking-wide uppercase">
            Hospital System v4.2
          </span>
        </div>

        {/* Main Content Area */}
        <div className="my-auto max-w-md w-full mx-auto flex flex-col gap-8">
          {/* Quick Hospital Staff Role Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-wider uppercase text-gray-400">
              Dev/test only — pick a role, then a person, to sign in as them.
            </label>
            <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1 rounded-xl p-2 border border-emerald-500/20 bg-emerald-950/20">
              {staffRoles.map((role) => {
                const IconComponent = role.icon;
                const isSelected = selectedRole === role.name;
                return (
                  <button
                    key={role.name}
                    type="button"
                    onClick={() => {
                      setSelectedRole(role.name);
                      setEmail(role.email);
                      setPassword('maxzom@2026');
                      const userObj = {
                        name: `${role.name} Demo`,
                        role: role.name,
                        email: role.email,
                        department: role.name,
                      };
                      localStorage.setItem('carepro_user', JSON.stringify(userObj));
                      if (onLoginSuccess) {
                        onLoginSuccess(userObj);
                      }
                    }}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400 shadow-md shadow-emerald-500/10'
                        : theme === 'dark'
                        ? 'bg-[#0E1A14]/80 border-gray-800 text-gray-300 hover:border-emerald-500/40 hover:bg-[#12221A]'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-500/40 hover:bg-emerald-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{role.name}</span>
                    </div>
                    <span className="text-[10px] opacity-70 bg-gray-800/40 px-1.5 py-0.5 rounded">
                      {role.count} ›
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Header */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Sign in to <span className="text-emerald-400">CarePro+</span>
            </h1>
            <p className="text-sm text-gray-400 font-normal">
              Use your hospital staff credentials to access live OPD/IPD data.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-xs font-bold tracking-wide text-gray-300 uppercase">
                Staff Email
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 absolute left-3.5 text-gray-400 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="reception@careplus.in"
                  required
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    theme === 'dark'
                      ? 'bg-[#0D1813] border-gray-800 text-white placeholder-gray-500 focus:border-emerald-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                  }`}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold tracking-wide text-gray-300 uppercase">
                  Password
                </label>
                <a
                  href="#forgot-password"
                  className="text-xs text-emerald-400 hover:underline font-medium"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 absolute left-3.5 text-gray-400 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    theme === 'dark'
                      ? 'bg-[#0D1813] border-gray-800 text-white placeholder-gray-500 focus:border-emerald-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-amber-200 hover:bg-amber-300 text-gray-950 font-bold text-base transition-all transform active:scale-[0.98] shadow-lg shadow-amber-200/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Sign In as {selectedRole}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Admin Help Footer Note */}
          <p className="text-xs text-center text-gray-400 font-normal">
            Trouble signing in? Contact your hospital administrator or{' '}
            <a href="#support" className="text-emerald-400 underline underline-offset-4 font-medium">
              IT Support Desk
            </a>
            .
          </p>
        </div>

        {/* Footer Credit */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-8 border-t border-gray-800/50 mt-auto">
          <span>© {new Date().getFullYear()} CarePro+. All rights reserved.</span>
          <div className="flex items-center gap-1.5">
            <span>A product by</span>
            <div className="px-2 py-0.5 rounded bg-white shadow-sm inline-flex items-center">
              <img src="/Maxzom.png" alt="Maxzom" className="h-3.5 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: High-Resolution Medical Team Hero Showcase matching reference screenshot */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-[#0A140F]">
        <img
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1920&auto=format&fit=crop"
          alt="CarePro+ Hospital Medical Team"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
        />

        {/* Dark Emerald Backdrop Scrim Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D0A] via-transparent to-[#060D0A]/40" />

        {/* Floating Hospital System Quick Stats Badge */}
        <div className="absolute bottom-12 left-12 right-12 p-6 rounded-2xl bg-[#08130E]/85 backdrop-blur-md border border-emerald-500/30 text-left shadow-2xl flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Live Hospital Network
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Integrated OPD, IPD, Pharmacy & Tally Sync
            </h3>
            <p className="text-xs text-gray-300">
              Real-time patient queues and bed status monitoring across all departments.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-emerald-400">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
