/* eslint-disable @next/next/no-img-element */
import React from "react";

const AccelerateGrowth = ({
  mainHeading,
  subHeading,
  description,
}: {
  mainHeading?: string;
  subHeading?: string;
  description?: string;
}) => {
  return (
    <section className="bg-[#f8f8f8] py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-0 gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=800&q=80"
            alt="Fractional CFO Services"
            className="rounded-md object-cover w-[420px] h-[400px] md:w-[480px] md:h-[400px] shadow-lg"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <span className="text-[#60C130] font-bold text-sm md:text-base mb-2 uppercase tracking-wide">
            {mainHeading}
          </span>
          <h1 className="text-3xl md:text-3xl font-extrabold text-black leading-tight mb-4 uppercase">
            {subHeading}
          </h1>
          <p className="text-lg md:text-xl text-black mb-6 max-w-xl">
            {description}
          </p>
          <button className="bg-[#60C130] hover:bg-[#4ea326] text-white font-bold py-2 px-6 rounded text-lg shadow transition-all duration-200">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccelerateGrowth;
