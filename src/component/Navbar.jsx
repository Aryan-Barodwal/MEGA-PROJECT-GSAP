import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import "../component/Navbar.css";

import bow from "../assets/4439371.png";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOver = () => {
    setIsHovered(true);
  };

  const handleOut = () => {
    setIsHovered(false);
  };
  useGSAP(() => {
    gsap.from("#nav h1", {
      y: -120,
      delay: 0.3,
      duration: 1,
      stagger: 0.3,
    });
  });

  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.to(".full", {
  //     right: 0,
  //     duration: 1,
  //     delay: 0.1,
  //   });
  //   tl.from(".full h4", {
  //     x: 150,
  //     duration: 0.7,
  //     stagger: 0.28,
  //     opacity: 0,
  //   });
  //   tl.pause();
  // });
  const handleMenu = () => {
    const tl = gsap.timeline();
    tl.to(".full", {
      right: 0,
      duration: 1,
      delay: 0.1,
    });
    tl.from(".full h4", {
      x: 150,
      duration: 0.7,
      stagger: 0.28,
      opacity: 0,
    });
    tl.from(".full #Close", {
      opacity: 0,
    });
    tl.play();
  };

  const handleCross = () => {
    const tl = gsap.timeline();
    tl.to(".full", {
      right: "-45%",
      duration: 1,
      delay: 0.1,
      // overflow: hidden,
    });
    // tl.to(".full h4", {

    // });
    tl.play();
  };

  return (
    <>
      <div id="nav" className="relative z-50 pt-2  bg-[#0808087c] h-[11%] ">
        <div className="lower flex justify-between md:justify-between items-center mx-11 md:mx-64 relative z-50 ">
          <span className="flex gap-3 items-center">
            <img
              className="text-white p-1 bg-white rounded-[50%]"
              width={40}
              src={bow}
              alt=""
            />
            <h1 id="heading1" className=" text-3xl font-bold text-white md:flex items-center gap-3 md: hidden">
              <span className="text-[#8B949E] text-4xl font-normal ">/</span> Miracle
            </h1>
          </span>

          <h1 className="flex gap-8 items-center cursor-pointer">
            <ul className="md:flex gap-8 text-lg font-normal hidden  ">
              <li className="list-none text-white">FAQ</li>
              <li
                onMouseOver={handleOver}
                onClick={handleOut}
                className="list-none text-white"
              >
                More
                <i className="ri-arrow-down-s-fill "></i>
              </li>
            </ul>

            <i
              id="button12"
              className="ri-menu-3-line text-3xl text-white cursor-pointer overflow-hidden"
              onClick={handleMenu}
            ></i>
          </h1>
        </div>
      </div>
      {/* this is new one */}
      {isHovered && (
        <div className="absolute right-72 text-black bg-slate-50 border border-gray-100 rounded-lg p-2 hover:border-b-2 hover:border-slate-800 cursor-pointer">
          Contact Us
        </div>
      )}

      <div className="full w-[35%] h-full absolute bg-[#ffffff98] top-0 right-[-35%] z-50 cursor-pointer ">
        <h4 className="text-black">HOME</h4>
        <h4 className="text-black">ABOUT</h4>
        <h4 className="text-black">WORK</h4>
        <h4 className="text-black">CONTACT US</h4>
        <h4 className="text-black">FAQ</h4>
        <h4 className="text-black">HELP!</h4>

        <div
          id="Close"
          className="absolute top-3 right-4 text-white bg-slate-600 p-2 rounded-xl cursor-pointer"
        >
          <i onClick={handleCross} className="ri-xrp-fill"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
