
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Function to handle scroll or navigation based on current page
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home with section hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">Sandeep Raj Saravanan</Link>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" onClick={(e) => handleNavigation(e, "about")} className="hover:text-purple-600 transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleNavigation(e, "skills")} className="hover:text-purple-600 transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleNavigation(e, "projects")} className="hover:text-purple-600 transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => handleNavigation(e, "contact")} className="hover:text-purple-600 transition-colors">Contact</a>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>Get in Touch</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
