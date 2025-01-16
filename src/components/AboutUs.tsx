'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <Section id="about" className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Us Section */}
        <div className="flex flex-col justify-center">
          <motion.h2 
            className="text-4xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a team of passionate, brilliant, and young professionals with significant 
            experience in business processes. Our team is made up of expert individuals 
            who combine the freshness of innovative ideas with the wisdom derived from 
            years of field experience.
          </motion.p>

          <motion.button
            className="inline-flex items-center text-black font-semibold hover:text-gray-600 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

        <motion.div 
          className="bg-[#FFA45B] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[400px]">
            <Image
              src="/images/astro.jpg"
              alt="Astronaut in space"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Platform Section */}
        <motion.div 
          className="bg-[#FFA45B] rounded-3xl overflow-hidden md:order-1 order-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[400px]">
            <Image
              src="/images/world.jpg"
              alt="Global technology network"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <div className="flex flex-col justify-center md:order-2 order-1">
          <motion.h2 
            className="text-4xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Platform
          </motion.h2>
          
          <motion.p 
            className="text-gray-700 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

export default AboutUs; 