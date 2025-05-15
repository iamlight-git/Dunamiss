import profileImage from "../../assets/Toni Haskell.jpeg"
import InfoCard from "../ui/InfoCard";

const FounderSection = () => {
  const founderHighlights = [
    {
      icon: "globe",
      title: "Global Impact",
      description: "Ministry across 3 continents and 20+ countries"
    },
    {
      icon: "book",
      title: "Education",
      description: "Master's in Global Leadership from Fuller Seminary"
    },
    {
      icon: "church",
      title: "Ministry Focus",
      description: "Worship, prayer, and leadership training"
    },
    {
      icon: "hands-helping",
      title: "Mission",
      description: "Equipping believers to fulfill their calling"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative mb-10 lg:mb-0">
            <img
              src={profileImage}
              alt="Toni Haskell"
              className="rounded-lg shadow-lg object-cover object-top h-full w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 px-6 py-4 rounded-lg shadow-lg">
              <p className="text-white font-medium">Founder & President</p>
              <h3 className="text-2xl font-bold text-white">Toni Haskell</h3>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Founder
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <p>
                Toni Haskell's ministry is characterized by a deep passion
                for the Word of God, the work of the Holy Spirit, and the
                vital role of the local church in God's plan. Her teaching
                emphasizes practical application of biblical principles and
                the importance of Spirit-led living.
              </p>
              <p>
                With an educational background from New Creation School of
                the Bible, Domata School of Missions (1997), and a Master's
                in Global Leadership from Fuller Seminary (2019), Toni
                brings both academic knowledge and practical experience to
                her ministry.
              </p>
              <p>
                As a missionary, she has traveled extensively throughout
                Europe, Asia, and South America, bringing the message of
                faith and hope to diverse communities around the world.
              </p>
              <p>
                Her ministry focuses on worship, prayer, preparing the
                end-times church, and training leaders to fulfill their
                God-given potential. In founding Dunamis International, Toni
                has created a platform for equipping believers to impact
                their world through the power of the Holy Spirit.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {founderHighlights.map((item, index) => (
                <InfoCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;