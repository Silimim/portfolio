import {NavLink} from "react-router-dom";
import {home} from "../assets/icons";

const Navbar = () => {

    return (
        <header className="header">
            <NavLink to="/"
                     className="w-10 h-10 rounded-lg me-2 glassmorphism items-center justify-center flex font-bold shadow-md">
                <img src={home} alt={"home"} className="w-[60%] h-[60%] object-contain"/>
            </NavLink>
            <nav className="flex text-lg gap-5 lg:gap-7 font-medium">
                <NavLink to="/about" className={({isActive}) => isActive ? 'text-red-500' : window.location.pathname === '/' ? 'text-white' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'text-red-500' : window.location.pathname === '/' ? 'text-white' : 'text-black'}>
                    Projects
                </NavLink>
                <NavLink to="/contacts" className={({isActive}) => isActive ? 'text-red-500' : window.location.pathname === '/' ? 'text-white' : 'text-black'}>
                    Contacts
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar
