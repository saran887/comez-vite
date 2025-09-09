import React, { useState, useEffect } from 'react';
import { FiCheck, FiArrowUpRight } from 'react-icons/fi';

// Add Google Fonts
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
`;

const ToggleSwitch = ({ isOn, handleToggle }) => (
  <button
    type="button"
    onClick={handleToggle}
    className={`relative inline-flex h-8 w-16 items-center rounded-full p-1 transition-colors duration-300 ${isOn ? 'bg-blue-600' : 'bg-gray-600'
      }`}
  >
    <span
      className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isOn ? 'translate-x-8' : 'translate-x-0'
        }`}
    />
  </button>
);

const Pricing = () => {
  const isYearly = true; // Always show annual plan

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = fontStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const plans = [
    {
      title: 'Web',
      monthlyPrice: '₹ 1000',
      monthlyOriginalPrice: '₹ 1500',
      yearlyPrice: '₹ 10,000',
      yearlyOriginalPrice: '₹ 15,000',
      description: 'Per User/Year',
      features: [
        'Customize Theme (Limited)',
        'Re-Arrange Layout',
        'InBuilt Support',
        'International Payments',
        'No Extra Charges',
      ],
      buttonText: 'Get Started',
    },
    {
      title: 'Web,  Android  &  iOS',
      monthlyPrice: '₹ 2000',
      monthlyOriginalPrice: '₹ 3000',
      yearlyPrice: '₹ 20,000',
      yearlyOriginalPrice: '₹ 30,000',
      description: 'Per User/Year',
      features: [
        'Customize Theme (Limited)',
        'Re-Arrange Layout',
        'InBuilt Support',
        'International Payments',
        'Excluding Play Store and App Store',
      ],
      buttonText: 'Get Started',
      popular: true,
    },
    {
      title: 'Customized',
      description: 'Pricing will be based on',
      SubTitle: 'Customization',
      features: [
        'Customize Theme',
        'Re-Arrange Layout',
        'InBuilt Support',
        'International Payments',
        'Excluding Play Store and App Store',
      ],
      buttonText: 'Get Started',
    },
  ];

  const handleGetStarted = (plan) => {
    console.log('Selected plan:', plan);
  };

  return (
    <div id="pricing" className="relative bg-black min-h-[calc(100vh-6rem)] py-4 md:pt-12 lg:pt-18 xl:pt-24 px-4">
      <div className="w-full max-w-7xl  mx-auto">
        <div className="text-center  mb-16">
          <h2 className="text-7xl font-medium font-['Outfit'] bg-gradient-to-r from-white to-[#B4B2B2] bg-clip-text text-transparent mb-8 pb-8">Pricing</h2>
          {/*<div className="text-white text-lg font-medium">
            Annually
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8   w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden bg-black border ${index === 1
                ? 'border border-blue-500 scale-105 z-10 shadow-[0_10px_30px_-10px_rgba(0,112,244,0.3)]'
                : 'border-gray-700'
                } w-full md:w-[32%] h-[750px]  md:h-[750px] lg:h-[800px] lg:w-[34%] flex-shrink-0`}
            >  <div className="w-full">
                <div
                  className={`${index === 1
                    ? 'py-8 px-6 w-full bg-gradient-to-r from-black via-[#0D54DB] to-black mx-0 md:mx-[-8px] w-full md:w-[calc(100%+16px)] rounded-3xl shadow-[0px_21px_88.7px_-43px_rgba(0,88,255,0.5)]'
                    : (index === 0 || index === 2)
                      ? `${index === 2 ? 'py-8' : 'py-8'} px-6 w-full bg-gray-800 rounded-t-3xl`
                      : 'py-8 px-6 w-full'
                    }`}
                >

                  <h3 className="text-2xl font-bold text-white  text-center">
                    {plan.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center px-10 my-10">
                <div className="relative text-center">
                  <div
                    className={`flex  items-baseline justify-center space-x-3 ${index === 2 ? 'mb-0' : 'mb-2'
                      }`}
                  >


                    <span className={`font-semibold ${index === 2 ? 'opacity-70 text-2xl md:text-4xl pt-2' : 'text-2xl md:text-4xl text-white'}`}>
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.yearlyOriginalPrice && (
                      <span className="text-gray-400 line-through text-lg md:text-2xl">
                        {isYearly ? plan.yearlyOriginalPrice : plan.monthlyOriginalPrice}
                      </span>
                    )}

                  </div>
                  {index !== 2}
                  {plan.description && (
                    <span className={`block whitespace-nowrap ${index === 2 ? 'text-lg md:text-2xl text-white' : 'text-lg md:text-2xl text-gray-400'} `}>
                      {plan.description}
                    </span>
                  )}
                  {plan.SubTitle && (
                    <span className={`block ${index === 2 ? 'text-lg md:text-2xl text-white' : 'text-gray-300 text-sm'} my-2`}>
                      {plan.SubTitle}
                    </span>
                  )}
                </div>

              </div>

              <ul className="space-y-10 mb-10 flex-grow text-left w-full pl-8 mt-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start ">
                    <FiCheck className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg md:text-xl">{feature}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`absolute w-full md:w-[520px] h-[150px] -right-12 md:-right-24 -bottom-12 bg-gradient-to-b from-[#0754E3] to-[#042E7D] blur-[150px] -rotate-15 z-0 ${index === 1 ? 'opacity-80' : 'opacity-60'
                  }`}
              />
              <div className="w-full flex justify-center pt-8">
                <button className={`group relative px-6 py-3 w-[200px] h-[60px] text-x font-medium ${index === 1 ? 'bg-[#0754E3] text-white' : 'bg-white text-black'} shadow-[inset_-12px_4px_17.1px_rgba(255,255,255,0.25),inset_-3px_4px_20px_rgba(255,255,255,0.75)] rounded-[85px] transition-all duration-300 flex items-center justify-center hover:translate-y-[-2px] hover:shadow-[inset_-12px_4px_17.1px_rgba(255,255,255,0.25),inset_-3px_5px_20px_rgba(255,255,255,0.75)]`}
                  onMouseEnter={(e) => {
                    const rect = e.target.getBoundingClientRect();
                    const isHoveringFromBottom = e.clientY >= rect.bottom;
                    if (isHoveringFromBottom) {
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const rect = e.target.getBoundingClientRect();
                    const isHoveringFromBottom = e.clientY >= rect.bottom;
                    if (isHoveringFromBottom) {
                      e.target.style.transform = 'none';
                    }
                  }}
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-[-5px]">Choose Plan</span>
                  < FiArrowUpRight className={`${index === 1 ? 'text-white' : 'text-black'} ml-3 transition-transform duration-300 group-hover:translate-x-2`} />
                </button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;