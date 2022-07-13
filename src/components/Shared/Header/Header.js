import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    }
    return (
        <div onmouseover="document.body.style.overflow='hidden';" onmouseout="document.body.style.overflow='auto';">
            <div>
                <Toolbar openSidebar={toggleSidebar}></Toolbar>
                <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}></Backdrop>
                <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}></Sidebar>
            </div>
        </div>

    );
};

export default Header;