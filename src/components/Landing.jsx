import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Hero, logo } from "../assets";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full bg-zinc-900 pt-1 sm:h-screen h-[60vh]"
    >
      <div className="text-structure mt-32 sm:px-20 px-10">
        {["Hi I'm Ishnoor.", "Full stack", "web developer"].map(
          (items, index) => {
            return (
              <div className="masker flex">
                <div className="w-fit flex  items-end overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1,
                        delay: 4,
                      }}
                      className="mr-[1vw] w-[8vw] mt-[2vw] rounded-md h-[5.7vw]  relative "
                    >
                      {/* <img src={logo} alt="" className="cover w-full h-full" /> */}
                      <img src={Hero} alt="" className="cover w-full h-full" />
                    </motion.div>
                  )}
                  <h1 className="pt-[2vw]  uppercase sm:text-[7vw] text-[9vw] sm:leading-[6vw]  leading-[8vw]">
                    {items}
                  </h1>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex sm:flex-row flex-col justify-between items-center py-5 sm:px-20 px-10">
        <div className="flex flex-row gap-10 pb-4">
          {["Innovative Developer", "Problem Solver"].map((items, index) => {
            return (
              <div className="" key={index}>
                {items}
              </div>
            );
          })}
        </div>
        {/* <a href="#contact"> */}
        <div className="flex flex-row items-center gap-2">
          <div className="border p-2 rounded-full">Contact Me</div>
          <div className="border p-2 rounded-full rotate-180  ">
            <FaLongArrowAltUp />
          </div>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
}

export default Landing;
