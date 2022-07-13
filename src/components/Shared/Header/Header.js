import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import './Header.css';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    }
    return (
        <header>
            <Toolbar openSidebar={toggleSidebar}></Toolbar>
            <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}></Backdrop>
            <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}></Sidebar>
        </header>
    );
};

export default Header;