import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section
      id="community"
      className="bg-[#1E3A5F] py-24"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Improve Your Community?
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-8">
          Join CivicConnect and help create cleaner, safer, and smarter
          cities by reporting civic issues and tracking their resolution
          with complete transparency.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          {/* Report Issue */}
          <Link to="/login">
            <button
              className="
              bg-[#2A9D8F]
              hover:bg-[#23867A]
              text-white
              px-8
              py-4
              rounded-lg
              font-semibold
              transition
              duration-300
              "
            >
              Report an Issue
            </button>
          </Link>

          {/* Learn More */}
          <a href="#how-it-works">
            <button
              className="
              border-2
              border-white
              text-white
              hover:bg-white
              hover:text-[#1E3A5F]
              px-8
              py-4
              rounded-lg
              font-semibold
              transition
              duration-300
              "
            >
              Learn More
            </button>
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTASection;