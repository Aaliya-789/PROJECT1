const DashboardHeader = ({ title }) => {
  return (
    <header className="bg-white shadow-sm rounded-xl px-6 py-4 mb-6">

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back! Here's what's happening today.
        </p>
      </div>

    </header>
  );
};

export default DashboardHeader;