
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">Sandeep Raj Saravanan</Link>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-purple-600 transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-purple-600 transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="hover:text-purple-600 transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-purple-600 transition-colors">Contact</a>
        </nav>
        <Button onClick={(e: React.MouseEvent) => handleScroll(e as React.MouseEvent<HTMLAnchorElement>, "contact")} className="bg-purple-600 hover:bg-purple-700">
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;
