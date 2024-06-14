import React from 'react'
// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa6';
import { FaGit } from 'react-icons/fa6';


const Navbar = () => {
  return (
    <nav className=" mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/ChansereyGit"><FaGit/></a>  
        <a href="https://www.linkedin.com/in/chanserey/"><FaLinkedin/></a>
        <a href="https://t.me/SAMNANG_Chanserey"><FaTelegram/></a>
        <FaFacebook/>
      </div>
    </nav>
  ) 
}

export default Navbar