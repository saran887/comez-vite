import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const NewFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b1b33] via-black to-[#0b1b33] text-white py-12 px-4 sm:px-6 lg:px-8 font-outfit">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left Side - Logo and Social */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">Comez</h3>
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
              <h4 className="text-xl font-semibold mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Training</a></li>
              </ul>
            </div>

            {/* Our Service */}
            <div>
              <h4 className="text-xl font-semibold mb-4 sm:mb-6">Our Service</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Designing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Security</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xl font-semibold mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p className="text-xs sm:text-sm"> 2025 Comez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
