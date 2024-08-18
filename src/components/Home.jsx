import React from "react";
import { FaFacebook } from "react-icons/fa";
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

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
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
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              vero officia quod harum animi natus ipsa maxime tempore assumenda
              praesentium, necessitatibus, neque tempora repellendus veritati
              quo nisi facere tenetur in.
            </p>
            <br />
            {/* social media */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
              <div>
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5 mt-3 cursor-pointer">
                  <li>
                    <a href="https://www.facebook.com/">
                      <FaFacebook className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://in.linkedin.com/">
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <FaInstagramSquare className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://web.telegram.org/k/">
                      <FaTelegram className="text-2xl cursor-pointer hover:scale-125 duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5 mt-3 cursor-pointer">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-150 duration-200 cursor-pointer" />
                  <SiExpress className="text-xl md:text-3x hover:scale-150 duration-200 cursor-pointer" />
                  <FaReact className="text-xl md:text-3xl hover:scale-150 duration-200 cursor-pointer" />
                  <FaNode className="text-xl md:text-3xl hover:scale-150 duration-200 cursor-pointer" />
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
