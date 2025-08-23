import React from 'react';
import Herobg from '../assets/hero-bg.svg';
import DashBoard from '../assets/Dashboard.svg';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Herobg})` }}>
      {/* Text Content */}
      <div className="text-center max-w-3xl mt-20 px-4 sm:px-0 font-outfit">
        <p className="text-gray-300 text-sm mb-2 font-outfit pt-2">
          A whole E-Commerce as a piece of <span className="text-blue-400">cake.</span> Easily personalize the layout of your store.
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          New way to manage your <br />
          <span className="italic text-blue-200">Ecommerce Business!</span>
        </h1>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
          Get Started
        </button>
      </div>

      {/* Dashboard with Overlay and Cards */}
      <div className="relative w-full max-w-6xl mx-auto mt-12 mb-20 md:mb-40 px-4">
        <div className="relative">
          {/* Dashboard */}
          <img
            src={DashBoard}
            alt="Dashboard"
            className="w-full h-auto rounded-xl shadow-xl relative z-10"
          />

          {/* Black Overlay on Dashboard */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/70 rounded-b-xl z-10"></div>
        </div>

        {/* Cards - positioned below on mobile, overlapping on desktop */}
        <div className="relative md:absolute mt-20 md:mt-0 md:-bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-20 px-4 sm:px-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-items-center mt-8 md:mt-0">
          {/* Card 1 */}
          <div className="w-full max-w-[365px] h-auto min-h-[299px] bg-gradient-to-br from-[#000B1E] to-[#000000] border border-[#272727] shadow-inner rounded-[35px] backdrop-blur-sm p-6 sm:p-8 text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-3">Build your Brand</h3>
            <p className="text-gray-300 leading-relaxed">
              Your brand is a gateway to your true work. It also focuses on building a loyal and long-term customer base.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[365px] h-auto min-h-[299px] bg-gradient-to-br from-[#000B1E] to-[#000000] border border-[#272727] shadow-inner rounded-[35px] backdrop-blur-sm p-6 sm:p-8 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Create Instantly</h3>
            <p className="text-gray-300 leading-relaxed">
              Create an online store in minutes with our intuitive interface. No coding required.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[365px] h-auto min-h-[299px] bg-gradient-to-br from-[#000B1E] to-[#000000] border border-[#272727] shadow-inner rounded-[35px] backdrop-blur-sm p-6 sm:p-8 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Stay Organized</h3>
            <p className="text-gray-300 leading-relaxed">
              Keep track of your customers. It increases the likelihood that customers will make future purchases.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;