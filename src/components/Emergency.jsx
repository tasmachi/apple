import React, { useEffect, useState } from "react";
import { sosLargeImg, sosSmallImg } from "../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Emergency = () => {
  const [image, setImage] = useState(sosLargeImg);

  // Function to update image based on window width
  const updateImage = () => {
    if (window.innerWidth > 660) {
      setImage(sosLargeImg);
    } else {
      setImage(sosSmallImg);
    }
  };

  // GSAP animation for the text
  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      "#sos-text",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#sos-text",
          start: "top 80%",
          toggleActions: "play reverse resume reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    updateImage();

    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <section className="">
      <div className="screen-max-width bg-zinc h-screen lg:h-[120vh]">
        <div className="relative w-full overflow-hidden">
          <img
            src={image}
            alt="emergency image"
            className="w-full h-auto brightness-[85%] object-cover"
          />
          <div className="absolute top-[10%] left-[4%] lg:left-[15%] lg:top-[15%] max-w-[65%]">
            <h2 className="text-white max-sm:text-4xl font-bold text-6xl">
              In an emergency,
              <br />
              iPhone has your back.
            </h2>
          </div>
          <div id="sos-text" className="max-w-[250px] mt-10 ml-5 max-sm:ml-10">
            <p className="text-gray text-lg font-semibold">
              iPhone has{" "}
              <span className="text-white">
                Crash Detection,
                <span className="text-sm transform underline">13</span>
              </span>{" "}
              a vital safety feature that has helped save lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
