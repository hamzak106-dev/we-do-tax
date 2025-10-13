"use client";

import React, { useState } from "react";
import Header from "@/components/Header/Header";
import PersonalFooter from "@/components/Footer/Footer";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const IRSAuditResolution = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "I received an IRS letter — what should I do?",
      answer: (
        <span>
          Don't panic or ignore it. Contact us immediately. We'll review the notice, explain what it
          means, and prepare a response strategy to protect your rights.
        </span>
      ),
    },
    {
      id: 2,
      question: "Can you represent me before the IRS?",
      answer: (
        <span>
          Yes. Our CPAs and Enrolled Agents are authorized to represent you directly before the
          IRS — from correspondence audits to appeals.
        </span>
      ),
    },
    {
      id: 3,
      question: "What if I owe more than I can afford to pay?",
      answer: (
        <span>
          We can help negotiate an Installment Agreement or Offer in Compromise with the IRS to
          reduce or spread out your tax debt payments.
        </span>
      ),
    },
    {
      id: 4,
      question: "Can penalties or interest be removed?",
      answer: (
        <span>
          In some cases, yes. We assist in filing Penalty Abatement Requests if there's reasonable
          cause such as illness, disaster, or honest error.
        </span>
      ),
    },
    {
      id: 5,
      question: "What if I haven't filed returns in years?",
      answer: (
        <span>
          We'll help you get back into compliance by filing all missing returns, resolving notices,
          and setting up manageable repayment or forgiveness options.
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
            IRS Audit & Tax Resolution Services
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            An IRS notice, audit, or proposed penalty can be stressful and confusing. At WeDoTaxes,
            we serve as your advocate—guiding you through the process, helping you respond
            correctly, and aiming to minimize penalties and exposure.
          </p>
        </div>
      </section>

      {/* What We Handle Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            What We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Representation during IRS audits and correspondence</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Penalty relief & abatement requests</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Offers in Compromise and installment agreements</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Preparation of previously unfiled tax returns</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Nullifying or reducing tax liens, levies, and collection actions</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Assessment of documentation, substantiation, and errors</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#ffc107] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Appeals and negotiation with the IRS on your behalf</p>
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
                <p className="text-gray-700 text-lg">Decades of experience dealing with IRS processes and audit protocol</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Professional, calm support when it matters most</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Trustworthy strategies to reduce financial exposure</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#0B3D91] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Clear communication—what documents you need, when and how they'll be handled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-20 bg-[#0B3D91]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Facing an IRS notice or audit? We can help you with courage and clarity.
          </h2>
          <Link href="/Contact-us">
            <button className="bg-[#ffc107] text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors duration-300">
              Request Audit Help Now
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6 md:px-20 max-w-[1440px] m-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              IRS Audit & Tax Resolution — FAQs
            </h2>
            <p className="text-gray-700 text-[17px] max-w-2xl">
              Get answers to common questions about IRS audits and tax resolution services
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

export default IRSAuditResolution;
