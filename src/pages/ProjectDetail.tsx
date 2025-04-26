
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const projectData = {
  "Environment Management System (IoT)": {
    title: "Environment Management System (IoT)",
    description: "Smart environmental monitoring system using IoT technology for real-time tracking of temperature, humidity, and motion.",
    images: [
      "public/lovable-uploads/92c2e7ec-df92-4537-ab0f-04bd0d75707f.png",
      "public/lovable-uploads/cfa454d3-12ea-470f-8ddd-018b247d7523.png",
      "public/lovable-uploads/a2eb0c36-4175-4790-b178-79c30432f4e3.png"
    ],
    details: [
      "Developed using ESP32 microcontroller and various sensors",
      "Integrated DHT11 sensor for temperature and humidity monitoring",
      "Implemented PIR sensor for motion detection",
      "Real-time data transmission to cloud platform",
      "Alert system for environmental changes",
      "Mobile application interface for remote monitoring"
    ]
  }
};

const ProjectDetail = () => {
  const { title } = useParams();
  const project = projectData[title as keyof typeof projectData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          {project.title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {project.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img src={img} alt={`Project image ${index + 1}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg mb-8"
        >
          {project.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.details.map((detail, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {detail}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
