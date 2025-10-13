"use client";

import React, { useState } from "react";
import Header from "@/components/Header/Header";
import PersonalFooter from "@/components/Footer/Footer";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const BusinessEntityTax = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What&apos;s the best entity type for my business — LLC, S-Corp, or C-Corp?",
      answer: (
        <span>
          It depends on your goals. We analyze your revenue, expenses, and growth plans to
          recommend the most tax-efficient entity structure.
        </span>
      ),
    },
    {
      id: 2,
      question: "Can you help with multi-state tax filing?",
      answer: (
        <span>
          Yes. We handle SALT (State and Local Tax) compliance and filings in all 50 states,
          including income apportionment, nexus evaluation, and franchise tax obligations.
        </span>
      ),
    },
    {
      id: 3,
      question: "Do you offer year-round tax planning or only annual filing?",
      answer: (
        <span>
          We offer both. Our ongoing tax planning services help you make informed financial
          decisions throughout the year — not just at tax time.
        </span>
      ),
    },
    {
      id: 4,
      question: "How can I reduce my business&apos;s tax liability?",
      answer: (
        <span>
          We identify allowable deductions, optimize depreciation schedules, plan estimated taxes,
          and structure owner compensation strategically to lower your overall liability.
        </span>
      ),
    },
    {
      id: 5,
      question: "What information do I need to get started?",
      answer: (
        <span>
          Provide your prior-year tax returns, business financial statements, EIN details, and any
          bookkeeping or payroll records. We&apos;ll take it from there.
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
            Business & Entity Tax Solutions
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            If you own an LLC, S Corporation, C Corporation, partnership, or other business entity,
            your tax choices (entity type, deductions, owner compensation) can significantly affect
            your bottom line. WeDoTaxes helps you structure and manage your business taxes
            efficiently, so you can focus on growing your operations.
          </p>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Key Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Entity choice advisory (LLC vs S Corp vs C Corp vs partnership)</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Preparation of business tax returns and related schedules</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Depreciation, amortization, and cost segregation strategies</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Deduction planning (meals, travel, home office, business use of vehicle)</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Owner compensation and distributions planning to optimize taxes</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">State and local tax (SALT) compliance for multi-state businesses</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Quarterly projections & estimated tax calculations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You'll Benefit Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Why You&apos;ll Benefit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Expert guidance to reduce over-paying or underestimating tax liabilities</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Strategic planning that keeps your business tax-efficiency in mind</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Comprehensive understanding of federal & state rules</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Personalized service—what works best for your business, not cookie-cutter advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-20 bg-[#0B3D91]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let us help you make the right business structure and tax decisions.
          </h2>
          <Link href="/Contact-us">
            <button className="bg-[#ffc107] text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors duration-300">
              Get Business Tax Help
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6 md:px-20 max-w-[1440px] m-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Business & Entity Tax Services — FAQs
            </h2>
            <p className="text-gray-700 text-[17px] max-w-2xl">
              Get answers to common questions about business tax services and entity structure
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

export default BusinessEntityTax;
