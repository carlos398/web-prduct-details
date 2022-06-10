import { NavLink } from "react-router-dom";
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <nav className='NavbarContainer'>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>

                

            </ul>
        </nav>
    );
}

export default Navbar;
