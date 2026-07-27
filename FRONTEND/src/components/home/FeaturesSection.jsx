import {
  FaMapMarkedAlt,
  FaClipboardList,
  FaBuilding,
  FaBell,
  FaComments,
  FaRoute,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClipboardList size={40} />,
    title: "Report Civic Issues",
    description:
      "Report potholes, garbage, water leakage, street lights and other civic problems with images and descriptions.",
  },
  {
    icon: <FaMapMarkedAlt size={40} />,
    title: "Interactive Map",
    description:
      "View nearby reported issues on an interactive map and avoid duplicate complaints.",
  },
  {
    icon: <FaBuilding size={40} />,
    title: "Department Assignment",
    description:
      "Complaints are assigned to the appropriate government department for faster resolution.",
  },
  {
    icon: <FaRoute size={40} />,
    title: "Complaint Tracking",
    description:
      "Track complaint progress through every stage until it is resolved.",
  },
  {
    icon: <FaBell size={40} />,
    title: "Real-Time Notifications",
    description:
      "Receive instant notifications whenever there is an update to your complaint.",
  },
  {
    icon: <FaComments size={40} />,
    title: "Community Participation",
    description:
      "Comment, confirm existing issues, and help authorities prioritize important civic problems.",
  },
];

const FeaturesSection = () => {
  return (
    <section
  id="features"
  className="bg-[#F8FAFC] py-24"
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-[#1E3A5F]">
            Powerful Features
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            CivicConnect provides everything citizens and government
            departments need to efficiently report, monitor, and resolve
            civic issues.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-[#2A9D8F] mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#1E3A5F] mb-4">
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

export default FeaturesSection;