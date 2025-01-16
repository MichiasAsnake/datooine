'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';

const Contact = () => {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div className="bg-primary/10 p-12 rounded-3xl">
          <motion.h2
            className="text-5xl font-bold text-primary font-mono mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            CONTACT US
          </motion.h2>
          
          <motion.div
            className="relative w-full max-w-[300px] mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/astronaut-paper.svg"
              alt="Astronaut with paper plane"
              width={300}
              height={300}
              className="w-full"
            />
          </motion.div>
        </div>

        {/* Right content */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <textarea
                placeholder="Write us"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-full transition-colors"
            >
              Send
            </button>
          </motion.form>
        </div>
      </div>

      <div className="mt-20 text-center">
        <motion.div
          className="inline-flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary">
            Via Coluccio Salutati, 7, Milano, Italy
          </p>
          <a 
            href="mailto:sales@datooine.it"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            sales@datooine.it
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact; 