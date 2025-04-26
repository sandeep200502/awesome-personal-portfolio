
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/60 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-size-200 animate-gradient-x bg-clip-text text-transparent"
        >
          CRAFTING DIGITAL EXPERIENCE
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 mb-12"
        >
          B.Tech CSE (Core) Student | RHCSA Certified | Web Developer | AI & ML Learner | Interested in IoT
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a href="#projects" className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            View My Work
          </a>
          <a href="#about" className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            About Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
