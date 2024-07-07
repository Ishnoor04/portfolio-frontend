import { motion, AnimatePresence } from "framer-motion";

import React, { useState } from "react";
import CountUp from "react-countup";

function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const handleAnimationComplete = () => {
    // Animation is complete, you can scale and remove the div
    setIsVisible(false);
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // transition= { {duration: 1 }}
          // transitionEnd= { {display: "none" }}
          // initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 1, delay: 3 }}
          onAnimationComplete={()=>setIsVisible(false)}
          className="w-[full] h-[100vh]  bg-zinc-100 pt-1"
        >
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="bg-zinc-900 w-[85vw] mx-auto rounded-3xl"
          >
            <div className="text-structure mt-32 mx-20 bg-[]">
              {["Hi I'm Ishnoor.", "Full stack", "web developer"].map(
                (items, index) => {
                  return (
                    <div key={index} className="masker flex">
                      <div className="w-fit flex  items-end">
                        <h1 className="pt-[2vw]  uppercase text-[7vw] leading-[6vw] ">
                          {items}
                        </h1>
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
              <h1 className="text-[3.5vw]">Loading...</h1>
              <div className="flex flex-row items-center gap-2 text-[4vw]">
                <div className="">
                  {" "}
                  <CountUp end={100} duration={3} />%
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loading;
