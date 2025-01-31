import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/animations/loading-animation.json';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background flex flex-col items-center justify-center"
    >
      <div className="w-32 h-32">
        <Lottie 
          animationData={loadingAnimation} 
          loop={true}
          className="w-full h-full"
        />
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-1 bg-primary mt-8 rounded-full"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-primary font-mono"
      >
        Building Experience...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
