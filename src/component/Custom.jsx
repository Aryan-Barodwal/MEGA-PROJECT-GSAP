import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


function Custom() {
  const [count, setCount] = useState(0);

  var initialPath = "M 10 10 Q 600 10 1180 10";
  var finalPath = "M 10 10 Q 600 10 1180 10";

  const handlemove = (move) => {
    // console.log(move);
    initialPath = `M 10 10 Q ${move.clientX} ${move.clientY} 1180 10`;

    gsap.to("svg path", {
      attr: { d: initialPath },
      duration: 0.2,
      ease: "power3.Out",
    });
  };

  const handleleave = () => {
    gsap.to("svg path", {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1,0.2)",
    });
  };

  return (
    <>
      <div
        id="string"
        className="w-full h-[] mx-auto flex justify-center -z-20"
        onMouseMove={handlemove}
        onMouseLeave={handleleave}
      >
        <svg className="mt-[-1%] bg-transparent z-20" width="1200" height="">
          <path 
            // d="M 10 Q 600 10 1180 10"
            // stroke="white"
            fill="transparent"
          />
        </svg>
        {/* <svg className="mt-[5%] bg-black z-20" width="1200" height="200">
          <path 
            d="M 10 100 Q 600 100 1180 100"
            stroke="white"
            fill="transparent"
          />
        </svg> */}

        {/* M:move to point x:10 y:80   Elements: a cubic one, called with "C", and a quadratic one, called with "Q" */}
        {/* "Q":- x:95 y:10 , x:180 y:80 */}

        {/* stroke="black" represents line color */}
      </div>
    </>
  );
}

export default Custom;
