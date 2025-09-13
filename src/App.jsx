import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Download from './components/Download';
import About from './components/About';
import Footer from './components/NewFooter';
import FeatureSection from './components/Features';

import { LenisProvider } from './context/LenisContext';
import 'lenis/dist/lenis.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <LenisProvider>
      <div className="relative min-h-screen w-screen bg-[#000000] overflow-x-hidden font-outfit mx-auto ">
        <div className="w-full">
          <div className=" w-full">
            <Navbar />
            <main className="w-full">
              <div className="w-full">
                <div id="home" className="w-full">
                  <div id="hero" className="w-full">
                    <Hero />
                  </div>
                </div>
              </div>

              <div id="about" className="w-full ">
                <div className="w-full">
                  <Download />
                  <About />
                </div>
              </div>

              <div id="features" className="w-full">
                <div className="w-full">
                  <FeatureSection />
                </div>
              </div>

              <div id="pricing" className="w-full ">
                <div className="w-full">
                  <Pricing />
                </div>
              </div>

              <div id="faqs" className="w-full ">
                <div className="w-full">
                  <FAQs />
                </div>
              </div>

              <div className="w-full">
                <Footer />
              </div>
            </main>
          </div>
        </div>
      </div>
    </LenisProvider>

  );
}

export default App;
