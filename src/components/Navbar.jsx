import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/media/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
           <div></div>
           <div className='flex gap-12'>
            <NavLink to={"/"}> Home</NavLink>
            <NavLink to={"/about"}> About</NavLink>
            <NavLink to={"/carrier"}> Carrier</NavLink>
           </div>
           <div className='flex gap-4'>
            <img src={user} alt="" />
            <button className='btn btn-primary px-10'>Log in</button>
           </div>
        </div>
    );
};

export default Navbar;