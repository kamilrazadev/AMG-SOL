import React from "react";
import HeroBanner from "./Sections/HeroBanner";
import MoneyTransferForm from "./Sections/MoneyTransferForm";
import MoneyTransferLLC from "./Sections/MoneyTransferLLC";
import InternationalMoneyTrans from "./Sections/InternationalMoneyTrans";
import PeopleGoingPlaces from "./Sections/PeopleGoingPlaces";
import DisappointThieves from "./Sections/DisappointThieves";
import OurTeam from "./Sections/OurTeam";
import styles from "./HomePage.module.css"

const HomePage = () => {
  return (
    <main className={styles.homepage_main}>
      <HeroBanner />
      <MoneyTransferForm />
      <MoneyTransferLLC />
      <InternationalMoneyTrans />
      <PeopleGoingPlaces />
      <DisappointThieves />
      <OurTeam />
    </main>
  );
};

export default HomePage;
