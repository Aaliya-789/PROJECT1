import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";


const ForgotPassword = () => {

  const [email, setEmail] = useState("");



  const handleSubmit = (e) => {

    e.preventDefault();


    if (!email) {
      toast.error("Please enter your email");
      return;
    }


    console.log(email);


    // Backend password reset API will be connected later

    toast.success("Password reset link sent successfully");


  };



  return (

    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#0F172A]
      via-[#134E4A]
      to-teal-500
      flex
      items-center
      justify-center
      px-5
      "
    >


      <div
        className="
        bg-white
        shadow-2xl
        rounded-3xl
        p-8
        w-full
        max-w-md
        "
      >



        {/* Heading */}

        <div className="text-center mb-8">


          <h1 className="text-4xl font-bold">

            <span className="text-[#0F172A]">
              Civic
            </span>

            <span className="text-teal-500">
              Connect
            </span>


          </h1>



          <h2 className="
          text-2xl
          font-semibold
          text-gray-800
          mt-6">

            Forgot Password?

          </h2>



          <p className="
          text-gray-500
          mt-2">

            Enter your email to reset your password

          </p>


        </div>





        <form onSubmit={handleSubmit}>



          {/* Email */}

          <div className="mb-6">


            <label className="
            block
            text-gray-700
            font-medium
            mb-2">

              Email

            </label>



            <input

              type="email"

              value={email}

              onChange={(e) => setEmail(e.target.value)}

              placeholder="Enter your registered email"

              className="
              w-full
              px-4
              py-3
              border
              border-gray-300
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-teal-400
              "

            />


          </div>






          {/* Reset Button */}

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
            shadow-lg
            "

          >

            Send Reset Link

          </button>



        </form>







        {/* Back to Login */}

        <div className="
        text-center
        mt-6
        text-sm">


          <Link

            to="/login"

            className="
            text-teal-600
            font-medium
            hover:underline
            "

          >

            ← Back to Login

          </Link>


        </div>




      </div>


    </div>

  );

};


export default ForgotPassword;