
export const AboutSection = () => {
  return (
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
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience creating 
              robust web applications. I specialize in modern JavaScript frameworks, 
              cloud technologies, and building scalable solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My expertise spans from front-end development with React and Vue.js to 
              back-end development with Node.js and Python. I'm also experienced in 
              cloud platforms like AWS and containerization with Docker.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-2 text-gray-700">
              <li>🎓 Computer Science Graduate</li>
              <li>🌍 Based in Miami, Florida</li>
              <li>💼 Available for freelance work</li>
              <li>🚀 Passionate about clean code</li>
              <li>☁️ AWS Certified Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
