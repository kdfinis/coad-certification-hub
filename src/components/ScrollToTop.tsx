import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Add page transition animation class to body
    document.body.classList.add('page-transitioning');
    
    // Remove the class after animation completes
    const timeout = setTimeout(() => {
      document.body.classList.remove('page-transitioning');
    }, 600);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
