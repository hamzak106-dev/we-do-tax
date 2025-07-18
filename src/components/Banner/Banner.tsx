/* eslint-disable @next/next/no-img-element */
"use client";

export default function Banner() {
  return (
    <div className="bg-black">
    <section className="relative flex bg-black flex-col lg:flex-row w-full min-h-[600px] max-w-[1440px] m-auto">
      {/* Gray Background with Opacity */}
      <div className="absolute inset-0  opacity-60 z-0" />

      {/* Content Wrapper - above background */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        {/* Left - Text Section */}
        <div className="text-white flex-1 px-8 py-16 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            TAX, ACCOUNTING, FINANCIAL - EXPERTS
          </h1>
          <h2 className="text-[22px] font-bold mb-4">
            Andrew Donoghue CPA CFP®
          </h2>
          <p className="mb-4 text-[19px]">
            Tax Filing and Consulting - Personal and Business. One time and Full
            Service options.
          </p>
          <p className="mb-4 text-[19px]">
            Fractional CFO Roles - Startups & Family Offices. Monthly Retainer
            service packages.
          </p>
          <p className="mb-4 text-[19px]">Based in Financial District, NYC.</p>
          <p className="mb-8 text-[19px]">We work electronically - nationwide.</p>
          <button className="bg-[#1F5893] p-[10px] px-4 w-fit rounded-[10px] text-lg border-none h-[40px] cursor-pointer flex items-center justify-center text-white font-bold">
            Start Filing Now
          </button>
        </div>

        {/* Right - Video Section */}
        <div className="relative flex-1">
  <video
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/assets/videos/banner-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Black Vignette Overlay */}
  <div className="pointer-events-none absolute inset-0 bg-black/30" />

  <div className="pointer-events-none absolute inset-0 bg-gradient-radial" />
</div>

      </div>
    </section>
    </div>
  );
}
