import React, { useState } from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

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
      popular: true
    },
    {
      title: 'Customizes Application',
      description: 'Pricing will be based on Customization',
      features: [
        'Customize Theme',
        'Re-Arrange Layout',
        'InBuilt Support',
        'International Payments',
        '0% Charges For UPI Payment',
        '0% Charges For RuPay Debit Card',
      ],
     
    }
  ];

  return (
    <div className="pt-20 pb-10 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Pricing</h2>
          
          <div className="mt-10 flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center space-x-4">
              <span className={`text-lg font-medium ${!isYearly ? 'text-blue-400' : 'text-gray-500'} w-20 text-right`}>
                Monthly
              </span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                <span 
                  className={`${
                    isYearly ? 'translate-x-9' : 'translate-x-1'
                  } inline-block h-6 w-6 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-lg font-medium ${isYearly ? 'text-blue-400' : 'text-gray-500'} w-20 text-left`}>
                Annually
              </span>
            </div>
            <p className="text-sm text-blue-400 font-medium">
              {isYearly ? 'Save 17% with annual billing' : 'Flexible monthly billing'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-900 to-blue-700 border-2 border-blue-500 transform scale-105 z-10' 
                  : 'bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-blue-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-white">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-lg font-medium text-gray-300">
                  
                </span>
              </div>
              
              <p className="mt-4 text-gray-300">
                {plan.description}
              </p>
              
              <ul className="mt-8 space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="h-5 w-5 flex-shrink-0 text-blue-400" />
                    <span className="ml-3 text-base text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
               
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
    </div>
  );
};

export default Pricing;