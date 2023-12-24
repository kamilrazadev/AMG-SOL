import React from 'react'
import styles from "../Services.module.css"
import billPay from "/assets/images/Bill_Pay.png"

const OnlinePayment = () => {
  return (
    <section  className={styles.online_payment_main} id='onlinePayment'>
      <div className={styles.online_payment_container}>
        <div  className={styles.online_payment_txt}>
        <div>
            <h2>ONLINE PAYMENTS</h2>
            <p>SOL’s online payments section offers secure and convenient money transfer solutions for all your financial needs. With competitive currency exchange rates and seamless transactions, you can trust SOL to make your online payments swift and hassle-free.</p>
        </div>
        <div>
            <h3>BILL PAY</h3>
            <p>At SOL, we understand the importance of simplifying your financial responsibilities, which is why our bill payment service is designed to make your life easier. With our user-friendly platform, you can effortlessly manage and pay your bills online, saving you time and hassle. Whether it’s utilities, credit card payments, or any other bills, SOL’s bill payment service ensures that your transactions are secure, convenient, and efficient, so you can stay on top of your financial obligations with ease.</p>
        </div>
        </div>
        <img src={billPay} alt="" />
      </div>
    </section>
  )
}

export default OnlinePayment
