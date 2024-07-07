import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
function StickyScroll() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 1 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        // scale: 1,
        duration: 1,
        stagger: 1,
      });
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        animation: animation,
        scrub: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div>
      <div className="gallery flex">
        <div className="left w-1/2 ">
          <div className="details h-[100vh] flex flex-col justify-center items-center text-[3rem] ">
            Brand
          </div>
          <div className="details h-[100vh] flex flex-col justify-center items-center text-[3rem] ">
            Product
          </div>
          <div className="details h-[100vh] flex flex-col justify-center items-center text-[3rem] ">
            Design
          </div>
        </div>
        <div className="right relative w-1/2 h-[100vh]  flex flex-col justify-center text-[3rem] ">
          <div className="photo absolute w-full">
            <div className=" bg-black h-screen w-full">
              <div className=" justify-center items-center flex">
                <img
                  src="https://images.pexels.com/photos/18622519/pexels-photo-18622519/free-photo-of-view-of-the-bozcaada-castle-in-turkey-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className=" object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="photo absolute w-full">
            <div className=" bg-zinc-800 h-screen w-full">hello</div>
          </div>
          <div className="photo absolute w-full">
            <div className=" bg-red-200 h-screen w-full">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyScroll;
