import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Download from './components/Download';
import About from './components/About';
import NewFooter from './components/NewFooter';
import Features from './components/Features';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#020C14] overflow-hidden">
      <div className="w-full max-w-[100vw] overflow-x-hidden">
        <div className="pt-24 w-full">
           <Navbar /> 
          <div className="w-full overflow-x-hidden">
            <Hero />
            {/* <Download /> */}
            <div id="about" className="w-full overflow-hidden">
              <About />
              <div id="features">
                <Features />
              </div>
            </div>
            <div id="pricing" className="w-full overflow-hidden">
              <Pricing />
            </div>
            <div id="faqs" className="w-full overflow-hidden">
              <FAQs />
            </div>
            <NewFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
