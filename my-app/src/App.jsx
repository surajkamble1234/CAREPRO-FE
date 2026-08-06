import React from 'react';
import { ThemeProvider } from '@/core/context/ThemeContext';
import Header from '@/components/common/Header';
import Hero from '@/components/common/Hero';
import DepartmentsHeader from '@/components/common/DepartmentsHeader';
import FAQSection from '@/components/common/FAQSection';
import Footer from '@/components/common/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen selection:bg-emerald-500 selection:text-gray-950">
        {/* Navigation */}
        <Header />

        {/* Hero & Sections */}
        <main>
          <Hero />
          <DepartmentsHeader />
          <FAQSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
