import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

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
            <main>
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
