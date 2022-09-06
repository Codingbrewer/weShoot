import React from 'react'
import styles from '../styles/appStyles.module.css'
import Logo from '../images/weShootLogo.svg'

export default function About() {
  
  return (
<div>
<div className={styles.container} >
  <div className={styles.card} style={{width: '60%' }}>
    <div className={styles.box}>
      <div className={styles.content}>
      <img src={Logo} className={styles.logo} alt="" />
        <h3>Fast.Easy. Professional. </h3>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt architecto est quia voluptates officiis
           eaque voluptas sit minus nihil ea minima doloribus veritatis iusto, esse quas.
           Nisi explicabo error voluptas!</p>
      </div>
    </div>
  </div>



    </div>
    </div>
  )};
;
