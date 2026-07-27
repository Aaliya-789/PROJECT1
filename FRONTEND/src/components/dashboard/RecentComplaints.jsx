const RecentComplaints = ({ complaints = [] }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold text-slate-800 mb-4">
        Recent Complaints
      </h2>

      {complaints.length === 0 ? (
        <p className="text-slate-500">
          No complaints available.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead>
              <tr className="border-b">
                <th className="py-3">Title</th>
                <th>Status</th>
                <th>Category</th>
              </tr>
            </thead>

            <tbody>
              {complaints.map((complaint) => (
                <tr
                  key={complaint.id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="py-3">
                    {complaint.title}
                  </td>

                  <td>{complaint.status}</td>

                  <td>{complaint.category}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

    </div>
  );
};

export default RecentComplaints;