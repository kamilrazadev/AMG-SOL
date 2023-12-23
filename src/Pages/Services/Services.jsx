import React from "react";
import HeroSection from "./Sections/HeroSection";
import OnlinePayment from "./Sections/OnlinePayment";
import B2B from "./Sections/B2B";
import MoneyTransfer from "./Sections/MoneyTransfer";
import SolCard from "./Sections/SolCard";
import Ewallet from "./Sections/Ewallet";
import ProductNServices from "./Sections/ProductNServices";

const Services = () => {
  return(
    <>
      <HeroSection />
      <OnlinePayment />
      <B2B />
      <MoneyTransfer />
      <SolCard />
      <Ewallet />
      <ProductNServices />
    </>
  )
}

export default Services;
