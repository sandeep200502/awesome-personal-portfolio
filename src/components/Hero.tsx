
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white pt-16">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          CRAFTING DIGITAL EXPERIENCE
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          B.Tech CSE (Core) Student | RHCSA Certified | Web Developer | AI & ML Learner | Interested in IoT
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            View My Work
          </a>
          <a href="#about" className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
