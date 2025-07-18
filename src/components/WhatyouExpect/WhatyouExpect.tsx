import React from "react";

const cards = [
  {
    title: "Flexible, Cost-Effective Support",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Providing high-level CFO expertise through a{" "}
          <span className="font-bold">monthly retainer</span> model, reducing
          the cost of hiring a full-time CFO.
        </li>
        <li>
          Scalable services tailored to your business needs, ensuring
          cost-effective financial leadership.
        </li>
      </ul>
    ),
  },
  {
    title: "Strategic Financial Planning",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Delivering actionable{" "}
          <span className="font-bold">financial planning and analysis</span> to
          support growth and decision-making.
        </li>
        <li>
          Providing expert guidance for{" "}
          <span className="font-bold">capital raises</span> and cash flow
          optimization
        </li>
      </ul>
    ),
  },
  {
    title: "Efficient Use Of Modern Tools",
    content: (
      <p>
        Utilizing platforms like{" "}
        <span className="font-bold">
          QuickBooks Online, Bill.com, Gusto, Shopify
        </span>
        , and other SaaS tools to streamline financial processes.
      </p>
    ),
  },
  {
    title: "Custom Financial Strategies",
    content: (
      <p>
        Developing forecasting models and strategies to help manage costs, plan
        for growth, and <span className="font-bold">improve profitability</span>
        .
      </p>
    ),
  },
];

const WhatyouExpect = () => {
  return (
    <section className="bg-black py-16 px-2 md:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
          WHAT YOU CAN EXPECT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg shadow p-7 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-black mb-2">
                {card.title}
              </h3>
              <div className="w-24 h-1 bg-[#60C130] mb-4" />
              <div className="text-black text-base md:text-lg">
                {card.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatyouExpect;
