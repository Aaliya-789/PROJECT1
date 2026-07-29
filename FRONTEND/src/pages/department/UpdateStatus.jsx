import { useState } from "react";

const UpdateComplaint = () => {
  const [status, setStatus] = useState("Assigned");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Complaint Updated Successfully!");

    console.log({
      status,
      remarks,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Update Complaint
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div>

          <label className="block font-semibold mb-2">
            Complaint Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option>Assigned</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

        </div>

        <div>

          <label className="block font-semibold mb-2">
            Remarks
          </label>

          <textarea
            rows="5"
            placeholder="Enter update..."
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="w-full border rounded-lg p-3"
          />

        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Update Complaint
        </button>

      </form>

    </div>
  );
};

export default UpdateComplaint;