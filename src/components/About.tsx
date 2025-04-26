
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm Sandeep Raj Saravanan</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate and detail-driven developer who loves crafting smart, scalable digital experiences.
              I'm currently pursuing my B.Tech in Computer Science and Engineering (Core) at SRM University, Kattankulathur, 
              and hold an RHCSA (Red Hat Certified System Administrator) certification.
            </p>
            <p className="text-gray-600 mb-6">
              My expertise spans full-stack development, AI & ML applications, IoT systems, and secure backend solutions.
              I'm highly skilled in languages like C, C++, Java, and Python, and I'm fluent in technologies like Linux, SQL, DBMS, 
              and problem-solving algorithms. Fluency in multiple languages — English, French, Spanish, and basic German — 
              helps me collaborate across cultures.
            </p>
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
