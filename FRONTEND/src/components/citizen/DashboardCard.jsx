const DashboardCard = ({ title, count, icon }) => {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      hover:shadow-xl
      transition
      duration-300
      cursor-pointer
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-[#0F172A] mt-2">
            {count}
          </h2>
        </div>

        <div className="text-4xl text-teal-500">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;