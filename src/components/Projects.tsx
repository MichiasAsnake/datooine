'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';

const projects = [
  {
    icon: '/icons/chart-icon.svg',
    title: 'FALCON',
    description: 'Falcon leverages AI to identify identical or similar products in client catalogs or on competitors\' sites and marketplaces, while also monitoring their daily prices. Additionally, it uses generative AI for keyword and content optimization analyses to improve rankings and boost sales.',
  },
  {
    icon: '/icons/camera-icon.svg',
    title: 'ENVISION',
    description: 'The first anomaly detection tool for surfaces of any size or material. Using proprietary algorithms, it finds and classifies even the smallest surface anomalies with near 100% accuracy. It also detects production failures by analyzing production data. Patent registration is pending.',
  },
  {
    icon: '/icons/car-icon.svg',
    title: 'STREET PRICE',
    description: 'StreetPrice is an AI-based system that analyzes millions of online ads to provide vehicle price assessments, helping companies optimize their online sales strategy. For dealers in the auto and motorcycle market',
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-gray-50">
      <div className="text-center mb-16">
        <motion.p
          className="text-gray-600 mb-4 uppercase tracking-wider text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          IDEAS INCUBATOR & INNOVATION PROJECT LEADER
        </motion.p>
        <motion.h2
          className="text-4xl font-bold text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Projects
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 mb-6">
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono tracking-wider">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects; 