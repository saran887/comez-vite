import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Download from './components/Download';
import About from './components/About';
import Footer from './components/NewFooter';

import FeatureSection from './components/Features';

function App() {

  return (
    <div className="relative min-h-screen w-screen bg-[#020C14] overflow-x-hidden font-outfit mx-auto">
      <div className="w-full">
        <div className=" w-full">
          <Navbar />
          <main className="w-full">
            <div className="w-full">
              <div id="hero" className="w-full">
                <Hero />
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
  );
}

export default App;
