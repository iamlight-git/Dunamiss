const TimelineItem = ({ year, title, description, alignRight = false }) => {
  return (
    <div className="relative">
      <div className={`md:flex items-center md:space-x-8 ${alignRight ? "justify-end" : ""}`}>
        {!alignRight && (
          <div className="md:w-1/2 mb-6 md:mb-0 md:text-right">
            <ContentCard year={year} title={title} description={description} />
          </div>
        )}
        
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white"></div>
        
        {alignRight && (
          <div className="md:w-1/2 mb-6 md:mb-0">
            <ContentCard year={year} title={title} description={description} />
          </div>
        )}
      </div>
    </div>
  );
};

const ContentCard = ({ year, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-indigo-600">{year}</h3>
      <h4 className="text-lg font-semibold text-gray-900 mt-1">{title}</h4>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
};

export default TimelineItem;