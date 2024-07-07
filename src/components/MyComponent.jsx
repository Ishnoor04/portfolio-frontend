import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAnimationComplete = () => {
    // Animation is complete, you can scale and remove the div
    setIsVisible(false);
  };

  return (
    <div className='h-[100vh]'>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 5 }}
            onAnimationComplete={handleAnimationComplete}
          >
            {/* Your content goes here */}
            <div>This is your animated div</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyComponent;
