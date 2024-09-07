import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import pc from "../../public/d.jpeg"
import { Link } from "react-scroll";


function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contacts",
    },
  ];
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20  h-16 shadow-md 
      fixed top-0 left-0 right-0 bg-white" style={{zIndex:9}}
      >
        <div className="flex justify-between items-center h-16 ">
          <div className="flex space-x-2">
            <img src={pc} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer" >
              Brajes<span className="text-green-500 text-2xl">H</span>
              {/* <p className="text-sm"> Software Engineer</p> */}
              <p className="text-sm animate-color-change">
  Software Engineer
</p>

            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8" >
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                <Link to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                >
                {text}
                </Link>
                  
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoMdClose size={25} /> : <GrMenu size={25} />}
            </div>
          </div>
        </div>
        {/* mobile */}
        {menu && (
          <div className="bg-white">
            <ul
              className="md:hidden 
            flex flex-col
             h-screen
              items-center
               justify-center 
               space-y-3
               text-xl"
            >
              {navItems.map(({ id, text }) => (
              <li
              className="hover:scale-105 duration-200 cursor-pointer font-semibold hover:text-red-500"
              key={id}
            >
                  <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                >
                {text}
                </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;