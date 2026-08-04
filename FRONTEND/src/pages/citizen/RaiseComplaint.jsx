import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import ComplaintGuidelines from "../../components/citizen/ComplaintGuidelines";
import { createComplaint } from "../../services/complaintService";

const RaiseComplaint = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    otherCategory: "",
    description: "",
    address: "",
    priority: "Medium",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleImageChange = (e) => {

    setImages(
      Array.from(e.target.files)
    );

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.description ||
      !formData.address
    ) {

      toast.error(
        "Please fill all required fields"
      );

      return;
    }

    try {

      const token =
        localStorage.getItem("token");

      const complaintData =
        new FormData();

      complaintData.append(
        "title",
        formData.title
      );

      complaintData.append(
        "category",
        formData.category === "Others"
          ? formData.otherCategory
          : formData.category
      );

      complaintData.append(
        "description",
        formData.description
      );

      complaintData.append(
        "priority",
        formData.priority
      );

      complaintData.append(
        "location[address]",
        formData.address
      );

      complaintData.append(
        "location[latitude]",
        "18.5204"
      );

      complaintData.append(
        "location[longitude]",
        "73.8567"
      );

      images.forEach((image) => {

        complaintData.append(
          "images",
          image
        );

      });

      const response =
        await createComplaint(
          token,
          complaintData
        );

      console.log(
        "Complaint Created:",
        response
      );

      toast.success(
        "Complaint submitted successfully"
      );

      navigate(
        "/citizen/complaint-history"
      );

    } catch (error) {

      console.log(
        "Complaint Error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
        "Failed to submit complaint"
      );

    }

  };

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-[#0F172A] mb-6">
          Raise a Complaint
        </h1>

        <ComplaintGuidelines />

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <form onSubmit={handleSubmit}>

            <div className="mb-5">

              <label className="block font-semibold mb-2">
                Complaint Title *
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />

            </div>

            <div className="mb-5">

              <label className="block font-semibold mb-2">
                Category *
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >

                <option value="">
                  Select Category
                </option>

                <option>Garbage</option>
                <option>Pothole</option>
                <option>Water Leakage</option>
                <option>Broken Street Light</option>
                <option>Traffic Signal</option>
                <option>Sewage</option>
                <option>Road Damage</option>
                <option>Illegal Dumping</option>
                <option>Others</option>

              </select>

            </div>

            {
              formData.category === "Others" && (

                <input
                  type="text"
                  name="otherCategory"
                  placeholder="Specify complaint type"
                  value={formData.otherCategory}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 mb-5"
                />

              )
            }

            <div className="mb-5">

              <label className="block font-semibold mb-2">
                Description *
              </label>

              <textarea
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />

            </div>

            <div className="mb-5">

              <label className="block font-semibold mb-2">
                Address *
              </label>

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />

            </div>

            <div className="mb-5">

              <label className="block font-semibold mb-2">
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >

                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Emergency</option>

              </select>

            </div>

            <div className="mb-6">

              <label className="block font-semibold mb-2">
                Upload Images
              </label>

              <label
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-teal-500
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  cursor-pointer
                  hover:bg-teal-600
                  transition
                  font-semibold
                "
              >
                📁 Choose Files

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

              </label>

              {
                images.length > 0 && (

                  <div className="mt-4 bg-gray-50 border rounded-xl p-4">

                    <p className="font-semibold text-gray-700 mb-2">
                      Selected Files
                    </p>

                    <ul className="space-y-2">

                      {
                        images.map((image, index) => (

                          <li
                            key={index}
                            className="text-gray-600"
                          >
                            📷 {image.name}
                          </li>

                        ))
                      }

                    </ul>

                  </div>

                )
              }

            </div>

            <button
              type="submit"
              className="
                w-full
                bg-teal-500
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:bg-teal-600
                transition
              "
            >

              Submit Complaint

            </button>

          </form>

        </div>

      </div>

    </div>

  );

};

export default RaiseComplaint;