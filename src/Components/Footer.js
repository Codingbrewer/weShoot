import footer from '../styles/Footer.module.css'
import Instagram from '../images/insta.svg'
import TikTok from '../images/tiktok.svg'
import Email from '../images/email.svg'
import YouTube from '../images/youtube.svg'



export default function
Footer() {

 
  return (
    <div className={footer.footer} >
        
        
         <h2 className={footer.copyright}  > © 2022 by Jordan Jacoby</h2>
         <div className={footer.social} >


         <a href="mailto:info@weshoot.com" target="_blank" rel="noreferrer">
        <img className={footer.icons} src={Email} alt="" /></a>


         <a href="https://www.instagram.com/weshoot" target="_blank" rel="noreferrer">
         <img className={footer.icons} src={Instagram} alt="" /></a>

        
         <a href="https://www.tiktok.com/weshoot" target="_blank" rel="noreferrer">
         <img className={footer.tiktok} src={TikTok} alt="" />
         </a>
        
        <a href="https://www.youtube.com/weshoot" target="_blank" rel="noreferrer">
        <img className={footer.icons} src={YouTube} alt="" />
        </a>
        
        
        </div>  
          
        
       
    </div>
  )
}
