import React from "react";
import styles from "../MissionValues.module.css";

const HeroBanner = () => {
  return (
    <header className={styles.mission_hero_main}>
      <div className={styles.mission_hero_container}>
        <h6>Empowering Global Money Movement</h6>
        <h1>ENABLING SEAMLESS FINANCIAL MOBILITY WORLDWIDE</h1>
        <p>Instant, convenient, transparent and eventually free</p>
        <div className={styles.mission_hero_btns}>
          <button>Learn more</button>
          <button>Read our latest mission update</button>
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
