import React, { useState } from "react";
import { Emblem, closeWhite, logo, menuWhite, reactjsLogo } from "../assets";
import { navLinks } from "../constant";
import { motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  console.log(toggle);
  return (
    <div>
      <div className=" h-200 sm:flex px-20 py-8 justify-between items-center overflow-hidden hidden">
        <div>
          {/* <img src={logo} alt="" className="h-[50px]" /> */}
          <img src={Emblem} alt="" className="h-[70px]" />
        </div>
        <div className="links text-lg flex gap-10 text-white">
          {navLinks.map((navLink, index) => {
            return (
              <a
                key={index}
                className={`text-md capitalize font-light cursor-pointer
                
                `}
                href={`#${navLink}`}
              >
                {" "}
                {navLink}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center  ">
        <motion.img
          src={toggle ? closeWhite : menuWhite}
          alt="menu-image"
          className="cursor-pointer w-[38px] h-[38px] object-contain z-[1] m-4"
          onClick={handleToggle}
        />
      </div>
      <motion.div
        className={`${
          toggle ? "flex flex-col " : "hidden"
        } md:hidden p-6 bg-zinc-600 absolute  right-0 w-full  rounded-xl sidebar z-[999]`}
      >
        <ul className="list-none md:hidden flex flex-col justify-start items-center flex-1">
          {navLinks.map((navLink, index) => {
            return (
              <a href={`#${navLink}`}>
                <li
                  key={index}
                  className="font-notoSerif cursor-pointer text-white text-[2vh] mb-4 capitalize"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  {/* <Link to="/">Home</Link> */} {navLink}
                </li>
              </a>
            );
          })}
        </ul>
        {/* <Link to="/contact#spe"><Button /></Link> */}
      </motion.div>
    </div>
  );
}

export default Navbar;
