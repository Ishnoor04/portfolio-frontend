import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate preloading phase
  useEffect(() => {
    // Perform your preloading tasks here

    // Simulating a delay for demonstration purposes
    const preloadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout as needed

    // Clean up the timeout on component unmount or when preloading is complete
    return () => clearTimeout(preloadingTimeout);
  }, []);

  // Apply overflow styles to the body during preloading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className='h-[100vh]'>
          {/* Your preloader content goes here */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
            Loading...
          </motion.div>
        </div>
      ) : (
        <div>
          {/* Your main content goes here */}
          <h1>Your App Content</h1>
        </div>
      )}
    </div>
  );
};

export default Preloader;
