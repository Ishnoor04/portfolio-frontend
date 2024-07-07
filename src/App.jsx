import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import { LampDemo } from "./components/LampEffect";
import { TypewriterEffectSmooth } from "./components/TypeWriter";
import { Type } from "./components/Type";
import Features from "./components/Features";
import Cards from "./components/Cards";

import LocomotiveScroll from "locomotive-scroll";
import Loading from "./components/Loading";
import { motion } from "framer-motion";
import MyComponent from "./components/MyComponent";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Test from "./components/Test";
import Contact from "./components/Contact";
import StickyScroll from "./components/StickyScroll";
import { content } from "./constant";


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //     lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
  //     multiplier: 1.4, // Effect Multiplier
  //     reloadOnContextChange: true,
  //     touchMultiplier: 2,
  //     smoothMobile: 0,
  //     smartphone: {
  //         smooth: !0,
  //         breakpoint: 767
  //     },
  //     tablet: {
  //         smooth: !1,
  //         breakpoint: 1024
  //     },
  // });
  const [hiddenTag, setHiddenTag] = useState(false);
  useEffect(() => {
    const loader = document.getElementById("loader");
    loader.style.zIndex = 2;
  }, []);
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.zIndex = -1;
  }, 4000);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <div className="relative">
        <div id="loader" className={`absolute  h-[100vh]  w-full `}>
          <Loading />
        </div>
      </div>
      <Navbar />
      <Landing />
      <Marquee />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>

      <Eyes />

      <div id="projects">
        <Features />
      </div>
      <div className="border-b-2 w-[85%] mx-auto " id="toolkit">
        <h1 className="sm:text-[5vw] text-[7.5vw] tracking-tight text-center">
          Toolkit
        </h1>
      </div>
      <Tech />
      <div id="contact">
        <Contact />
      </div>

      <Footer />
      {/* <StickyScroll content = {content}/> */}
    </div>
  );
};

export default App;
