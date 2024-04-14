import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/alta">Alta</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/nosotros">Nosotros</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

