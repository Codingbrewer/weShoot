import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
import Logo from '../images/weShootLogo.svg'
import { motion } from  'framer-motion'
const NavLinks = (props) => {

const animateForm = {opacity: 0, y: -40}   
const animateTo = {opacity: 1, y: 0} 
    return (
<ul>
<motion.li
className={styles.logo}> <Link to='/'> 
<img src={Logo} style={{width:'175px'}} alt=""/>
</Link> 
</motion.li>

<motion.li
initial={animateForm}
animate={animateTo}
transition={{delay: 0.10}}
onClick={() => props.isMobile && props.closeMobileNav()}>
<Link to="/">Home</Link> </motion.li>

<motion.li
initial={animateForm}
animate={animateTo}
transition={{delay: 0.20}}
onClick={() => props.isMobile && props.closeMobileNav()}>
<Link to="trynow">Try now</Link> </motion.li>

<motion.li
initial={animateForm}
animate={animateTo}
transition={{delay: 0.30}}
onClick={() => props.isMobile && props.closeMobileNav()} >
<Link to="how-it-works">How it works</Link> </motion.li>

<motion.li
initial={animateForm}
animate={animateTo}
transition={{delay: 0.40}}
onClick={() => props.isMobile && props.closeMobileNav()} >
<Link to="about">About</Link> </motion.li>

</ul>
)

}


export default NavLinks;