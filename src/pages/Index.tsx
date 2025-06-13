import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, ChevronDown, Calendar, Briefcase, Code, User, Check, Menu, X } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
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

  const stats = [
    { number: "6+", label: "Years of experience", accent: "+" },
    { number: "95", label: "Client satisfaction", accent: "%" },
    { number: "20", label: "Completed Projects", accent: "+" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Luis Martinez</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-orange-400 ${
                    activeSection === section ? "text-orange-400 font-medium" : "text-slate-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
              <div className="flex flex-col space-y-2">
                {["home", "about", "skills", "portfolio", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left py-2 transition-colors hover:text-orange-400 ${
                      activeSection === section ? "text-orange-400 font-medium" : "text-slate-300"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                    Hello<span className="text-orange-400">.</span>
                  </h1>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    I'm Luis
                  </h2>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    Full Stack Developer
                  </h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                  Specializing in microservices architecture, cloud solutions, and modern frontend frameworks. 
                  Building scalable applications with .NET, Java, Python, and Angular.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg border-none"
                >
                  Got a project?
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection("about")}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg"
                >
                  My resume
                </Button>
              </div>

              {/* Skills Icons */}
              <div className="flex flex-wrap gap-4 pt-8">
                {skills.slice(0, 7).map((skill, index) => (
                  <div key={index} className="text-slate-400 text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-2">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <User size={120} className="text-slate-400" />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 text-orange-400/30">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className="absolute -bottom-4 -right-4 text-orange-400/30">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 border-l-4 border-orange-400">
                  <Code className="text-orange-400" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-white">Backend Development</h3>
                    <p className="text-slate-400">Microservices, APIs, Database Design</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 border-l-4 border-orange-400">
                  <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">UI</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                    <p className="text-slate-400">Angular, TypeScript, Modern UI</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 border-l-4 border-orange-400">
                  <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">☁</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Cloud Solutions</h3>
                    <p className="text-slate-400">Azure, DevOps, Container Apps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">About me</h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  I began my software journey with a passion for creating from scratch, much like capturing the perfect photograph. That creative drive led me to full stack development, where I specialize in microservices architecture, cloud solutions, and robust database integration using technologies like .NET, Java, Python, and Azure. My background fuels a continuous love for learning and innovation in building scalable digital experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.number}<span className="text-orange-400">{stat.accent}</span>
                    </div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Education & Experience */}
              <div className="space-y-6">
                <Card className="bg-slate-800 border-slate-700 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-3">
                      <Calendar className="text-orange-400 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-white">Licenciatura Informática Administrativa</h4>
                        <p className="text-slate-300">Universidad Nacional Autónoma de Honduras</p>
                        <p className="text-sm text-slate-400">2013 - 2017</p>
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
      <section id="skills" className="py-16 px-6 relative">
        {/* Background Bar Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-700/30 to-slate-800/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>
        
        {/* Decorative bars */}
        <div className="absolute left-0 top-1/2 w-20 h-1 bg-orange-400 transform -translate-y-1/2"></div>
        <div className="absolute right-0 top-1/2 w-20 h-1 bg-orange-400 transform -translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-300">
              Comprehensive skill set covering full stack development, cloud architecture, and modern frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-900/80 backdrop-blur-sm border-slate-700 p-4 hover:border-orange-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-slate-700 text-slate-300 group-hover:bg-orange-400 group-hover:text-slate-900 px-3 py-1 transition-colors">
                      {skill}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <p className="text-xl text-slate-300">
              Showcasing key projects that demonstrate technical expertise and business impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 group hover:border-orange-400 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {project.company}
                      </Badge>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
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
      <section id="contact" className="py-16 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300">
              Ready to discuss your next project or opportunity? Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-orange-400" size={24} />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:luismartinezca@gmail.com" className="text-orange-400 hover:text-orange-300">
                      luismartinezca@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-orange-400" size={24} />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+50433616242" className="text-orange-400 hover:text-orange-300">
                      +504 33616242
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Linkedin className="text-orange-400" size={24} />
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/luisenrique0295/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300"
                    >
                      linkedin.com/in/luisenrique0295
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-white placeholder-slate-400"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-white placeholder-slate-400"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Subject</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-white placeholder-slate-400"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-white placeholder-slate-400"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 border-none">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-slate-400 text-center border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          <p>&copy; 2024 Luis Martinez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
