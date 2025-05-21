import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';

const Header = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='my-4'>
                <Slider></Slider>
            </main>
        </div>
    );
};

export default Header;