
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, ChevronDown, Calendar, Briefcase, Code, User, Check, Menu, X, Target, Database, Vote, Cloud, Zap, CreditCard, MessageCircle } from "lucide-react";

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
      title: "Ad Matching Service",
      company: "Education Dynamics",
      role: "Backend Developer",
      description: "Engineered a sophisticated ad matching system that intelligently pairs educational advertisements with relevant user profiles, dramatically improving campaign performance and ROI.",
      technologies: [".NET Framework 8", "PostgreSQL", "AWS Lambda", "RESTful APIs"],
      contributions: ["Backend Architecture", "Database Design", "Performance Optimization"],
      impact: "🚀 Boosted ad matching accuracy by 40% and increased campaign performance metrics",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "US Tax System for Local Governments",
      company: "PCI",
      role: "Full Stack Developer", 
      description: "Developed a comprehensive tax processing system for local governments, ensuring accurate financial calculations and reliable tax administration workflows.",
      technologies: ["C#", "Visual Basic", "SQL Server", "Crystal Reports"],
      contributions: ["Full Stack Development", "Report Generation", "Database Integration"],
      impact: "💼 Improved financial accuracy and processing reliability for municipal tax operations",
      icon: Database,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Election Management Platform - Civix",
      company: "Allied Global",
      role: "Full Stack Developer",
      description: "Built a secure, scalable election management platform featuring modern Angular frontend with robust Java microservices backend and comprehensive CI/CD pipeline.",
      technologies: ["Angular 17", "TypeScript", "Java", "PostgreSQL", "Azure DevOps"],
      contributions: ["Frontend Development", "Microservices Architecture", "CI/CD Pipeline"],
      impact: "✅ Enabled secure and scalable election management infrastructure for democratic processes",
      icon: Vote,
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Azure Cloud Utilities",
      company: "Qmerit",
      role: "Backend + DevOps Engineer",
      description: "Architected cloud-native utilities leveraging Azure's serverless technologies to deliver high-performance, cost-effective solutions with automatic scaling capabilities.",
      technologies: [".NET 8/9", "Azure Functions", "CosmosDB", "Azure Container Apps"],
      contributions: ["Cloud Architecture", "DevOps Implementation", "Cost Optimization"],
      impact: "🌐 Reduced infrastructure costs by 35% while maintaining 99.9% availability",
      icon: Cloud,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Microservices Event Hub",
      company: "Qmerit", 
      role: "Backend Microservices Lead",
      description: "Led the design and implementation of a robust event-driven microservices architecture, ensuring reliable inter-service communication and horizontal scalability.",
      technologies: [".NET", "Azure Service Bus", "Azure Functions", "Event Sourcing"],
      contributions: ["Architecture Leadership", "Event-Driven Design", "Service Communication"],
      impact: "⚡ Achieved 99.95% uptime with seamless horizontal scaling capabilities",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Credit Analysis System",
      company: "BAC Credomatic",
      role: "Full Stack Developer",
      description: "Comprehensive system integrating demographic, profiling, and credit data using .NET Core and WebForms, enabling rapid loan decision-making during high-volume periods.",
      technologies: [".NET Core", "WebForms", "SQL Server", "C#"],
      contributions: ["System Integration", "Data Processing", "Performance Tuning"],
      impact: "📊 Accelerated loan decision-making by 60% during peak operational periods",
      icon: CreditCard,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "8", label: "Years of experience", accent: "+" },
    { number: "6", label: "Different Industries", accent: "+" },
    { number: "20", label: "Completed Projects", accent: "+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Luis Martinez</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-orange-400 relative ${
                    activeSection === section ? "text-orange-400 font-medium" : "text-slate-300"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700/50 pt-4 animate-fade-in">
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
      <section id="home" className="pt-24 pb-16 px-6 min-h-screen flex items-center relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div>
                  <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                    Hello<span className="text-orange-400">.</span>
                  </h1>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    I'm Luis
                  </h2>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
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
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg border-none shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Got a project?
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection("about")}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-orange-400 px-8 py-3 text-lg transition-all duration-300"
                >
                  My resume
                </Button>
              </div>

              {/* Skills Preview */}
              <div className="flex flex-wrap gap-3 pt-8">
                {skills.slice(0, 7).map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Enhanced Profile Image with Spotlight Effect */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                {/* Spotlight effect */}
                <div className="absolute inset-0 bg-gradient-radial from-orange-400/30 via-orange-500/20 to-transparent rounded-full blur-2xl scale-150"></div>
                
                {/* Main profile container */}
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 p-1 shadow-2xl">
                  {/* Inner gradient layer */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-300/20 via-transparent to-orange-600/30 p-2">
                    {/* Image container */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 ring-2 ring-orange-400/20">
                      <img 
                        src="https://i.ibb.co/23SGX4nG/your-image.jpg" 
                        alt="Luis Martinez - Full Stack Developer"
                        className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 text-orange-400/40 animate-pulse">
                  <Code size={32} />
                </div>
                <div className="absolute -bottom-4 -right-4 text-orange-400/40 animate-pulse delay-1000">
                  <Cloud size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 relative">
        {/* Section divider */}
        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Backend Development</h3>
                    <p className="text-slate-400">Microservices, APIs, Database Design</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">UI</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                    <p className="text-slate-400">Angular, TypeScript, Modern UI</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                    <Cloud className="text-white" size={24} />
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
                  <div key={index} className="text-center p-4 bg-slate-800/20 backdrop-blur-sm rounded-lg border border-slate-700/30">
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.number}<span className="text-orange-400">{stat.accent}</span>
                    </div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Education & Experience */}
              <div className="space-y-6">
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6 hover:border-orange-400/50 transition-all duration-300">
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
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 via-slate-700/20 to-slate-800/30"></div>
        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-300">
              Comprehensive skill set covering full stack development, cloud architecture, and modern frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-900/50 backdrop-blur-sm border-slate-700 p-4 hover:border-orange-400 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 group-hover:bg-orange-400 group-hover:text-slate-900 px-3 py-1 transition-all duration-300">
                      {skill}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="portfolio" className="py-16 px-6 relative">
        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Project Case Studies</h2>
            <p className="text-xl text-slate-300">
              Real-world solutions demonstrating technical expertise and measurable business impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="bg-slate-800/40 backdrop-blur-sm border-slate-700 group hover:border-orange-400 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                            <IconComponent className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                              {project.title}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                                {project.company}
                              </Badge>
                              <Badge variant="secondary" className="text-xs bg-orange-500/20 text-orange-300 border border-orange-500/30">
                                {project.role}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Impact Statement */}
                      <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
                        <p className="text-green-300 font-medium text-sm">
                          {project.impact}
                        </p>
                      </div>

                      {/* Contributions */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Contributions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.contributions.map((contribution, contribIndex) => (
                            <Badge key={contribIndex} variant="outline" className="text-xs border-blue-500/30 text-blue-300 bg-blue-500/10">
                              {contribution}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-700/50 text-slate-300 hover:bg-slate-600 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Assistant Teaser */}
      <section className="py-16 px-6 relative">
        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <MessageCircle className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Assistant Coming Soon</h3>
            <p className="text-slate-300 mb-6">
              Ask me anything about my experience, technologies I work with, or how I can help with your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-400">
              <span>"What's your experience with Azure?"</span>
              <span>•</span>
              <span>"Have you led microservice projects?"</span>
              <span>•</span>
              <span>"Can you work with Angular?"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-800/30 backdrop-blur-sm relative">
        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-50"></div>
        
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
                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:luismartinezca@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                      luismartinezca@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+50433616242" className="text-orange-400 hover:text-orange-300 transition-colors">
                      +504 33616242
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/luisenrique0295/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      linkedin.com/in/luisenrique0295
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-white placeholder-slate-400 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-white placeholder-slate-400 transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Subject</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-white placeholder-slate-400 transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-white placeholder-slate-400 transition-all duration-300"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 border-none shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900/50 backdrop-blur-sm text-slate-400 text-center border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <p>&copy; 2024 Luis Martinez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
