import React from 'react';

const Navbar = () => {
    return (
        <div className='lg:flex justify-between items-center max-w-[1200px] mx-auto mt-5 text-center'>
            <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
            <ul className='lg:flex items-center gap-5'>
                <li>Home</li>
                <li>FAQ</li>
                <li>Changelog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
                <li className='mx-auto text-white font-bold bg-gradient-to-r from-[#632EE3] py-3 px-4 to-[#9F62F2] rounded-md  w-[200px]'>+ New Ticket</li>
            </ul>
        </div>
    );
};

export default Navbar;