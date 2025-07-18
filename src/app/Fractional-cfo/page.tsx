import React from "react";
import Header from "@/components/Header/Header";
import AccelerateGrowth from "@/components/AccelerateGrowth/AccelerateGrowth";
import WhatyouExpect from "@/components/WhatyouExpect/WhatyouExpect";
import Footer from "@/components/Footer/Footer";
import GeneralInquiryForm from "@/components/GeneralInquiryForm/GeneralInquiryForm";

const FractionalCFO = () => {
  return (
    <div>
      <Header />
      <AccelerateGrowth
        mainHeading="Accelerate Your Growth"
        subHeading="Fractional CFO Services For Startups and Small Businesses"
        description="Our Fractional CFO services provide the financial expertise your business needs, tailored to support growth and sustainability without the expense of a full-time CFO."
      />
      <WhatyouExpect />
      <div className="bg-[#f8f8f8] py-12">
        <GeneralInquiryForm />
      </div>
      <Footer />
    </div>
  );
};

export default FractionalCFO;
