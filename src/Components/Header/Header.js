import React, { useContext } from 'react';
import logo from '../../images/icons8-app-240.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (

        <nav className='header-nav'>
            <img className='nav-ico' src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>

                <Link to="/orders">Order</Link>
                <Link to="/inventory">Cart</Link>
                <Link to="/about">About</Link>
                {user?.uid ?
                    <button className='btn-signout' onClick={logOut}>SignOut</button>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                    </>
                }

            </div>

        </nav>

    );
};

export default Header;