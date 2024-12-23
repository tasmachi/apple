import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { computerImg } from "../utils";

const ActionButton = () => {
  const paragraphsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    paragraphsRef.current.forEach((p) => {
      if (p) {
        gsap.fromTo(
          p,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: p,
              start: "top 80%",
              toggleActions: "play reverse restart reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="common-padding bg-black text-white">
      <div className="screen-max-width">
        <h2 className="text-white font-bold max-md:text-6xl lg:text-7xl max-sm:text-4xl text-5xl max-w-[60%]">
          Gigablast your gigabits.
        </h2>
        <div className="w-full my-10">
          <img
            src={computerImg}
            alt="computer"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="max-w-[900px] max-sm:grid-cols-1 mx-auto grid gap-8 lg:gap-12 grid-cols-2">
          {/* Row 1 */}
          <div className="space-y-4">
            <p
              ref={(el) => (paragraphsRef.current[0] = el)}
              className="text-gray text-xl max-sm:text-lg font-semibold"
            >
              iPhone 15 Pro is the first iPhone to support USB 3,4 for a{" "}
              <span className="text-white">
                huge leap in data transfer speeds
              </span>{" "}
              and faster pro workflows than ever before.
            </p>
            <p
              ref={(el) => (paragraphsRef.current[1] = el)}
              className="text-gray text-xl max-sm:text-lg font-semibold"
            >
              Up to <span className="text-white text-3xl">20x faster</span> file
              transfers
            </p>
          </div>
          {/* Row 2 */}
          <div className="space-y-4">
            <p
              ref={(el) => (paragraphsRef.current[2] = el)}
              className="text-gray text-xl max-sm:text-lg font-semibold"
            >
              The new USB‑C connector lets you{" "}
              <span className="text-white">
                charge your Mac or iPad with the same cable you use to charge
                iPhone 15 Pro
              </span>{" "}
              . Bye‑bye, cable clutter.
            </p>
            <p
              ref={(el) => (paragraphsRef.current[3] = el)}
              className="text-gray text-xl max-sm:text-lg font-semibold"
            >
              And with all‑new Wi‑Fi 6E6 you'll get{" "}
              <span className="text-white">
                two times faster wireless speeds
              </span>{" "}
              . So you can upload, download, and transfer files in a flash.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionButton;
