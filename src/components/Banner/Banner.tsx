/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px]">
      {/* Left - Text Section */}
      <div className="bg-black text-white flex-1 px-18 py-16 flex flex-col justify-center">
        <h5 className="text-[#60C130] font-bold mb-2">UPSIDE TAX</h5>
        <h1 className="text-3xl md:text-4xl !font-extrabold leading-tight mb-4">
          TAX, ACCOUNTING, FINANCIAL - EXPERTS
        </h1>
        <h2 className="text-[22px] font-bold mb-4">Andrew Donoghue CPA CFP®</h2>
        <p className="mb-4 text-[19px]">
          Tax Filing and Consulting - Personal and Business. One time and Full
          Service options.
        </p>
        <p className="mb-4 text-[19px]">
          Fractional CFO Roles - Startups & Family Offices. Monthly Retainer
          service packages.
        </p>
        <p className="mb-4 text-[19px]">Based in Financial District, NYC.</p>
        <p className="mb-8 text-[19px]">We work electronically - nationwide.</p>
        <button className="border w-fit cursor-pointer !text-[18px] border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
          Request a Quote
        </button>
      </div>

      {/* Right - Image Section */}
      <div className="relative flex-1">
        <Image
          src="/assets/back.jpg"
          alt="Financial District"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="absolute bottom-6 right-6 bg-white shadow-lg rounded p-4 text-center">
          <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
          <p className="text-lg text-black font-medium">
            Over 70 Verified 5-Star Reviews on Google
          </p>
          <a
            href="#"
            className="text-green-700 text-sm underline mt-1 inline-block"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
