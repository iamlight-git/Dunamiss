import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div className="bg-indigo-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Pastoral References
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-indigo-100 mx-auto">
            Hear from ministry leaders who have partnered with Dunamis
            International.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <i className="fas fa-quote-left text-3xl text-indigo-200"></i>
                </div>
                <div className="ml-4">
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-indigo-600">{testimonial.church}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;