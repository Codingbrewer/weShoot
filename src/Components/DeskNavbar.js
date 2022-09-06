import NavLinks from "./NavLinks"
import Classes from '../styles/Navbar.module.css'
const DeskNavbar = () => {
    return (
        <nav className={Classes.DeskNavbar}>
        <NavLinks/>
        </nav>
    )
}

export default DeskNavbar