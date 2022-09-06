import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import styles from '../styles/Home.module.scss'
import stylesFirst from '../styles/appStyles.module.css'
import Slide1 from '../images/1.jpg'
import Slide2 from '../images/2.jpg'
import Slide3 from '../images/3.jpg'
import Slide4 from '../images/4.jpg'
import Slide5 from '../images/5.jpg'
import Instagram from '../images/insta.svg'
import TikTok from '../images/tiktok.svg'
import Etsy from '../images/etsy.svg'
import YouTube from '../images/youtube.svg'


export default function Home() {
  
  return (
    
<div className={styles.container} >

<Swiper
modules={[Navigation, EffectFade, Autoplay]}
navigation
effect={'fade'}
speed={800}
autoplay
slidesPerView={1}
loop
className={styles.homeSwiper}
style={{"--swiper-navigation-size": "75px",
  }}
>
    <SwiperSlide className={styles.swiperslide} >
    <div className={stylesFirst.container} >
  <div className={stylesFirst.card} style={{width: '350px', height:'350px' }}>
    <div className={stylesFirst.box}>
      <div className={stylesFirst.content}>
        <h3>Do you need High Quality photos?</h3>
        <h3>We will do it for you! </h3>
        <p>Send us your amazing product, and we will shoot it for you</p>
      </div>
    </div>
  </div>
    </div>  
        <img src={Slide1} alt=''/>    
    </SwiperSlide>

    <SwiperSlide className={styles.swiperslide} >
<img src={Slide2} alt=''/>
    </SwiperSlide>

    <SwiperSlide className={styles.swiperslide} >

    <div className={stylesFirst.container} >
  <div className={stylesFirst.card} style={{width: '350px', height:'350px'}}>
    <div className={stylesFirst.box}>
      <div className={stylesFirst.content}>
        <h3>Easy and fast!</h3>
        <p>up to 7 days</p>
      </div>
    </div>
  </div>
    </div>  
    </SwiperSlide>

    <SwiperSlide className={styles.swiperslide} >

        <img src={Slide3} alt=''/>

    </SwiperSlide>

    <SwiperSlide className={styles.swiperslide} >

    <div className={stylesFirst.container} >
  <div className={stylesFirst.card} style={{width: '350px', height:'350px'}}>
    <div className={stylesFirst.box}>
      <div className={stylesFirst.content}>
        <h3>We shoot - you do nothing!</h3>
      </div>
    </div>
  </div>
    </div> 

    </SwiperSlide>
    <SwiperSlide className={styles.swiperslide} >

      <img src={Slide4} alt=''/>
    </SwiperSlide>

    <SwiperSlide className={styles.swiperslide} >
    <div className={stylesFirst.container} >
  <div className={stylesFirst.card} style={{width: '350px', height:'350px'}}>
    <div className={stylesFirst.box}>
      <div className={stylesFirst.content}>
        <h3>Ready to post <br/>formats for:</h3>
        <p><img className={stylesFirst.icons} src={Instagram} style={{width: '30px', height:'30px', padding:'5px'}} alt="" />
        <img className={stylesFirst.icons} src={TikTok} style={{width: '30px', height:'30px', padding:'5px'}}alt=""/>
        <img className={stylesFirst.icons} src={Etsy} style={{width: '30px', height:'30px', padding:'5px'}}alt=""/>
        <img className={stylesFirst.icons} src={YouTube} style={{width: '30px', height:'30px', padding:'5px'}}alt=""/></p>
      </div>
    </div>
  </div>
    </div> 
</SwiperSlide>

    <SwiperSlide className={styles.swiperslide} >
        <img src={Slide5} alt=''/>
    </SwiperSlide>

    <SwiperSlide className={styles.swiperslide} >

    <div className={stylesFirst.container} >
  <div className={stylesFirst.card} style={{width: '350px', height:'350px'}}>
    <div className={stylesFirst.box}>
      <div className={stylesFirst.content}>
        <h3>Easy and fast!</h3>
        <p>up to 7 days</p>
      </div>
    </div>
  </div>
    </div>  

    </SwiperSlide>

</Swiper>
    </div>
  )};

