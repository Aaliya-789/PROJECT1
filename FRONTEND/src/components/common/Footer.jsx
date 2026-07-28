import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0F172A] text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & About */}

          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-white">Civic</span>
              <span className="text-teal-400">Connect</span>
            </h2>

            <p className="mt-4 text-sm leading-7">
              CivicConnect helps citizens report civic issues,
              track complaints, and collaborate with government
              authorities to build cleaner and smarter communities.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#home"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#community"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Community
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Report Issues */}

          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Report Issues
            </h3>

            <ul className="space-y-3">
              <li>Garbage</li>
              <li>Potholes</li>
              <li>Water Leakage</li>
              <li>Street Lights</li>
              <li>Sewage</li>
            </ul>
          </div>

          {/* Contact Details */}

          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-teal-400" />
                <span>support@civicconnect.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-teal-400" />
                <span>+91 9876543210</span>
              </div>

              {/* Social Icons */}

              <div className="flex gap-5 pt-3 text-xl">

                <FaFacebookF className="cursor-pointer hover:text-teal-400 transition duration-300" />

                <FaTwitter className="cursor-pointer hover:text-teal-400 transition duration-300" />

                <FaInstagram className="cursor-pointer hover:text-teal-400 transition duration-300" />

                <FaLinkedin className="cursor-pointer hover:text-teal-400 transition duration-300" />

              </div>

            </div>
          </div>
        </div>

        {/* Divider */}

        <hr className="border-gray-700 my-8" />

        {/* Copyright */}

        <div className="text-center text-sm text-gray-400">
          © 2026 CivicConnect. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;