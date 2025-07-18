"use client";

import { FaUserAlt, FaBuilding, FaSeedling } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "Personal",
    description:
      "Complete tax preparation services for individuals earning through W-2s and other income streams",
    icon: <FaUserAlt size={43} />,
    link: "#",
  },
  {
    title: "Business",
    description:
      "Companies of all sizes including multi-member LLCs, S Corporations, and B Corporations",
    icon: <FaBuilding size={43} />,
    link: "#",
  },
  {
    title: "Freelance",
    description:
      "Sole proprietors and single-member LLCs (with or without additional W-2s and other sources of income)",
    icon: <FaSeedling size={43} />,
    link: "#",
  },
  {
    title: "Business",
    description:
      "Companies of all sizes including multi-member LLCs, S Corporations, and B Corporations",
    icon: <FaBuilding size={43} />,
    link: "#",
  },
  {
    title: "Business",
    description:
      "Companies of all sizes including multi-member LLCs, S Corporations, and B Corporations",
    icon: <FaBuilding size={43} />,
    link: "#",
  },
  {
    title: "Business",
    description:
      "Companies of all sizes including multi-member LLCs, S Corporations, and B Corporations",
    icon: <FaBuilding size={43} />,
    link: "#",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f7f7f7] py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
        OUR SERVICES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-8 flex flex-col justify-between transition-transform hover:scale-[1.02]"
          >
            <div className="mb-6 text-black">{service.icon}</div>
            <h3 className="text-[26px] font-bold text-black mb-2">
              {service.title}
            </h3>
            <p className="text-lg text-gray-800 mb-4">{service.description}</p>
            <Link
              href={service.link}
              className="text-green-600 text-lg font-semibold mt-auto inline-flex items-center hover:underline"
            >
              Learn More <span className="ml-1">›</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
