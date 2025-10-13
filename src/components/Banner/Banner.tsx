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
              WeDoTaxes — Your U.S. Tax Experts
            </h1>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Maximize your Refund. Minimize your Stress.
            </h1>
            <p className="mb-4 text-[19px]">
              Serving U.S. individuals, businesses, and expats with clear, compliant, and customized tax solutions.
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

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a href="/Contact-us">
                <button className="bg-[#1F5893] p-[10px] px-4 w-fit rounded-[10px] text-lg border-none h-[40px] cursor-pointer flex items-center justify-center text-white font-bold">
                  Get a Free Consultation
                </button>
              </a>
              <div className="text-center sm:text-left">
                <p className="text-white text-sm mb-1">Or call us at:</p>
                <a 
                  href="tel:+18884547996" 
                  className="text-[#ffc107] font-bold text-lg hover:text-yellow-400 transition-colors"
                >
                  (888) 454-7996
                </a>
              </div>
            </div>
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
