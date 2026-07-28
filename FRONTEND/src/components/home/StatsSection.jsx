import {
  FaMapMarkerAlt,
  FaCamera,
  FaBell,
  FaTasks,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkerAlt size={40} />,
    title: "GPS Location Detection",
    description:
      "Automatically detect and pinpoint the exact location of civic issues.",
  },
  {
    icon: <FaCamera size={40} />,
    title: "Photo Upload",
    description:
      "Attach images to provide clear evidence of reported problems.",
  },
  {
    icon: <FaBell size={40} />,
    title: "Real-Time Notifications",
    description:
      "Receive updates whenever your complaint status changes.",
  },
  {
    icon: <FaTasks size={40} />,
    title: "Track Complaint Status",
    description:
      "Follow every stage from submission to resolution with complete transparency.",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#1E3A5F]">
            Why Choose CivicConnect?
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            CivicConnect makes civic issue reporting simple, transparent,
            and efficient by connecting citizens directly with the
            appropriate government departments.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-[#F8FAFC] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-2"
            >

              <div className="text-[#2A9D8F] flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;