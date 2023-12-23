import React from 'react'
import styles from "../Services.module.css"
import achImage from "/assets/images/pngwingcom_28.png"
import onlineImage from "/assets/images/pngwingcom_27_mu.png"

const MoneyTransfer = () => {
  return (
    <section  className={styles.money_transfer_main}>
      <div className={styles.money_transfer_container}>
        
        <h1>MONEY TRANSFER</h1>

        <div className={styles.money_transfer_content}>
            <div>
                <h3>ACH</h3>
                <p>SOL’s money transfer section is your passport to secure and swift international money transfers. With competitive exchange rates and a user-friendly platform, sending money to loved ones or conducting business globally has never been easier or more reliable.</p>
                <img src={achImage} alt="" />
            </div>

            <span  className={styles.divider}></span>
            
            <div>
                <h3>ONLINE</h3>
                <p>SOL’s ACH (Automated Clearing House) wire transfer service offers a seamless and efficient way to transfer funds electronically within the United States. Whether you’re making payroll payments, settling bills, or conducting business transactions, our ACH service ensures reliable and timely transfers, saving you time and simplifying your financial processes. Trust SOL for secure and hassle-free electronic fund transfers, empowering your financial operations with convenience and peace of mind.</p>
                <img src={onlineImage} alt="" />
            </div>        
        </div>

      </div>
    </section>
  )
}

export default MoneyTransfer
