"use client";

import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "CPA & Enrolled Agents on your side",
      description: "Our team of certified professionals ensures your taxes are handled with expertise and precision."
    },
    {
      title: "Transparent, flat-fee pricing",
      description: "No hidden fees or surprises. You know exactly what you'll pay upfront."
    },
    {
      title: "Secure Client Portal",
      description: "Upload documents and communicate safely through our encrypted platform."
    },
    {
      title: "Experience with domestic & international taxes",
      description: "From local businesses to expats abroad, we handle all tax complexities."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Choose WeDoTaxes
          </h2>
          <div className="w-24 h-1 bg-[#ffc107] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, transparency, and technology to deliver exceptional tax services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="text-white text-xl font-bold">{index + 1}</div>
              </div>
              <h3 className="text-base font-semibold text-black mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
