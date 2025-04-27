import { Database, Thermometer, FileCode, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={cn(
        "group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500",
        index % 2 === 0 
          ? "transform translate-x-[-100px] opacity-0 " + (inView ? "animate-slide-in-left" : "") 
          : "transform translate-x-[100px] opacity-0 " + (inView ? "animate-slide-in-right" : "")
      )}
    >
      <Link to={`/project/${encodeURIComponent(project.title)}`}>
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
            {project.icon}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Smart Environmental Monitoring System Using IoT",
      description: "The Smart Environmental Monitoring System uses the power of the Internet of Things (IoT) to monitor temperature, humidity, and motion in real-time. By integrating a DHT11 temperature and humidity sensor and a PIR motion sensor with the ESP32 microcontroller, the system provides actionable data for environmental control and security. This system is fully cloud-integrated, offering remote access and control through the Blynk mobile app, allowing users to monitor conditions from anywhere at any time.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["IoT", "ESP32", "Sensors", "Real-time"],
      icon: <Thermometer className="w-8 h-8 text-purple-600" />,
      github: "https://github.com/sandeep200502/iot-environment",
      demo: "https://iot-environment-demo.vercel.app",
      images: [
        {
          title: "ESP32 Microcontroller",
          src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
          description: "The ESP32 is a powerful, low-cost microcontroller with built-in Wi-Fi and Bluetooth capabilities."
        },
        {
          title: "DHT11 Sensor",
          src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
          description: "The DHT11 sensor provides accurate temperature and humidity readings with digital output."
        },
        {
          title: "PIR Motion Sensor",
          src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
          description: "The PIR sensor detects motion by measuring infrared radiation changes in its field of view."
        }
      ],
      details: `
        # Project Overview
        The Smart Environmental Monitoring System uses IoT technology for real-time monitoring of environmental conditions and security.

        ## Key Features
        - Real-Time Environmental Monitoring with DHT11 sensor
        - Motion Detection using PIR sensor
        - ESP32 Microcontroller as central hub
        - Cloud Integration for data access
        - Blynk Mobile App Control
        - Smart Notifications and Alerts
        - Energy-efficient design
        - Scalable architecture

        ## Technical Implementation
        The system integrates various components:
        - ESP32 for processing and wireless communication
        - DHT11 for temperature/humidity sensing
        - PIR sensor for motion detection
        - Cloud platform for data storage and analysis
        - Mobile app for remote monitoring

        ## Future Enhancements
        - Integration of additional sensors
        - AI-powered predictive analytics
        - Voice assistant integration
        - Edge computing capabilities
        - Energy harvesting features
      `
    },
    {
      title: "Environment Management System (IoT)",
      description: "IoT system using DHT11 and PIR sensors for temperature, humidity, and motion tracking. Built a lightweight IoT solution with ESP32 microcontroller integrating DHT11 and PIR sensors. Real-time monitoring of environmental parameters like temperature, humidity, and movement detection. Ensured remote access and data logging features.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      images: [
        {
          title: "ESP32 Microcontroller",
          src: "esp32.jpg",
          description: "The ESP32 is a powerful, low-cost microcontroller with built-in Wi-Fi and Bluetooth capabilities, perfect for IoT applications."
        },
        {
          title: "DHT11 Sensor",
          src: "dht11.jpg",
          description: "The DHT11 sensor provides accurate temperature and humidity readings with digital output."
        },
        {
          title: "PIR Motion Sensor",
          src: "pir.jpg",
          description: "The PIR sensor detects motion by measuring infrared radiation changes in its field of view."
        }
      ],
      tags: ["IoT", "ESP32", "Sensors", "Real-time"],
      icon: <Thermometer className="w-8 h-8 text-purple-600" />,
      github: "https://github.com/sandeep200502/iot-environment",
      demo: "https://iot-environment-demo.vercel.app",
      details: `
        The Environment Management System is built using the following components:
        
        - ESP32 Microcontroller: Acts as the brain of the system, processing sensor data and managing communications
        - DHT11 Sensor: Provides temperature and humidity measurements
        - PIR Motion Sensor: Detects movement in the monitored area
        
        Key Features:
        - Real-time temperature and humidity monitoring
        - Motion detection and alerting
        - Data logging and visualization
        - Remote monitoring via web interface
        - Low power consumption design
      `
    },
    {
      title: "HealthCare Management System",
      description: "Java-based system for efficient healthcare data and appointment management. Developed a robust Java application for hospitals and clinics to manage patient records, doctor appointments, billing, and medical histories. Implemented secure authentication and optimized database handling for efficiency.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Java", "Database", "Healthcare"],
      icon: <FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    },
    {
      title: "Event Management System",
      description: "Interface for booking and managing events with relational database support. Designed a full-stack system allowing users to book, organize, and manage events seamlessly. Integrated database management for efficient record-keeping and ticketing system.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      tags: ["Full Stack", "Database", "Events"],
      icon: <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          ref={ref} 
          className={cn(
            "text-4xl font-bold text-center mb-16 transform opacity-0 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "translate-y-10"
          )}
        >
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
