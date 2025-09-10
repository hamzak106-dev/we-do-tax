"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Core Tax & Compliance Services",
    description:
      "We provide end-to-end tax filing solutions for individuals and businesses of all sizes. From Form 1040 for personal returns to LLC, S-Corp, C-Corp, and partnership filings, our team ensures compliance while maximizing deductions. We also specialize in multi-state and international tax cases, helping clients with cross-border income and assets stay fully compliant.",
    staticIcon: "/assets/images/static/complince.png",
    animatedIcon: "/assets/videos/complince.gif",
    link: "#",
  },
  {
    title: "Tax Planning & Strategy",
    description:
      "Our proactive approach to tax planning helps you reduce liabilities year-round instead of waiting until filing season. Whether it’s retirement planning, investment strategies, R&D credits, or even crypto tax reporting, we design strategies to keep more money in your pocket while staying fully compliant.",
    staticIcon: "/assets/images/static/tax.png",
    animatedIcon: "/assets/videos/tax.gif",
    link: "#",
  },
  {
    title: "Audit & IRS Support",
    description:
      "Facing the IRS can be stressful, but you don’t have to go through it alone. We represent clients during audits with expert defense and also offer prepaid audit protection plans that give you peace of mind long before an audit ever occurs.",
    staticIcon: "/assets/images/static/audit.png",
    animatedIcon: "/assets/videos/audit.gif",
    link: "#",
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
