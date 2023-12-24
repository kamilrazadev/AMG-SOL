import React from 'react'
import styles from "../Services.module.css"

const Ewallet = () => {
  return (
    <section className={styles.ewallet_main} id='eWallet'>
      <div className={styles.ewallet_container}>
        <div>
            <h1>E-WALLET</h1>
            <p>SOL’s e-wallet solutions offer a modern and convenient way to manage your money digitally. With our e-wallet services, you can securely store, send, and receive funds with ease, all from the palm of your hand. Enjoy the flexibility and efficiency of electronic wallets, making everyday transactions and financial management a breeze, right at your fingertips.</p>
        </div>

        <div>
            <h1>PRE-PAID CARDS</h1>
            <p>SOL’s prepaid card options provide a smart and flexible way to manage your finances. These convenient cards are pre-loaded with funds, allowing you to make purchases and payments just like a regular debit or credit card. With SOL’s prepaid cards, you have control over your spending, enhanced security, and the convenience of a card that’s ready to use whenever you need it, making managing your money a hassle-free experience.</p>
        </div>      
    </div>
    </section>
  )
}

export default Ewallet
