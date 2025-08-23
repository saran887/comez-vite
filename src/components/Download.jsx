import React from 'react';
import GooglePlayImage from '../assets/Google.png';
import AppStoreImage from '../assets/Apple.png';

const Download = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ 
      padding: '120px 0',
      background: 'linear-gradient(180deg, #000000 0%, #030E22 50%, #000000 100%)'
    }}>
      <div className="w-full flex flex-col items-center px-4 sm:px-6">
        <div className="w-full max-w-[1200px] mx-auto">
        {/* Main heading */}
        <h2 
          className="w-full text-center mb-8 md:mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.2] md:leading-[100px] lg:leading-[120px]
                   bg-gradient-to-r from-white to-[#B4B2B2]/90 bg-clip-text text-transparent"
        >
          Passionate on Ecommerce <br className="hidden sm:block"/>Business? Try Comez
        </h2>
        
        {/* Subtitle */}
        <div className="w-full max-w-[800px] mx-auto text-center mb-8 sm:mb-12 md:mb-16 overflow-hidden">
          <p 
            className="text-white text-lg sm:text-xl md:text-2xl font-outfit whitespace-normal px-2"
          >
            We assist you in publishing your store app on both platforms.
          </p>
        </div>
          
        {/* Download buttons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a 
            href="#" 
            className="relative inline-block"
            aria-label="Download on Google Play"
          >
            <img 
              src={GooglePlayImage} 
              alt="Get it on Google Play" 
              className="h-auto w-auto md:h-[76px] hover:scale-105 transition-transform duration-200"
              loading="lazy"
              width="auto"
              height="auto"
            />
          </a>
          
          <a 
            href="#" 
            className="relative inline-block"
            aria-label="Download on the App Store"
          >
            <img 
              src={AppStoreImage} 
              alt="Download on the App Store" 
              className="h-auto w-auto md:h-[76px] hover:scale-105 transition-transform duration-200"
              loading="lazy"
              width="auto"
              height="auto"
            />
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Download;
