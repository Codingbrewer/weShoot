import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/appStyles.module.css'

export default function TryNow() {
  




  return (
    
<div>
 <div className={styles.container}>

<div className={styles.card}>
<Link to="/classic">
    <div className={styles.box}>
      <div className={styles.content}>
        <h4>Classic</h4>
        <h3>89$</h3>
        <p>
        <ul className={styles.list}>
  <li>Super high quality photos</li>
  <li>Professional photographers </li>
  <li>Up to 10 photos each Product</li>
  <li>5 "Ready to post" Instagram images </li>
  <li>Extra 5 vibes photos with your products</li>

</ul>

        </p>
        
      </div>
    </div>
    </Link>
  </div>
  


  <div className={styles.card}>
  <div className={styles.best}> Best Value </div> 
  <Link to="/pro">
  
   
    <div className={styles.box}>
      <div className={styles.content}>
        <h4>Pro</h4>
        <h3>129$</h3>
        <p>
        <ul className={styles.list}>
  <li> 4K quality photos</li>
  <li>Professional photographers </li>
  <li>Up to 25 photos each Product</li>
  <li>10 "Ready to post" Instagram images </li>
  <li>Extra 10 vibes photos with your products</li>

</ul>

        </p>
        
      </div>
    </div>
    </Link>
  </div>

  <div className={styles.card}>
  <Link to="/business">
    <div className={styles.box}>
      <div className={styles.content}>
        <h4>Business</h4>
        <h3>169$</h3>
        <p>
        <ul className={styles.list}>
  <li>4K quality photos</li>
  <li>Professional photographers </li>
  <li>Up to 50 photos each Product</li>
  <li>20 "Ready to post" Instagram images </li>
  <li>Extra 20 vibes photos with your products</li>

</ul>

        </p>
        
      </div>
    </div>
    </Link>
  </div>
</div>
    </div>
  )};
