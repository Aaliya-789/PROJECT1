import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
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

            {/* Buttons */}

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

          {/* Right Side */}

          <div className="flex justify-center">

            <div
              className="
              w-full
              max-w-md
              h-[420px]
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-slate-200
              flex
              items-center
              justify-center
              "
            >

              <div className="text-center">

                <div className="text-8xl">
                  🏙️
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#1E3A5F]">
                  Smart City
                </h3>

                <p className="mt-3 text-slate-500">
                  Interactive city map illustration
                  <br />
                  will be added here.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;