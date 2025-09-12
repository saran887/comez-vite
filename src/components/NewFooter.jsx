import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import logo from "../assets/logo.svg";
import final from "../assets/final.svg";

const NewFooter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add Google Fonts
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&family=Playball&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    `;
    document.head.appendChild(styleElement);

    // Simulate loading time (you can replace this with your actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(styleElement);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <ImSpinner8 className="w-16 h-16 text-[#0754E3] animate-spin" />
          <p className="text-white mt-4 text-xl font-outfit">Loading...</p>
        </div>
      </div>
    );
  }
  return (
  <footer className="relative bg-black text-white pt-8 font-outfit overflow-hidden px-2 sm:px-4">
      {/* Top Left Gradient */}
      <div className="absolute left-0 top-0 w-[120px] h-[200px] bg-gradient-to-l from-[#0754E3] via-[#0754E3] to-transparent blur-[150px] z-0" />

      {/* Top Right Gradient */}
      <div className="absolute right-0 top-0 w-[200px] h-[200px] bg-gradient-to-r from-[#0754E3] via-[#0754E3] to-transparent blur-[180px] z-0" />

      <div className="w-full max-w-7xl md:max-w-9xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          {/* Left Side - Logo and Social */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-8 flex flex-col items-start">
            <img src={logo} alt="" className="w-20  md:w-36 mb-4 sm:mb-6" />
            <div className="text-base sm:text-lg md:text-base text-gray-400 text-left sm:text-center">
              <p>A Product by <span className="text-white font-['Ubuntu'] font-bold">nutz</span></p>
            </div>
            <div className="flex flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 pt-6">
              {[
                {
                  icon: <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-6 md:h-6" />,
                  url: "https://www.instagram.com/nutz.india/",
                  label: "Instagram",
                },
                
                
                {
                  icon: <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10 md:w-6 md:h-6" />,
                  url: "mailto:nutzindia@gmail.com",
                  label: "Email",
                },
                {
                  icon: <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 md:w-6 md:h-6" />,
                  url: "https://www.linkedin.com/company/nutz",
                  label: "LinkedIn",
                },
                {
                  icon: <FaFacebook className="w-8 h-8 sm:w-10 sm:h-10 md:w-6 md:h-6" />,
                  url: "https://www.facebook.com/NutzIndia/",
                  label: "Facebook",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-full flex items-center justify-center "
                  aria-label={social.label}
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
          </div>
          

          {/* Right Side - 3 Columns */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 md:mt-0">
            {/* Company */}
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-base sm:text-xl">
                <li>
                  <a
                    href="https://nutz.in/about"
                    className="text-gray-400 hover:text-white transition-colors text-base md:text-lg"
                    target="_blank"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://nutz.in/careers"
                    className="text-gray-400 hover:text-white transition-colors text-base md:text-lg"
                    target="_blank"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://nutz.in/training"
                    className="text-gray-400 hover:text-white transition-colors text-base md:text-lg"
                    target="_blank"
                  >
                    Training
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Service */}
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">Our Service</h4>
              <ul className="space-y-2 sm:space-y-3 text-base sm:text-xl">
                <li>
                  <a
                    href="https://nutz.in/GraphicDesign"
                    className="text-gray-400 hover:text-white transition-colors text-base md:text-lg"
                    target="_blank"
                  >
                    Designing
                  </a>
                </li>
                <li>
                  <a
                    href="https://nutz.in/Development"
                    className="text-gray-400 hover:text-white transition-colors text-base md:text-lg"
                    target="_blank"
                  >
                    Development
                  </a>
                </li>
                <li>
                  <a
                    href="https://nutz.in/security"
                    className="text-gray-400 hover:text-white transition-colors text-base md:text-lg"
                    target="_blank"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-base sm:text-xl">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors text-base md:text-lg"
                    
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors text-base md:text-lg"
                    
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition-colors text-base md:text-lg"
                   
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
  <div className="flex flex-col md:flex-row justify-between items-center w-full mt-10 sm:mt-16 mb-4 gap-2 sm:gap-4 md:gap-0">
          {/* Left side - Copyright */}
          <div className="text-xs sm:text-sm md:text-base text-gray-400 text-center md:text-left">
            <p>Copyright © 2025 Comez.Nutz Technovation Pvt.Ltd</p>
          </div>
              
          {/* Right side - All rights reserved */}
          <div className="text-xs sm:text-sm md:text-base text-gray-400 text-center md:text-right">
            <p>All rights reserved</p>
          </div>
          
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4"></div>
      </div>
      <div className="w-full overflow-hidden mt-2">
        <img
          src={final}
          alt=""
          className="w-full max-w-[900px] sm:max-w-[1200px] md:max-w-[1500px] h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[260px] object-contain mx-auto px-2 sm:px-4 md:px-8 lg:px-12 opacity-150"
        />
      </div>
    </footer>
  );
};

export default NewFooter;
