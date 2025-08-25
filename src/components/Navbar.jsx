import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const isHeroPage = window.location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) setScrolled(isScrolled);
      }
    };
    handleScroll();
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled, isHeroPage]);

  const navLinks = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'About', section: 'about' },
    { name: 'Features', section: 'features' },
    { name: 'Pricing', section: 'pricing' },
    { name: 'FAQs', section: 'faqs' },
  ];

  return (
    <nav className={`fixed w-full h-16 md:h-16 left-0 md:left-10 z-50 px-4 sm:px-6 md:px-10 backdrop-blur-md md:bg-transparent md:backdrop-blur-none ${scrolled ? 'top-0' : isHeroPage ? 'md:top-12' : 'top-0'}`} style={{ width: '100vw' }}>
      <div className="h-full w-full max-w-[90rem] mx-auto flex items-center justify-center " style={{ maxWidth: '90rem' }}>
        {/* Logo - Left aligned */}
        <div className="flex-shrink-0 h-[46px] flex items-center absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2">
          <img src={Logo} alt="Comez Logo" className="h-6 w-auto" />
        </div>
        
       {/* Navigation Links */}
<div className="hidden md:flex items-center justify-center mx-auto w-full max-w-[75rem] h-[4.375rem] 
  bg-[rgba(1,34,50,0.2)] backdrop-blur-[15px] 
  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
  border border-[rgba(255,255,255,0.18)] 
  rounded-[50px] px-2 box-border">
  
  <div className="flex items-center justify-between w-full">
    {navLinks.map((link, index) => (
      <button
        key={index}
        onClick={() => {
          if (link.section) scrollToSection(link.section);
          else link.action();
          setActiveLink(link.name);
        }}
        className={`relative flex items-center justify-center 
          min-w-[8.5rem] h-12 px-6 py-3 gap-2 rounded-[3.5rem] transition-all duration-300
          ${
            activeLink === link.name
              ? "bg-[#0754E3] shadow-[inset_-4px_7px_20px_rgba(255,255,255,0.3)]"
              : "bg-transparent hover:bg-[#0754E3]/20"
          }`}
      >
        <span
          className={`text-base leading-5 text-white text-center font-light
            ${activeLink === link.name ? "font-medium" : ""}`}
        >
          {link.name}
        </span>
      </button>
    ))}
  </div>
</div>

        
        {/* Spacer to balance the flex layout */}
        <div className="flex-shrink-0 w-16"></div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden z-50 ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2 text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#020C14] transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          paddingTop: '5rem',
          height: '100vh',
          width: '100vw',
          overflow: 'auto',
          boxSizing: 'border-box',
          WebkitOverflowScrolling: 'touch',
          top: '0'
        }}
      >
        <div className="flex flex-col items-center justify-start h-full w-full overflow-y-auto py-6 px-6 space-y-4">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                if (link.section) scrollToSection(link.section);
                else link.action();
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-base font-light font-['Outfit'] text-white hover:bg-white/10 rounded-xl transition-colors duration-200 text-center leading-5"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;