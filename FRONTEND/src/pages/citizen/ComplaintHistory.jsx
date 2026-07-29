import { Link } from "react-router-dom";

const ComplaintHistory = () => {

  const complaints =
    JSON.parse(localStorage.getItem("complaints")) || [];

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">
          My Complaints
        </h1>

        <p className="text-gray-600 mb-8">
          Track and manage all your reported civic issues.
        </p>

        {complaints.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <div className="text-5xl mb-4">
              📋
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A]">
              No complaints yet
            </h2>

            <p className="text-gray-500 mt-3 max-w-md mx-auto">
              You have not submitted any complaints.
              Raise your first complaint and help improve your community.
            </p>

            <Link to="/citizen/raise-complaint">
              <button
                className="
                mt-6
                bg-teal-500
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:bg-teal-600
                transition
                shadow-md
                "
              >
                Raise Your First Complaint
              </button>
            </Link>

          </div>

        ) : (

          <div className="space-y-5">

            {complaints.map((complaint) => (

              <div
                key={complaint.id}
                className="bg-white rounded-xl shadow-md p-6"
              >

                <h2 className="text-xl font-bold text-[#0F172A]">
                  {complaint.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  {complaint.description}
                </p>

                <div className="mt-4 space-y-1 text-sm text-gray-600">

                  <p>
                    <strong>Category:</strong> {complaint.category}
                  </p>

                  <p>
                    <strong>Location:</strong> {complaint.location}
                  </p>

                  <p>
                    <strong>Status:</strong> {complaint.status}
                  </p>

                  <p>
                    <strong>Date:</strong> {complaint.date}
                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default ComplaintHistory;