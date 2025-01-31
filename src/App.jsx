import { useState, useEffect } from 'react';
import { AnimatePresence } from '/framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import './styles/globals.css';

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
