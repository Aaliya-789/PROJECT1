import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0F172A] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          <span className="text-white">Civic</span>
          <span className="text-teal-400">Connect</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-200 font-medium">

          <a
            href="#home"
            className="hover:text-teal-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#features"
            className="hover:text-teal-400 transition duration-300"
          >
            Features
          </a>

          <a
            href="#community"
            className="hover:text-teal-400 transition duration-300"
          >
            Community
          </a>

          <a
            href="#contact"
            className="hover:text-teal-400 transition duration-300"
          >
            Contact
          </a>

        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-4">

          {/* Login Button */}
          <Link
            to="/login"
            className="
              border-2 border-teal-400
              text-teal-400
              px-5 py-2
              rounded-lg
              font-medium
              hover:bg-teal-400
              hover:text-white
              transition duration-300
            "
          >
            Login
          </Link>

          {/* Register Button */}
          <Link
            to="/register"
            className="
              bg-amber-500
              text-white
              px-5 py-2
              rounded-lg
              font-medium
              hover:bg-amber-600
              transition duration-300
            "
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;