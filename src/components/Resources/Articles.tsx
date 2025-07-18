/* eslint-disable @next/next/no-img-element */
import React from "react";

const articles = [
  {
    title: "TAX WITHHOLDING AND W4",
    img: "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&w=600&q=80",
    link: "#",
  },
  {
    title: "WHICH ENTITY STRUCTURE FOR MY BUSINESS?",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=600&q=80",
    link: "#",
  },
  {
    title: "IS THERE AN AUDIT RISK FOR HOME OFFICE DEDUCTION?",
    img: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&w=600&q=80",
    link: "#",
  },
  {
    title: "TAX TIPS FOR RENTAL REAL ESTATE INVESTORS",
    img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=600&q=80",
    link: "#",
  },
  {
    title: "WHAT ARE THE STEPS TO FORMING A BUSINESS AS AN LLC?",
    img: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80",
    link: "#",
  },
  {
    title: "THE DIFFERENCE BETWEEN AN EMPLOYEE AND FREELANCER FOR TAX PURPOSES",
    img: "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&w=600&q=80",
    link: "#",
  },
];

const Articles = () => (
  <section className="bg-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        ARTICLES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map((a) => (
          <div key={a.title} className="flex flex-col">
            <a href={a.link}>
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-40 object-cover rounded-t"
              />
            </a>
            <div className="bg-white p-4 flex-1 flex flex-col justify-between">
              <a
                href={a.link}
                className="text-xl text-black        font-bold mb-2 block hover:text-[#60C130]"
              >
                {a.title}
              </a>
              <a
                href={a.link}
                className="text-[#60C130] font-semibold text-sm mt-2 inline-block"
              >
                READ FULL ARTICLE<span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Articles;
