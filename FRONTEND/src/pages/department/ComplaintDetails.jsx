const ComplaintDetails = () => {
  const complaint = {
    id: 101,
    title: "Street Light Not Working",
    description:
      "The street light near MG Road has not been working for the past five days.",
    citizen: "Rahul Sharma",
    location: "MG Road",
    category: "Electricity",
    status: "Assigned",
    reportedOn: "25 July 2026",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Complaint Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <p className="font-semibold">Complaint ID</p>
          <p>{complaint.id}</p>
        </div>

        <div>
          <p className="font-semibold">Category</p>
          <p>{complaint.category}</p>
        </div>

        <div>
          <p className="font-semibold">Citizen</p>
          <p>{complaint.citizen}</p>
        </div>

        <div>
          <p className="font-semibold">Location</p>
          <p>{complaint.location}</p>
        </div>

        <div>
          <p className="font-semibold">Status</p>
          <p>{complaint.status}</p>
        </div>

        <div>
          <p className="font-semibold">Reported On</p>
          <p>{complaint.reportedOn}</p>
        </div>

      </div>

      <div className="mt-6">

        <p className="font-semibold mb-2">
          Complaint Title
        </p>

        <p>{complaint.title}</p>

      </div>

      <div className="mt-6">

        <p className="font-semibold mb-2">
          Description
        </p>

        <p>{complaint.description}</p>

      </div>

    </div>
  );
};

export default ComplaintDetails;