import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.svg";
import final from "../assets/final.svg";

const NewFooter = () => {
  return (
    <footer className="relative bg-black text-white pt-10 font-outfit overflow-hidden px-4">
      {/* Top Left Gradient */}
      <div 
        className="absolute left-0 top-0 w-[120px] h-[200px] bg-gradient-to-l from-[#0754E3] via-[#0754E3] to-transparent blur-[150px] z-0"
        
      />
      
      {/* Top Right Gradient */}
      <div 
        className="absolute right-0 top-0 w-[200px] h-[200px] bg-gradient-to-r from-[#0754E3] via-[#0754E3] to-transparent blur-[180px] z-0"
        
      />
      
      <div className="w-full max-w-7xl md:max-w-9xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left Side - Logo and Social */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src={logo} alt="" className="w-24 sm:w-36 mb-6" />
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                { icon: <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />, url: "#", label: "Instagram" },
                { icon: <FaFacebook className="w-6 h-6 sm:w-8 sm:h-8" />, url: "#", label: "Facebook" },
                { icon: <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />, url: "#", label: "LinkedIn" },
                { icon: <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />, url: "#", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - 3 Columns */}
          <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8 md:mt-0">
            {/* Company */}
            <div>
              <h4 className="text-2xl font-semibold mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-3 text-xl">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base md:text-base">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base md:text-base">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base md:text-base">Training</a></li>
              </ul>
            </div>
            

            {/* Our Service */}
            <div>
              <h4 className="text-2xl font-semibold mb-4 sm:mb-6">Our Service</h4>
              <ul className="space-y-3 text-xl">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base md:text-base">Designing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base md:text-base">Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base md:text-base">Security</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-2xl font-semibold mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-3 text-xl">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base md:text-base">Designing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base md:text-base">Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base md:text-base">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center w-full mt-16 mb-4">
          {/* Left side - Copyright */}
          <div className="text-xs sm:text-base md:text-base text-gray-400">
            <p>Copyright © 2025 Comez Nutz Technovation Pvt.Ltd</p>
          </div>
          
          {/* Right side - All rights reserved */}
          <div className="text-xs sm:text-base md:text-base text-gray-400">
            <p>All rights reserved</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4"></div>
      </div>
      <div className="w-full overflow-hidden">
        <img 
          src={final} 
          alt="" 
          className="w-full max-w-[1500px] h-auto max-h-[260px] object-contain mx-auto px-4 sm:px-6 md:px-8 opacity-150"
        />
      </div>
    </footer>
  );
};

export default NewFooter;
