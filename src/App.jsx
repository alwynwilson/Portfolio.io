import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <ClipLoader color="#F97316" size={80} loading={isLoading} />
        </div>
      ) : (
        <main className="font-light text-white antialiased selection:bg-orange-300 selection:text-black">
          <Navbar />
          <Hero />
          <Marquee />
          <Projects />
          <About />
          <Work />
          <Contact />
        </main>
      )}
    </>
  );
};

export default App;
