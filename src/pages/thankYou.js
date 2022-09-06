import React from 'react'
import styles from '../styles/appStyles.module.css'
import { Link } from 'react-router-dom'
import Email from '../images/email.svg'
import ThankYouIcon from '../images/ThankYou.svg'

export default function thankYou() {
  
  return (
    
<div>
<div className={styles.container}>
  <div className={styles.card} style={{width:'500px', height: '450px'}}>
    <div className={styles.box}>
      <div className={styles.content} style={{padding:'30px'}}>
      <img className={styles.icons} src={ThankYouIcon}  style={{width:'100px', height: '100px'}} alt=""/>
        <h4>Thank you for your Order!</h4>
        <p>Next step: you will get a shipping label to your Email</p>
        <p>We are super exited to start shooting your awsome products!</p>
        <Link className={styles.thankyouButton}  to='/'>Back to homepage</Link>
        <p>question to your order? Email us now! </p>
        <a href="mailto:info@weshoot.com" target="_blank" rel="noreferrer">
        <img className={styles.icons} src={Email}  style={{width:'30px', height: '30px'}} alt=""/></a>

      </div>
    </div>
  </div>


  
  </div>
  </div>
  )};
