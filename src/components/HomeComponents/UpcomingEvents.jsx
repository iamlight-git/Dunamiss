import React, { useRef } from "react";
import { events } from "../../data/events";
import { formatDistanceToNow } from "date-fns";
import { motion, useInView, useReducedMotion } from "framer-motion";

const UpcomingEvents = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 bg-gray-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for these special gatherings as we worship, learn, and grow together in faith and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              tabIndex={0} // make card keyboard-focusable
              initial={{ opacity: 0, y: 30 }}
              animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : {}}
              transition={shouldReduceMotion ? {} : { duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02]
                         focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
            >
              <div className="h-48 overflow-hidden">
                <img
                  loading="lazy"
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {event.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      tabIndex={0} // make tags focusable too
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>
                    {formatDistanceToNow(new Date(event.date), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <a
                    href={event.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    tabIndex={0}
                  >
                    {event.location}
                  </a>
                </div>
                <a
                  href={event.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium w-full block text-center transition-colors duration-200
                             focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
                  tabIndex={0}
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
