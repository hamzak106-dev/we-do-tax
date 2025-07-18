import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import GeneralInquiryForm from "@/components/GeneralInquiryForm/GeneralInquiryForm";
const cards = [
  {
    title: "Personal",
    desc: "Complete tax preparation services for individuals earning through W-2s and other income streams",
    btn: "GET A QUOTE",
    link: "#",
  },
  {
    title: "Freelancer",
    desc: "Sole proprietors and single-member LLCs (with or without additional W-2s and other sources of income)",
    btn: "GET A QUOTE",
    link: "#",
  },
  {
    title: "Business",
    desc: "Companies of all sizes including multi-member LLCs, S Corporations, and B Corporations",
    btn: "GET A QUOTE",
    link: "#",
  },
  {
    title: "Fractional CFO Services",
    desc: "Strategic financial planning and analysis, helping to guide your business through growth and change.",
    btn: "CONTACT US",
    link: "#",
  },
  {
    title: "Family Offices",
    desc: "Simplify your financial life, ensuring long-term financial security, and maintaining your family's legacy.",
    btn: "CONTACT US",
    link: "#",
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
              CONTACT UPSIDE TAX
            </h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4">
              GET EXPERT HELP WITH YOUR TAXES
            </h1>
            <p className="text-white text-lg text-center max-w-2xl mx-auto font-normal">
              If you&apos;re looking for a{" "}
              <span className="font-bold">custom quote</span> for your tax
              needs, choose one of the options below.
              <br />
              Otherwise continue down to our general contact form below.
            </p>
          </div>
          {/* Cards grid */}
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.slice(0, 3).map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center"
              >
                <h3 className="text-2xl font-bold mb-3 text-black">
                  {card.title}
                </h3>
                <p className="mb-6 text-black">{card.desc}</p>
                <a
                  href={card.link}
                  className="bg-[#ffc107] text-black font-bold py-2 px-6 rounded transition"
                >
                  {card.btn}
                </a>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
            {cards.slice(3).map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center"
              >
                <h3 className="text-2xl font-bold mb-3 text-black">
                  {card.title}
                </h3>
                <p className="mb-6 text-black">{card.desc}</p>
                <a
                  href={card.link}
                  className="bg-[#ffc107] text-black font-bold py-2 px-6 rounded transition"
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
