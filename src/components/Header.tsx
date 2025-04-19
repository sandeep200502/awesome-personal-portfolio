
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">John Doe</Link>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
