import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      opacity: 0,
      duration: 2,
      scale: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br />A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign to the chip in the history of
            iPhone. Mobile gaming will never be the same again.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                src={frameVideo}
                type="video/mp4"
                className="pointer-events-none"
                muted
                preload="none"
                playsInline
                autoPlay
                ref={videoRef}
              />
            </div>
          </div>
          <p className="text-center mt-3 text-gray font-semibold">
            Honkai: Start Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              The A17 Pro chip is{" "}
              <span className="text-white">
                a game-changing piece of technology
              </span>
              , built with the industry’s first 3nm process to deliver
              unparalleled performance and efficiency.
            </p>

            <p className="hiw-text g_fadeIn">
              It powers stunning graphics, smooth gameplay, and{" "}
              <span className="text-white">
                breakthrough features like hardware-accelerated ray tracing.
              </span>
              Experience faster app launches, seamless multitasking, and
              unmatched power efficiency.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Breakthrough</p>
            <p className="hiw-bigtext">6-Core GPU</p>
            <p className="hiw-text">
              Engineered for unparalleled graphics and power efficiency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
