import React, { useEffect } from 'react';
import Herobg from '../assets/hero-bg.svg';
import DashBoard from '../assets/Dashboard.svg';
import card1 from '../assets/card3l.svg';
import card2 from '../assets/card2l.svg';
import card3 from '../assets/card1l.svg';

// Add Google Fonts
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
`;

const Hero = () => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = fontStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const cards = [
    {
      emoji: card1,
      title: 'Build your Brand',
      description:
        'Your brand is a gateway to your true work. It also focuses on building a loyal and long-term customer base.'
    },
    {
      emoji: card2,
      title: 'Create your Store Instantly',
      description:
        'Over the last two years, we developed this platform to create a store like a snap of a finger.'
    },
    {
      emoji: card3,
      title: 'Stay Organized',
      description:
        'Keep track of your Customers. It increases the likelihood that customers will make additional future purchases.'
    }
  ];

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-between text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90 z-0"></div>

      <div className="relative z-10 w-full">
        {/* Text Content */}
        <div className="text-center mx-auto px-4 sm:px-0 pt-40 pb-32 font-outfit">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-[82px] font-normal leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B4B2B2] to-[#B4B2B2]/80">
              New way to manage your
              <span className="block mt-4 md:mt-8 font-light italic opacity-400 font-metal text-6xl sm:text-6xl md:text-8xl lg:text-[102px] leading-tight">
                Ecommerce Business!
              </span>
            </h1>
          </div>
          <p className="text-gray-200 font-outfit text-xl md:text-2x font-light tracking-wide mt-8 mb-12 max-w-2xl ml-0 mr-auto leading-relaxed text-shadow-md whitespace-nowrap pl-[30rem]">A whole E-Commerce as a piece of cake. Easily Personalize the layout of your store.</p>
          <div className="w-full flex justify-center mb-4">
            <button className="px-6 py-3 w-[171px] h-[60px] text-x font-medium bg-[#0754E3] shadow-[inset_-12px_4px_17.1px_rgba(255,255,255,0.25),inset_-3px_4px_20px_rgba(255,255,255,0.75)] rounded-[85px] hover:bg-[#0648c2] transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>

        {/* Dashboard with Overlay and Cards */}
        <div className="relative w-full max-w-6xl mx-auto mt-10 md:-mt-16 mb-20 md:mb-40 px-4">
          <div className="relative">
            {/* Gradient behind dashboard */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl -z-10"></div>

            {/* Dashboard */}
            <img
              src={DashBoard}
              alt="Dashboard"
              className="w-full h-auto rounded-xl shadow-2xl relative z-10 border border-gray-800/50"
            />

            {/* Gradient overlay - Hidden on mobile */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/70 to-transparent rounded-b-xl z-20"></div>
          </div>

          {/* Cards Section */}
          <div className="relative mt-8 md:-mt-28 z-30">
            <div className="w-full max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-36 justify-items-center">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="w-[380px] md:w-[440px] max-w-[440px] h-[350px] bg-gradient-to-br from-gray-900 to-black border border-gray-700/50 shadow-2xl rounded-[30px] backdrop-blur-sm p-6 md:p-8 text-center hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <img src={card.emoji} alt="" className="w-10 h-10 object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-[#B4B2B2] text-transparent bg-clip-text">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-lg font-outfit text-center">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
  