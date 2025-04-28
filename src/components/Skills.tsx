
import { Award, Trophy, GraduationCap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Node.js", "MySQL", "PostgreSQL, MongoDB", "Flask", "RESTful APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Agile Methodologies"]
    }
  ];

  const certifications = [
    {
      title: "RHCSA (Red Hat Certified System Administrator)",
      validity: "April 2025 - April 2028",
      description: "Mastery of foundational Linux system administration skills, including RHEL system configurations and cloud-based practice environments.",
      verifyLink: "https://www.credly.com/badges/06968826-f0aa-4e68-b1de-bb4a8c816b72",
      icon: <Award className="w-6 h-6 text-purple-600" />
    },
    {
      title: "DBMS Course – Master the Fundamentals and Advanced Concepts (Scaler)",
      validity: "April 2025",
      description: "Real-world SQL queries, joins, subqueries, system design skills, and FAANG-level interview preparation.",
      verifyLink: "https://moonshot.scaler.com/s/li/zzPnbUdpyq",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Problem Solving, C# (Basics), SQL (Basic to Advanced) (HackerRank)",
      validity: "April 2025",
      description: "Problem Solving: Data Structures, Algorithms, Optimization\nC# Basics: OOP principles, Control structures, Classes\nSQL: Advanced querying, joins, aggregation, window functions, CTEs.",
      verifyLink: "https://www.hackerrank.com/profile/Sandeep0212",
      icon: <Trophy className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section id="skills" className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-8">Certifications</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                {cert.icon}
                <div>
                  <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                  <p className="text-sm text-purple-600 mb-2">{cert.validity}</p>
                  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-600 hover:text-purple-700 underline"
                  >
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
