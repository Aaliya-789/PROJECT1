import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import ComplaintGuidelines from "../../components/citizen/ComplaintGuidelines";


const RaiseComplaint = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    title: "",
    category: "",
    otherCategory: "",
    description: "",
    location: "",
  });


  const [images, setImages] = useState([]);



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleImageChange = (e) => {

    const selectedFiles = Array.from(e.target.files);

    setImages(selectedFiles);

  };



  const handleSubmit = (e) => {
  e.preventDefault();

  // Validation
  if (
    !formData.title ||
    !formData.category ||
    !formData.description ||
    !formData.location ||
    (formData.category === "Others" &&
      !formData.otherCategory)
  ) {
    toast.error("Please fill all required fields");
    return;
  }

  // Create complaint object
  const complaintData = {
    id: Date.now(),
    title: formData.title,
    category:
      formData.category === "Others"
        ? formData.otherCategory
        : formData.category,
    description: formData.description,
    location: formData.location,
    status: "Submitted",
    date: new Date().toLocaleDateString(),
    images,
  };

  // Fetch previously stored complaints
  const existingComplaints =
    JSON.parse(localStorage.getItem("complaints")) || [];

  // Add the new complaint
  existingComplaints.push(complaintData);

  // Save updated complaints array
  localStorage.setItem(
    "complaints",
    JSON.stringify(existingComplaints)
  );

  // Success popup
  toast.success(
    "Your complaint has been registered successfully!"
  );

  // Redirect after 1.5 seconds
  setTimeout(() => {
    navigate("/citizen/dashboard");
  }, 1500);
};



  return (

    <div className="min-h-screen bg-gray-50 p-6">


      <div className="max-w-4xl mx-auto">


        <h1
          className="
          text-4xl
          font-bold
          text-[#0F172A]
          mb-6
          "
        >
          Raise a Complaint
        </h1>



        <ComplaintGuidelines />



        <div
          className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          "
        >


          <form onSubmit={handleSubmit}>


            {/* Complaint Title */}

            <div className="mb-5">

              <label className="block font-semibold text-gray-700 mb-2">
                Complaint Title *
              </label>


              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Example: Garbage not collected"
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-teal-400
                "
              />

            </div>




            {/* Category */}

            <div className="mb-5">


              <label className="block font-semibold text-gray-700 mb-2">
                Complaint Category *
              </label>


              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-teal-400
                "
              >

                <option value="">
                  Select Category
                </option>


                <option>
                  Garbage
                </option>


                <option>
                  Pothole
                </option>


                <option>
                  Water Leakage
                </option>


                <option>
                  Broken Street Light
                </option>


                <option>
                  Traffic Signal
                </option>


                <option>
                  Sewage
                </option>


                <option>
                  Road Damage
                </option>


                <option>
                  Illegal Dumping
                </option>


                <option>
                  Others
                </option>


              </select>


            </div>





            {/* Other Category */}

            {
              formData.category === "Others" && (

                <div className="mb-5">


                  <label className="block font-semibold text-gray-700 mb-2">
                    Specify Complaint Type *
                  </label>


                  <input
                    type="text"
                    name="otherCategory"
                    value={formData.otherCategory}
                    onChange={handleChange}
                    placeholder="Enter complaint type"
                    className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-teal-400
                    "
                  />


                </div>

              )
            }






            {/* Description */}

            <div className="mb-5">


              <label className="block font-semibold text-gray-700 mb-2">
                Complaint Description *
              </label>


              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                placeholder="Describe the issue in detail..."
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-teal-400
                "
              />


            </div>





            {/* Location */}

            <div className="mb-5">


              <label className="block font-semibold text-gray-700 mb-2">
                Location *
              </label>


              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter address or nearby landmark"
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-teal-400
                "
              />


            </div>






            {/* Image Upload */}

            <div className="mb-6">


              <label className="block font-semibold text-gray-700 mb-2">
                Upload Images (Optional)
              </label>



              <label
                className="
                border-2
                border-dashed
                border-teal-400
                rounded-xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                hover:bg-teal-50
                transition
                "
              >


                <div className="text-4xl mb-3">
                  📷
                </div>


                <p className="font-medium text-gray-700">
                  Click to upload images
                </p>


                <p className="text-sm text-gray-500 mt-1">
                  JPG, JPEG, PNG supported
                </p>



                <input
                  type="file"
                  multiple
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handleImageChange}
                  className="hidden"
                />


              </label>





              {
                images.length > 0 && (

                  <div className="mt-4 bg-gray-50 rounded-xl p-4">


                    <p className="font-semibold text-gray-700 mb-2">
                      {images.length} file(s) selected
                    </p>


                    <ul className="space-y-1 text-sm text-gray-600">

                      {
                        images.map((image,index)=>(
                          <li key={index}>
                            📄 {image.name}
                          </li>
                        ))
                      }

                    </ul>


                  </div>

                )
              }



            </div>





            {/* Submit Button */}

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
              shadow-md
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