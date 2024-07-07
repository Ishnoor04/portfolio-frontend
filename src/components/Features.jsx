import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import {
  ArtisticWeb,
  Bluemont,
  Dreeft,
  Luminous,
  Myrtle,
  Willow,
} from "../assets";
// import { ArtisticWeb, Bluemont, Dreeft, Luminous, Myrtle, Willow } from "../assets/Work/Luminous.png";
function Features() {
  const [isHover, setIsHover] = useState(false);
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-10 ">
      <div className="w-full px-10 border-b-[1px] border-zinc-700">
        <h1 className="sm:text-[5vw] text-[7.5vw] tracking-tight">Projects</h1>
      </div>
      <div className="sm:p-20 gap-10">
        <div className="cards w-full flex flex-wrap flex-row mt-10 ">
          {/* <motion.div className="card relative w-1/2 h-[60vh] p-8">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="w-full h-full flex flex-row items-center justify-center rounded-3xl overflow-hidden bg-[rgba(0,0,0,0.5)] bg-[url('/src/assets/Work/ArtisticWeb.png')] hover:bg-blend-darken bg-cover"
            >
              {/* left-full top-1/2 -translate-x-[50%] -translate-y-[50%] 
              <h1
                // className="absolute flex z-[9] text-[5vw] overflow-hidden text-[#777] left-full top-1/2 -translate-x-[50%] -translate-y-[50%] font-bold "
                className="z-[9] overflow-hidden text-[4vw] font-bold"
              >
                {"ARTISTIC WEB".split("").map((item, index) => (
                  <motion.span
                    className=" flex "
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              {/* <img
                src={ArtisticWeb}
                alt=""
                className="cover w-full h-full hover:scale-95 transition duration-2150 ease-in-out rounded-3xl"
              /> 
            </motion.div>
          </motion.div> */}

          <motion.div className="card relative sm:w-1/2 w-4/5 sm:h-[60vh] h-[70vh] p-8 mx-auto ">
            <a href="https://artisticweb.com.au/" target="_blank">
              <motion.div
                onHoverStart={() => handleHover(0)}
                onHoverEnd={() => handleHoverEnd(0)}
                className="w-full h-full rounded-3xl flex items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.5)] sm:bg-[url('/src/assets/Work/ArtisticWeb.png')] bg-[url('/src/assets/Work/ArtisticWebPhone.PNG')] hover:bg-blend-darken bg-cover bg-center"
              >
                <h1
                  // className="absolute flex z-[9] text-[5vw] overflow-hidden font-bold text-[#fffff] left-0 top-1/2 -translate-x-[50%] -translate-y-[50%]"
                  className="z-[9] overflow-hidden text-[4vw] font-bold"
                >
                  {"ARTISTICWEB".split("").map((item, index) => (
                    <motion.span
                      className="inline-block"
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                    >
                      {item}
                      {""}
                    </motion.span>
                  ))}
                </h1>
                {/* <img
                src={Willow}
                alt=""
                className="cover w-full h-full hover:scale-95 transition duration-2150 ease-in-out rounded-3xl  "
              /> */}
              </motion.div>
            </a>
          </motion.div>
          <motion.div className="card relative sm:w-1/2 w-4/5 sm:h-[60vh] h-[70vh] p-8 mx-auto">
            <a href="https://willowhomes.com.au/" target="_blank">
              <motion.div
                onHoverStart={() => handleHover(1)}
                onHoverEnd={() => handleHoverEnd(1)}
                className="w-full h-full rounded-3xl flex items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.5)] sm:bg-[url('/src/assets/Work/Willow.png')] bg-[url('/src/assets/Work/WillowPhone.PNG')]  hover:bg-blend-darken bg-cover"
              >
                <h1
                  // className="absolute flex z-[9] text-[5vw] overflow-hidden font-bold text-[#fffff] left-0 top-1/2 -translate-x-[50%] -translate-y-[50%]"
                  className="z-[9] overflow-hidden text-[4vw] font-bold"
                >
                  {"WILLOWHOMES".split("").map((item, index) => (
                    <motion.span
                      className="inline-block"
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                    >
                      {item}
                      {""}
                    </motion.span>
                  ))}
                </h1>
                {/* <img
                src={Willow}
                alt=""
                className="cover w-full h-full hover:scale-95 transition duration-2150 ease-in-out rounded-3xl  "
              /> */}
              </motion.div>
            </a>
          </motion.div>
          <motion.div className="card relative sm:w-1/2 w-4/5 sm:h-[60vh] h-[70vh] p-8 mx-auto">
            <a href="https://dreefthealthcare.com/" target="_blank">
              <motion.div
                onHoverStart={() => handleHover(2)}
                onHoverEnd={() => handleHoverEnd(2)}
                className="w-full h-full rounded-3xl flex items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.3)] sm:bg-[url('/src/assets/Work/Dreeft.png')] bg-[url('/src/assets/Work/DreeftPhone.PNG')] hover:bg-blend-darken bg-cover"
              >
                <h1
                  // className="absolute flex z-[9] text-[5vw] overflow-hidden text-[#d38dce] left-full top-1/2 -translate-x-[50%] -translate-y-[50%]"
                  className="z-[9] overflow-hidden text-[4vw] font-bold"
                >
                  {"DREEFT".split("").map((item, index) => (
                    <motion.span
                      className="inline-block"
                      initial={{ y: "100%" }}
                      animate={cards[2]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                {/* <img
                src={Dreeft}
                alt=""
                className="cover w-full h-full hover:scale-95 transition duration-2150 ease-in-out rounded-3xl"
              /> */}
              </motion.div>
            </a>
          </motion.div>
          <motion.div className="card relative sm:w-1/2 w-4/5 sm:h-[60vh] h-[70vh] p-8 mx-auto ">
            <a href="https://bluemontprojects.com/" target="_blank">
              <motion.div
                onHoverStart={() => handleHover(3)}
                onHoverEnd={() => handleHoverEnd(3)}
                className="w-full h-full rounded-3xl flex justify-center items-center overflow-hidden bg-[rgba(0,0,0,0.3)] sm:bg-[url('/src/assets/Work/Bluemont.png')] bg-[url('/src/assets/Work/BluemontPhone.PNG')] hover:bg-blend-darken bg-cover"
              >
                <h1
                  // className="absolute flex hover:z-[9] text-[5vw] overflow-hidden text-[#d38dce] left-0 top-1/2 -translate-x-[50%] -translate-y-[50%]"
                  className="z-[9] overflow-hidden text-[4vw] font-bold"
                >
                  {"BLUEMONT".split("").map((item, index) => (
                    <motion.span
                      className="inline-block"
                      initial={{ y: "100%" }}
                      animate={cards[3]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                {/* <img
                src={Bluemont}
                alt=""
                className="cover w-full h-full hover:scale-95 transition duration-2150 ease-in-out rounded-3xl"
              /> */}
              </motion.div>
            </a>
          </motion.div>
          <motion.div className="card relative sm:w-1/2 w-4/5 sm:h-[60vh] h-[70vh] p-8 mx-auto ">
            <a href="https://myrtleprojects.com/" target="_blank">
              <motion.div
                onHoverStart={() => handleHover(4)}
                onHoverEnd={() => handleHoverEnd(4)}
                className="w-full h-full rounded-3xl overflow-hidden flex justify-center items-center bg-[rgba(0,0,0,0.3)] sm:bg-[url('/src/assets/Work/Myrtle.png')] bg-[url('/src/assets/Work/MyrtlePhone.PNG')] hover:bg-blend-darken bg-cover"
              >
                <h1
                  // className="absolute flex z-[9] text-[5vw] overflow-hidden text-[#d38dce] right-0 top-1/2 translate-x-[50%] -translate-y-[50%]"
                  className="z-[9] overflow-hidden text-[4vw] font-bold"
                >
                  {"MYRTLE".split("").map((item, index) => (
                    <motion.span
                      className="inline-block"
                      initial={{ y: "100%" }}
                      animate={cards[4]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                {/* <img
                src={Myrtle}
                alt=""
                className="cover w-full h-full hover:scale-95 transition duration-2150 ease-in-out rounded-3xl"
              /> */}
              </motion.div>
            </a>
          </motion.div>
          <motion.div className="card relative sm:w-1/2 w-4/5 sm:h-[60vh] h-[70vh] p-8 mx-auto ">
            <a href="https://luminouscarendis.com/" target="_blank">
              <motion.div
                onHoverStart={() => handleHover(5)}
                onHoverEnd={() => handleHoverEnd(5)}
                className="w-full h-full rounded-3xl overflow-hidden flex items-center justify-center bg-[rgba(0,0,0,0.3)] sm:bg-[url('/src/assets/Work/Luminous.png')] bg-[url('/src/assets/Work/LuminousPhone.PNG')] hover:bg-blend-darken bg-cover "
              >
                <h1
                  // className="absolute flex z-[9] text-[5vw] overflow-hidden text-[#d38dce] left-0 top-1/2 -translate-x-[50%] -translate-y-[50%]"
                  className="z-[9] overflow-hidden text-[4vw] font-bold"
                >
                  {"LUMINOUS".split("").map((item, index) => (
                    <motion.span
                      className="inline-block"
                      initial={{ y: "100%" }}
                      animate={cards[5]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                {/* <img
                src={Luminous}
                alt=""
                className="cover w-full h-full hover:scale-95 transition duration-2150 ease-in-out rounded-3xl"
              /> */}
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
