"use client";

import React, { useState } from "react";
import Header from "@/components/Header/Header";
import PersonalFooter from "@/components/Footer/Footer";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const IndividualExpatTax = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "Do I need to file U.S. taxes even if I live abroad?",
      answer: (
        <span>
          Yes. All U.S. citizens and green card holders must report worldwide income, even if they
          live or work overseas. However, you may qualify for exclusions or credits to reduce or
          eliminate double taxation.
        </span>
      ),
    },
    {
      id: 2,
      question: "What is the Foreign Earned Income Exclusion (FEIE)?",
      answer: (
        <span>
          The FEIE allows qualifying U.S. taxpayers living abroad to exclude a portion of their
          foreign-earned income (over $120,000 for 2024) from taxable income if they meet the
          physical presence or bona fide residence tests.
        </span>
      ),
    },
    {
      id: 3,
      question: "What's the difference between FBAR and FATCA reporting?",
      answer: (
        <span>
          The FBAR (FinCEN Form 114) reports foreign financial accounts if total balances exceed
          $10,000 at any point in the year. FATCA (Form 8938) requires reporting of specified foreign
          assets exceeding higher thresholds. Both are crucial for compliance.
        </span>
      ),
    },
    {
      id: 4,
      question: "How can WeDoTaxes help me as an expat?",
      answer: (
        <span>
          We handle all federal, state, and foreign reporting forms, optimize your credits, and
          ensure full compliance — so you avoid IRS penalties while maximizing savings.
        </span>
      ),
    },
    {
      id: 5,
      question: "How do I send my tax documents securely?",
      answer: (
        <span>
          We provide a secure encrypted client portal where you can upload W-2s, 1099s, foreign
          income statements, and ID documents safely.
        </span>
      ),
    },
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B3D91] to-[#1e5bb8] py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            U.S. Individual & Expat Tax Filing
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Filing income taxes as a U.S. citizen or resident can be complicated—especially if you
            live abroad, have foreign-sourced income, or hold foreign financial accounts. At
            WeDoTaxes, we specialize in ensuring your federal and state tax obligations are met
            accurately, while helping you minimize tax liabilities and stay compliant with all IRS
            reporting requirements.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            What We Do for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Prepare and file your Form 1040 including all necessary schedules</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">State tax return filing for the states where you have filing requirements</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Foreign income reporting (including foreign wages, investments, business income)</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Foreign Tax Credit calculations to avoid double taxation</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">FBAR (FinCEN Form 114) and FATCA reporting (Form 8938)</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Treaty review and analysis to ensure you make full use of any applicable tax treaties</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Advice on digital assets, foreign retirement accounts, and other complex foreign-income matters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You'll Benefit Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Why You'll Benefit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Deep experience in expat tax rules, so you avoid common pitfalls</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Transparent pricing and clear deadlines so you're never surprised</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Secure client portal for document upload and communication</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Responsive support—questions answered, issues resolved promptly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-20 bg-[#0B3D91]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to simplify your U.S. tax filing and save money?
          </h2>
          <Link href="/Contact-us">
            <button className="bg-[#ffc107] text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors duration-300">
              Start Your Expat Tax Filing
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6 md:px-20 max-w-[1440px] m-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              U.S. Individual & Expat Tax Filing — FAQs
            </h2>
            <p className="text-gray-700 text-[17px] max-w-2xl">
              Get answers to common questions about expat tax filing and compliance
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#ffc107] focus:ring-opacity-50 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-black pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === faq.id ? (
                      <ChevronUpIcon className="w-6 h-6 text-[#1a4d91] transform transition-transform duration-200" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-[#1a4d91] transform transition-transform duration-200" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="w-full h-px bg-gradient-to-r from-[#1a4d91] via-[#ffc107] to-transparent mb-4"></div>
                    <div className="text-gray-700 text-[15px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 text-[17px] mb-6">
              Still have questions? We&apos;re here to help!
            </p>
            <Link href="/Contact-us">
              <button className="bg-[#ffc107] hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-md text-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      <PersonalFooter />
    </div>
  );
};

export default IndividualExpatTax;
