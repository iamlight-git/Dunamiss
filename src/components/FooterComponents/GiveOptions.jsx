import { FaGlobe, FaUniversity, FaMobileAlt, FaHandHoldingHeart } from "react-icons/fa";

const options = [
  {
    icon: <FaGlobe />,
    title: "Online Giving",
    description: "Securely give using your debit/credit card through our online portal.",
    link: "https://dunamis.org/give-online",
  },
  {
    icon: <FaUniversity />,
    title: "Bank Transfer",
    description: "Send your donation directly to our ministry bank account.",
    detail: "Account No: 123456789 • Bank: Kingdom Bank",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Payment",
    description: "Give easily via mobile wallet like eSewa or Khalti.",
    detail: "eSewa ID: 9841XXXXXX • Khalti ID: dunamis.nepal",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "In-Person Giving",
    description: "Give during any Dunamis gathering or visit our office.",
    detail: "123 Faith Avenue, Spiritual City",
  },
];

const GiveOptions = () => {
  return (
    <section id="give-options" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
          Ways You Can Give
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-purple-700 text-4xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-2">{option.description}</p>
              {option.link && (
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline font-medium text-sm"
                >
                  Give Now →
                </a>
              )}
              {option.detail && (
                <p className="text-gray-500 mt-2 text-sm">{option.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiveOptions;
