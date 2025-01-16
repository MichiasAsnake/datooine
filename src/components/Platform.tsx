'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';

const Platform = () => {
  return (
    <Section id="platform" className="min-h-screen">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <motion.div 
          className="bg-primary/20 p-12 rounded-3xl flex justify-center items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/astronaut-coffee.svg"
            alt="Astronaut with coffee"
            width={300}
            height={300}
            className="w-full max-w-[300px]"
          />
        </motion.div>

        {/* Right content */}
        <div className="bg-gray-50 p-12 rounded-3xl">
          <motion.h2 
            className="text-5xl font-bold text-black mb-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Platform
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our platform, a powerful data analysis tool, leverages proprietary Machine 
            Learning and Deep Learning algorithms, scraping tools, and big data 
            technologies to acquire, preprocess, and enrich data from both internal 
            and external company sources.
          </motion.p>

          <motion.button
            className="inline-flex items-center text-black font-semibold hover:text-gray-600 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            READ MORE
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </Section>
  );
};

export default Platform; 