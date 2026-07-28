const ComplaintGuidelines = () => {
  return (
    <div
      className="
      bg-gradient-to-r
      from-blue-50
      to-teal-50
      border-l-4
      border-teal-500
      rounded-2xl
      p-6
      mb-6
      shadow-sm
      "
    >

      <h2 className="text-xl font-bold text-[#0F172A] mb-4">
        Before You Submit Your Complaint
      </h2>


      <ul className="space-y-3 text-gray-700">

        <li className="flex gap-2">
          <span className="text-teal-600 font-bold">
            ✓
          </span>
          Provide accurate details about the issue.
        </li>


        <li className="flex gap-2">
          <span className="text-teal-600 font-bold">
            ✓
          </span>
          Upload clear images whenever possible.
        </li>


        <li className="flex gap-2">
          <span className="text-teal-600 font-bold">
            ✓
          </span>
          Mention the correct location or nearby landmark.
        </li>


        <li className="flex gap-2">
          <span className="text-teal-600 font-bold">
            ✓
          </span>
          Select the correct complaint category.
        </li>


        <li className="flex gap-2">
          <span className="text-teal-600 font-bold">
            ✓
          </span>
          Avoid submitting duplicate complaints for the same issue.
        </li>

      </ul>

    </div>
  );
};


export default ComplaintGuidelines;