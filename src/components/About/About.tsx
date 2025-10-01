// /* eslint-disable @next/next/no-img-element */
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function About() {
//   return (
//     <section className="bg-[#1e221d] text-white py-16 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
//         {/* Left Text Block */}
//         <div className="md:w-1/2">
//           <h2 className="text-[26px] font-bold mb-6">ABOUT UPSIDE TAX</h2>
//           <p className="text-lg leading-relaxed mb-6">
//             I&apos;m Andrew Donoghue CPA, CFP® – the owner of Upside Tax LLC. As
//             a lifelong New York City resident, I&apos;ve seen the business world
//             evolve from the late 90&apos;s into 2020&apos;s as an employee,
//             freelancer, business owner, and investor. My team of CPA&apos;s,
//             bookkeepers, and business service specialists provide a seamless
//             process that ensures you have the most valuable professional
//             experience along with the bonus of personal touch whether it be your
//             business, investment, retirement, or personal financial needs.
//           </p>
//           <Link
//             href="#"
//             className="inline-block bg-[#5acc00] text-white font-bold px-5 py-2 rounded-md text-lg hover:opacity-90 transition"
//           >
//             LEARN MORE
//           </Link>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 flex justify-center">
//           <div className="rounded-xl overflow-hidden shadow-lg max-w-xs w-full">
//             <Image
//               src="/assets/person.jpg" // Replace with your actual image path or import
//               alt="Andrew Donoghue"
//               className="object-cover w-full h-full"
//               width={1000}
//               height={1000}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { FaFileAlt, FaClipboardCheck, FaMoneyCheckAlt } from "react-icons/fa";

export default function AboutProcessSection() {
  return (
    <section
      id="about"
      className="bg-white md:py-20 py-10 px-10 md:px-20 max-w-[1440px] m-auto"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT: About RTD Tax */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            About WeDoTaxes
          </h2>
          <p className="text-gray-700 leading-relaxed text-[17px] max-w-xl">
            At WeDoTaxes, we make tax and financial management simple,
            transparent, and stress-free. Our team combines years of experience
            with modern technology to deliver reliable services for individuals,
            freelancers, and businesses nationwide. We operate electronically to
            serve clients nationwide. From personal tax returns to complex
            business filings, we provide expert guidance every step of the way.
          </p>
        </div>

        {/* RIGHT: Process for Tax Filing */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
            Process for Tax Filing
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 md:gap-0 text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1a4d91] text-white rounded-full p-4 text-3xl mb-3">
                <FaFileAlt />
              </div>
              <p className="text-sm font-semibold text-black">
                Document Upload
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-3xl text-gray-400 mx-4">→</div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#ffc107] text-white rounded-full p-4 text-3xl mb-3">
                <FaClipboardCheck />
              </div>
              <p className="text-sm font-semibold text-black">
                Review & Preparation
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-3xl text-gray-400 mx-4">→</div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1a4d91] text-white rounded-full p-4 text-3xl mb-3">
                <FaMoneyCheckAlt />
              </div>
              <p className="text-sm font-semibold text-black">
                Filing & Refund
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
