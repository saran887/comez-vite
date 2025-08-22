// src/components/WhyComez.js
import React from 'react';
import { FaDollarSign, FaExclamationTriangle, FaCreditCard, FaCog } from "react-icons/fa";
import Mobile1 from '../assets/mobile-screen 1.svg';
import Mobile2 from '../assets/mobile-screen 2.svg';
import Download from './Download';


const features = [
  {
    icon: <FaDollarSign className="text-white" />,
    title: "No Development Charges",
    description: "We have worked over last two years to provide you an precise Ecommerce Application which covers all the modules with Analytic Reports."
  },
  {
    icon: <FaExclamationTriangle className="text-white" />,
    title: "No Product Restrictions",
    description: "We don't restrict your in-store items, and that makes us special. We know exactly what it takes to build a startup."
  },
  {
    icon: <FaCreditCard className="text-white" />,
    title: "No charges for UPI Payments",
    description: "We don't cost for your Payments. We all hate being nickel-and-dimed. we likely to lose a customer over a small extra charge."
  },
  {
    icon: <FaCog className="text-white" />,
    title: "No Worries on Maintenance",
    description: "We improve the efficiency of the software by eliminating errors, removing unusable development and implementing advanced development strategies."
  }
];

const About = () => {
  return (
    <section className="py-12 md:py-20" style={{
      background: 'linear-gradient(180deg, #000000 0%, #030E22 50%, #000000 100%)'
    }}>
      <Download/>
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit mb-4 md:mb-6 text-white">
            Why Comez?
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {React.cloneElement(feature.icon, { className: 'text-blue-600 text-xl' })}
                </div>
                <h3 className="text-xl font-outfit font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 pl-16 text-white">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Images and User Friendly Section */}
        <div className="mt-12 lg:mt-20 flex flex-col lg:flex-row items-center justify-between lg:gap-12 max-w-6xl mx-auto">
          {/* Mobile Images - Left Side */}
          <div className="w-full lg:w-1/2 relative h-auto lg:h-[600px] mb-12 lg:mb-0">
            <div className="hidden lg:block relative w-full max-w-[350px] mx-auto lg:mx-0 lg:absolute lg:left-10 lg:top-15 down-10 z-10 lg:w-3/4">
              <img 
                src={Mobile2} 
                alt="Mobile App Screenshot 1" 
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            <div className="relative w-full max-w-[350px] mx-auto lg:mx-0 lg:absolute lg:right-0 lg:bottom-0 lg:w-3/4">
              <img 
                src={Mobile1} 
                alt="Mobile App Screenshot 2" 
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
          
          {/* User Friendly Content - Right Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-outfit font-bold mb-4 sm:mb-6 text-white">
              User Friendly Interface
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              A strong user experience offers a significant competitive advantage in attracting and retaining customers. 
              You are most likely to build trust with people most easily, attract users and turn them into customers, 
              and encourage their contacts to do the same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
