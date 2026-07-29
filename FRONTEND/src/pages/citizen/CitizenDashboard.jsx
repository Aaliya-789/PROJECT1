import DashboardCard from "../../components/citizen/DashboardCard";

import {
  FaClipboardList,
  FaHourglassHalf,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const CitizenDashboard = () => {
  // Dummy complaints data
  const complaints = [];

  // Complaint statistics
  const totalComplaints = complaints.length;

  const pendingComplaints = complaints.filter(
    (complaint) => complaint.status === "Pending"
  ).length;

  const inProgressComplaints = complaints.filter(
    (complaint) => complaint.status === "In Progress"
  ).length;

  const resolvedComplaints = complaints.filter(
    (complaint) => complaint.status === "Resolved"
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Welcome Section */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold text-[#0F172A]">
          Welcome to CivicConnect!
        </h1>

        <p className="text-gray-600 mt-3">
          Report civic issues, track complaint progress, and help build a
          smarter and cleaner community.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <Link
            to="/citizen/raise-complaint"
            className="bg-teal-500 text-white p-5 rounded-xl text-center font-semibold hover:bg-teal-600 transition"
          >
            Raise Complaint
          </Link>

          <Link
            to="/citizen/complaint-history"
            className="bg-teal-500 text-white p-5 rounded-xl text-center font-semibold hover:bg-teal-600 transition"
          >
            Complaint History
          </Link>

          <Link
            to="/citizen/notifications"
            className="bg-teal-500 text-white p-5 rounded-xl text-center font-semibold hover:bg-teal-600 transition"
          >
            Notifications
          </Link>

          <Link
            to="/citizen/profile"
            className="bg-teal-500 text-white p-5 rounded-xl text-center font-semibold hover:bg-teal-600 transition"
          >
            My Profile
          </Link>

        </div>
      </div>

      {/* Complaint Overview */}
      <div className="mb-8">

        <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
          Complaint Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <DashboardCard
            title="Total Complaints"
            count={totalComplaints}
            icon={<FaClipboardList />}
          />

          <DashboardCard
            title="Pending"
            count={pendingComplaints}
            icon={<FaHourglassHalf />}
          />

          <DashboardCard
            title="In Progress"
            count={inProgressComplaints}
            icon={<FaTools />}
          />

          <DashboardCard
            title="Resolved"
            count={resolvedComplaints}
            icon={<FaCheckCircle />}
          />

        </div>

      </div>

      {/* Conditional Rendering */}

      {totalComplaints === 0 ? (

        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">

          <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
            Recent Complaints
          </h2>

          <p className="text-gray-600 mb-3">
            No complaints raised yet.
          </p>

          <p className="text-gray-500 mb-6">
            Start by reporting a civic issue in your locality.
          </p>

          <Link
            to="/citizen/raise-complaint"
            className="inline-block bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition"
          >
            Raise Your First Complaint
          </Link>

        </div>

      ) : (

        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">

          <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
            Recent Complaints
          </h2>

          <div className="space-y-4">

            {complaints.map((complaint) => (

              <div
                key={complaint.id}
                className="border rounded-xl p-4 flex justify-between items-center"
              >

                <div>
                  <h3 className="font-semibold text-lg">
                    {complaint.title}
                  </h3>

                  <p className="text-gray-500">
                    Status: {complaint.status}
                  </p>
                </div>

                <Link
                  to="/citizen/details"
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
                >
                  View Details
                </Link>

              </div>

            ))}

          </div>

        </div>

      )}

      {/* Community Updates */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

        <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
          Community Updates
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Keep your surroundings clean and report civic issues promptly.
          </li>
          <li>
            Participate in local community initiatives whenever possible.
          </li>
          <li>
            Stay informed about municipal services and public announcements.
          </li>
        </ul>

      </div>

      {/* Civic Tips */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
          Civic Tips
        </h2>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Upload clear images while reporting complaints.</li>
          <li>Add accurate location details for faster resolution.</li>
          <li>Track complaint updates regularly through your dashboard.</li>
        </ul>

      </div>

    </div>
  );
};

export default CitizenDashboard;