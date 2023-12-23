import React from 'react'
import styles from "../MissionValues.module.css"

const MissionVision = () => {
  return (
    <section className={styles.mission_vision_main}>
        <div className={styles.mission_vision_container}>
            <h1>MISSION VISION & CORE VALUES</h1>    

            <div className={styles.mission_vision_content}>
                <div className={styles.mission_vision_txt}>
                    <div>
                        <h3>MISSION</h3>
                        <p>
                        To enrich the lives of Latin Americans, both domestically and abroad, by facilitating access to digital money services for the underserved and underbanked communities. We aim to offer efficient, secure, and economical financial services to those most in need.
                        </p>
                    </div>
                    <div>
                        <h3>VISION</h3>
                        <p>We envision a world where online payments and money transfers knows no boundaries, and where every person, irrespective of geographical location and socio-economic status, can access top-notch financial services quickly and efficiently.</p>
                    </div>
                    <div>
                        <h3>CORE VALUES</h3>
                        <ol>
                            <li>Social and Economic Empowerment: We believe in creating opportunities, uplifting communities, and laying the groundwork for economic prosperity. </li>
                            <li>Service Excellence: Our commitment is to serve with integrity, ensuring reliability and efficiency in all our transactions. </li>
                            <li>Community Focus: Giving back to the Latin American community, especially those most in need, remains at the heart of our operations. We are not just a business; we are a partner in progress. </li>
                            <li>Innovation: Embracing technology and innovative solutions to enhance the user experience and meet the evolving needs of our clients.</li>
                        </ol>
                    </div>
                </div>
                <div className={styles.mission_vision_cards}>
                    <div>

                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={styles.mission_vision_bottom}>
                <p>Sol Money Transfer LLC is more than just a Money Transfer Business – we are a catalyst for economic growth, community upliftment, and technological advancement in the realm of financial services. We invite you to join us on this exciting journey.</p>
            </div>
        </div>
    </section>
  )
}

export default MissionVision
