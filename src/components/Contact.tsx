
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = contactFormSchema.parse(formData);
      // Here you would typically send the data to your backend
      console.log("Form data:", validatedData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      if (error.errors) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:sandeep02122005@gmail.com" className="flex items-center gap-4 text-gray-600 hover:text-purple-600">
                <Mail className="w-6 h-6" />
                <span>sandeep02122005@gmail.com</span>
              </a>
              <a href="tel:+918608376406" className="flex items-center gap-4 text-gray-600 hover:text-purple-600">
                <Phone className="w-6 h-6" />
                <span>+91 86083 76406</span>
              </a>
              <a href="https://github.com/sandeep200502" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 hover:text-purple-600">
                <Github className="w-6 h-6" />
                <span>github.com/sandeep200502</span>
              </a>
              <a href="https://www.linkedin.com/in/sandeeprajsaravanan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-600 hover:text-purple-600">
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/sandeeprajsaravanan</span>
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
