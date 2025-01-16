'use client';
import { motion } from 'framer-motion';
import Section from './Section';
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const news = [
  {
    image: '/images/pexels-negativespace-177557.jpg',
    title: 'Perspectives on the Evolution of ChatGPT and its LLM brothers',
    description: 'As AI advances, the focus may shift from developing ever-larger LLMs like ChatGPT to prioritizing practical, economically sustainable applications.',
    date: 'June 11, 2024',
    author: 'Datooine',
  },
  {
    image: '/images/pexels-arteeem-3095621.jpg',
    title: 'How AI is Revolutionizing the Automotive Industry',
    description: 'Artificial Intelligence is transforming the automotive sector, enhancing production, road safety, and the driving experience.',
    date: 'June 6, 2024',
    author: 'Datooine',
  },
  {
    image: '/images/pexels-ketchumcommunity-1464196.jpg',
    title: 'Artificial Intelligence and Innovation in Italy',
    description: 'Artificial Intelligence is driving innovation in Italy, creating new growth opportunities for businesses and transforming the economic landscape.',
    date: 'June 6, 2024',
    author: 'Datooine',
  },
  {
    image: '/images/pexels-markusspiske-3970331.jpg',
    title: 'The Future of Machine Learning in Business',
    description: 'Exploring how machine learning is reshaping business strategies and creating new opportunities for growth and innovation across industries.',
    date: 'June 4, 2024',
    author: 'Datooine',
  },
  {
    image: '/images/pexels-olly-3761509.jpg',
    title: 'Advanced Data Analytics: Beyond the Basics',
    description: 'Deep dive into how modern businesses are leveraging advanced data analytics to gain competitive advantages and drive decision-making.',
    date: 'June 2, 2024',
    author: 'Datooine',
  },
  {
    image: '/images/pexels-mjlo-2872418.jpg',
    title: 'AI-Powered Cybersecurity Solutions',
    description: 'How artificial intelligence is strengthening cybersecurity measures and protecting businesses from evolving digital threats.',
    date: 'May 30, 2024',
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

      <div className="max-w-6xl mx-auto">
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
                <h3 className="text-xl font-bold mb-3 text-black line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.date}</span>
                  <div className="flex items-center">
                    <AccountCircleIcon className="w-5 h-5 mr-2 text-gray-500" />
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default News; 