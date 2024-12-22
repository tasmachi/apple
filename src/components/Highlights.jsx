import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import { useGSAP } from "@gsap/react";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#highlights", // Element to trigger animation
        start: "top 80%", // Start when the top of the section is 80% down the viewport
        end: "top 30%", // End when the top of the section is 30% down the viewport
        toggleActions: "play none none none", // Only play the animation once
      },
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
      },
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen bg-zinc h-full common-padding overflow-hidden"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end md:flex justify-between">
          <h1 id="title" className="section-heading opacity-0 translate-y-10">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
