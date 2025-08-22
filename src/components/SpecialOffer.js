import React, { useState, useEffect } from 'react';

const SpecialOffer = () => {
  const calculateTimeLeft = () => {
    // Set a future date for the countdown
    const difference = +new Date('2025-12-31T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-gray-100 p-4 sm:p-8 flex justify-center items-center font-sans">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-xl overflow-hidden md:flex">
        <div className="md:w-1/2 h-64 md:h-auto">
          <img 
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800" 
            alt="Venice, Italy"
          />
        </div>
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <div className="text-left">
            <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">LIMITED TIME OFFER</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">Venice, Italy</h2>
            <p className="text-red-600 text-2xl font-bold my-3">20% OFF</p>
            <p className="text-gray-600 mb-6">
              Discover the magic of Venice with this exclusive offer. Don't miss out on the city of canals!
            </p>
            <div className="flex space-x-4 my-4">
              {Object.entries(timeLeft).map(([interval, value]) => (
                <div key={interval} className="text-center">
                  <div className="text-4xl font-bold text-gray-800">{value}</div>
                  <div className="text-sm uppercase text-gray-500">{interval}</div>
                </div>
              ))}
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
