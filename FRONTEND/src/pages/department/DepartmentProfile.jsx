import { useEffect, useState } from "react";
import {
  getMyProfile,
  updateMyProfile,
} from "../../services/userService";

const DepartmentProfile = () => {

  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
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
        role: data.user.role || "",
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

  if (loading) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Department Officer Profile
      </h2>

      <div className="space-y-6">

        <div>

          <label className="font-semibold text-gray-700">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={user.name}
            disabled={!isEditing}
            onChange={handleChange}
            className="w-full mt-2 border rounded-lg p-3 disabled:bg-gray-100"
          />

        </div>

        <div>

          <label className="font-semibold text-gray-700">
            Email
          </label>

          <input
            type="email"
            value={user.email}
            disabled
            className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
          />

        </div>

        <div>

          <label className="font-semibold text-gray-700">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={user.phone}
            disabled={!isEditing}
            onChange={handleChange}
            className="w-full mt-2 border rounded-lg p-3 disabled:bg-gray-100"
          />

        </div>

        <div>

          <label className="font-semibold text-gray-700">
            Role
          </label>

          <input
            type="text"
            value={user.role}
            disabled
            className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
          />

        </div>

        <div className="pt-4">

          {isEditing ? (

            <button
              onClick={handleSave}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600"
            >
              Save Changes
            </button>

          ) : (

            <button
              onClick={() => setIsEditing(true)}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600"
            >
              Edit Profile
            </button>

          )}

        </div>

      </div>

    </div>
  );
};

export default DepartmentProfile;