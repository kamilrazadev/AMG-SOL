import React from 'react'
import styles from "../Services.module.css"
import solCard from "/assets/images/SOL_Card.png"

const SolCard = () => {
  return (
    <section className={styles.sol_card_main}>
      <div className={styles.sol_card_container}>
        <img src={solCard} alt="" />
      </div>
    </section>
  )
}

export default SolCard
