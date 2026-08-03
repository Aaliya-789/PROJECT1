import { useEffect, useState } from "react";
import {
  getMyProfile,
  updateMyProfile,
  changePassword,
} from "../../services/userService";

const Profile = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {

    try {

      const token = localStorage.getItem("token");

      const data = await getMyProfile(token);

      setUser({
        name: data.user.name || "",
        email: data.user.email || "",
        phone: data.user.phone || "",
        address: data.user.address || "",
      });

    } catch (error) {

      console.log(error);
      alert("Failed to load profile");

    } finally {

      setLoading(false);

    }

  };

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = async () => {

    try {

      const token = localStorage.getItem("token");

      await updateMyProfile(token, user);

      alert("Profile updated successfully");

      setIsEditing(false);

    } catch (error) {

      console.log(error);
      alert("Failed to update profile");

    }

  };

  const handlePasswordChange = (e) => {

    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });

  };

  const handleUpdatePassword = async () => {

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const token = localStorage.getItem("token");

      await changePassword(token, {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });

      alert("Password updated successfully");

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setShowPasswordFields(false);

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to update password"
      );

    }

  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">
          My Profile
        </h1>

        <p className="text-gray-600 mb-8">
          Manage your personal information and account settings.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
            Personal Information
          </h2>

          <div className="space-y-5">

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
                className="w-full px-4 py-3 border rounded-xl disabled:bg-gray-100"
              />
            </div>

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
                className="w-full px-4 py-3 border rounded-xl disabled:bg-gray-100"
              />
            </div>

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
                className="w-full px-4 py-3 border rounded-xl disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Address
              </label>

              <textarea
                name="address"
                value={user.address}
                disabled={!isEditing}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-xl disabled:bg-gray-100"
              />
            </div>

          </div>

          <div className="mt-8">

            {isEditing ? (

              <button
                onClick={handleSave}
                className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600"
              >
                Save Changes
              </button>

            ) : (

              <button
                onClick={() => setIsEditing(true)}
                className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600"
              >
                Edit Profile
              </button>

            )}

          </div>

        </div>

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
              className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600"
            >
              Change Password
            </button>

          ) : (

            <div className="space-y-5">

              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                placeholder="Current Password"
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="New Password"
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirm New Password"
                className="w-full px-4 py-3 border rounded-xl"
              />

              <div className="flex gap-4">

                <button
                  onClick={handleUpdatePassword}
                  className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600"
                >
                  Update Password
                </button>

                <button
                  onClick={() => {
                    setShowPasswordFields(false);
                    setPasswordData({
                      currentPassword: "",
                      newPassword: "",
                      confirmPassword: "",
                    });
                  }}
                  className="border px-6 py-3 rounded-xl"
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