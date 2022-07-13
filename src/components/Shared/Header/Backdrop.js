import React from 'react';
import './Backdrop.css';

const Backdrop = ({ sidebar, closeSidebar }) => {
    return (
        // advanced
        <div onClick={closeSidebar} className={sidebar ? 'backdrop backdrop--open' : 'backdrop'}>

        </div>
    );
};

export default Backdrop;