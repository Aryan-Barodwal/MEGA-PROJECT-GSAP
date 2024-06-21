import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useRef, useEffect } from "react";
import "../component/Middle.css";

import logo from "../assets/hero-bg.svg";

import image from "../assets/hero-planet-1.webp";
import image1 from "../assets/hero-planet-2.webp";
import image2 from "../assets/hero-planet-3.webp";
import image3 from "../assets/hero-planet-4.webp";
import image4 from "../assets/hero-planet-5.webp";
import image5 from "../assets/hero-planet-6.webp";
import image8 from "../assets/hero-planet-8.webp";

gsap.registerPlugin(useGSAP);

const Middle = () => {
  const textHead = useRef(null);

  useEffect(() => {
    if (textHead.current) {
      const splittedText = textHead.current.innerText.split("");
      const halfvalue = splittedText.length / 2;
      // console.log(halfvalue);

      let clutter = "";
      splittedText.filter((elem, index) => {
        if (index < halfvalue) {
          clutter += `<span class="a">${elem}</span>`;
        } else {
          clutter += `<span class="b">${elem}</span>`;
        }
      });
      textHead.current.innerHTML = clutter;
    }
  }, []);

  useEffect(() => {
    const spans = document.querySelectorAll("#head .a");
    if (spans.length > 0) {
      gsap.from(spans, {
        y: 70,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.15,
      });
    } else {
      console.error("GSAP target #head span not found.");
    }
  }, []);

  useEffect(() => {
    const spans = document.querySelectorAll("#head .b");
    if (spans.length > 0) {
      gsap.from(spans, {
        y: 70,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: -0.15,
      });
    } else {
      console.error("GSAP target #head span not found.");
    }
  }, []);

  useEffect(() => {
    gsap.from("#lowerTEXT", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      stagger: -0.15,
    });
    gsap.from("#bgimages img", {
      x: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.15,
    });
  }, []);

  useGSAP(() => {
    gsap.to("#one", {
      y: -10,
      repeat: -1,
      duration: 1.5,
      delay: 0.5,
      yoyo: true,
    });

    gsap.from("#forth", {
      y: -15,
      rotate: 45,
      repeat: -1,
      duration: 3.5,
      delay: 0.5,
      yoyo: true,
    });
    gsap.to("#five", {
      y: -18,
      // x: 1,
      repeat: -1,
      duration: 1.5,
      delay: 0.5,
      yoyo: true,
    });
    gsap.from("#six", {
      y: 15,
      x: 10,
      rotate: 95,
      repeat: -1,
      duration: 4,
      delay: 0.5,
      yoyo: true,
    });
    gsap.to("#seven", {
      y: 15,
      x: 5,
      repeat: -1,
      duration: 1.5,
      delay: 0.5,
      yoyo: true,
    });
    gsap.to("#eight", {
      x: 28,
      rotate: 10,
      // x:5,
      repeat: -1,
      duration: 3,
      delay: 0.5,
      yoyo: true,
    });
  });

  const handleMove = (dets) => {
    console.log(dets);
    gsap.to("#cursor", {
      x: dets.clientX,
      y: dets.clientY,
    });
  };

  return (
    <>
      <img className="absolute top-[-40%]" src={logo} alt=""/>
        <div className="Middle w-full flex flex-col justify-start text-center mx-auto items-center mt-[4%] md:mt-[-4%]">
          <h1
            id="head"
            ref={textHead}
            className="heading text-[3rem] md:text-[8rem] font-semibold text-[#FFFEFE] bg-transparent overflow-hidden uppercase"
          >
            Miracle
          </h1>

          <p
            id="lowerTEXT"
            className="text-[#8B949E] bg-transparent overflow-hidden md:flex gap-4 list-none mt-[19%] md:mt-0 md:list-disc "
          >
            <span>IT Infrastructure </span>
            <span>
              <li>Servers & AMCs</li>{" "}
            </span>
            <span>
              <li>Storage & Networks</li>{" "}
            </span>
          </p>

          <div className="lowerButtons w-full flex flex-col md:flex-row justify-center items-center text-white gap-5 mt-7 md:mt-3 ">
            <button className=" border border-[#30363D] p-4 bg-white border-none text-black rounded-lg hover:bg-[#F0F6FC] px-20">
              EXPLORE <i className="ri-arrow-right-down-line "></i>{" "}
            </button>

            <button className=" border border-[#30363D] p-4 text-white rounded-lg hover:border-white hover:bg-[#1D1E21] px-20">
              SIGN UP <i className="ri-arrow-right-down-line"></i>
            </button>
          </div>
        </div>

        <div id="bgimages" className="z-10">
          <img
            id="one"
            className="absolute top-[190px] left-8 md:top-[-88px] md:left-4 z-10 w-[60px] md:w-[190px]"
            src={image}
            alt=""
            width={190}
          />
          <img
            id="eight"
            className="absolute top-[44%] right-12 md:top-[78%] md:right-[-40px] w-[80px] md:w-[200px]"
            src={image8}
            alt=""
            width={200}
          />
          <img
            id="forth"
            className="absolute top-40 right-6 md:top-20 md:right-9 w-[80px] md:w-[140px]"
            src={image3}
            width={140}
            alt=""
          />
          <img
            id="five"
            className="absolute top-[18rem] left-[-10px] md:top-[10rem] md:left-[-80px] w-[80px] md:w-[200px]"
            src={image2}
            width={200}
            alt=""
          />
          <img
            id="six"
            className="absolute top-[21rem] left-6 md:top-[22rem] md:left-1 w-[80px] md:w-[170px]"
            width={170}
            src={image4}
            alt=""
          />
          <img
            id="seven"
            className="absolute top-56 right-[-18px] w-[85px] md:w-[170px]"
            src={image5}
            width={170}
            alt=""
          />
        </div>
      
    </>
  );
};

export default Middle;
