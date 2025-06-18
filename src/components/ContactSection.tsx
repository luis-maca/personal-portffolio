
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:luis.martinez@email.com" className="text-gray-600 hover:text-blue-600">
                luis.martinez@email.com
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                +1 (234) 567-8900
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <span className="text-gray-600">Miami, Florida</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center gap-4 mb-4">
                <Linkedin className="h-6 w-6 text-blue-600" />
                <Github className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Social</h3>
              <div className="space-y-1">
                <div>
                  <a href="https://linkedin.com/in/luismartinez" className="text-gray-600 hover:text-blue-600 text-sm">
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a href="https://github.com/luismartinez" className="text-gray-600 hover:text-blue-600 text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
