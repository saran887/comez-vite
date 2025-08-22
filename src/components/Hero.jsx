import React from 'react';
import { IoGitNetworkOutline, IoStorefrontOutline, IoDocumentsOutline } from 'react-icons/io5';
import DashboardImage from '../assets/Dashboard.svg';

const Card = ({ title, description, icon }) => (
  <div className="bg-[#0E131A] border border-[#2A3C44] rounded-3xl p-8 w-full sm:w-[355px] h-auto sm:h-[250px] flex flex-col items-center text-center">
    <div className="mb-4 text-5xl text-white">{icon}</div>
    <h3 className="font-outfit text-2xl font-semibold text-white mb-2">{title}</h3>
    <p className="font-outfit text-base text-[#A1A1A1]">{description}</p>
  </div>
);

const Hero = () => (
  <section className="relative text-white text-center py-10 sm:py-20 bg-gradient-to-b from-[#020C14] to-[#0F1E38] w-full overflow-hidden px-4 sm:px-6">
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="font-outfit font-normal text-3xl sm:text-5xl md:text-[82px] leading-tight sm:leading-[100px] bg-gradient-to-r from-white to-[#B4B2B2] bg-clip-text text-transparent mt-8 sm:mt-16 px-2">
        New way to manage your <br className="hidden sm:block"/> <span className="italic">Ecommerce Business!</span>
      </h1>
      <p className="mt-4 sm:mt-6 font-outfit text-sm sm:text-[18px] leading-relaxed sm:leading-[28px] text-[#A1A1A1] w-full max-w-[300px] sm:max-w-md md:max-w-xl lg:w-[588px]">
        Build your dream ecommerce website with our all-in-one platform. Get started in minutes and watch your business grow.
      </p>
      <button className="mt-6 sm:mt-8 flex items-center justify-center w-full max-w-[178px] h-[50px] sm:h-[54px] bg-gradient-to-r from-[#6149F5] to-[#23B4D8] rounded-full font-inter font-semibold text-[15px] sm:text-[16px] leading-[22px] text-white hover:opacity-90 transition-opacity">
        Get Started
      </button>
    </div>
    <div className="relative">
      <div className="mt-12 sm:mt-24 w-full flex justify-center px-4">
        <div className="w-full max-w-4xl">
          <img 
            src={DashboardImage} 
            alt="Dashboard Preview" 
            className="w-full h-auto rounded-2xl border-2 border-cyan-500/10 shadow-2xl shadow-cyan-500/20" 
            loading="lazy"
          />
        </div>
      </div>
      <div className="relative mt-8 sm:-mt-20 md:-mt-32 z-20 w-full px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-[1145px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <Card title="Build your Brand" description="Your brand is a gateway to your true work. It also focuses on building a loyal and long-term customer base." icon={<IoGitNetworkOutline />} />
          <Card title="Create your Store Instantly" description="Over the last two years, we developed this platform to create a store like a snap of a finger." icon={<IoStorefrontOutline />} />
          <Card title="Stay Organized" description="Keep track of your Customers. It increases the likelihood that customers will make additional future purchases." icon={<IoDocumentsOutline />} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
