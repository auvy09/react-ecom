import React from 'react';
import logo from '../../images/icons8-app-240.svg';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (

        <nav className='header-nav'>
            <img className='nav-ico' src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Cart</Link>
                <Link to="/about">About</Link>
            </div>

        </nav>

    );
};

export default Header;