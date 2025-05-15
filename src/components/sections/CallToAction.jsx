const CallToAction = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-0 md:flex-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Want to learn more about Dunamis?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Connect with us to discover how you can be part of our
                  global mission or benefit from our resources.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    View Resources
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;