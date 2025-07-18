"use client";

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-[#f2f2f2] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <p className="text-[#5acc00] font-semibold text-lg mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e221d] leading-snug mb-6">
            WE&apos;LL DO THE HEAVY LIFTING SO YOU WON&apos;T HAVE TO
          </h2>
          <p className="text-[#1e221d] text-base mb-8">
            Filing taxes can be daunting, but we&apos;re here to walk you
            through your accurate, on-time return, step-by-step.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex text-black text-lg items-start gap-3">
              <span className="w-3 h-3 mt-1 rounded-full bg-[#5acc00]"></span>
              Fill out the form above to receive your custom quote
            </li>
            <li className="flex text-black text-lg items-start gap-3">
              <span className="w-3 h-3 mt-1 rounded-full bg-[#5acc00]"></span>
              Upload your tax documents via our secure online portal
            </li>
            <li className="flex text-black text-lg items-start gap-3">
              <span className="w-3 h-3 mt-1 rounded-full bg-[#5acc00]"></span>
              Review and e-sign your return – we&apos;ll e-file it for you
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/laptop.jpg" // Replace with your actual path
              alt="Working on laptop"
              width={700}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
