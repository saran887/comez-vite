import React from 'react';
import GooglePlayImage from '../assets/Google.png';
import AppStoreImage from '../assets/Apple.png';


const Download = () => {
  return (
    
    <section className="relative py-16" style={{
      background: 'linear-gradient(180deg, #000000 0%, #030E22 50%, #000000 100%)'
    }}>
      <div className="container mx-auto px-4 w-full max-w-[1000px]">
        <div className="flex flex-col items-center py-8 sm:py-16">
          {/* Main heading */}
          <h2 className="relative w-full max-w-[712px] mx-auto text-center font-outfit font-normal text-4xl sm:text-5xl md:text-6xl leading-[1.2] md:leading-[75px] mb-4 sm:mb-6 px-4"
              style={{
                background: 'linear-gradient(88.72deg, #FFFFFF 0.7%, #B4B2B2 95.77%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Passionate on Ecommerce 
              <span className="block sm:inline">Business? </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B4B2B2] block sm:inline">Try Comez</span>
            </h2>
          
          {/* Subtitle */}
          <h3 className="font-outfit text-base sm:text-xl text-[#A1A1A1] text-center mb-6 sm:mb-8 max-w-[90%] sm:max-w-[639px] px-4">
            We assist you in publishing your store app on both platforms.
          </h3>
          
          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full px-4">
            <a href="#" className="block transition-transform hover:scale-105 w-[160px] sm:w-[180px] h-[60px] sm:h-[80px]">
              <img 
                src={GooglePlayImage} 
                alt="Get it on Google Play" 
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </a>
            <a href="#" className="block transition-transform hover:scale-105 w-[160px] sm:w-[180px] h-[60px] sm:h-[80px]">
              <img 
                src={AppStoreImage} 
                alt="Download on the App Store" 
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
