import React from "react";
const AboutHero = () => {
  return (
    <div className="relative bg-indigo-800 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-top"
          src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20female%20ministry%20leader%20with%20warm%2C%20inviting%20expression%2C%20standing%20in%20modern%20church%20environment%20with%20soft%20natural%20lighting%2C%20elegant%20professional%20attire%2C%20inspirational%20atmosphere%20with%20subtle%20architectural%20elements%2C%20warm%20color%20palette&width=1440&height=600&seq=1&orientation=landscape"
          alt="Toni Haskell"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Dunamis
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Learn about our founder, vision, and the journey that has shaped
            our ministry over the years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;