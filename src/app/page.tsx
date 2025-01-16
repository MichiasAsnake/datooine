'use client';
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import SpaceParticles from "../components/SpaceParticles";
import AboutUs from "../components/AboutUs";
import Capabilities from "../components/Capabilities";
import Projects from "../components/Projects";
import News from "../components/News";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <main id="hero" className="min-h-screen gradient-bg relative overflow-hidden">
        <SpaceParticles />

        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
          <motion.h1 
            className="text-7xl md:text-9xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            M<span className="text-primary">O</span>
            <motion.span 
              className="inline-block w-24 h-24 md:w-32 md:h-32 animate-float"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Logo />
            </motion.span>
            NAR
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-center text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI for tyre solutions
          </motion.p>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Explore Solutions
            </button>
          </motion.div>
        </div>
      </main>

      {/* Other Sections */}
      <div className="bg-gradient-to-b from-primary/30 to-secondary/30">
        <AboutUs />
      </div>
      <div className="bg-gradient-to-b from-secondary/30 to-accent/30">
        <Capabilities />
      </div>
      <div className="bg-gradient-to-b from-accent/30 to-primary/30">
        <Projects />
      </div>
      <div className="bg-gradient-to-b from-primary/30 to-secondary/30">
        <News />
      </div>
      <div className="bg-gradient-to-b from-secondary/30 to-black">
        <Contact />
      </div>
    </div>
  );
}
