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
      title: "AI Based Face Recognition System",
      description: "Real-time facial identification system using OpenCV and CNN for lab security. Developed an AI-driven system capable of detecting and recognizing faces in real-time to enhance lab security. Implemented using Python, OpenCV, and Convolutional Neural Networks (CNNs). Achieved high accuracy rates in live environments.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      tags: ["AI", "Python", "OpenCV", "CNN"],
      icon: <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    },
    {
      title: "Environment Management System (IoT)",
      description: "IoT system using DHT11 and PIR sensors for temperature, humidity, and motion tracking. Built a lightweight IoT solution with ESP32 microcontroller integrating DHT11 and PIR sensors. Real-time monitoring of environmental parameters like temperature, humidity, and movement detection. Ensured remote access and data logging features.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      images: [
        {
          title: "ESP32 Microcontroller",
          src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
          description: "The ESP32 is a powerful, low-cost microcontroller with built-in Wi-Fi and Bluetooth capabilities, perfect for IoT applications."
        },
        {
          title: "DHT11 Sensor",
          src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
          description: "The DHT11 sensor provides accurate temperature and humidity readings with digital output."
        },
        {
          title: "PIR Motion Sensor",
          src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
          description: "The PIR sensor detects motion by measuring infrared radiation changes in its field of view."
        }
      ],
      tags: ["IoT", "ESP32", "Sensors", "Real-time"],
      icon: <Thermometer className="w-8 h-8 text-purple-600" />,
      github: "https://github.com/sandeep200502/iot-environment",
      demo: "https://iot-environment-demo.vercel.app",
      fullDescription: `
        <h2 class="text-2xl font-bold mb-4">Project Overview</h2>
        <p class="mb-6">The Smart Environmental Monitoring System uses the power of the Internet of Things (IoT) to monitor temperature, humidity, and motion in real-time. By integrating a DHT11 temperature and humidity sensor and a PIR motion sensor with the ESP32 microcontroller, the system provides actionable data for environmental control and security. This system is fully cloud-integrated, offering remote access and control through the Blynk mobile app, allowing users to monitor conditions from anywhere at any time.</p>

        <h2 class="text-2xl font-bold mb-4">Key Features and Highlights</h2>
        
        <h3 class="text-xl font-semibold mb-2">Real-Time Environmental Monitoring</h3>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2">Temperature and Humidity Tracking: The DHT11 sensor continuously measures environmental temperature and humidity, making it ideal for maintaining comfort or preventing issues like mold growth in spaces like homes, offices, and storage areas.</li>
          <li class="mb-2">Motion Detection: The PIR sensor detects movement in the monitored area, providing an added layer of security by sending alerts when unusual activity is detected.</li>
        </ul>

        <h3 class="text-xl font-semibold mb-2">ESP32 Microcontroller</h3>
        <p class="mb-4">The ESP32 microcontroller acts as the central hub, handling sensor data collection, processing, and communication with cloud platforms. With built-in Wi-Fi and Bluetooth capabilities, the ESP32 allows seamless wireless integration for remote monitoring.</p>

        <h3 class="text-xl font-semibold mb-2">Cloud Integration</h3>
        <p class="mb-4">Data from the sensors is transmitted to the cloud in real-time, where it can be accessed and analyzed via web dashboards or the mobile app. The cloud integration provides the flexibility of accessing historical data for analysis and ensures that the system is always connected, even when you're on the move.</p>

        <h3 class="text-xl font-semibold mb-2">Blynk Mobile App Control</h3>
        <p class="mb-4">The Blynk app offers a user-friendly interface for controlling and visualizing sensor data. Users can receive alerts, check environmental conditions, and make adjustments remotely, ensuring convenience and peace of mind.</p>

        <div class="grid md:grid-cols-3 gap-6 my-8">
          <div class="animate-fade-in">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="ESP32" class="rounded-lg shadow-lg mb-2" />
            <p class="text-sm text-gray-600">ESP32 Microcontroller</p>
          </div>
          <div class="animate-fade-in delay-100">
            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" alt="DHT11" class="rounded-lg shadow-lg mb-2" />
            <p class="text-sm text-gray-600">DHT11 Temperature & Humidity Sensor</p>
          </div>
          <div class="animate-fade-in delay-200">
            <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" alt="PIR" class="rounded-lg shadow-lg mb-2" />
            <p class="text-sm text-gray-600">PIR Motion Sensor</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold mb-4">Challenges and Solutions</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-semibold mb-2">Sensor Calibration and Accuracy</h3>
            <p>One of the primary challenges was calibrating the sensors for accurate readings. The DHT11 sensor in particular has limitations in its accuracy and range. Fine-tuning its calibration to match environmental standards required extensive testing and adjustments.</p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-2">Power Management</h3>
            <p>Ensuring low power consumption was crucial, especially since the system is intended for long-term, continuous deployment. Balancing the ESP32's Wi-Fi performance with energy efficiency required optimizing data transmission intervals and using deep sleep modes when the system is idle.</p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-2">Wireless Connectivity Issues</h3>
            <p>Maintaining a stable Wi-Fi connection in environments with fluctuating network strength or interference posed challenges. Strategies such as implementing a buffer for data transmission and reconnecting to the network during outages were necessary to ensure consistent data delivery.</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold my-4">Future Enhancements</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>Integration with AI for predictive analytics</li>
          <li>Voice assistant compatibility</li>
          <li>Edge computing implementation</li>
          <li>Energy harvesting capabilities</li>
          <li>Additional sensor integration</li>
        </ul>`
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
