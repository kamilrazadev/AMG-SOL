import React from 'react'
import styles from "../Services.module.css"
import solB2b from "/assets/images/SOL_B2B.png"

const B2B = () => {
  return (
    <section className={styles.b2b_main}>
      <div className={styles.b2b_container}>
        <div className={styles.b2b_txt}>
            <h3>B2B</h3>
            <p>SOL’s B2B services are tailored to empower businesses with seamless and efficient solutions for their financial needs. We understand that in the dynamic world of commerce, reliable financial partnerships are crucial. With SOL, businesses can expect a comprehensive suite of B2B services, including currency exchange, international money transfers, and payment solutions that streamline transactions, reduce costs, and enhance operational efficiency. Trust SOL to be your trusted financial ally, providing the tools and expertise you need to drive your business forward in the global marketplace.</p>
        </div>

        <img src={solB2b} alt="" />
      </div>
    </section>
  )
}

export default B2B
