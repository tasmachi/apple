import React from "react";

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-8 sm:px-10 px-5 bg-neutral-900 text-white">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray-400 text-xs">
            More ways to shop:&nbsp;
            <span className="text-xs underline text-blue hover:text-blue-500">
              Find an Apple Store
            </span>
            &nbsp;or&nbsp;
            <span className="text-xs underline text-blue hover:text-blue-500">
              other retailer
            </span>
            &nbsp;near you. Or call 1-800-MY-APPLE.
          </p>
        </div>
        <div className="bg-neutral-700 hidden lg:block my-5 h-[1px] w-full" />
        <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-center">
          <p className="font-semibold text-gray-400 text-xs mt-5 lg:mt-0">
            Copyright &copy; 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap lg:gap-5 mt-3 lg:mt-0">
            {footerLinks.map((link, i) => (
              <p
                className="font-semibold text-gray-200 text-xs mt-1 lg:mt-0"
                key={link}
              >
                <span className="hover:underline cursor-pointer transition-all">
                  {link}
                </span>
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 text-gray-500">|</span>
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
