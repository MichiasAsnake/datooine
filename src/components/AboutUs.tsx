'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HubIcon from '@mui/icons-material/Hub';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const AboutUs = () => {
  return (
    <Section id="about" className="min-h-screen">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Us & Our Platform
        </motion.h2>
      </div>

      <div className="space-y-12">
        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-50 p-12 rounded-3xl">
            <motion.h3 
              className="text-3xl font-bold text-black mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Who We Are
            </motion.h3>
            
            <motion.p 
              className="text-gray-700 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are a team of passionate, brilliant, and young professionals with significant 
              experience in business processes. Our team is made up of expert individuals 
              who combine the freshness of innovative ideas with the wisdom derived from 
              years of field experience.
            </motion.p>
          </div>

          <motion.div 
            className="bg-primary/20 p-12 rounded-3xl flex justify-center items-center relative h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <BusinessIcon className="text-primary absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" sx={{ fontSize: 100 }} />
              <GroupsIcon className="text-secondary absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2" sx={{ fontSize: 100 }} />
              <RocketLaunchIcon className="text-accent absolute bottom-1/4 center transform -translate-y-1/2" sx={{ fontSize: 120 }} />
            </div>
          </motion.div>
        </div>

        {/* Platform Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="bg-primary/20 p-12 rounded-3xl flex justify-center items-center relative h-[400px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <HubIcon className="text-primary absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" sx={{ fontSize: 100 }} />
              <DataObjectIcon className="text-secondary absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2" sx={{ fontSize: 100 }} />
              <PrecisionManufacturingIcon className="text-accent absolute bottom-1/4 center transform -translate-y-1/2" sx={{ fontSize: 120 }} />
            </div>
          </motion.div>

          <div className="bg-gray-50 p-12 rounded-3xl">
            <motion.h3 
              className="text-3xl font-bold text-black mb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Platform
            </motion.h3>
            
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
      </div>
    </Section>
  );
};

export default AboutUs; 