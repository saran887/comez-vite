import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import Download from './components/Download';
import About from './components/About';
import NewFooter from './components/NewFooter';
import FeatureSection from './components/Features';

function App() {
  const [isHome, setIsHome] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsHome(scrollPosition < heroHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-screen bg-[#020C14] overflow-x-hidden font-outfit">
      <div className="w-full">
        <div className=" w-full">
          <Navbar isHome={isHome}/>
          <main className="w-full">
            <div className="w-full ">
              <div id="hero">
                <Hero />
              </div>
            </div>
            <div id="about" className="w-full">
              <div className="w-full">
                <Download />
                <About />
              </div>
              <div id="features" className="w-full">
                <FeatureSection />
              </div>
            </div>
            <div id="pricing" className="w-full">
              <Pricing />
            </div>
            <div id="faqs" className="w-full">
              <FAQs />
            </div>
            <div className="w-full">
              <NewFooter />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
