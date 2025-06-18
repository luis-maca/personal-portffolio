
import AIChat from "@/components/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Luis Martinez</h1>
            <button
              onClick={() => window.open('https://drive.google.com/file/d/1aQNGWjZHvDcgKdN4qx4LNZjYjQzXxXhF/view?usp=sharing', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Full Stack Developer
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Building scalable web applications with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-white/20 px-4 py-2 rounded-full">React</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Node.js</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Python</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate Full Stack Developer with over 5 years of experience creating 
                innovative web applications. I love turning complex problems into simple, 
                beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My expertise spans across modern JavaScript frameworks, cloud technologies, 
                and database management. I'm always eager to learn new technologies and 
                tackle challenging projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Innovation Focused
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  5+ Years Experience
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  50+ Projects Completed
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Full Stack Expertise
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Cloud Architecture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Senior Full Stack Developer</h3>
                <span className="text-blue-600 font-medium">2022 - Present</span>
              </div>
              <p className="text-gray-700 mb-3">TechCorp Solutions</p>
              <p className="text-gray-600 mb-4">
                Lead development of enterprise web applications using React, Node.js, and AWS. 
                Managed a team of 4 developers and implemented CI/CD pipelines.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Node.js</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">AWS</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Docker</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer</h3>
                <span className="text-blue-600 font-medium">2020 - 2022</span>
              </div>
              <p className="text-gray-700 mb-3">Digital Innovations Inc.</p>
              <p className="text-gray-600 mb-4">
                Developed and maintained multiple client projects using various technologies. 
                Collaborated with designers and product managers to deliver high-quality solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Vue.js</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Python</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Django</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Junior Developer</h3>
                <span className="text-blue-600 font-medium">2019 - 2020</span>
              </div>
              <p className="text-gray-700 mb-3">StartupXYZ</p>
              <p className="text-gray-600 mb-4">
                Started my career building responsive web applications and learning best practices 
                in software development. Gained experience in agile methodologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">PHP</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">MySQL</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  A full-featured e-commerce solution built with React and Node.js, featuring 
                  payment integration and inventory management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</button>
                  <button className="text-gray-600 hover:text-gray-800 font-medium">GitHub</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">
                  A collaborative project management tool with real-time updates, 
                  built using Vue.js and Firebase.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Vue.js</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Firebase</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Tailwind</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</button>
                  <button className="text-gray-600 hover:text-gray-800 font-medium">GitHub</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive analytics dashboard with interactive charts 
                  and real-time data visualization capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">D3.js</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Python</span>
                </div>
                <div className="flex gap-3">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</button>
                  <button className="text-gray-600 hover:text-gray-800 font-medium">GitHub</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Angular</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML5</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS3</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Sass</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Django</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Flask</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Express.js</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PHP</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Laravel</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Redis</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Elasticsearch</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CI/CD</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Jenkins</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Git</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Linux</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">VS Code</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Postman</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Figma</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Jira</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Slack</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">RESTful APIs</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              I'm always interested in new opportunities and interesting projects. 
              Let's connect and discuss how we can work together!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:luis.martinez@email.com" className="text-blue-600 hover:text-blue-800">
                  luis.martinez@email.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                  +1 (234) 567-8900
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Luis Martinez</h3>
            <p className="text-gray-400 mb-6">
              Full Stack Developer passionate about creating amazing web experiences
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400">
                © 2024 Luis Martinez. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default Index;
