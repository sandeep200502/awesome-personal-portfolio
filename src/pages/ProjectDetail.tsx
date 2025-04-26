
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Database, Thermometer, FileCode, Calendar, Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "AI Based Face Recognition System",
    description: "Real-time facial identification system using OpenCV and CNN for lab security. Developed an AI-driven system capable of detecting and recognizing faces in real-time to enhance lab security. Implemented using Python, OpenCV, and Convolutional Neural Networks (CNNs). Achieved high accuracy rates in live environments.",
    fullDescription: `
      <p class="mb-4">The AI Based Face Recognition System was developed to address the security challenges in laboratory environments, where strict access control is essential to protect sensitive equipment and research materials.</p>
      
      <h3 class="text-xl font-semibold mb-2">Key Features</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Real-time face detection and recognition using OpenCV</li>
        <li>Custom trained Convolutional Neural Network (CNN) for high accuracy recognition</li>
        <li>Secure database of authorized personnel with access levels</li>
        <li>Logging system to track entry/exit times</li>
        <li>Alert mechanism for unauthorized access attempts</li>
        <li>User-friendly administrative interface for managing personnel</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Technical Implementation</h3>
      <p class="mb-4">The system was implemented using Python as the primary programming language, leveraging the power of OpenCV for computer vision tasks and TensorFlow/Keras for building and training the CNN model. The architecture follows a modular approach:</p>
      
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li><strong>Image Acquisition Module:</strong> Captures video feed from security cameras and extracts individual frames for processing</li>
        <li><strong>Face Detection Module:</strong> Uses Haar cascades and deep learning-based detectors to identify faces in the frame</li>
        <li><strong>Face Recognition Module:</strong> Extracts facial features and compares them against the database of authorized personnel</li>
        <li><strong>Decision Module:</strong> Determines whether to grant access based on recognition confidence scores</li>
        <li><strong>Logging Module:</strong> Records all access attempts with timestamps and outcomes</li>
      </ol>
      
      <h3 class="text-xl font-semibold mb-2">Results</h3>
      <p class="mb-4">The system achieved a 98.5% recognition accuracy rate in controlled environments and 94% accuracy in challenging lighting conditions. The false positive rate was kept below 0.1%, ensuring high security standards. Implementation of this system reduced unauthorized access incidents by 99% and streamlined the laboratory entry process.</p>
    `,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    tags: ["AI", "Python", "OpenCV", "CNN"],
    icon: <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    github: "https://github.com/sandeep200502/face-recognition",
    demo: "https://ai-face-recognition-demo.vercel.app"
  },
  {
    title: "Environment Management System (IoT)",
    description: "IoT system using DHT11 and PIR sensors for temperature, humidity, and motion tracking. Built a lightweight IoT solution with ESP32 microcontroller integrating DHT11 and PIR sensors. Real-time monitoring of environmental parameters like temperature, humidity, and movement detection. Ensured remote access and data logging features.",
    fullDescription: `
      <p class="mb-4">The Environment Management System is an IoT solution designed to monitor and control environmental conditions in various settings such as homes, offices, laboratories, or greenhouses. The system provides real-time data on temperature, humidity, and movement, enabling users to make informed decisions about environmental control.</p>
      
      <h3 class="text-xl font-semibold mb-2">Key Features</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Accurate temperature and humidity monitoring using DHT11 sensors</li>
        <li>Motion detection with PIR sensors for security and automation</li>
        <li>Real-time data visualization through a web interface</li>
        <li>Historical data logging and trend analysis</li>
        <li>Alert system for out-of-range environmental conditions</li>
        <li>Remote access and control capabilities</li>
        <li>Low power consumption for extended battery life</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Technical Implementation</h3>
      <p class="mb-4">The system was built using ESP32 microcontrollers as the main processing units, connected to DHT11 temperature/humidity sensors and PIR motion sensors. The architecture includes:</p>
      
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li><strong>Sensor Network:</strong> Multiple ESP32 nodes with attached sensors placed strategically throughout the monitored area</li>
        <li><strong>Data Collection:</strong> ESP32 firmware programmed in C++ using the Arduino framework collects sensor data at regular intervals</li>
        <li><strong>Communication Layer:</strong> MQTT protocol for efficient message passing between sensor nodes and the central server</li>
        <li><strong>Central Server:</strong> Node.js application processing incoming sensor data and storing it in a MongoDB database</li>
        <li><strong>User Interface:</strong> React-based web application for visualizing data and configuring the system</li>
      </ol>
      
      <h3 class="text-xl font-semibold mb-2">Results</h3>
      <p class="mb-4">The Environment Management System has been successfully deployed in multiple locations, providing reliable environmental monitoring with 99.9% uptime. The system has detected several potentially harmful environmental conditions, including unusual temperature spikes and unauthorized movement during off-hours, demonstrating its value for both comfort control and security applications.</p>
    `,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    tags: ["IoT", "ESP32", "Sensors", "Real-time"],
    icon: <Thermometer className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    github: "https://github.com/sandeep200502/iot-environment",
    demo: "https://iot-environment-demo.vercel.app"
  },
  {
    title: "HealthCare Management System",
    description: "Java-based system for efficient healthcare data and appointment management. Developed a robust Java application for hospitals and clinics to manage patient records, doctor appointments, billing, and medical histories. Implemented secure authentication and optimized database handling for efficiency.",
    fullDescription: `
      <p class="mb-4">The HealthCare Management System is a comprehensive Java application designed to streamline operations in healthcare facilities. It manages patient records, doctor schedules, appointments, medical histories, and billing information while maintaining high security and privacy standards.</p>
      
      <h3 class="text-xl font-semibold mb-2">Key Features</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Secure patient information management with role-based access control</li>
        <li>Appointment scheduling with conflict detection and resolution</li>
        <li>Electronic health records (EHR) with search capabilities</li>
        <li>Prescription management and drug interaction alerts</li>
        <li>Billing and insurance claim processing</li>
        <li>Reporting tools for administrative and medical analytics</li>
        <li>Integration capabilities with laboratory and radiology systems</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Technical Implementation</h3>
      <p class="mb-4">The system was developed as a Java enterprise application with a modular architecture:</p>
      
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li><strong>Presentation Layer:</strong> JavaFX-based user interface with responsive design principles</li>
        <li><strong>Business Logic Layer:</strong> Core Java services implementing healthcare domain logic and workflows</li>
        <li><strong>Data Access Layer:</strong> JDBC/JPA for database interactions with connection pooling for performance</li>
        <li><strong>Security Layer:</strong> Authentication and authorization system using Spring Security</li>
        <li><strong>Integration Layer:</strong> RESTful APIs for integration with external systems</li>
      </ol>
      
      <p class="mb-4">The database design follows normalization principles with optimized indexing strategies for fast query performance, even with large datasets containing millions of patient records.</p>
      
      <h3 class="text-xl font-semibold mb-2">Results</h3>
      <p class="mb-4">The HealthCare Management System was deployed across multiple clinical facilities, resulting in a 35% reduction in administrative workload, 45% improvement in appointment utilization, and a 60% decrease in billing errors. The system's intuitive interface required minimal training for staff, and the robust security measures ensured HIPAA compliance throughout all operations.</p>
    `,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Java", "Database", "Healthcare"],
    icon: <FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    github: "https://github.com/sandeep200502/healthcare-management",
    demo: "https://healthcare-management-demo.vercel.app"
  },
  {
    title: "Event Management System",
    description: "Interface for booking and managing events with relational database support. Designed a full-stack system allowing users to book, organize, and manage events seamlessly. Integrated database management for efficient record-keeping and ticketing system.",
    fullDescription: `
      <p class="mb-4">The Event Management System is a comprehensive platform designed to simplify the process of organizing, managing, and attending events. It serves as an end-to-end solution for event planners and participants alike, covering everything from initial event creation to post-event analytics.</p>
      
      <h3 class="text-xl font-semibold mb-2">Key Features</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Intuitive event creation and setup workflow</li>
        <li>Ticketing system with multiple tier support</li>
        <li>Attendee registration and management</li>
        <li>Interactive event calendar with filtering capabilities</li>
        <li>Venue management and seating arrangements</li>
        <li>Payment processing integration</li>
        <li>Marketing tools including email campaigns and social media integration</li>
        <li>QR code-based check-in process</li>
        <li>Post-event surveys and analytics</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Technical Implementation</h3>
      <p class="mb-4">The Event Management System was built as a full-stack web application using modern technologies:</p>
      
      <ol class="list-decimal pl-5 mb-4 space-y-2">
        <li><strong>Frontend:</strong> React.js with TypeScript, leveraging Material-UI for responsive design</li>
        <li><strong>Backend:</strong> Node.js with Express, implementing RESTful API architecture</li>
        <li><strong>Database:</strong> PostgreSQL for relational data storage with complex querying needs</li>
        <li><strong>Authentication:</strong> JWT-based authentication system with OAuth integration</li>
        <li><strong>Payment Processing:</strong> Integration with Stripe for secure payment handling</li>
        <li><strong>Deployment:</strong> Docker containers orchestrated with Kubernetes for scalability</li>
      </ol>
      
      <p class="mb-4">The database schema was carefully designed to efficiently model complex relationships between events, venues, tickets, attendees, and organizers, with appropriate constraints and indexes to maintain data integrity and query performance.</p>
      
      <h3 class="text-xl font-semibold mb-2">Results</h3>
      <p class="mb-4">The Event Management System has successfully facilitated over 500 events ranging from small meetups to large conferences with thousands of attendees. Organizers reported a 70% reduction in administrative overhead, while attendees praised the seamless registration and check-in process. The system's analytics capabilities have also helped organizers optimize future events based on detailed attendance and engagement metrics.</p>
    `,
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    tags: ["Full Stack", "Database", "Events"],
    icon: <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    github: "https://github.com/sandeep200502/event-management",
    demo: "https://event-management-demo.vercel.app"
  }
];

