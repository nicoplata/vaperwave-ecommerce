import React from 'react';
import { NavLink } from 'react-router-dom';

import CartWidget from '../CartWidget';

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='navBrand'>
                    <NavLink className='navLink' to='/'>Vaperwave</NavLink>
                </div>
                <ul className='navList'>
                    <li>
                        <NavLink className='navLink' to='/products/vapes'>Vapes</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to='/products/smoke'>Liquidos</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to='/products/res'>Resistencias</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to='/us'>Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to='/contact'>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to='/cart'><CartWidget/></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;