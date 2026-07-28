import { Link } from "react-router-dom";
import ComplaintCard from "../../components/citizen/ComplaintCard";


const ComplaintHistory = () => {


  // Later replace this with backend API data
  // Example:
  // const complaints = response.data;


  const complaints = [
    // Remove this object when backend is connected
    // This is only for UI testing

    /*
    {
      id: "CC001",
      title: "Garbage not collected",
      category: "Garbage",
      description:
        "Waste has not been collected near the community park for the last three days.",
      location: "ABC Road",
      status: "Submitted",
      date: "28 July 2026"
    }
*/
  ];



  return (

    <div className="min-h-screen bg-gray-50 p-6">


      <div className="max-w-6xl mx-auto">


        {/* Heading */}

        <h1
          className="
          text-4xl
          font-bold
          text-[#0F172A]
          mb-2
          "
        >
          My Complaints
        </h1>


        <p className="text-gray-600 mb-8">
          Track and manage all your reported civic issues.
        </p>




        {
          complaints.length === 0 ? (

            <div
              className="
              bg-white
              rounded-2xl
              shadow-md
              p-10
              text-center
              "
            >

              <div className="text-5xl mb-4">
                📋
              </div>



              <h2
                className="
                text-2xl
                font-bold
                text-[#0F172A]
                "
              >
                No complaints yet
              </h2>



              <p
                className="
                text-gray-500
                mt-3
                max-w-md
                mx-auto
                "
              >
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


            <div className="grid gap-6">


              {
                complaints.map((complaint)=>(

                  <ComplaintCard
                    key={complaint.id}
                    complaint={complaint}
                  />

                ))
              }


            </div>


          )
        }



      </div>


    </div>

  );

};


export default ComplaintHistory;