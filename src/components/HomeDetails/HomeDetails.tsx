"use client";

import Image from "next/image";

const steps = [
  {
    title: "Initial Contact",
    description: (
      <>
        Start with a phone call or email to find out more about your tax
        situation.
        <br />
        Submit your info via our{" "}
        <a
          href="/quote-page"
          className="text-green-600 underline hover:text-green-700"
        >
          quote page
        </a>
        .
      </>
    ),
    image: "/assets/contactperson.jpg", // Replace with your actual image path
    alt: "Initial Contact",
  },
  {
    title: "Send Your Tax Documents",
    description: (
      <>
        1) Scan or snap pics of tax documents using your smartphone, tablet, or
        PC.
        <br />
        <br />
        2) Easily upload to my secure user-friendly document portal powered by
        Intuit.
      </>
    ),
    image: "/assets/uplaoding.jpg",
    alt: "Send Documents",
  },
  {
    title: "We Do The Rest",
    description: (
      <>
        We will discuss questions, scenarios, and advice along the way. After
        your approval, we will E-file and set you up for a refund directly
        deposited into your bank account.
      </>
    ),
    image: "/assets/mobiletax.jpg",
    alt: "We Do The Rest",
  },
];

export default function TaxFilingSteps() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          Our Simple Process for Tax Filing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-xl shadow-md p-5 flex flex-col items-start"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={step.image}
                  alt={step.alt}
                  className="object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
