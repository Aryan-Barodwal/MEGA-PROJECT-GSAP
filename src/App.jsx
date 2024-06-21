import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

import Navbar from "./component/Navbar";
import Custom from "./component/Custom";
import Middle from "./component/Middle";

function App() {
  const handleMouseOver = (dets) => {
    gsap.to("#cursor", {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.8,
      ease:"back.out"
    });
  };

  return (
    <>
      <div className="z-[100] md:block hidden" id="cursor"></div>
      <div className="z-[100]" id="main" onMouseOver={handleMouseOver}>
        <Navbar />
        <Custom />
        <Middle />
      </div>
    </>
  );
}

export default App;
