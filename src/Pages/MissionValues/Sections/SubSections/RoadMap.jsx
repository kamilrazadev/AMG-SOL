import React from 'react'
import styles from "../../MissionValues.module.css";
import stopWatch from "/assets/images/Mission_b.png"

const RoadMap = () => {
  return (
    <div className={styles.roadmap_container}>
        <img src={stopWatch} alt="" className={styles.roadmap_image} />
      <div className={styles.roadmap_content}>
        <h2>Mission Roadmap What We Are Building</h2>
        <p>SOL Money Transfer’s roadmap is a strategic journey that outlines our trajectory for future growth and innovation. Building upon our current success, the roadmap focuses on enhancing user experience, expanding our service reach, and integrating cutting-edge technologies to stay at the forefront of the evolving financial landscape. Key milestones include the introduction of new features to further streamline transactions, collaborations to broaden our network, and ongoing investments in security measures to uphold the trust of our valued customers.</p>
        <button className="yellow_btn_common">Click Me</button>
      </div>
    </div>
  )
}

export default RoadMap