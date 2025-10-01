import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import GeneralInquiryForm from "@/components/GeneralInquiryForm/GeneralInquiryForm";

const cards = [
  {
    title: "Core Tax & Compliance Services",
    desc: "We provide end-to-end tax filing solutions for individuals and businesses of all sizes. From Form 1040 for personal returns to LLC, S-Corp, C-Corp, and partnership filings, our team ensures compliance while maximizing deductions. We also specialize in multi-state and international tax cases, helping clients with cross-border income and assets stay fully compliant.",
    btn: "GET A QUOTE",
    link: "/Contact-us",
  },
  {
    title: "Tax Planning & Strategy",
    desc: "Our proactive approach to tax planning helps you reduce liabilities year-round instead of waiting until filing season. Whether it's retirement planning, investment strategies, R&D credits, or even crypto tax reporting, we design strategies to keep more money in your pocket while staying fully compliant.",
    btn: "GET A QUOTE",
    link: "/Contact-us",
  },
  {
    title: "Audit & IRS Support",
    desc: "Facing the IRS can be stressful, but you don't have to go through it alone. We represent clients during audits with expert defense and also offer prepaid audit protection plans that give you peace of mind long before an audit ever occurs.",
    btn: "CONTACT US",
    link: "/Contact-us",
  },
  {
    title: "Accounting & Advisory Services",
    desc: "Stay on top of your finances with accurate bookkeeping, payroll processing, and monthly reporting. For growing businesses, our Virtual CFO and Controller services provide financial oversight, budgeting, and forecasting. We also offer personalized business advisory services for cash flow management, debt restructuring, and succession planning.",
    btn: "CONTACT US",
    link: "/Contact-us",
  },
  {
    title: "Client Experience & Security",
    desc: "Your financial data deserves the highest level of protection. Our secure client portal enables safe document uploads and seamless communication. We also assist with online reputation management to help businesses maintain a strong and trusted digital presence.",
    btn: "CONTACT US",
    link: "/Contact-us",
  },
  {
    title: "Flexible & Outsourced Solutions",
    desc: "Whether you're a CPA firm needing seasonal tax outsourcing or a business requiring short-term project support, we provide flexible solutions that adapt to your needs. From hourly support to one-off services, we make professional tax help accessible on your terms.",
    btn: "CONTACT US",
    link: "/Contact-us",
  },
];

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="relative min-h-screen">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/63c9c3eb953a2a58faec188a/63c9c6e58a9145fe4710f643_nyc-skyline-header-image.jpg')",
          }}
        />
        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col items-center justify-center h-64">
            <h2 className="text-[#ffc107] text-lg font-extrabold mb-2 mt-8 uppercase tracking-wide text-center">
              CONTACT US
            </h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4">
              GET EXPERT HELP WITH YOUR TAXES
            </h1>
            <p className="text-white text-lg text-center max-w-2xl mx-auto font-normal">
              Choose from our comprehensive range of{" "}
              <span className="font-bold">professional tax services</span> below.
              <br />
              Otherwise continue down to our general contact form.
            </p>
          </div>
          {/* Cards grid - Updated to show all 6 services in a 3x2 grid */}
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center"
              >
                <h3 className="text-2xl font-bold mb-3 text-black">
                  {card.title}
                </h3>
                <p className="mb-6 text-black text-[15px] leading-relaxed flex-grow">
                  {card.desc}
                </p>
                <a
                  href={card.link}
                  className="bg-[#ffc107] text-black font-bold py-2 px-6 rounded transition hover:bg-yellow-400"
                >
                  {card.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* General Inquiry Form */}
      <div className="bg-[#f8f8f8] py-12">
        <GeneralInquiryForm />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
