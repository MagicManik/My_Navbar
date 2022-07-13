import React from 'react';
import './Toolbar.css';

const Toolbar = ({ openSidebar }) => {
    return (
        // toolbar
        <div className='tool-bar'>

            <div onClick={openSidebar} className='burger'>
                <i class="fa fal fa-bars"></i>
            </div>
            <div className='title'>The Brave Coders</div>
        </div>
    );
};

export default Toolbar;