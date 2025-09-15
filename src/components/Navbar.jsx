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
    if (lenis && isReady) {
      if (sectionId === 'home') {
        lenis.scrollTo(0);
      } else {
        lenis.scrollTo(`#${sectionId}`, { offset: -100 });
      }
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementPosition = element.offsetTop - 100;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 10);
      }

      const scrollPosition = window.scrollY + 100;
      const sections = ['home', 'about', 'features', 'pricing', 'faqs'];
      let newActiveLink = 'Home';

      const faqSection = document.getElementById('faqs');
      if (faqSection) {
        const faqRect = faqSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (
          faqRect.top <= windowHeight * 0.5 ||
          (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100
        ) {
          newActiveLink = 'FAQs';
        } else {
          for (const section of sections) {
            if (section === 'faqs') continue;
            const element = document.getElementById(section);
            if (element) {
              const sectionTop = element.offsetTop;
              const sectionHeight = element.offsetHeight;

              if (
                scrollPosition >= sectionTop - 100 &&
                scrollPosition < sectionTop + sectionHeight - 100
              ) {
                newActiveLink =
                  section === 'home'
                    ? 'Home'
                    : section.charAt(0).toUpperCase() + section.slice(1);
                break;
              }
            }
          }
        }
      }

      setActiveLink(newActiveLink);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Features', section: 'features' },
    { name: 'Pricing', section: 'pricing' },
    { name: 'FAQs', section: 'faqs' },
  ];

  // Ensure hero section has an id for detection
  useEffect(() => {
    const heroSection = document.querySelector('section');
    if (heroSection && !heroSection.id) {
      heroSection.id = 'home';
    }
  }, []);

  // Listen to Lenis scroll if available, else fallback to window scroll
  useEffect(() => {
    if (lenis && isReady) {
      const onLenisScroll = ({ scroll }) => {
        if (window.innerWidth >= 768) {
          setScrolled(scroll > 10);
        }
      };
      lenis.on('scroll', onLenisScroll);
      // Set initial state
      if (window.innerWidth >= 768) {
        setScrolled(lenis.scroll > 10);
      }
      return () => {
        lenis.off('scroll', onLenisScroll);
      };
    } else {
      const handleScroll = () => {
        if (window.innerWidth >= 768) {
          setScrolled(window.scrollY > 10);
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Set initial state
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 10);
      }
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lenis, isReady]);

  return (
    <nav
      className={`fixed w-full h-28 left-0 z-50 bg-transparent mx-auto ${
        scrolled ? 'top-0' : 'md:top-4 top-0'
      }`}
    >
      <div className="h-24 md:h-full w-full max-w-7xl md:max-w-9xl mx-auto flex items-center justify-between pl-2 md:bg-transparent bg-[rgba(1,34,50,0.2)] backdrop-blur-[15px] md:backdrop-blur-[5px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] md:shadow-none border-b border-[rgba(255,255,255,0.1)] md:border-b-0">
        {/* Logo */}
        <div className="flex-shrink-0 pl-2 md:pl-0 lg:pl-0 ">
          <img
            src={Logo}
            alt="Comez Logo"
            aria-label="Home"
            className="h-10 w-auto cursor-pointer"
            onClick={() => scrollToSection('home')}
          />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center justify-center flex-1 md:pl-28">
          <div className="flex items-center h-[70px] bg-[rgba(1,34,50,0.2)] backdrop-blur-[15px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-[rgba(255,255,255,0.18)] rounded-[35px]">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveLink(link.name);
                  scrollToSection(link.section);
                }}
                className={`relative flex items-center justify-center w-36 h-12 mx-2 rounded-[30px] cursor-pointer transition-all duration-300 ${
                  activeLink === link.name
                  ? 'bg-[#0754E3] shadow-[inset_-4px_7px_20px_rgba(255,255,255,0.3)]'
                  : 'bg-transparent hover:bg-[#0754E3]/20'
                }`}
                >
                <span
                  className={`text-md text-white font-light ${
                  activeLink === link.name ? 'font-medium' : ''
                  }`}
                >
                  {link.name}
                </span>
              </button>
            ))}
          </div>
        </div>

            {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <a
            href="tel:+919698739898"
            className="flex items-center justify-center w-36 h-12 bg-white text-black rounded-[30px] text-md font-medium hover:text-white hover:bg-gray-700 transition-colors duration-200"
          >
            Contact 
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden z-50 pr-2 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            >
            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 transition-all duration-300 ease-in-out transform ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          } pt-20 h-screen w-screen overflow-auto box-border bg-[rgba(1,34,50,0.2)] backdrop-blur-[15px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-[rgba(255,255,255,0.18)]`}
        >
          <div className="flex flex-col items-center justify-start h-full w-full overflow-y-auto py-6 px-6 space-y-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                  scrollToSection(link.section);
                }}
                className={`w-full px-6 py-5 text-2xl font-light text-white rounded-[30px] transition-all duration-300 text-center  ${
                  activeLink === link.name
                    ? 'bg-[#0754E3] font-medium shadow-[inset_-4px_7px_20px_rgba(255,255,255,0.3)]'
                    : 'bg-transparent hover:bg-[#0754E3]/20'
                }`}
                aria-current={activeLink === link.name ? 'page' : undefined}
                >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+919698739898"
              className="w-full px-6 py-5 text-2xl font-light text-white rounded-[30px] transition-all duration-300 text-center mt-4 "
              onClick={() => setIsOpen(false)}
              >
              Contact 
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
