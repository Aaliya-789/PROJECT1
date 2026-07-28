import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const [user, setUser] = useState({
    name: "Citizen User",
    email: "citizen@example.com",
    phone: "9876543210",
    address: "Pune, Maharashtra",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);

    // Later API call will be added here.
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}

        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">
          My Profile
        </h1>

        <p className="text-gray-600 mb-8">
          Manage your personal information and account settings.
        </p>

        {/* Personal Information Section */}

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
            Personal Information
          </h2>

          <div className="space-y-5">
            {/* Name */}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={user.name}
                disabled={!isEditing}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  border
                  rounded-xl
                  disabled:bg-gray-100
                "
              />
            </div>

            {/* Email */}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={user.email}
                disabled={!isEditing}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  border
                  rounded-xl
                  disabled:bg-gray-100
                "
              />
            </div>

            {/* Phone */}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={user.phone}
                disabled={!isEditing}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  border
                  rounded-xl
                  disabled:bg-gray-100
                "
              />
            </div>

            {/* Address */}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Address
              </label>

              <textarea
                name="address"
                value={user.address}
                disabled={!isEditing}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  border
                  rounded-xl
                  disabled:bg-gray-100
                "
              />
            </div>
          </div>

          {/* Edit Profile Button */}

          <div className="mt-8">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="
                  bg-teal-500
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-teal-600
                  transition
                "
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="
                  bg-teal-500
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-teal-600
                  transition
                "
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Change Password Section */}

        <div className="bg-white rounded-2xl shadow-md p-8 mt-6">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
            Change Password
          </h2>

          <p className="text-gray-600 mb-6">
            Keep your account secure by updating your password regularly.
          </p>

          {!showPasswordFields ? (
            <button
              onClick={() => setShowPasswordFields(true)}
              className="
                bg-teal-500
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:bg-teal-600
                transition
              "
            >
              Change Password
            </button>
          ) : (
            <div className="space-y-5">
              {/* Current Password */}

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Current Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your current password"
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-teal-400
                  "
                />
              </div>

              {/* New Password */}

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  New Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your new password"
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-teal-400
                  "
                />
              </div>

              {/* Confirm New Password */}

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm New Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your new password"
                  className="
                    w-full
                    px-4
                    py-3
                    border
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-teal-400
                  "
                />
              </div>

              {/* Buttons */}

              <div className="flex gap-4 pt-2">
                <button
                  className="
                    bg-teal-500
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-teal-600
                    transition
                  "
                >
                  Update Password
                </button>

                <button
                  onClick={() => setShowPasswordFields(false)}
                  className="
                    border
                    border-gray-300
                    text-gray-700
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-gray-100
                    transition
                  "
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;