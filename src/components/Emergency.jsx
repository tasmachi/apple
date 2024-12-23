import React, { useEffect, useState } from "react";
import { sosLargeImg, sosSmallImg } from "../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Emergency = () => {
  const [image, setImage] = useState(sosLargeImg);

  const updateImage = () => {
    setImage(window.innerWidth > 660 ? sosLargeImg : sosSmallImg);
  };

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(sosLargeImg);
    preloadImage(sosSmallImg);
  }, []);

  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };

    const handleResize = debounce(updateImage, 200);

    updateImage();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#sos-text",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#sos-text",
          start: "top 80%",
          toggleActions: "play reverse resume reverse",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="screen-max-width bg-zinc h-screen lg:h-[120vh]">
        <div className="relative w-full overflow-hidden">
          <img
            src={image}
            alt="Emergency feature showcase"
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
            <p className="text-gray text-lg font-semibold text-white">
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
