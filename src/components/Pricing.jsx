import React, { useState } from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div
      onClick={handleToggle}
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isOn ? 'bg-blue-600' : 'bg-gray-600'
      }`}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-8' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: 'Android & IOS',
      monthlyPrice: '₹ 1000',
      yearlyPrice: '₹ 10,000',
      description: 'Per month',
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
      description: 'Per month',
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
    <div className="relative bg-black min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-medium font-['Outfit'] bg-gradient-to-r from-white to-[#B4B2B2] bg-clip-text text-transparent mb-6">Pricing</h2>
          <div className="flex items-center justify-center gap-4 font-medium">
            <span className={!isYearly ? 'text-white text-lg' : 'text-gray-500 text-lg'}>
              Monthly
            </span>
            <ToggleSwitch
              isOn={isYearly}
              handleToggle={() => setIsYearly(!isYearly)}
            />
            <span className={isYearly ? 'text-white text-lg' : 'text-gray-500 text-lg'}>
              Annually
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden bg-gray-900 ${
                index === 1 
                  ? 'border-2 border-blue-500 scale-105 z-10' 
                  : 'border border-gray-700'
              }`}
              style={{
                width: '500px',
                minWidth: '394px',
                height: '570px',
                background: '#000000',
                borderRadius: '25px',
                boxSizing: 'border-box',
                boxShadow: index === 1 ? '0 10px 30px -10px rgba(0, 112, 244, 0.3)' : 'none',
                flex: '1 1 380px',
                maxWidth: '420px'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '400px',
                  height: '150px',
                  right: '-100px',
                  bottom: '-50px',
                  background: 'linear-gradient(180deg, #0754E3 6.45%, #042E7D 84.25%)',
                  filter: 'blur(150px)',
                  transform: 'rotate(-15deg)',
                  zIndex: 0,
                  opacity: index === 1 ? 0.8 : 0.6
                }}
              />
              

              <div className="w-full">
                <div 
                  className={`${index === 1 ? 'py-8' : index === 2 ? 'py-6' : 'py-8'} px-6 w-full`}
                  style={index === 1 ? {
                    background: 'linear-gradient(86.21deg, #000000 2.32%, #0D54DB 48.21%, #000000 130.76%)',
                    boxShadow: '0px 21px 88.7px -43px rgba(0, 88, 255, 0.5)',
                    borderRadius: '25px',
                    margin: '0 -8px',
                    width: 'calc(100% + 16px)'
                  } : {}}
                >
                  <h3 className={`${index === 2 ? 'text-2xl' : 'text-2xl'} font-bold text-white text-center whitespace-nowrap`}>
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

              <ul className="space-y-4 mb-10 flex-grow text-left w-full pl-8 mt-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-base">{feature}</span>
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