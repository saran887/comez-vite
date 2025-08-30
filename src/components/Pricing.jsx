import React, { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';

// Add Google Fonts
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
`;

const ToggleSwitch = ({ isOn, handleToggle }) => (
  <button
    type="button"
    onClick={handleToggle}
    className={`relative inline-flex h-8 w-16 items-center rounded-full p-1 transition-colors duration-300 ${
      isOn ? 'bg-blue-600' : 'bg-gray-600'
    }`}
  >
    <span
      className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
        isOn ? 'translate-x-8' : 'translate-x-0'
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
      title: 'Android & IOS',
      monthlyPrice: '₹ 1000',
      yearlyPrice: '₹ 10,000',
      description: 'Per year',
      features: [
        'Customize Theme',
        'Re-Arrange Layout',
        'InBuilt Support',
        'International Payments',
        '0% Charges For UPI Payment',
        '0% Charges For RuPay Debit Card',
      ],
      buttonText: 'Get Started',
    },
    {
      title: 'Android,IOS & Web',
      monthlyPrice: '₹ 2000',
      yearlyPrice: '₹ 20,000',
      description: 'Per year',
      features: [
        'Customize Theme',
        'Re-Arrange Layout',
        'InBuilt Support',
        'International Payments',
        '0% Charges For UPI Payment',
        '0% Charges For RuPay Debit Card',
      ],
      buttonText: 'Get Started',
      popular: true,
    },
    {
      title: 'Customized Application',
      description: 'Pricing will be based on',
      SubTitle: 'Customization',
      features: [
        'Customize Theme',
        'Re-Arrange Layout',
        'InBuilt Support',
        'International Payments',
        '0% Charges For UPI Payment',
        '0% Charges For RuPay Debit Card',
      ],
      buttonText: 'Get Started',
    },
  ];

  const handleGetStarted = (plan) => {
    console.log('Selected plan:', plan);
  };

  return (
    <div className="relative bg-black min-h-screen py-20 px-4 md:pt-36">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-medium font-['Outfit'] bg-gradient-to-r from-white to-[#B4B2B2] bg-clip-text text-transparent mb-8 pb-8">Pricing</h2>
          <div className="text-white text-lg font-medium">
            Annually
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 px-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden bg-black border ${
                index === 1 
                  ? 'border-2 border-blue-500 scale-105 z-10 shadow-[0_10px_30px_-10px_rgba(0,112,244,0.3)]' 
                  : 'border-gray-700'
              } w-[420px] min-w-[394px] h-[670px] flex-1 max-w-[420px]`}
            >
              <div 
                className={`absolute w-[400px] h-[150px] -right-24 -bottom-12 bg-gradient-to-b from-[#0754E3] to-[#042E7D] blur-[150px] -rotate-15 z-0 ${
                  index === 1 ? 'opacity-80' : 'opacity-60'
                }`}
              />
              

              <div className="w-full">
                <div 
                  className={`${index === 1 ? 'py-8' : index === 2 ? 'py-6' : 'py-8'} px-6 w-full ${
                    index === 1 ? 'bg-gradient-to-r from-black via-[#0D54DB] to-black mx-[-8px] w-[calc(100%+16px)] rounded-3xl shadow-[0px_21px_88.7px_-43px_rgba(0,88,255,0.5)]' : ''
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white text-center whitespace-nowrap">
                    {plan.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mb-8 px-10 mt-6">
                <div className="relative text-center">
                  <span className={`font-bold text-white ${index === 2 ? 'text-6xl' : 'text-5xl'}`}>
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {plan.description && (
                    <span className={`block whitespace-nowrap ${index === 2 ? 'text-2xl text-white' : 'text-sm text-gray-400'} mt-2`}>
                      {plan.description}
                    </span>
                  )}
                  {plan.SubTitle && (
                    <span className={`block ${index === 2 ? 'text-xl text-white' : 'text-gray-300 text-sm'} mt-2`}>
                      {plan.SubTitle}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-6 mb-10 flex-grow text-left w-full pl-8 mt-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-xl">{feature}</span>
                  </li>
                ))}
              </ul>

              
            
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Pricing;