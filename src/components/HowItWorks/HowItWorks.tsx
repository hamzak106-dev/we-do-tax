"use client";

import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Free Consultation & Intake",
      description: "We start with a complimentary consultation to understand your tax situation and needs."
    },
    {
      number: "2", 
      title: "Document Upload & Review",
      description: "Securely upload your tax documents through our client portal for our team to review."
    },
    {
      number: "3",
      title: "Draft Return & Feedback", 
      description: "We prepare your tax return and share it with you for review and feedback."
    },
    {
      number: "4",
      title: "Final Filing & Support",
      description: "Once approved, we file your return and provide ongoing support for any questions."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes tax filing simple and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-[#ffc107] transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
