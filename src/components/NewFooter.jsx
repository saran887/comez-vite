import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const NewFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b1b33] via-black to-[#0b1b33] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left Side - Logo and Social */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-4xl sm:text-5xl font-extrabold mb-6">Comez</h3>
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
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>

            {/* Our Service */}
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Our Service</h4>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Designing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Designing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm sm:text-base text-center sm:text-left">
          <p>Copyright © {new Date().getFullYear()} Nutz Technovation Pvt.Ltd</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
