
const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Next.js", "TypeScript", "PostgreSQL"]
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern technologies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["React", "Tailwind CSS", "Vite"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
