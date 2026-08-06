import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/core/context/ThemeContext';

export default function FAQSection() {
  const { theme } = useTheme();

  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      category: 'Getting started',
      questions: [
        {
          q: 'How long does it take to set up CarePro?',
          a: 'CarePro can be deployed in under 24 hours. Our onboarding team handles master data setup, user roles, and initial staff training so your hospital runs smoothly without downtime.'
        },
        {
          q: 'Can we import our existing patient records?',
          a: 'Yes! CarePro provides automated CSV and Excel import tools for OPD history, IPD admission archives, pharmacy medicine masters, and lab test templates.'
        },
        {
          q: 'Does CarePro run on our existing hospital network?',
          a: 'Absolutely. CarePro is a lightweight cloud-native application that runs securely on standard web browsers across desktop PCs, tablets, and mobile devices on any standard Wi-Fi network.'
        }
      ]
    },
    {
      category: 'Billing & plans',
      questions: [
        {
          q: 'Can we upgrade from Clinic to Hospital later?',
          a: 'Yes, you can upgrade your plan seamlessly at any time. All your patient records, OPD/IPD data, and financial history remain 100% intact with zero data loss.'
        }
      ]
    },
    {
      category: 'Security & data',
      questions: [
        {
          q: 'Is our patient data secure?',
          a: 'CarePro adheres to HIPAA compliance standards and ISO 27001 guidelines with AES-256 bit encryption at rest and TLS 1.3 in transit, automated daily offsite backups, and role-based access control.'
        },
        {
          q: 'Who owns our data?',
          a: 'You own 100% of your hospital data. CarePro acts strictly as a data processor. You can export complete database backups in open formats (SQL, CSV, JSON) whenever you wish.'
        },
        {
          q: 'Does CarePro integrate with Tally?',
          a: 'Yes! CarePro includes native bi-directional integration with Tally ERP 9 and Tally Prime for real-time ledger, invoice, and voucher accounting synchronization.'
        }
      ]
    }
  ];

  const toggleFAQ = (globalIndex) => {
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };

  let globalCount = 0;

  return (
    <section
      id="faq"
      className={`w-full py-24 px-4 flex justify-center transition-colors relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#090D16] text-white' : 'bg-[#F8FAFC] text-gray-900'
      }`}
    >
      {/* Soft Ambient Radial Emerald Glow in Background */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[350px] blur-[120px] rounded-full pointer-events-none ${
          theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/15'
        }`}
      />

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 text-left relative z-10">
        {/* Left Column: Heading & Subtitle */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <h2
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight font-['Plus_Jakarta_Sans_Variable'] ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Got Questions?
          </h2>
          <p
            className={`text-base sm:text-lg font-normal ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            If you can't find what you're looking for,{' '}
            <a
              href="#contact"
              className="underline underline-offset-4 decoration-emerald-500 font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              get in touch
            </a>
            .
          </p>
        </div>

        {/* Right Column: Categorized FAQ Accordion List */}
        <div className="md:col-span-7 flex flex-col gap-10">
          {faqData.map((cat, catIdx) => (
            <div key={catIdx} className="flex flex-col gap-4">
              {/* Category Label */}
              <h3 className="text-sm font-semibold tracking-wide text-gray-400">
                {cat.category}
              </h3>

              {/* Category Questions */}
              <div className="flex flex-col border-t border-gray-800/80 dark:border-gray-800/80 border-gray-200">
                {cat.questions.map((item) => {
                  const currentIndex = globalCount++;
                  const isOpen = openIndex === currentIndex;

                  return (
                    <div
                      key={currentIndex}
                      className={`border-b transition-colors ${
                        theme === 'dark' ? 'border-gray-800/80' : 'border-gray-200'
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full py-4 flex items-center justify-between gap-4 text-left font-semibold text-base sm:text-lg transition-colors cursor-pointer group"
                      >
                        <span
                          className={`transition-colors duration-200 font-semibold ${
                            isOpen
                              ? 'text-emerald-400'
                              : theme === 'dark'
                              ? 'text-gray-200 group-hover:text-white'
                              : 'text-gray-800 group-hover:text-gray-950'
                          }`}
                        >
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform duration-300 ease-out ${
                            isOpen
                              ? 'rotate-180 text-emerald-400'
                              : theme === 'dark'
                              ? 'text-gray-400 group-hover:text-white'
                              : 'text-gray-500'
                          }`}
                        />
                      </button>

                      {/* Smooth Height Transition Drawer */}
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-5 pt-1 text-sm sm:text-base leading-relaxed text-gray-400 font-normal">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
