import { useParams } from "react-router-dom";


const ComplaintDetails = () => {

  const { id } = useParams();



  // Later this data will come from backend API
  const complaint = {
    id: id || "CC001",
    title: "Garbage not collected",
    category: "Garbage",
    description:
      "Waste has not been collected near the community park for the last three days.",
    location: "ABC Road",
    date: "28 July 2026",
    status: "Submitted",
    department: "Not Assigned Yet",
    images: [],
  };



  const timeline = [
    {
      title: "Submitted",
      completed: true,
    },

    {
      title: "Under Review",
      completed: false,
    },

    {
      title: "Assigned",
      completed: false,
    },

    {
      title: "In Progress",
      completed: false,
    },

    {
      title: "Resolved",
      completed: false,
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
                Complaint ID: {complaint.id}
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
              <b>Location:</b> {complaint.location}
            </p>


            <p>
              <b>Date Submitted:</b> {complaint.date}
            </p>


            <p>
              <b>Assigned Department:</b> {complaint.department}
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
            complaint.images.length === 0 ? (

              <p className="text-gray-500">
                No images uploaded.
              </p>

            ) : (

              <div>
                Images will appear here.
              </div>

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
              timeline.map((item,index)=>(

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
                      ?
                      "bg-teal-500 text-white"
                      :
                      "bg-gray-200 text-gray-500"
                    }
                    `}
                  >

                    {index + 1}

                  </div>



                  <p
                    className={`
                    ${
                      item.completed
                      ?
                      "text-teal-600 font-semibold"
                      :
                      "text-gray-500"
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
            Comments
          </h2>


          <p className="text-gray-500">
            No comments yet.
          </p>


        </div>



      </div>


    </div>

  );

};


export default ComplaintDetails;