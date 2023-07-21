import React from 'react';
import Header from '../Components/Header/Header';
import Shop from '../Components/shop/Shop';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;