import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Citizen",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    toast.error("Please fill all required fields");
    return;
  }

  // Backend API will be connected here later
  console.log(formData);

  toast.success("Login successful");

  // Temporary navigation
  if (formData.role === "Citizen") {
    navigate("/citizen/dashboard");
  } else if (formData.role === "Admin") {
    navigate("/admin/dashboard");
  } else if (formData.role === "Government Authority") {
    navigate("/department/dashboard");
  }
};

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#0F172A]
      via-[#134E4A]
      to-teal-500
      flex
      items-center
      justify-center
      px-5
      "
    >
      <div
        className="
        bg-white
        shadow-2xl
        rounded-3xl
        p-8
        w-full
        max-w-md
        "
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-[#0F172A]">Civic</span>

            <span className="text-teal-500">Connect</span>
          </h1>

          <p className="text-gray-500 mt-3">
            Login to access civic services
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="
              w-full
              px-4
              py-3
              border
              border-gray-300
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-teal-400
              transition
              "
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="
              w-full
              px-4
              py-3
              border
              border-gray-300
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-teal-400
              transition
              "
            />
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Login As
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="
              w-full
              px-4
              py-3
              border
              border-gray-300
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-teal-400
              transition
              "
            >
              <option>Citizen</option>

              <option>Government Authority</option>

              <option>Admin</option>
            </select>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
            w-full
            bg-teal-500
            text-white
            py-3
            rounded-xl
            font-semibold
            hover:bg-teal-600
            transition
            shadow-lg
            "
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-6 text-sm">
          <Link
            to="/forgot-password"
            className="
            text-teal-600
            hover:underline
            "
          >
            Forgot Password?
          </Link>

          <p className="mt-3 text-gray-600">
            Don't have an account?
            <Link
              to="/register"
              className="
              text-teal-600
              ml-1
              font-medium
              hover:underline
              "
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;