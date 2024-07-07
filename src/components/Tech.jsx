import React from "react";

// import { BallCanvas } from "./canvas";
import BallCanvas from "./canvas/Ball";
// import { SectionWrapper } from "../hoc";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constant";

const Tech = () => {
  return (
    <div className="  ">
      <div className="flex flex-row flex-wrap justify-center gap-10 px-8 pt-8 pb-12">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <h1 className="text-center my-2 sm:text-[1vw]">
              {technology.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
