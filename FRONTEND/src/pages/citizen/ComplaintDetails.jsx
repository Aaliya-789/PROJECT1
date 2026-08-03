import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComplaintById } from "../../services/complaintService";

const ComplaintDetails = () => {

  const { id } = useParams();

  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaint();
  }, []);

  const fetchComplaint = async () => {

    try {

      const token = localStorage.getItem("token");

      const data = await getComplaintById(token, id);

      console.log(data);

      setComplaint(data.complaint);

    } catch (error) {

      console.log(error);
      alert("Failed to load complaint");

    } finally {

      setLoading(false);

    }

  };


  if (loading) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
  }

  if (!complaint) {
    return (
      <div className="text-center mt-10">
        Complaint not found.
      </div>
    );
  }

  const timeline = [
    {
      title: "Submitted",
      completed: true,
    },
    {
      title: "Under Review",
      completed: [
        "Under Review",
        "Assigned",
        "In Progress",
        "Resolved",
      ].includes(complaint.status),
    },
    {
      title: "Assigned",
      completed: [
        "Assigned",
        "In Progress",
        "Resolved",
      ].includes(complaint.status),
    },
    {
      title: "In Progress",
      completed: [
        "In Progress",
        "Resolved",
      ].includes(complaint.status),
    },
    {
      title: "Resolved",
      completed: complaint.status === "Resolved",
    },
  ];


  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-5xl mx-auto">

        <h1
          className="
          text-4xl
          font-bold
          text-[#0F172A]
          mb-6
          "
        >
          Complaint Details
        </h1>

        {/* Complaint Information */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-md
          p-8
          mb-6
          "
        >

          <div className="flex justify-between items-start">

            <div>

              <h2
                className="
                text-2xl
                font-bold
                text-[#0F172A]
                "
              >
                {complaint.title}
              </h2>

              <p className="text-gray-500 mt-2">
                Complaint ID: {complaint._id}
              </p>

            </div>

            <span
              className="
              bg-yellow-100
              text-yellow-700
              px-4
              py-2
              rounded-full
              font-medium
              "
            >
              {complaint.status}
            </span>

          </div>

          <div
            className="
            mt-6
            space-y-3
            text-gray-700
            "
          >

            <p>
              <b>Category:</b> {complaint.category}
            </p>

            <p>
              <b>Location:</b> {complaint.address}
            </p>

            <p>
              <b>Date Submitted:</b>{" "}
              {new Date(complaint.createdAt).toLocaleString()}
            </p>

            <p>
              <b>Assigned Department:</b>{" "}
              {complaint.assignedDepartment?.departmentName || "Not Assigned"}
            </p>

            <p>
              <b>Priority:</b> {complaint.priority}
            </p>

          </div>

          <div className="mt-6">

            <h3 className="font-semibold text-lg mb-2">
              Description
            </h3>

            <p className="text-gray-600">
              {complaint.description}
            </p>

          </div>

        </div>

        {/* Images */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-md
          p-8
          mb-6
          "
        >

          <h2 className="text-xl font-bold mb-4">
            Uploaded Images
          </h2>

          {
            complaint.images &&
            complaint.images.length > 0 ? (

              <div className="grid grid-cols-2 gap-4">

                {
                  complaint.images.map((image, index) => (

                    <img
                      key={index}
                      src={image}
                      alt="Complaint"
                      className="rounded-lg border h-64 w-full object-cover"
                    />

                  ))
                }

              </div>

            ) : (

              <p className="text-gray-500">
                No images uploaded.
              </p>

            )
          }

        </div>

        {/* Status Timeline */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-md
          p-8
          mb-6
          "
        >

          <h2 className="text-xl font-bold mb-6">
            Complaint Status Timeline
          </h2>

          <div className="space-y-5">

            {
              timeline.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div
                    className={`
                    w-8
                    h-8
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                    ${
                      item.completed
                        ? "bg-teal-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }
                    `}
                  >

                    {index + 1}

                  </div>

                  <p
                    className={`
                    ${
                      item.completed
                        ? "text-teal-600 font-semibold"
                        : "text-gray-500"
                    }
                    `}
                  >

                    {item.title}

                  </p>

                </div>

              ))
            }

          </div>

        </div>

        {/* Comments */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-md
          p-8
          "
        >

          <h2 className="text-xl font-bold mb-4">
            Officer Remarks
          </h2>

          {
            complaint.comments &&
            complaint.comments.length > 0 ? (

              complaint.comments.map((comment) => (

                <div
                  key={comment._id}
                  className="border-b py-3"
                >

                  <p className="font-semibold">
                    {comment.user?.name}
                  </p>

                  <p className="text-gray-600">
                    {comment.message}
                  </p>

                </div>

              ))

            ) : (

              <p className="text-gray-500">
                No remarks yet.
              </p>

            )
          }

        </div>

      </div>

    </div>

  );

};

export default ComplaintDetails;