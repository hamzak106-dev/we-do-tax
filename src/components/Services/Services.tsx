"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "U.S. Individual & Expat Tax Filing",
    description:
      "Filing U.S. taxes can be complicated — especially for citizens living overseas or with foreign income. We handle federal, state, and foreign income complexities, FBAR, FATCA, and treaty analysis.",
    staticIcon: "/assets/images/static/complince.png",
    animatedIcon: "/assets/videos/complince.gif",
    link: "/Individual-Expat-Tax",
  },
  {
    title: "Business & Entity Taxes",
    description:
      "From startups to established companies, we help U.S. businesses structure properly, minimize liabilities, and plan proactively.",
    staticIcon: "/assets/images/static/tax.png",
    animatedIcon: "/assets/videos/tax.gif",
    link: "/Business-Entity-Tax",
  },
  {
    title: "IRS Audit & Tax Resolution",
    description:
      "We act as your advocate during IRS audits, notices, or penalties, handling representation, appeals, and settlement negotiations.",
    staticIcon: "/assets/images/static/audit.png",
    animatedIcon: "/assets/videos/audit.gif",
    link: "/IRS-Audit-Resolution",
  },
  {
    title: "Accounting & Advisory Services",
    description:
      "Stay on top of your finances with accurate bookkeeping, payroll processing, and monthly reporting. For growing businesses, our Virtual CFO and Controller services provide financial oversight, budgeting, and forecasting. We also offer personalized business advisory services for cash flow management, debt restructuring, and succession planning.",
    staticIcon: "/assets/images/static/accounting.png",
    animatedIcon: "/assets/videos/accounting.gif",
    link: "#",
  },
  {
    title: "Client Experience & Security",
    description:
      "Your financial data deserves the highest level of protection. Our secure client portal enables safe document uploads and seamless communication. We also assist with online reputation management to help businesses maintain a strong and trusted digital presence.",
    staticIcon: "/assets/images/static/security.png",
    animatedIcon: "/assets/videos/security.gif",
    link: "#",
  },
  {
    title: "Flexible & Outsourced Solutions",
    description:
      "Whether you’re a CPA firm needing seasonal tax outsourcing or a business requiring short-term project support, we provide flexible solutions that adapt to your needs. From hourly support to one-off services, we make professional tax help accessible on your terms.",
    staticIcon: "/assets/images/static/outsourced.png",
    animatedIcon: "/assets/videos/outsourced.gif",
    link: "#",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className=" py-20 px-6 md:px-20 max-w-[1440px] m-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-12">
        OUR SERVICES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] flex flex-col group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-full h-48 relative overflow-hidden">
              <Image
                src={hoveredIndex === index ? service.animatedIcon : service.staticIcon}
                alt={service.title}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-110"
                unoptimized
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-[15px] flex-grow">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="mt-4 text-blue-600 font-semibold hover:underline inline-flex items-center"
              >
                Learn More <span className="ml-1">›</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
