import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import HeroCanvas from './HeroCanvas';

const Hero = () => {
  return (
    <section className="h-screen relative">
      <Canvas className="absolute inset-0">
        <HeroCanvas />
      </Canvas>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          Hi, I'm <span className="text-primary">Your Name</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full Stack Developer & Creative Coder
        </motion.p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
        >
          View My Work
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
