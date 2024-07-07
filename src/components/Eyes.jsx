import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden p-20 sm:block hidden ">
      <div
        data-scroll
        data-scroll-speed="-.6"
        className="relative  h-full w-full bg-[url('/src/assets/EyesBack.png')] rounded-3xl bg-cover"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full  bg-zinc-800">
              <h1 className="relative text-white z-[11] top-1/2 left-1/2 text-center -translate-x-[50%] -translate-y-[50%]">
                MOVE
              </h1>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className={` absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 `}
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 rounded-full relative bg-zinc-800">
              <h1 className="relative text-white z-[11] top-1/2 left-1/2 text-center -translate-x-[50%] -translate-y-[50%]">
                CURSOR
              </h1>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 "
              >
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
