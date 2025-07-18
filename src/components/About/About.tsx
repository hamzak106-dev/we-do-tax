/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#1e221d] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Block */}
        <div className="md:w-1/2">
          <h2 className="text-[26px] font-bold mb-6">ABOUT UPSIDE TAX</h2>
          <p className="text-lg leading-relaxed mb-6">
            I&apos;m Andrew Donoghue CPA, CFP® – the owner of Upside Tax LLC. As
            a lifelong New York City resident, I&apos;ve seen the business world
            evolve from the late 90&apos;s into 2020&apos;s as an employee,
            freelancer, business owner, and investor. My team of CPA&apos;s,
            bookkeepers, and business service specialists provide a seamless
            process that ensures you have the most valuable professional
            experience along with the bonus of personal touch whether it be your
            business, investment, retirement, or personal financial needs.
          </p>
          <Link
            href="#"
            className="inline-block bg-[#5acc00] text-white font-bold px-5 py-2 rounded-md text-lg hover:opacity-90 transition"
          >
            LEARN MORE
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg max-w-xs w-full">
            <Image
              src="/assets/person.jpg" // Replace with your actual image path or import
              alt="Andrew Donoghue"
              className="object-cover w-full h-full"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
