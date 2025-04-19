
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:john@example.com" className="flex items-center gap-4 text-gray-600 hover:text-purple-600">
                <Mail className="w-6 h-6" />
                <span>john@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-4 text-gray-600 hover:text-purple-600">
                <Phone className="w-6 h-6" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="https://github.com" className="flex items-center gap-4 text-gray-600 hover:text-purple-600">
                <Github className="w-6 h-6" />
                <span>github.com/johndoe</span>
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-4 text-gray-600 hover:text-purple-600">
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/johndoe</span>
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
