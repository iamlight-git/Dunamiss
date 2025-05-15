const Hero = () => (
  <section className="relative h-[600px] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20church%20worship%20service%20with%20dramatic%20lighting%2C%20congregation%20with%20raised%20hands%2C%20spiritual%20atmosphere%2C%20professional%20stage%20setup%2C%20worship%20band%20performing%2C%20inspirational%20christian%20gathering%20with%20diverse%20audience&width=1440&height=600&seq=hero&orientation=landscape')`,
      }}
    ></div>

    <div className="container mx-auto px-4 h-full flex items-center relative z-20">
      <div className="max-w-xl text-white">
        <h1 className="text-5xl font-bold mb-4">Experience the Presence</h1>
        <p className="text-xl mb-8">
          Join us in worship, teaching, and community as we pursue God's
          purpose together.
        </p>
        <div className="flex space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Watch Live
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Visit Us
          </button>
        </div>
      </div>
    </div>
  </section>
);
 export default Hero;