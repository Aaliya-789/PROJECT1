import {
  FaClipboardCheck,
  FaUserShield,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardCheck size={38} />,
    title: "Report an Issue",
    description:
      "Citizens submit complaints with images, descriptions, and location details.",
  },
  {
    icon: <FaUserShield size={38} />,
    title: "Admin Verification",
    description:
      "The complaint is verified, categorized, and checked for duplicate reports.",
  },
  {
    icon: <FaBuilding size={38} />,
    title: "Department Assignment",
    description:
      "Verified complaints are assigned to the appropriate government department.",
  },
  {
    icon: <FaCheckCircle size={38} />,
    title: "Issue Resolved",
    description:
      "Departments resolve the issue, upload proof, and notify the citizen.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A5F]">
            How CivicConnect Works
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Reporting civic issues is quick and transparent. Follow these
            simple steps to help improve your community.
          </p>
        </div>

        {/* Timeline */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#F8FAFC] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >
              {/* Step Number */}

              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              {/* Icon */}

              <div className="mt-6 text-[#2A9D8F] flex justify-center mb-5">
                {step.icon}
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                {step.title}
              </h3>

              {/* Description */}

              <p className="text-slate-600 leading-7">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;