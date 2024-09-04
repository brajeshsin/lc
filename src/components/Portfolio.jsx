import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import nodejs from "../../public/node.png";
import mongoDB from "../../public/mongodb.jpg";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import oracle from "../../public/oracle.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import express from "../../public/express.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
  ];

  return (
    <div
    name="Portfolio"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3  my-2 ">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="mt-4 md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 "
            >
              <img
                src={logo}
                alt={name}
                className="h-[120px] w-[120px] p-1 rounded-full border-[2px]"
              />
              <div>
                <div className="font-bold text-xl">{name}</div>
                <p className="text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="mt-2">
                <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
                  Video
                </button>
                {/* <button className="px-4 py-2 bg-gray-500 text-white rounded ">
                 Source
                </button> */}
                <a href="https://tarality.com/"> Click</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
