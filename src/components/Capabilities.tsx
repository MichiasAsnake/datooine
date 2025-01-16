'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import CloudIcon from '@mui/icons-material/Cloud';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const capabilities = [
  {
    icon: PsychologyIcon,
    title: 'AI',
    description: 'Artificial Intelligence improves efficiency, automates work processes, increases productivity, and drives data-driven decision-making.',
    color: 'text-primary',
  },
  {
    icon: VisibilityIcon,
    title: 'Scraping',
    description: 'Web scraping is essential for collecting data from various websites, providing valuable information for market analysis and competitive strategy.',
    color: 'text-secondary',
  },
  {
    icon: StorageIcon,
    title: 'Big Data',
    description: 'Big Data allows organizations to analyze large volumes of data to gain insights that drive strategic and operational decisions.',
    color: 'text-accent',
  },
  {
    icon: MemoryIcon,
    title: 'Data Intelligence',
    description: 'Data intelligence transforms vast amounts of raw data into meaningful information, guiding strategic decisions and improving business performance.',
    color: 'text-primary',
  },
  {
    icon: CloudIcon,
    title: 'Cloud',
    description: 'Cloud computing in business offers scalability, flexibility, and data accessibility, reducing IT costs and supporting collaboration and innovation.',
    color: 'text-secondary',
  },
  {
    icon: AutoFixHighIcon,
    title: 'Generative AI',
    description: 'Generative AI can create new content or data, such as product designs or marketing strategies, opening new opportunities for business and innovation.',
    color: 'text-accent',
  },
];

const Capabilities = () => {
  return (
    <Section id="capabilities" className="bg-gray-50">
      <div className="text-center mb-12">
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          WHAT MAKES US DIFFERENT
        </motion.p>
        <motion.h2
          className="text-5xl font-bold text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Capabilities
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            className="bg-white p-8 rounded-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <capability.icon className={`w-20 h-20 mx-auto mb-6 ${capability.color}`} sx={{ fontSize: 80 }} />
            <h3 className="text-2xl font-bold mb-4 text-black">{capability.title}</h3>
            <p className="text-gray-600 leading-relaxed">{capability.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Capabilities; 