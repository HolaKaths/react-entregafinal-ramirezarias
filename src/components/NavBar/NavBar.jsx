import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import mascota from './mascota.png';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to={'/'}>
            <img src={mascota} alt="Logo Pet" /> </Link>

            <Link to={'/'}> <h1> Proyecto Pet</h1> </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}> ¿Qué es Proyecto Pet? </NavLink>
                    </li>
                    <li>

                        <NavLink> Calculadora </NavLink>
                    </li>
                    <li>

                        <NavLink> Random Pet </NavLink>
                    </li>
                    <li>

                        <NavLink> Tienda Pet </NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header >
    );
};

export default NavBar;

