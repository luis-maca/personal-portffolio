
export const HeroSection = () => {
  return (
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
  );
};
