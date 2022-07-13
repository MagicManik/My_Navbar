import React from 'react';
import './Sidebar.css';

const Sidebar = ({ sidebar, toggleSidebar }) => {
    return (
        // advance
        <div className={sidebar ? 'sidebar sidebar--open' : 'sidebar'}>
            <ul> <a href="https://www.google.com/"><li onClick={toggleSidebar}><i class="fas fa-home"></i>Home</li></a></ul>

            <li onClick={toggleSidebar}><i class="fab fa-product-hunt"></i>Products</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-shopping-cart"></i>Carrer</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-address-book"></i>Contact</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
            <li onClick={toggleSidebar}><i class="fa fal fa-exclamation-circle"></i>About</li>
        </div>
    );
};

export default Sidebar;