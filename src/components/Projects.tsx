'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const projects = [
  {
    icon: ShowChartIcon,
    title: 'FALCON',
    description: 'Falcon leverages AI to identify identical or similar products in client catalogs or on competitors\' sites and marketplaces, while also monitoring their daily prices. Additionally, it uses generative AI for keyword and content optimization analyses to improve rankings and boost sales.',
    color: 'text-primary',
  },
  {
    icon: CameraAltIcon,
    title: 'ENVISION',
    description: 'The first anomaly detection tool for surfaces of any size or material. Using proprietary algorithms, it finds and classifies even the smallest surface anomalies with near 100% accuracy. It also detects production failures by analyzing production data. Patent registration is pending.',
    color: 'text-secondary',
  },
  {
    icon: DirectionsCarIcon,
    title: 'STREET PRICE',
    description: 'StreetPrice is an AI-based system that analyzes millions of online ads to provide vehicle price assessments, helping companies optimize their online sales strategy. For dealers in the auto and motorcycle market',
    color: 'text-accent',
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-white">
      <div className="text-center mb-12">
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          IDEAS INCUBATOR & INNOVATION PROJECT LEADER
        </motion.p>
        <motion.h2
          className="text-5xl font-bold text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Projects
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-primary/10 p-8 rounded-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <project.icon className={`w-20 h-20 mb-6 ${project.color}`} sx={{ fontSize: 80 }} />
            <h3 className="text-2xl font-bold mb-4 text-black font-mono">{project.title}</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects; 