import React from 'react';
import logo from '../../images/icons8-app-240.svg';
import './Header.css'
const Header = () => {
    return (

        <nav className='header-nav'>
            <img className='nav-ico' src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/shop">Order</a>
                <a href="/shop">Cart</a>
                <a href="/shop">About</a>
            </div>

        </nav>

    );
};

export default Header;