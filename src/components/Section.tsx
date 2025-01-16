'use client';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
  bgColor?: string;
}

const Section = ({ children, className = '', id, bgColor = 'bg-white' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`w-full ${bgColor} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section; 