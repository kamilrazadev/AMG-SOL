import React from "react";
import styles from "../CountriesWeCover.module.css";
import mapImage from "/assets/images/map_countries-we-cover.png";

const CountriesWeCover = () => {
  return (
    <div className={styles.hero_banner_main} id="countriesWeCoverHeroBanner">
      <div className={styles.hero_banner_headings} data-aos="zoom-out">
        <h1>SOL NEAR WORKS EVERYWHERE IN UNITED STATES</h1>
      </div>
      <div className={styles.hero_banner_logo}>
        <div>
          <img src={mapImage} alt="" data-aos="zoom-out" />
        </div>
      </div>
    </div>
  );
};

export default CountriesWeCover;
