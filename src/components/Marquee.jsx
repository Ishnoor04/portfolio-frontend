import React from "react";
import { motion } from "framer-motion";
function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full sm:py-20 py-10 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300  flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 18 }}
          className="text-[12vw] leading-none uppercase pr-12"
        >
          Tech-Savvy. Collaborative. Adaptable.
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 18 }}
          className="text-[12vw] leading-none uppercase pr-12"
        >
          Tech-Savvy. Collaborative. Adaptable.
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 18 }}
          className="text-[12vw] leading-none uppercase pr-12"
        >
          Tech-Savvy. Collaborative. Adaptable.
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
