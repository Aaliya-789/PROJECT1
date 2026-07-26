import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold"
        >
          <span className="text-blue-800">Civic</span>
          <span className="text-orange-500">Connect</span>
        </Link>


        {/* Navigation Links */}

        <div className="flex gap-6">

          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Community</a>
          <a href="#">Contact</a>

        </div>


        {/* Buttons */}

        <div className="flex gap-3">

          <button
            className="border border-blue-800 px-4 py-2 rounded-lg"
          >
            Login
          </button>


          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
          >
            Register
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;