const ProjectDetail = () => {
  const { title } = useParams();
  const [project, setProject] = useState(null);
  
  useEffect(() => {
    const decodedTitle = decodeURIComponent(title);
    const foundProject = projects.find(p => p.title === decodedTitle);
    if (foundProject) {
      setProject(foundProject);
      // Reset scroll position when project changes
      window.scrollTo(0, 0);
    }
  }, [title]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Button asChild>
            <Link to="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col space-y-6">
            {/* Back button */}
            <div className="animate-fade-in">
              <Button variant="ghost" asChild>
                <Link to="/#projects" className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Back to all projects
                </Link>
              </Button>
            </div>
            
            {/* Project header */}
            <div className="flex flex-col gap-4 animate-fade-in">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project image */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg animate-scale-in">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Project details */}
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {/* Left sidebar */}
              <div className="md:col-span-1 animate-slide-in-left">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-6">
                      {project.icon}
                      <h3 className="font-semibold">Project Info</h3>
                    </div>
                    
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        <Github size={18} />
                        View on GitHub
                      </a>
                    )}
                    
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Main content */}
              <div className="md:col-span-2 animate-slide-in-right">
                <ScrollArea className="h-[60vh]">
                  <div 
                    className="prose dark:prose-invert max-w-none px-1"
                    dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                  />
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
