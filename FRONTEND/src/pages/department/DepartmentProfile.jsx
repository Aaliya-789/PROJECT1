const DepartmentProfile = () => {
  const department = {
    departmentName: "Electricity Department",
    officerName: "Rajesh Kumar",
    email: "electricity@civicconnect.gov.in",
    phone: "+91 9876543210",
    address: "Municipal Corporation Office, Pune",
    workingHours: "9:00 AM - 6:00 PM",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Department Profile
      </h2>

      <div className="space-y-6">

        <div>
          <label className="font-semibold text-gray-700">
            Department Name
          </label>
          <p className="mt-1 text-lg">{department.departmentName}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-700">
            Officer Name
          </label>
          <p className="mt-1 text-lg">{department.officerName}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-700">
            Email
          </label>
          <p className="mt-1 text-lg">{department.email}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-700">
            Phone Number
          </label>
          <p className="mt-1 text-lg">{department.phone}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-700">
            Office Address
          </label>
          <p className="mt-1 text-lg">{department.address}</p>
        </div>

        <div>
          <label className="font-semibold text-gray-700">
            Working Hours
          </label>
          <p className="mt-1 text-lg">{department.workingHours}</p>
        </div>

      </div>
    </div>
  );
};

export default DepartmentProfile;