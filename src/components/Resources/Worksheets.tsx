import React from "react";

const worksheets = [
  {
    title: "FREELANCE WORKSHEET",
    desc: "To summarize income and expenses for freelance activity (sole proprietor or single member LLC)",
    link: "#",
  },
  {
    title: "RENTAL REAL ESTATE WORKSHEET",
    desc: "To summarize income and expenses from a rental unit",
    link: "#",
  },
  {
    title: "PART YEAR ALLOCATIONS",
    desc: "To allocate income based on dates of income production and residences.",
    link: "#",
  },
];

const Worksheets = () => (
  <section className="bg-white  pb-8">
    <div
      className="flex justify-center items-center  bg-cover h-64 mb-8"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg')",
      }}
    >
      <h1 className="text-4xl text-white font-extrabold mb-8">RESOURCES</h1>
    </div>
    <div className="max-w-3xl mx-auto text-center">
      {/* <h1 className="text-4xl text-black font-extrabold mb-8">RESOURCES</h1> */}

      <h2 className="text-3xl text-black font-bold mb-8">WORKSHEETS</h2>
      {worksheets.map((w) => (
        <div key={w.title} className="mb-10 text-black">
          <h3 className="text-2xl font-bold mb-2 text-black">{w.title}</h3>
          <p className="mb-4 text-black">{w.desc}</p>
          <a
            href={w.link}
            className="inline-block bg-[#60C130] hover:bg-[#4ea326] text-white font-bold py-2 px-6 rounded transition"
            download
          >
            DOWNLOAD RESOURCE
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Worksheets;
