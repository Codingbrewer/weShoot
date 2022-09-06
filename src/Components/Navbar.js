import classes from '../styles/Navbar.module.css'
import MobileNavbar from './MobileNavbar'
import DeskNavbar from './DeskNavbar'

export default function Navbar() {
    return (



<div className={classes.navbar}>

    <DeskNavbar/>
    <MobileNavbar/>
    
</div>
    
)



}

