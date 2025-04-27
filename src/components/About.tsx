
import { Download } from "lucide-react";
import { generateResumePDF } from "./ResumeContent";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    generateResumePDF();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // When 20% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`aspect-square rounded-2xl overflow-hidden ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm Sandeep Raj Saravanan</h3>
            <p className="mb-6">
              I'm a passionate and detail-driven developer who loves crafting smart, scalable digital experiences.
              I'm currently pursuing my B.Tech in Computer Science and Engineering (Core) at SRM University, Kattankulathur, 
              and hold an RHCSA (Red Hat Certified System Administrator) certification.
            </p>
            <p className="mb-6">
              My expertise spans full-stack development, AI & ML applications, IoT systems, and secure backend solutions.
              I'm highly skilled in languages like C, C++, Java, and Python, and I'm fluent in technologies like Linux, SQL, DBMS, 
              and problem-solving algorithms. Fluency in multiple languages — English, French, Spanish, and basic German — 
              helps me collaborate across cultures.
            </p>
            <button 
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
