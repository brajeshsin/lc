import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import nodejs from "../../public/node.png";
import mongoDB from "../../public/mongodb.gif";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/tapp.jpg";
import oracle from "../../public/oracle.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import token from "../../public/tc.jpg";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "Tarality",
      description: "The Most Trusted Cryptocurrency Platform",
      projectLink: "https://tarality.com/",
    },
    {
      id: 2,
      logo: token,
      name: "Token Creator",
      description: " Generate and deploy cryptocurrency tokens on blockchain networks.",
      projectLink: "https://web-dapp.tarality.io/",
    },
    {
      id: 3,
      logo: reactjs,
      name: "Mobile Application",
      description: "Mobile App of Tarality Crypto Exchange",
      projectLink: "https://web2mobile.tarality.io/",
    },
    // {
    //   id: 4,
    //   logo: nodejs,
    //   name: "NodeJS",
    //   description: "A JavaScript runtime built on Chrome's V8 engine.",
    //   projectLink: "https://nodejs.org/",
    // },
    // {
    //   id: 5,
    //   logo: python,
    //   name: "Python",
    //   description: "A programming language that lets you work quickly and integrate systems effectively.",
    //   projectLink: "https://python.org/",
    // },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 my-2 ">
          {cardItem.map(({ id, logo, name, description, projectLink }) => (
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
                <p className="text-gray-700">{description}</p>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-500 text-white rounded text-center"
                >
                  Click
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
