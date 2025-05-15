import TimelineItem from "../ui/TimelineItem";
import { timelineItems } from "../../data/timelineData";

const VisionHistory = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Vision & History
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            The journey that has shaped Dunamis International and our vision
            for the future.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                alignRight={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionHistory;