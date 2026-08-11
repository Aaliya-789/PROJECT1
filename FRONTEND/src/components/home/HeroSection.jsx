import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <span className="inline-block bg-[#E9C46A]/20 text-[#1E3A5F] font-semibold px-4 py-2 rounded-full">
              Smart Civic Complaint Management
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold text-[#1E3A5F] leading-tight">
              Empowering Citizens,
              <br />
              Improving Communities
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              CivicConnect enables citizens to report civic issues,
              track complaint progress, and collaborate with government
              departments to build cleaner, safer, and smarter cities.
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* Report an Issue */}
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

              {/* Explore Issues */}
              <a href="#report-issues">
                <button
                  className="
                    border-2
                    border-[#1E3A5F]
                    text-[#1E3A5F]
                    hover:bg-[#1E3A5F]
                    hover:text-white
                    px-8
                    py-4
                    rounded-lg
                    font-semibold
                    transition
                    duration-300
                  "
                >
                  Explore Issues
                </button>
              </a>

            </div>
          </div>

          {/* ================= RIGHT SIDE - CITY MAP IMAGE ================= */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl">
              <img
                src="/city-map.jpeg"
                alt="CivicConnect smart city map showing reported civic issues"
                className="
                  w-full
                  h-auto
                  object-contain
                  rounded-3xl
                  drop-shadow-xl
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;