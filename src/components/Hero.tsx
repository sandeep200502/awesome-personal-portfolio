
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/60 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-text-gradient bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-[length:200%_auto] bg-clip-text text-transparent"
        >
          Sandeep Raj Saravanan
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            B.Tech CSE (Core) Student | RHCSA Certified | Web Developer | AI & ML Learner | Interested in IoT
          </p>
          <div className="text-lg text-gray-500">
            <p>SRM University, Kattankulathur</p>
            <p>B.Tech - Computer Science and Engineering (Core)</p>
            <p>2023 – 2027</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center mt-8"
        >
          <a href="#projects" className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            View My Work
          </a>
          <a href="#about" className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
            About Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
