import React from 'react';
import { Link } from 'react-router-dom';
import rofiqul from "../../assets/image/Resume-Rofiqul.pdf"
const Navbar = () => {
    const navbar = <>
      
        <li className=' text-base text-white'><Link to="/" className=' hover:bg-transparent'>HOME</Link> </li>
        <li className=' text-base text-white'><Link to="/" className=' hover:bg-transparent'>ABOUT</Link> </li>
        <li className=' text-base text-white'><Link to="/" className=' hover:bg-transparent'>SKILLS</Link> </li>
        <li className=' text-base text-white'><Link to="/" className=' hover:bg-transparent'>PORTFOLIO</Link> </li>
        <li className=' text-base text-white'><Link to="/" className=' hover:bg-transparent'>CONTACT US</Link> </li>
      
    </>

    return (
        <div className=' bg-[#FFA500]'>
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                    {navbar}
                    </ul>
                </div>
                <a className="background-animate bg-gradient-to-r from-green-800 via-white uppercase to-black bg-clip-text flex justify-center items-center content-center w-full text-transparent select-none text-3xl italic"> 
       Rofiqul 
      </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn hover:bg-black hover:text-white border-none bg-white" href={rofiqul} download={true}>My Resume</a>
            </div>
        </div>
        </div>
    );
};

export default Navbar;