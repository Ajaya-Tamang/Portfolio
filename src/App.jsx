import { useState, useEffect } from 'react';
import { AnimatePresence } from '/srcframer-motion';
import { ThemeProvider } from './src/context/ThemeContext';
import Navbar from './src/components/Navbar/Navbar';
import Hero from './src/components/Hero/Hero';
import Hero from './src/components/Hero/Hero';
import Projects from './src/components/Projects/Projects';
import Skills from './src/components/Skills/Skills';
import About from './src/components/About/About';
import Contact from './src/components/Contact/Contact';
import CustomCursor from './src/components/CustomCursor/CustomCursor';
import LoadingScreen from './src/components/LoadingScreen/LoadingScreen';
import './src/styles/globals.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <ThemeProvider>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className="bg-background text-white">
            <Navbar />
            <main className="overflow-hidden">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
