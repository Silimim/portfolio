import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <header className="header">
            <NavLink to="/"
                     className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="red-gradient_text">SB</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
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