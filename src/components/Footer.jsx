import React from "react";

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:&nbsp;
            <span className="text-xs underline text-blue">
              Find an Apple Store
            </span>
            &nbsp;or&nbsp;
            <span className="text-xs underline text-blue">other retailer</span>
            &nbsp;near you. Or call 1-800-MY-APPLE.
          </p>
          <p className="font-semibold text-gray text-xs"></p>
        </div>
        <div className="bg-neutral-700 hidden lg:block my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center lg:gap-10">
          <p className="font-semibold lg:mt-0 text-gray text-xs mt-5">
            Copyright &copy; 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p
                className="font-semibold text-gray-200 text-xs mt-1 lg:mt-0"
                key={link}
              >
                <span className="hover:underline cursor-pointer transition-all">
                  {link}
                </span>
                &nbsp;
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
