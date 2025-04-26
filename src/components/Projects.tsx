
import { Database, Thermometer, Motion, Java, Event } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Based Face Recognition System",
      description: "Real-time facial identification system using OpenCV and CNN for lab security. Developed an AI-driven system capable of detecting and recognizing faces in real-time to enhance lab security. Implemented using Python, OpenCV, and Convolutional Neural Networks (CNNs). Achieved high accuracy rates in live environments.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      tags: ["AI", "Python", "OpenCV", "CNN"],
      icon: <Database className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Environment Management System (IoT)",
      description: "IoT system using DHT11 and PIR sensors for temperature, humidity, and motion tracking. Built a lightweight IoT solution with ESP32 microcontroller integrating DHT11 and PIR sensors. Real-time monitoring of environmental parameters like temperature, humidity, and movement detection. Ensured remote access and data logging features.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      tags: ["IoT", "ESP32", "Sensors", "Real-time"],
      icon: <Thermometer className="w-8 h-8 text-purple-600" />
    },
    {
      title: "HealthCare Management System",
      description: "Java-based system for efficient healthcare data and appointment management. Developed a robust Java application for hospitals and clinics to manage patient records, doctor appointments, billing, and medical histories. Implemented secure authentication and optimized database handling for efficiency.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Java", "Database", "Healthcare"],
      icon: <Java className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Event Management System",
      description: "Interface for booking and managing events with relational database support. Designed a full-stack system allowing users to book, organize, and manage events seamlessly. Integrated database management for efficient record-keeping and ticketing system.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Full Stack", "Database", "Events"],
      icon: <Event className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
