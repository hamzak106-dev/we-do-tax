import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Worksheets from "@/components/Resources/Worksheets";
import Articles from "@/components/Resources/Articles";
import Faqs from "@/components/Resources/Faqs";

const Resources = () => {
  return (
    <div>
      <Header />
      <div id="worksheets">
        <Worksheets />
      </div>
      <div id="faq">
        <Faqs />
      </div>
      <div id="articles">
        <Articles />
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
