// src/components/WhyComez.js
import React from 'react';
import GroupImage from '../assets/mobile.svg';
import QrCode from '../assets/Qr.svg';
import Download from './Download';
import Why1 from '../assets/why1.svg';
import Why2 from '../assets/why2.svg';
import Why3 from '../assets/why3.svg';
import Why4 from '../assets/why4.svg';


const features = [
  {
    icon: Why1,
    title: "No Development Charges",
    description: "We have worked over last two years to provide you an precise Ecommerce Application which covers all the modules with Analytic Reports."
  },
  {
    icon: Why2,
    title: "No Product Restrictions",
    description: "We don't restrict your in-store items, and that makes us special. We know exactly what it takes to build a startup."
  },
  {
    icon: Why3,
    title: "No charges for UPI Payments",
    description: "We don't cost for your Payments. We all hate being nickel-and-dimed. we likely to lose a customer over a small extra charge."
  },
  {
    icon: Why4,
    title: "No Worries on Maintenance",
    description: "We improve the efficiency of the software by eliminating errors, removing unusable development and implementing advanced development strategies."
  }
];

const About = () => {
  return (
    <section className="py-12 md:py-20 font-outfit" style={{
      background: 'linear-gradient(180deg, #000000 0%, #030E22 50%, #000000 100%)'
    }}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit mb-4 md:mb-6 text-white">
            Why Comez?
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex flex-col items-start">
                <div className="flex items-center w-full mb-4">
                  <div className="w-22 h-22 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                    <img src={feature.icon} alt={feature.title} className="w-20 h-20"  />
                  </div>
                  <h3 className="text-[24px] text-white font-normal mb-2">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#C1C1C6] pl-4 text-base md:text-lg leading-relaxed text-center md:text-left text-justify">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="relative">
            <img 
              src={GroupImage} 
              alt="App Preview" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0 relative z-10"
            />
          </div>
          <div className="space-y-6 pl-0 md:pl-0">
            <h2 className="text-[36px] md:text-[48px] leading-[1.1] font-normal bg-[linear-gradient(88.72deg,#FFFFFF_0.7%,#B4B2B2_95.77%)] bg-clip-text text-transparent text-center md:text-left">
              User Friendly Interface
            </h2>
            <p className="text-[#C1C1C6] text-lg leading-relaxed text-center md:text-left text-justify">
              A strong user experience offers a significant competitive advantage in attracting and retaining customers. 
              You are most likely to build trust with people most easily, attract users and turn them into customers, 
              and encourage their contacts to do the same.
            </p>
            <div className="relative pt-2">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img 
                  src={QrCode} 
                  alt="QR Code" 
                  className="w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0"
                />
                <p className="text-white font-outfit font-light text-[20px] leading-[25px] text-center sm:text-left w-[318px] mt-2 sm:mt-0">
                  Scan QR code to test a sample<br />Application on your device
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
