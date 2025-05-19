import { teamMembers } from "../../data/teamMembers";

const TeamSection = () => {
  return (
    <div className="bg-white py-16" id="leadership">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Leadership Team
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Meet the dedicated individuals who help guide and support the
            vision of Dunamis International.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-64 w-full relative overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-indigo-600 font-medium">{person.role}</p>
                <p className="mt-3 text-gray-600">{person.bio}</p>
                <div className="mt-4 flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 cursor-pointer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 cursor-pointer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 cursor-pointer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;