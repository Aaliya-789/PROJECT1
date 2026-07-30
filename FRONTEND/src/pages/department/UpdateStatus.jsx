import { useState } from "react";

const UpdateStatus = () => {
  const [status, setStatus] = useState("Assigned");
  const [remarks, setRemarks] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Complaint Updated Successfully!");

    console.log({
      status,
      remarks,
      image,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">
        Update Complaint
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Status */}
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

        {/* Remarks */}
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

        {/* Upload Image */}
        <div>
          <label className="block font-semibold mb-2">
            Upload Updated Work Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-lg p-2"
          />

          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-4 w-64 h-64 object-cover rounded-lg border"
            />
          )}
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

export default UpdateStatus;