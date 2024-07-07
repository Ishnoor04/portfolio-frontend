import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-row items-center gap-5 p-10">
      <div className="w-1/2">
        <div className="w-full bg-[#dc4242] h-96 "></div>
      </div>
      <div className="w-1/2 flex flex-row gap-5">
        <div className="w-1/2 bg-[#e4a0a0] h-96 "></div>
        <div className="w-1/2 bg-[#221313] h-96 "></div>
      </div>
    </div>
  );
}

export default Cards;
