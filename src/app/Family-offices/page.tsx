import React from "react";
import Header from "@/components/Header/Header";
import AccelerateGrowth from "@/components/AccelerateGrowth/AccelerateGrowth";
import WhatyouExpect from "@/components/WhatyouExpect/WhatyouExpect";
import Footer from "@/components/Footer/Footer";
import GeneralInquiryForm from "@/components/GeneralInquiryForm/GeneralInquiryForm";

const FamilyOffices = () => {
  return (
    <div>
      <Header />
      <AccelerateGrowth
        mainHeading="Protect Your Legacy"
        subHeading="Family Office Services for High-Net-Worth Families"
        description="Our Family Office Services provide professional, personalized guidance rooted in extensive experience to simplify your financial life, support your family's businesses, and preserve your wealth and legacy."
      />
      <WhatyouExpect />
      <div className="bg-[#f8f8f8] py-12">
        <GeneralInquiryForm />
      </div>
      <Footer />
    </div>
  );
};

export default FamilyOffices;
