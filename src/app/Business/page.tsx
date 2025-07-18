import Plans from "@/components/Plans/Plans";
import HowItWorks from "@/components/PersonalPage/HowItworks/HowitWorks";
import React from "react";
import Header from "@/components/Header/Header";
import PersonalForm from "@/components/PersonalPage/PersonalForm/PersonalForm";
import PersonalFooter from "@/components/Footer/Footer";
const plans = [
  {
    title: "INCOME TAX PREP ONLY",
    price: "$2,500+",
    description:
      "File C Corp, S Corp, or Partnership tax return Bookkeeping year-end cleanup is an additional $150/hr",
    highlight: false,
  },
  {
    title: "FILING & CONSULTING SERVICES",
    price: "$1,500/QTR+",
    description:
      "Income tax return preparation, setup and quarterly consulting on bookkeeping, payroll, sales tax, owners personal tax situation",
    highlight: false,
    // badge: "Most Common",
  },
  {
    title: "FULL SERVICE",
    price: "$1,000/MO.+",
    description:
      "Full-Service tax filings. Dedicated bookkeeper. Synch and manage connections to software like QBO, Gusto, ADP, Bill.com, Square, Stripe, etc. Planning for owner’s personal tax and retirement situation",
    highlight: true,
    badge: "Most Common",
  },
];
const Personal = () => {
  return (
    <div>
      <Header />
      <Plans plans={plans} grid={3} title="BUSINESS" />
      <HowItWorks />
      <PersonalForm title="PERSONAL" />
      <PersonalFooter />
    </div>
  );
};

export default Personal;
