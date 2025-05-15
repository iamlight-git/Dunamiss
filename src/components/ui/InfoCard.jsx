const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="bg-indigo-50 p-4 rounded-lg">
      <div className="flex items-center">
        <i className={`fas fa-${icon} text-indigo-600 text-xl`}></i>
        <h4 className="ml-3 font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard;