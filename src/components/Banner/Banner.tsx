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
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-0">
              Maximize Your Refund.
            </h1>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Minimize Your Stress.
            </h1>
            <p className="mb-0 text-[19px]">
              Fast, accurate tax preparation and advisory from an expert team.
            </p>
            <p className="mb-4 text-[19px]">
              Personal, freelance, and business fillings plus monthly fractional
              CFO support.
            </p>

            {/* Feature List */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center">
                <div className="text-[#ffc107] mr-3 text-xl">✓</div>
                <span className="text-[16px]">Transparent pricing — no surprises</span>
              </div>
              <div className="flex items-center">
                <div className="text-[#ffc107] mr-3 text-xl">✓</div>
                <span className="text-[16px]">Expert review by CPA</span>
              </div>
              <div className="flex items-center">
                <div className="text-[#ffc107] mr-3 text-xl">✓</div>
                <span className="text-[16px]">Nationwide e-service — upload from anywhere</span>
              </div>
            </div>

            <a href="/Contact-us">
              <button className="bg-[#1F5893] p-[10px] px-4 w-fit rounded-[10px] text-lg border-none h-[40px] cursor-pointer flex items-center justify-center text-white font-bold">
                Start Filing Now
              </button>
            </a>
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
