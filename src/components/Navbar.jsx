import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/logo.svg';
import { useLenisContext } from '../context/LenisContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const { lenis, isReady } = useLenisContext();

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId);
    console.log('Lenis instance:', lenis);
    console.log('Is ready:', isReady);
    
    if (lenis && isReady) {
      if (sectionId === 'home') {
        console.log('Scrolling to top with Lenis');
        lenis.scrollTo(0);
      } else {
        console.log('Scrolling to section with Lenis:', `#${sectionId}`);
        lenis.scrollTo(`#${sectionId}`, { offset: -100 });
      }
    } else {
      console.log('Using fallback scroll');
      // Fallback to native scroll if Lenis isn't ready
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          console.log('Found element:', element);
          const elementPosition = element.offsetTop - 100;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        } else {
          console.log('Element not found:', sectionId);
        }
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) setScrolled(isScrolled);
      }

      const scrollPosition = window.scrollY + 100;
      const sections = ['home', 'about', 'features', 'pricing', 'faqs'];
      let newActiveLink = 'Home';
      
      // Check if we're at the bottom of the page or in FAQ section
      const faqSection = document.getElementById('faqs');
      if (faqSection) {
        const faqRect = faqSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // If FAQ section is in view or we're at the bottom of the page
        if (faqRect.top <= windowHeight * 0.5 || 
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
          newActiveLink = 'FAQs';
        } else {
          // Check other sections if not in FAQ section
          for (const section of sections) {
            if (section === 'faqs') continue;
            
            const element = document.getElementById(section);
            if (element) {
              const sectionTop = element.offsetTop;
              const sectionHeight = element.offsetHeight;
              
              if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                newActiveLink = section === 'home' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1);
                break;
              }
            }
          }
        }
      }
      
      // Always update active link to ensure it's current
      setActiveLink(prevLink => newActiveLink !== prevLink ? newActiveLink : prevLink);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', section: 'home', action: () => lenis && isReady ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'About', section: 'about' },
    { name: 'Features', section: 'features' },
    { name: 'Pricing', section: 'pricing' },
    { name: 'FAQs', section: 'faqs' },
  ];

  // Add id to the hero section for home detection
  useEffect(() => {
    const heroSection = document.querySelector('section');
    if (heroSection && !heroSection.id) {
      heroSection.id = 'home';
    }
  }, []);

  return (
    <nav className="fixed w-full h-28 left-0 md:top-4 top-0 z-50 bg-transparent mx-auto">
      <div className="h-24 md:h-full w-full max-w-7xl md:max-w-9xl mx-auto flex items-center justify-between px-2">
        {/* Logo - Left aligned */}
        <div className="flex-shrink-0 pl-2 md:pl-0 lg:pl-0 ">
          <img src={Logo} alt="Comez Logo" className="h-6 w-auto" />
        </div>
        
        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center justify-centre flex-1 md:pl-28">
          <div className="flex items-center h-[70px] bg-[rgba(1,34,50,0.2)] backdrop-blur-[15px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-[rgba(255,255,255,0.18)] rounded-[35px] ">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveLink(link.name);
                  if (link.action) {
                    link.action();
                  } else {
                    scrollToSection(link.section);
                  }
                }}
                className={`relative flex items-center justify-center w-36 h-12 mx-2 rounded-[30px] cursor-pointer transition-all duration-300 ${
                  activeLink === link.name
                    ? "bg-[#0754E3] shadow-[inset_-4px_7px_20px_rgba(255,255,255,0.3)]"
                    : "bg-transparent hover:bg-[#0754E3]/20"
                }`}
              >
                <span className={`text-md text-white font-light ${activeLink === link.name ? "font-medium" : ""}`}>
                  {link.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        
        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white focus:outline-none"
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
                  setActiveLink(link.name);
                  setIsOpen(false);
                  if (link.action) {
                    link.action();
                  } else {
                    scrollToSection(link.section);
                  }
                }}
                className="w-full px-6 py-4 text-lg font-light text-white hover:bg-white/10 rounded-xl transition-colors duration-200 text-center"
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