import React from "react";

const faqs = [
  {
    question: "What Is The Process For An Individual Tax Return?",
    answer: (
      <>
        <span>
          You can request a quote (button above) or just reach out directly to
          info@upsidetax.com or call (917) 923-4178. After we have an initial
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
    question: "How Does Upside Tax Ensure The Accuracy Of My Taxes?",
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
    question: "Can Upside Tax Help Me With My Business?",
    answer: (
      <span>
        Yes! We offer a range of services for businesses, including entity
        selection, bookkeeping, payroll, and tax planning. Contact us to discuss
        your business needs.
      </span>
    ),
  },
];

const Faqs = () => (
  <section className="bg-[#fafafa] py-12">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-black text-center mb-10">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      {faqs.map((faq) => (
        <div key={faq.question} className="mb-10">
          <h3 className="text-2xl text-black font-bold mb-2 border-b-2 border-[#60C130] inline-block pb-1">
            {faq.question}
          </h3>
          <div className="mt-2 text-lg text-black">{faq.answer}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Faqs;
