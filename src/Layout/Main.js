import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Commonitem/Footer/Footer';
import Headers from '../Commonitem/Headers/Headers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;