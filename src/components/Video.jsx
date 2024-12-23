import React, { useEffect, useRef } from "react";
import { frameImg, horsesVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#video-texts", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-texts",
        start: "top 80%",
        toggleActions: "play none play none",
      },
    });

    gsap.to("#video-title", {
      y: -200,
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-chapter",
        start: "top 80%",
        end: "top 0%",
        scrub: true,
        toggleActions: "play complete reverse reset",
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideoEnter = () => {
      if (videoElement) {
        videoElement.play();
      }
    };

    const pauseOnleave = () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    };

    ScrollTrigger.create({
      trigger: videoElement,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: playVideoEnter,
      onLeaveBack: pauseOnleave,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div id="video-chapter" className="screen-max-width">
      <div className="mt-10 md:mt-20 mb-14">
        <div className="relative h-full overflow-hidden flex-center">
          <div className="overflow-hidden">
            <img
              src={frameImg}
              alt="frame"
              className="bg-transparent relative z-10 pointer-events-none"
            />
          </div>
          <div className="hiw-video relative">
            <h2
              id="video-title"
              className="font-bold sm:text-3xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white md:text-4xl lg:text-5xl absolute z-20"
            >
              4K 120 fps Dolby Vision. Cinemasterful.
            </h2>
            <video
              src={horsesVideo}
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
          A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby
          Vision
        </p>
      </div>
      <div
        id="video-texts"
        className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
      >
        <p className="text-gray sm:text-md md:text-lg lg:text-xl">
          iPhone 15 Pro takes video capture to a whole new level with 4K 120 fps
          Dolby Vision — our highest resolution and frame rate combo yet.
          Enabled by the new 48MP Fusion camera with second-generation
          quad-pixel sensor and our powerful A17 Pro chip, iPhone 16 Pro lets
          you record{" "}
          <span className="text-white">4K 120 fps Dolby Vision </span> &mdash;
          in video mode or slo-mo.
        </p>
        <p className="text-gray sm:text-md md:text-lg lg:text-xl">
          And now you can{" "}
          <span className="text-white">
            adjust the playback speed after capture{" "}
          </span>{" "}
          &mdash; in the redesigned Photos app, giving you greater editing
          capabilities. To add a dreamy quality to your shot, try out the new
          half-speed option. Or for a cinematic effect, slow it right down to 24
          fps playback.
        </p>
        <h2 className="text-gray font-bold text-2xl lg:text-3xl max-sm:text-xl">
          <span className="text-white">Highest-quality video </span> in a
          smartphone
        </h2>
        <p className="text-gray sm:text-md md:text-lg lg:text-xl">
          iPhone 15 Pro also provides{" "}
          <span className="text-white">a big leap in audio performance </span>{" "}
          &mdash; with four studio-quality mics for higher-quality recording.
          They provide a lower noise floor so you get more true-to-life sounds.
          New Spatial Audio capture makes your videos sound more immersive when
          listening with AirPods. And thanks to wind noise reduction, the audio
          quality is even clearer.
        </p>
      </div>
    </div>
  );
};

export default Video;
