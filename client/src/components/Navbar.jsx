import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { images } from "../constants";

const navMenu = [
  { name: "home", ref: null }, // Assuming "home" scrolls to the top
  { name: "about", ref: "aboutRef" },
  { name: "works", ref: "workRef" },
  { name: "services", ref: "skillsRef" },
  { name: "contact", ref: "footerRef" },
];

const Navbar = ({
  scrollToSection,
  aboutRef,
  workRef,
  skillsRef,
  testimonialRef,
  footerRef,
}) => {


  const [toggle, setToggle] = useState(false);

  const sectionRefs = {
    aboutRef,
    workRef,
    skillsRef,
    testimonialRef,
    footerRef,
  };

  const handleScroll = (section) => {
    if (sectionRefs[section]) {
      scrollToSection(sectionRefs[section]);
    }
    setToggle(false); // Close the mobile menu after scroll
  };


  return (
    <nav className="w-full flex justify-between items-center  py-[1rem] px-[2rem] navbar ">
      <div className="flex justify-start items-center text-2xl">
       Sud <span className="font-bold text-secondary text-2xl">ama</span>
      </div>

      <ul className="flex-1 hidden md:flex justify-center items-center list-none">
        {navMenu.map((item) => (
          <li
            key={`link-${item}`}
            className="my-0 mx-[1rem] cursor-pointer flex-col"
          >
            <button
              className="font-gray flex-col font-medium uppercase transition-all delay-150 ease-in-out hover:text-secondary"
              // href={`#${item}`}
              onClick={() => handleScroll(item.ref)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="w-[35px] h-[35px] rounded-full relative flex justify-center items-center bg-secondary  md:hidden">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="w-[70%] h-[70%] text-white"
        />

        {toggle && (
          <motion.div
            whileInView={{
              x: [300, 0],
            }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
            }}
            className="fixed top-0 bottom-0 right-0 z-5 p-[1rem] w-[100%] h-[100vh] mobile_navbar flex justify-end items-end flex-col"
          >
            <HiX
              onClick={() => setToggle(false)}
              className="w-[35px] h-[35px] text-secondary my-[0.5rem] mx-[1rem]"
            />

            <ul className="m-0 p-0 h-full w-full flex justify-start items-start flex-col">
              {navMenu.map((item) => (
                <li key={item} className="m-[1rem]">
                  <button
                    href={`#${item}`}
                    // onClick={() => setToggle(false)}
                    onClick={() => handleScroll(item.ref)}
                    className="text-gray font-[1rem] uppercase font-medium transition-all delay-150 ease-in-out hover:text-secondary"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
