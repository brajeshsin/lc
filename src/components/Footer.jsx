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
        <AiFillInstagram size={24} className='hover:cursor-pointer' />
        <BsTwitterX size={24}/>
        <FaLinkedin size={24}/>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
        <p className='text-sm'>&copy;2024 Your Company. All rights reserved.</p>
        <p className='text-sm'>Made by Brajesh Singh</p>
        
        </div>
        </div>
   </div>
   </footer>
    </>
  )
}

export default Footer
