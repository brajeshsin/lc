import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif";
import pc from "../../public/d.jpeg"
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";

function Home() {
  return (
    <>
      <div 
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-10 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold"> Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Software Engineer", "Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={60}
                loop={true}
              />
            </div>
            <br />
            <br />
            <p className="text-sm md:text-md text-justify">
            I'm a frontend software engineer specializing in React.js, passionate about crafting visually appealing, responsive, and user-friendly interfaces. My focus is on building innovative features, optimizing performance, and enhancing user experiences. Follow along as I share insights, projects, and experiences in the dynamic world of frontend development!</p>
            <br />
            {/* social media */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
              <div>
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5 mt-3 cursor-pointer">
                <li>
                    <a href="https://wa.link/v55d0h">
                      <IoLogoWhatsapp className="text-2xl cursor-pointer hover:scale-125 duration-300  text-red-700" />
                    </a>
                  </li>
                 
                  <li>
                    <a href="https://www.linkedin.com/in/brajesh-kumar-singh-328413229/">
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 duration-300  text-red-700" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/__brajesh_singh__?igsh=MXByMXBhZTE3c2p2cQ==">
                      <FaInstagramSquare className="text-2xl cursor-pointer hover:scale-125 duration-300  text-red-700" />
                    </a>
                  </li>
                  <li>
                    <a  href="mailto:brajeshsingh2911@gmail.com">
                      <MdEmail className="text-2xl cursor-pointer hover:scale-125 duration-300  text-red-700" />
                    </a>
                  </li>
                  <li>
                    <a href="https://web.telegram.org/k/">
                      <FaTelegram className="text-2xl cursor-pointer hover:scale-125 duration-300  text-red-700" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5 mt-3 cursor-pointer">
                  <FaHtml5 className="text-xl md:text-3xl hover:scale-150 duration-200 cursor-pointer text-red-700" />
                  <FaCss3 className="text-xl md:text-3x hover:scale-150 duration-200 cursor-pointe  text-red-700" />
                  <FaReact className="text-xl md:text-3xl hover:scale-150 duration-200 cursor-pointer  text-red-700" />
                  <TbBrandJavascript className="text-xl md:text-3xl hover:scale-150 duration-200 cursor-pointer  text-red-700  text-red-700" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:ml-48 md:mt-20 order-1">
            <img
              src={pc}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
