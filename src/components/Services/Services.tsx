"use client";

import Link from "next/link";
import Image from "next/image";
 

const services = [
  {
    title: "Personal",
    description:
      "Complete tax preparation services for individuals earning through W-2s and other income streams",
    icon: '/assets/contactperson.jpg',
    link: "#",
  },
  {
    title: "Business",
    description:
      "Companies of all sizes including multi-member LLCs, S Corporations, and B Corporations",
    icon: '/assets/contactperson.jpg',
    link: "#",
  },
  {
    title: "Freelance",
    description:
      "Sole proprietors and single-member LLCs (with or without additional W-2s and other sources of income)",
    icon: '/assets/contactperson.jpg',
    link: "#",
  },
  {
    title: "Business",
    description:
      "Companies of all sizes including multi-member LLCs, S Corporations, and B Corporations",
    icon: '/assets/contactperson.jpg',
    link: "#",
  },
  {
    title: "Business",
    description:
      "Companies of all sizes including multi-member LLCs, S Corporations, and B Corporations",
    icon: '/assets/contactperson.jpg',
    link: "#",
  },
  {
    title: "Business",
    description:
      "Companies of all sizes including multi-member LLCs, S Corporations, and B Corporations",
    icon: '/assets/contactperson.jpg',
    link: "#",
  },
];

export default function Services() {
  return (
    <section id="services" className=" py-20 px-6 md:px-20 max-w-[1440px] m-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-12">
        OUR SERVICES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] flex flex-col"
          >
            <div className="w-full h-48 relative">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-cover"
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
