import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";


const ComplaintCard = ({ complaint }) => {

  return (

    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      hover:shadow-lg
      transition
      duration-300
      "
    >


      {/* Header */}

      <div className="flex justify-between items-start gap-4">


        <div>

          <h3
            className="
            text-xl
            font-bold
            text-[#0F172A]
            "
          >
            {complaint.title}
          </h3>


          <p className="text-gray-500 mt-1">
            Category: {complaint.category}
          </p>


        </div>



        <StatusBadge status={complaint.status} />


      </div>





      {/* Description */}

      <p
        className="
        text-gray-600
        mt-4
        "
      >
        {complaint.description}
      </p>





      {/* Details */}

      <div
        className="
        mt-5
        text-sm
        text-gray-500
        space-y-2
        "
      >

        <p>
          📍 Location: {complaint.location}
        </p>


        <p>
          📅 Date: {complaint.date}
        </p>


        <p>
          🆔 Complaint ID: {complaint.id}
        </p>


      </div>






      {/* View Details Button */}

      <Link
        to={`/citizen/complaint-details/${complaint.id}`}
      >

        <button
          className="
          mt-5
          bg-teal-500
          text-white
          px-5
          py-2
          rounded-lg
          font-medium
          hover:bg-teal-600
          transition
          "
        >

          View Details

        </button>


      </Link>



    </div>

  );

};


export default ComplaintCard;