import {
  FaTrashAlt,
  FaRoad,
  FaTint,
  FaLightbulb,
  FaTrafficLight,
  FaTools,
  FaWater,
  FaDumpster,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaTrashAlt size={36} />,
    title: "Garbage",
  },
  {
    icon: <FaRoad size={36} />,
    title: "Potholes",
  },
  {
    icon: <FaTint size={36} />,
    title: "Water Leakage",
  },
  {
    icon: <FaLightbulb size={36} />,
    title: "Street Lights",
  },
  {
    icon: <FaTrafficLight size={36} />,
    title: "Traffic Signals",
  },
  {
    icon: <FaTools size={36} />,
    title: "Road Damage",
  },
  {
    icon: <FaWater size={36} />,
    title: "Sewage",
  },
  {
    icon: <FaDumpster size={36} />,
    title: "Illegal Dumping",
  },
];

const RecentIssuesSection = () => {
  return (
    <section
  className="bg-[#F8FAFC] py-24"
>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A5F]">
            Report Different Types of Issues
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            CivicConnect supports reporting a wide range of civic problems,
            helping local authorities respond efficiently.
          </p>
        </div>

        {/* Categories */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {categories.map((category, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >

              <div className="text-[#2A9D8F] flex justify-center mb-5">
                {category.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#1E3A5F]">
                {category.title}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default RecentIssuesSection;