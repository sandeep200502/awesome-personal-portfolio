
import { Award, Lightbulb, FlaskRound } from "lucide-react";

const Workshops = () => {
  const events = [
    {
      title: "ACE HACKS – 24-Hour Hackathon",
      description: "Selected among the top 26 teams out of 300+ participants for designing a cost- and material-efficient pipeline routing solution with a functional frontend prototype.",
      icon: <Award className="w-12 h-12 text-purple-600" />
    },
    {
      title: "Capacity Building Workshop – "Unleash Your Potential"",
      description: "Focused on self-discovery, entrepreneurial thinking, life mapping, SMART goal development, and vision board creation to enhance personal and professional growth.",
      icon: <Lightbulb className="w-12 h-12 text-purple-600" />
    },
    {
      title: "IoRT Workshop (International Conference on IoT - ICIOT 2025)",
      description: "Gained hands-on experience with IoT-based intelligent robotic systems and IoT kits through practical sessions.",
      icon: <FlaskRound className="w-12 h-12 text-purple-600" />
    }
  ];

  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Workshops & Hackathons</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.title} className="p-6 bg-purple-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                {event.icon}
                <h3 className="text-xl font-semibold mt-4 mb-3">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
