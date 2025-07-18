import Plans from "@/components/Plans/Plans";
import HowItWorks from "@/components/PersonalPage/HowItworks/HowitWorks";
import React from "react";
import Header from "@/components/Header/Header";
import PersonalForm from "@/components/PersonalPage/PersonalForm/PersonalForm";
import PersonalFooter from "@/components/Footer/Footer";
const plans = [
  {
    title: "Basic",
    price: "$295+",
    description: "Simple W2 and bank interest",
    highlight: false,
  },
  {
    title: "Basic Plus",
    price: "$450+",
    description:
      "Basic plus additional categories of income, deductions, credits",
    highlight: true,
    badge: "Most Common",
  },
  {
    title: "Premium",
    price: "$550+",
    description:
      "Freelance, single-member LLC, multiple brokerage accounts, rental real estate, K-1 activity, multiple states, employee stock options, etc.",
    highlight: true,
    badge: "Most Common",
  },
  {
    title: "Platinum",
    price: "$995+",
    description:
      "Complex situations that require a tailored approach to their tax compliance and financial planning matters",
    highlight: false,
  },
];
const Personal = () => {
  return (
    <div>
      <Header />
      <Plans plans={plans} grid={4} title="PERSONAL" />
      <HowItWorks />
      <PersonalForm title="PERSONAL" />
      <PersonalFooter />
    </div>
  );
};

export default Personal;
