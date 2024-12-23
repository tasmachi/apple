import { useEffect, useRef } from "react";
import { navLists } from "../constants";
import { gsap } from "gsap";

const MobileNavbar = ({ setIsMobileNavVisible }) => {
  const navItemsRef = useRef([]);

  const handleClose = () => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsMobileNavVisible(false);
      },
    });

    timeline
      .to(navItemsRef.current, {
        y: -30,
        opacity: 0,
        scale: 0.95,
        stagger: 0.05,
        duration: 0.3,
        ease: "power4.in",
      })
      .to(
        "#nav-container",
        {
          y: "-100%",
          opacity: 0,
          duration: 0.6,
          ease: "power4.in",
        },
        "<" // Sync with previous animation
      );
  };

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        "#nav-container",
        { y: "-100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        }
      )
      .fromTo(
        navItemsRef.current,
        { y: 0, opacity: 0, scale: 1 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.04,
          duration: 0.4,
          ease: "power4.out",
        },
        "<0.2" // Slight delay between container and items
      );
  }, []);

  return (
    <div
      id="nav-container"
      className="fixed inset-0 bg-[#151515] flex flex-col pt-16 max-sm:pt-12 h-screen gap-5 items-start pl-10 max-sm:pl-6 z-50"
    >
      <button
        id="close-nav"
        onClick={handleClose}
        className="text-gray-400 text-4xl font-light absolute top-1 right-4"
      >
        &times;
      </button>

      {navLists.map((nav, i) => (
        <div
          ref={(el) => (navItemsRef.current[i] = el)}
          className="text-3xl cursor-pointer hover:scale-110 transition-transform font-semibold text-white"
          key={i}
        >
          {nav}
        </div>
      ))}
    </div>
  );
};

export default MobileNavbar;
