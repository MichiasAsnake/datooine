'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';

const news = [
  {
    image: '/news/chatgpt.jpg',
    title: 'Perspectives on the Evolution of ChatGPT and its LLM brothers',
    description: 'As AI advances, the focus may shift from developing ever-larger LLMs like ChatGPT to prioritizing practical, economically sustainable applications.',
    date: 'June 11, 2024',
    author: 'Datooine',
  },
  {
    image: '/news/automotive.jpg',
    title: 'How AI is Revolutionizing the Automotive Industry',
    description: 'Artificial Intelligence is transforming the automotive sector, enhancing production, road safety, and the driving experience.',
    date: 'June 6, 2024',
    author: 'Datooine',
  },
  {
    image: '/news/italy.jpg',
    title: 'Artificial Intelligence and Innovation in Italy',
    description: 'Artificial Intelligence is driving innovation in Italy, creating new growth opportunities for businesses and transforming the economic landscape.',
    date: 'June 6, 2024',
    author: 'Datooine',
  },
];

const News = () => {
  return (
    <Section id="news" className="bg-gray-50">
      <div className="text-center mb-16">
        <motion.h2
          className="text-5xl font-bold text-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          News and Updates
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          STAY INFORMED ABOUT OUR LATEST NEWS
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white rounded-3xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-black">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{item.date}</span>
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Author"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span>{item.author}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default News; 