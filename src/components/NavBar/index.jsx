import React from 'react';

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='navBrand'>
                    <a className='navLink' href="#">Vaperwave</a>
                </div>
                <ul className='navList'>
                    <li>
                        <a className='navLink' href="#">Prodcutos</a>
                    </li>
                    <li>
                        <a className='navLink' href="#">Nosotros</a>
                    </li>
                    <li>
                        <a className='navLink' href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;