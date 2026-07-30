import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { registerUser } from "../../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const data = await registerUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: "Citizen", // Always register as Citizen
      });

      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
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
      py-10
      "
    >
      <div
        className="
        bg-white
        shadow-2xl
        rounded-3xl
        p-8
        w-full
        max-w-lg
        "
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-[#0F172A]">Civic</span>
            <span className="text-teal-500">Connect</span>
          </h1>

          <p className="text-gray-500 mt-3">
            Create your account to get started
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
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
              "
            />
          </div>

          {/* Email */}
          <div className="mb-4">
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
              "
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
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
              "
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
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
              "
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
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
              "
            />
          </div>

          {/* Register Button */}
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
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6 text-sm">
          <p className="text-gray-600">
            Already have an account?

            <Link
              to="/login"
              className="
              text-teal-600
              ml-1
              font-medium
              hover:underline
              "
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;