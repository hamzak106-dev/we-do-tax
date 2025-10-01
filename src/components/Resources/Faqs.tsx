"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    id: 1,
    question: "What Is The Process For An Individual Tax Return?",
    answer: (
      <>
        <span>
          You can request a quote (button above) or just reach out directly to
          info@wedotax.com or call (917) 923-4178. After we have an initial
          discussion:
        </span>
        <ul className="list-disc pl-5 mt-2 text-base">
          <li>We price quote based on the info provided in the discussion.</li>
          <li>
            We send a link to our tax portal where you can upload documents and
            provide information about your tax situation.
          </li>
          <li>We guide you with any questions or notes along the way.</li>
          <li>
            We prepare the tax return based on the information/tax documents in
            the link.
          </li>
          <li>
            We share it with you for your review and answer any additional
            questions.
          </li>
          <li>After the review - you ESign, then we Efile.</li>
          <li>You receive a final copy for your records.</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    question: "How Does WeDoTaxes Ensure The Accuracy Of My Taxes?",
    answer: (
      <span>
        Our team of experienced professionals, led by Andrew Donoghue CPA, CFP®,
        stay up to date with the latest tax laws and regulations to ensure the
        accuracy of your taxes. We use cutting-edge software and tools to
        streamline the tax preparation process and ensure that no detail is
        missed.
      </span>
    ),
  },
  {
    id: 3,
    question: "Can WeDoTaxes Help Me With My Business?",
    answer: (
      <span>
        Yes! We offer a range of services for businesses, including entity
        selection, bookkeeping, payroll, and tax planning. Contact us to discuss
        your business needs.
      </span>
    ),
  },
];

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20 max-w-[1440px] m-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-gray-700 text-[17px] max-w-2xl">
            Get answers to common questions about our tax services and process
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
          <a href="/Contact-us">
            <button className="bg-[#ffc107] hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-md text-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Contact Us Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
