import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext();

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    console.log('Initializing Lenis...');
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      autoRaf: true,
    });

    console.log('Lenis initialized:', lenisRef.current);

    // Mark as ready
    setIsReady(true);

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        console.log('Destroying Lenis');
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, isReady }}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenisContext = () => {
  const context = useContext(LenisContext);
  return context;
};
