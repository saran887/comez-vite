import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  const lenisRef = useRef();

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenisRef.current.on('scroll', (e) => {
      // You can add any scroll event handlers here if needed
      // console.log(e);
    });

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return lenisRef.current;
};

export default useLenis;
