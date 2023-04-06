import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-right px-10 py-4 bg-slate-400 sticky top-0'>
            <Link className='text-xl font-semibold mr-4' to="/">Home</Link>
            <Link className='text-xl font-semibold mr-4' to="/order">Order Review</Link>
            <Link className='text-xl font-semibold mr-4' to="/contact">Contact</Link>
            <Link className='text-xl font-semibold mr-4' to="/about">About</Link>

        </nav>
    );
};

export default Header;