import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <hr/>
   <footer className= 'py-12'>
   <div className = "max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
    <div className='flex flex-col items-center justify-center'>
        <div className='flex space-x-5'>
        <ul className='flex space-x-5'>
        <li>   
        <a href="https://www.instagram.com/__brajesh_singh__?igsh=MXByMXBhZTE3c2p2cQ==">
        <AiFillInstagram size={35} className='hover:cursor-pointer hover:scale-110 duration-300' />
        </a>
        </li>
        <li>
        <BsTwitterX size={24}  className='hover:cursor-pointer hover:scale-110 duration-300' />
        </li>
        <li>
        <a href="https://www.linkedin.com/in/brajesh-kumar-singh-328413229/">
        <FaLinkedin size={24}  className='hover:cursor-pointer hover:scale-110 duration-300' />
        </a>
        </li>
        </ul>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
        <p className='text-sm'>&copy;2024 Designed & Developed by <span className='text-red-500 font-semibold text-xl'>BrajesH SingH</span>
        </p>
        {/* <p className='text-sm'>Made by Brajesh Singh</p> */}
        
        </div>
        </div>
   </div>
   </footer>
    </>
  )
}

export default Footer
