
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, Github, ChevronDown, Calendar, Briefcase, Code, User, Check } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    ".NET Core", "Java", "Python", "Angular", "TypeScript", "Azure", 
    "Microservices", "REST APIs", "SQL Server", "WebForms", "Spring Boot",
    "Azure DevOps", "Docker", "CI/CD", "SOAP", "HTML5", "CSS3"
  ];

  const projects = [
    {
      title: "Client Analysis System",
      description: "Comprehensive system integrating demographic, profiling, and credit data using .NET Core, WebForms, and SQL Server.",
      technologies: [".NET Core", "WebForms", "SQL Server", "C#"],
      company: "BAC CREDOMATIC"
    },
    {
      title: "Debt Readjustment Web Service",
      description: "Critical pandemic response system built with Java 8 and Angular, enabling flexible debt management during COVID-19.",
      technologies: ["Java 8", "Angular", "SQL", "REST APIs"],
      company: "BAC CREDOMATIC"
    },
    {
      title: "Election Management System (Civix)",
      description: "Modern election management platform featuring Angular 17 frontend with robust Java backend and CI/CD pipeline.",
      technologies: ["Angular 17", "TypeScript", "Java", "Azure DevOps"],
      company: "ALLIED GLOBAL"
    },
    {
      title: "Ad Matching Microservice",
      description: "Scalable microservices architecture deployed on Azure Container Apps for intelligent ad matching and delivery.",
      technologies: ["Azure", "Microservices", "Container Apps", "Python"],
      company: "ALLIED GLOBAL"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-800">Luis Martinez</div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-600 ${
                    activeSection === section ? "text-blue-600 font-medium" : "text-slate-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Experienced
                  <span className="block text-blue-600">Full Stack Developer</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Specializing in microservices architecture, cloud solutions, and modern frontend frameworks. 
                  Building scalable applications with .NET, Java, Python, and Angular.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection("about")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Explore My Work
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection("contact")}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <User size={120} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Code size={32} className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate full stack developer with extensive experience in building robust, scalable applications 
              using modern technologies and cloud-native architectures.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Background</h3>
              <p className="text-slate-600 leading-relaxed">
                With over 6 years of professional experience, I've specialized in developing enterprise-level 
                applications using microservices architecture and cloud solutions. My expertise spans across 
                .NET, Java, Python ecosystems, with a strong focus on Azure cloud technologies and modern 
                frontend frameworks like Angular.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-800">Education</h4>
                <Card className="p-4">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <Calendar className="text-blue-600 mt-1" size={20} />
                      <div>
                        <h5 className="font-semibold text-slate-800">Licenciatura Informática Administrativa</h5>
                        <p className="text-slate-600">Universidad Nacional Autónoma de Honduras</p>
                        <p className="text-sm text-slate-500">2013 - 2017</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Work Experience</h3>
              
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-blue-600">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <Briefcase className="text-blue-600 mt-1" size={20} />
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800">Senior Developer</h4>
                        <p className="text-blue-600 font-medium">ALLIED GLOBAL</p>
                        <p className="text-sm text-slate-500 mb-3">November 2021 - Present | Tegucigalpa, Honduras</p>
                        <ul className="text-slate-600 space-y-1 text-sm">
                          <li className="flex items-start space-x-2">
                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Developed Ad Matching Service using microservices architecture</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Enhanced Windows Forms applications and deployed via Azure Container Apps</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Full stack development on Civix election management system</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 border-l-4 border-l-slate-400">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <Briefcase className="text-slate-600 mt-1" size={20} />
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800">Full Stack Developer</h4>
                        <p className="text-slate-600 font-medium">BAC CREDOMATIC</p>
                        <p className="text-sm text-slate-500 mb-3">October 2017 - October 2021 | Tegucigalpa, Honduras</p>
                        <ul className="text-slate-600 space-y-1 text-sm">
                          <li className="flex items-start space-x-2">
                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Built comprehensive client analysis system integrating multiple data sources</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Developed critical debt readjustment web service during COVID-19</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span>Created client credit consolidation system</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-600">
              Comprehensive skill set covering full stack development, cloud architecture, and modern frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-3 py-1">
                      {skill}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Backend Development</h3>
                <p className="text-slate-600">Microservices, APIs, Database Design</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">UI</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Frontend Development</h3>
                <p className="text-slate-600">Angular, TypeScript, Modern UI</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">☁</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Cloud Solutions</h3>
                <p className="text-slate-600">Azure, DevOps, Container Apps</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600">
              Showcasing key projects that demonstrate technical expertise and business impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {project.company}
                      </Badge>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300">
              Ready to discuss your next project or opportunity? Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:luismartinezca@gmail.com" className="text-blue-400 hover:text-blue-300">
                      luismartinezca@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-400" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+50433616242" className="text-blue-400 hover:text-blue-300">
                      +504 33616242
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Linkedin className="text-blue-400" size={24} />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/luisenrique0295/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      linkedin.com/in/luisenrique0295
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-slate-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 text-slate-300 text-center">
        <div className="max-w-6xl mx-auto">
          <p>&copy; 2024 Luis Martinez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
