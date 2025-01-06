import { useState, useLayoutEffect } from 'react';

const TABLET = 768;
const DESKTOP = 1024;

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { width } = size;

  const isMobile = width < TABLET;
  const isTablet = width >= TABLET && width < DESKTOP;
  const isDesktop = width >= DESKTOP;

  return {
    size,
    isMobile,
    isTablet,
    isDesktop,
  };
};
