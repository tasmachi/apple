import React from "react";
import { iguanaImg } from "../utils/index";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Video from "./Video";

gsap.registerPlugin(ScrollTrigger);

const Example = () => {
  useGSAP(() => {
    gsap.to("#iguana", {
      scale: 1.5,
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#iguana",
        start: "top 20%",
        toggleActions: "play reserve reverse restart",
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center justify-center gap-10 max-sm:gap-8">
          <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            A camera that captures your wildest imagination.
          </h1>
          <p className="text-gray text-lg sm:text-2xl md:text-2xl lg:text-2xl font-medium leading-relaxed">
            From dramatic framing flexibility to next-generation portraits, see
            what you can do with our most powerful iPhone camera system.
          </p>
        </div>
        <div className="flex justify-center overflow-hidden lg:justify-end mt-12 sm:mt-16 md:mt-20">
          <img id="iguana" className=" w-full" src={iguanaImg} />
        </div>
        <p className="text-gray text-lg sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
          A green iguana, captured by the 48MP Main camera
        </p>
      </div>
      <Video />
    </section>
  );
};

export default Example;
