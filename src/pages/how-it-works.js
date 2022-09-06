import React from 'react'
import { useState } from 'react'
import styles from '../styles/appStyles.module.css'
import YouSend from '../images/YouSend.svg'
import WeShootYour from '../images/weShootYour.svg'
import YouGet from '../images/YouGet.svg'
export default function HowitWorks() {

  const [isShownYouSend, setIsShownYouSend] = useState(false);
  const [isShownWe, setIsShownWe] = useState(false);
  const [isShownYouGet, setIsShownYouGet] = useState(false);

  const handleClick = event => {
  setIsShownYouSend(current => !current);
};

const handleClickYouGet = event => {
 setIsShownYouGet(current => !current);
};

const handleClickWe = event => {
setIsShownWe(current => !current);
};

  return (
    
<div>
<div className={styles.container}>
  <div className={styles.card}>

  {isShownYouSend && ( <div className={styles.cardHover}>
    <div className={styles.box}>
      <div className={styles.content}>
        <img className={styles.icons} src={YouSend} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Perferendis blanditiis 
           praesentium beatae sint tempore consequatur
            est quod soluta corrupti necessitatibus.
            Quis, voluptas. Maxime itaque nostrum non sapiente porro,
            amet earum.</p>
            <button onClick={handleClick} >X</button>
      </div>
    </div>
  </div>
  )}


    <div className={styles.box}>
      <div className={styles.content}>
        <h2>01</h2>
        <h3>You!</h3>
        <img className={styles.icons} src={YouSend} alt="" />
        <p>Send us your amazing products per post</p>
        <button onClick={handleClick}>Read More</button>
      </div>
    </div>
  </div>


  <div className={styles.card}>

  {isShownWe && ( <div className={styles.cardHover}>
    <div className={styles.box}>
      <div className={styles.content}>
        <img className={styles.icons} src={WeShootYour} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Perferendis blanditiis 
           praesentium beatae sint tempore consequatur
            est quod soluta corrupti necessitatibus.
            Quis, voluptas. Maxime itaque nostrum non sapiente porro,
            amet earum.</p>
            <button onClick={handleClickWe} >X</button>
      </div>
    </div>
  </div>
  )}

    <div className={styles.box}>
      <div className={styles.content}>
        
        <h2>02</h2>
        <h3>We...</h3>
        <img className={styles.icons} src={WeShootYour} alt=""/>
        <p>Shoot your products with an awsome style</p>
        <button onClick={handleClickWe} >Read More</button>
      </div>
    </div>
  </div>

  <div className={styles.card}>

  {isShownYouGet && ( <div className={styles.cardHover}>
    <div className={styles.box}>
      <div className={styles.content}>
        <img className={styles.icons} src={YouGet} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Perferendis blanditiis 
           praesentium beatae sint tempore consequatur
            est quod soluta corrupti necessitatibus.
            Quis, voluptas. Maxime itaque nostrum non sapiente porro,
            amet earum.</p>
            <button onClick={handleClickYouGet} >X</button>
      </div>
    </div>
  </div>
  )}


    <div className={styles.box}>
      <div className={styles.content}>
        <h2>03</h2>
        <h3>You!</h3>
        <img className={styles.icons} src={YouGet} alt=""/>
        <p>Get your photos to your E-mail ready to use!</p>
        <button onClick={handleClickYouGet} >Read More</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )};

