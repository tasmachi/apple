import { useState, useEffect } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const handleMobileNav = () => {
    setIsMobileNavVisible((prev) => !prev);
  };

  // Automatically hide MobileNavbar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileNavVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex items-center justify-between w-full screen-max-width">
        {/* Apple logo */}
        <img
          src={appleImg}
          className="brightness-75 cursor-pointer transition-all hover:brightness-100"
          alt="apple logo"
          width={14}
          height={14}
        />

        {/* Navigation Links */}
        <div className="flex flex-1 max-md:hidden justify-center">
          {navLists.map((nav, i) => (
            <div
              className="px-5 text-xs cursor-pointer text-gray hover:text-white transition-all"
              key={i}
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Icons and Hamburger Menu */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-7">
            <img
              src={searchImg}
              className="brightness-75 hover:brightness-100 transition-all cursor-pointer"
              alt="search"
              width={16}
              height={16}
            />
            <img
              className="brightness-75 hover:brightness-100 transition-all cursor-pointer"
              src={bagImg}
              alt="bag"
              width={16}
              height={16}
            />
          </div>

          {/* Hamburger Menu */}
          <div
            onClick={handleMobileNav}
            className="ml-4 flex-col hidden max-md:flex items-center cursor-pointer gap-1.5 transition-all group"
          >
            <span className="w-4 h-[1.2px] bg-gray-200 group-hover:bg-white transition-colors duration-300"></span>
            <span className="w-4 h-[1.2px] bg-gray-200 group-hover:bg-white transition-colors duration-300"></span>
          </div>
        </div>
        {isMobileNavVisible && (
          <MobileNavbar setIsMobileNavVisible={setIsMobileNavVisible} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
