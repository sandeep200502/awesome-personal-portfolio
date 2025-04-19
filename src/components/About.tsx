
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hello, I'm John Doe</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with 5 years of experience in creating 
              beautiful and functional web applications. I specialize in React, Node.js, 
              and modern web technologies.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or sharing my knowledge through technical writing.
            </p>
            <a 
              href="/resume.pdf" 
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
