import React, { useState } from "react";
import { logo, reactjsLogo } from "../assets";

function Test() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = ()=>{
        setToggle(!toggle);
        console.log(toggle);
    }
  return (
    <div>
      <div className="sm:hidden flex flex-1 justify-end items-center z-[3] ">
        <img
          src={toggle ? reactjsLogo : logo}
          alt="menu-image"
          className="cursor-pointer w-[28px] h-[28px] object-contain"
          onClick={handleToggle}
        />
      </div>
    </div>
  );
}

export default Test;
