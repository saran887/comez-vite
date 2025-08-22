import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'About', section: 'about' },
    { name: 'Features', section: 'features' },
    { name: 'Pricing', section: 'pricing' },
    { name: 'FAQs', section: 'faqs' },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between px-4 py-3 w-full">
          <div className="text-3xl font-bold text-white px-4 md:px-10">Comez</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="bg-[rgba(1,34,50,0.7)] px-12 py-6 md:px-40 md:py-6 rounded-full shadow-[0px_4px_15px_rgba(0,0,0,0.3)]">
              <div className="flex items-center space-x-4 md:space-x-12 lg:space-x-24">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => link.section ? scrollToSection(link.section) : link.action()}
                    className="px-2 py-1 text-sm md:text-lg font-medium text-white hover:bg-white/10 rounded-full whitespace-nowrap transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
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
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{
            paddingTop: '2rem', // Increased padding for better spacing
            height: '100vh',
            width: '100vw',
            overflow: 'auto',
            boxSizing: 'border-box',
            WebkitOverflowScrolling: 'touch' // Better scrolling on iOS
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
                className="w-full px-4 py-3 text-lg font-medium text-white hover:bg-white/10 rounded-xl transition-colors duration-200 text-center"
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