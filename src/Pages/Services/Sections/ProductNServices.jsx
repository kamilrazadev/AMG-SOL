import React from 'react'
import styles from "../Services.module.css"
import bgImage from "/assets/images/person-holding-phone-with-lit-.png"

const ProductNServices = () => {
  return (
    <section  className={styles.product_services_main} id='productNServices'>


        <div className={styles.product_services_container}>


            <div className={styles.product_services_content}>
                <h1>PRODUCT & SERVICES</h1>
                
                <ul>

                    <li>
                        <h3>MONEY TRANSFERS</h3>
                        <p>We bridge the distance by facilitating easy and seamless money transfers across Latin America.</p>
                    </li>

                    <li>
                        <h3>ONLINE PAYMENTS</h3>
                        <p>Experience the convenience of secure online transactions, whether it’s for goods, services, or personal needs.</p>
                    </li>

                    <li>
                        <h3>PRE-PAID SERVICES</h3>
                        <p>SOL’s prepaid services offer a convenient and efficient way to manage your financial transactions. With prepaid cards and digital solutions, you can easily load funds in advance and enjoy the flexibility of secure and controlled spending, all while experiencing the ease of managing your finances with SOL.</p>
                    </li>

                    <li>
                        <h3>CHECK CASHING</h3>
                        <p>Turning your checks into immediate cash with minimal hassle. Over time, we have achieved significant milestones, which include the integration across the northern triangle of Latin America. Our aspirations don’t stop here – we have grand visions of expanding our presence into South America, Europe, and aiming to establish ourselves as the primary money services business dedicated to Latin America.</p>
                    </li>

                </ul>
            </div>

            <div className={styles.shadow_effect}></div>


        </div>      

        <img src={bgImage} className={styles.background_image} />

    </section>
  )
}

export default ProductNServices
