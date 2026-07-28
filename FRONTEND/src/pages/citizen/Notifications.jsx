const Notifications = () => {


  // Later this data will come from backend API
  // Example:
  // const notifications = response.data;

  const notifications=[
  /*const notifications = [
  {
    id: 1,
    title: "Complaint Submitted",
    message:
      "Your complaint CC001 has been submitted successfully.",
    date: "28 July 2026"
  },

  {
    id: 2,
    title: "Complaint Assigned",
    message:
      "Your complaint has been assigned to Municipal Department.",
    date: "29 July 2026"
  },

  {
    id: 3,
    title: "Complaint Resolved",
    message:
      "Your complaint has been resolved successfully.",
    date: "30 July 2026"
  }*/
];


  return (

    <div className="min-h-screen bg-gray-50 p-6">


      <div className="max-w-5xl mx-auto">


        {/* Heading */}

        <h1
          className="
          text-4xl
          font-bold
          text-[#0F172A]
          mb-2
          "
        >
          Notifications
        </h1>


        <p className="text-gray-600 mb-8">
          Stay updated about your complaints and civic services.
        </p>





        {
          notifications.length === 0 ? (

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
                🔔
              </div>



              <h2
                className="
                text-2xl
                font-bold
                text-[#0F172A]
                "
              >
                No notifications yet
              </h2>



              <p
                className="
                text-gray-500
                mt-3
                "
              >
                You will receive updates when your complaint status changes.
              </p>


            </div>


          ) : (


            <div className="space-y-5">


              {
                notifications.map((notification)=>(

                  <div
                    key={notification.id}
                    className="
                    bg-white
                    rounded-2xl
                    shadow-md
                    p-6
                    "
                  >

                    <h3
                      className="
                      text-lg
                      font-semibold
                      text-[#0F172A]
                      "
                    >
                      {notification.title}
                    </h3>


                    <p className="text-gray-600 mt-2">
                      {notification.message}
                    </p>


                    <p
                      className="
                      text-sm
                      text-gray-400
                      mt-3
                      "
                    >
                      {notification.date}
                    </p>


                  </div>


                ))
              }


            </div>


          )
        }



      </div>


    </div>

  );

};


export default Notifications;