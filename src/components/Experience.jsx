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

const Experience = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
  ];

  return (
    <div 
    name="Experience"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p>Less than 1 Year</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-[2px] w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] rounded-full p-3 cursor-pointer hover:scale-105 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-[60%] h-auto rounded-full mb-2"
              />
              <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
