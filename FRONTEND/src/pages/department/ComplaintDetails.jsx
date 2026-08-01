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

      console.log("Complaint Details:", data);

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
        Complaint not found
      </div>
    );
  }


  return (
    <div className="bg-white shadow-md rounded-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Complaint Details
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


        <div>
          <p className="font-semibold">
            Complaint ID
          </p>
          <p>
            {complaint._id}
          </p>
        </div>


        <div>
          <p className="font-semibold">
            Category
          </p>
          <p>
            {complaint.category}
          </p>
        </div>


        <div>
          <p className="font-semibold">
            Priority
          </p>
          <p>
            {complaint.priority}
          </p>
        </div>


        <div>
          <p className="font-semibold">
            Status
          </p>
          <p>
            {complaint.status}
          </p>
        </div>


        <div>
          <p className="font-semibold">
            Citizen
          </p>
          <p>
            {complaint.reportedBy?.name || "N/A"}
          </p>
        </div>


        <div>
          <p className="font-semibold">
            Citizen Email
          </p>
          <p>
            {complaint.reportedBy?.email || "N/A"}
          </p>
        </div>


        <div>
          <p className="font-semibold">
            Location
          </p>
          <p>
            📍 {complaint.location?.address || "N/A"}
          </p>
        </div>


        <div>
          <p className="font-semibold">
            Reported On
          </p>

          <p>
            {new Date(
              complaint.createdAt
            ).toLocaleDateString()}
          </p>

        </div>


      </div>



      <div className="mt-6">

        <p className="font-semibold mb-2">
          Complaint Title
        </p>

        <p>
          {complaint.title}
        </p>

      </div>



      <div className="mt-6">

        <p className="font-semibold mb-2">
          Description
        </p>

        <p>
          {complaint.description}
        </p>

      </div>



      {complaint.images &&
        complaint.images.length > 0 && (

        <div className="mt-6">

          <p className="font-semibold mb-3">
            Complaint Images
          </p>


          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {complaint.images.map((image, index) => (

              <img
                key={index}
                src={image}
                alt="Complaint"
                className="rounded-lg border h-48 w-full object-cover"
              />

            ))}

          </div>

        </div>

      )}


    </div>
  );
};


export default ComplaintDetails;