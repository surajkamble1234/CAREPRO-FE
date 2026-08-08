import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/core/context/ThemeContext';
import Header from '@/components/common/Header';
import Hero from '@/components/common/Hero';
import DepartmentsHeader from '@/components/common/DepartmentsHeader';
import FAQSection from '@/components/common/FAQSection';
import Footer from '@/components/common/Footer';
import { LoginPage } from '@/features/auth';
import { DashboardPage } from '@/features/dashboard';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'login' | 'dashboard'
  const [authUser, setAuthUser] = useState(null);

  // Restore authenticated session from localStorage on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('carepro_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setAuthUser(parsed);
        // Automatically show dashboard if logged in
        setCurrentView('dashboard');
      } catch (e) {
        console.error('Error parsing stored auth user:', e);
      }
    }
  }, []);

  const handleLoginSuccess = (user) => {
    const activeUser = user || { name: 'Staff User', role: 'Doctor', email: 'doctor@maxzom.in' };
    setAuthUser(activeUser);
    localStorage.setItem('carepro_user', JSON.stringify(activeUser));
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem('carepro_access_token');
    localStorage.removeItem('carepro_refresh_token');
    localStorage.removeItem('carepro_user');
    setCurrentView('landing');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen selection:bg-emerald-500 selection:text-gray-950">
        {currentView === 'dashboard' ? (
          <DashboardPage user={authUser} onLogout={handleLogout} />
        ) : currentView === 'login' ? (
          <LoginPage 
            onLoginSuccess={handleLoginSuccess} 
            onNavigateHome={() => setCurrentView('landing')} 
          />
        ) : (
          <>
            {/* Quick Demo Navigation Bar */}
            <div className="w-full bg-emerald-950 text-emerald-300 px-4 py-2 text-xs font-semibold flex items-center justify-between border-b border-emerald-800/60 sticky top-0 z-50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>CarePro+ Hospital OS Preview</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentView('login')}
                  className="px-3 py-1 rounded bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold transition-all cursor-pointer"
                >
                  Staff Login Page →
                </button>
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold transition-all cursor-pointer"
                >
                  View Dashboard →
                </button>
              </div>
            </div>

            {/* Navigation */}
            <Header 
              onNavigateLogin={() => setCurrentView('login')} 
              onNavigateHome={() => setCurrentView('landing')} 
            />

            {/* Hero & Sections */}
            <main>
              <Hero />
              <DepartmentsHeader />
              <FAQSection />
            </main>

            {/* Footer */}
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
