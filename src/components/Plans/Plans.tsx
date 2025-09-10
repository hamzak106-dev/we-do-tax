/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
// import { FaCheckCircle } from 'react-icons/fa';
import Image from "next/image";

export default function Plans({
  plans,
  grid,
  title,
}: {
  plans: any;
  grid: number;
  title?: string;
}) {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#222] mb-4">
        {title} TAX SERVICES
      </h2>
      <p className="text-base font-semibold text-[#111] mb-1">
        Income Tax Preparation <span className="text-green-500">●</span>{" "}
        Personal Financial Statements <span className="text-green-500">●</span>{" "}
        Consulting Services
      </p>
      <a
        href="/Contact-us"
        className="inline-block mt-4 mb-12 px-6 py-3 text-white font-bold bg-lime-500 hover:bg-lime-600 rounded-md text-base"
      >
        Start Your Quote
      </a>
      {title === "BUSINESS" && (
        <p className="text-lg underline font-semibold text-lime-500 mb-5">
          Interested in forming a LLC or Corporation? Start Here.
        </p>
      )}

      {title === "BUSINESS" && (
        <p className="text-[16px] font-medium text-black mb-10">
          Our Full Service – Monthly option serves as the finance and accounting
          department for your business.
        </p>
      )}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${grid} gap-6 max-w-7xl mx-auto`}
      >
        {plans?.map((plan: any, index: any) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-6 !w-full shadow-md border-3 ${
              plan.highlight ? "border-gray-900" : "border-transparent"
            } flex flex-col justify-between text-left w-full`}
          >
            {plan.badge && (
              <div className="self-center mb-3">
                <span className="bg-gray-900 text-white px-4 py-1 text-sm rounded-full uppercase font-semibold">
                  {plan.badge}
                </span>
              </div>
            )}
            <h3 className="text-center text-2xl font-semibold uppercase text-gray-900 mb-1">
              {plan.title}
            </h3>
            <p className="text-center text-2xl font-bold text-black mb-3">
              {plan.price}
            </p>
            <p className="text-center text-gray-600 text-[17px] leading-relaxed">
              {plan.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm text-black mt-10 max-w-3xl mx-auto">
        <span className="font-semibold">*</span>Prices are subject to volume and
        complexity of tax forms. After a brief discussion, we can give you a
        price quote based on this list.
      </p>

      <div className="mt-12">
        <h4 className="font-semibold text-2xl text-black mb-2">
          See What Others Are Saying About Us:
        </h4>
        <Image
          src="/assets/googlerating.webp"
          alt="Google Reviews"
          className="mx-auto "
          width={250}
          height={350}
        />
      </div>
    </section>
  );
}
