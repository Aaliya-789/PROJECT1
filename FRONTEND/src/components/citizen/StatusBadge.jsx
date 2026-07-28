const StatusBadge = ({ status }) => {
  let badgeStyle = "";

  switch (status) {
    case "Pending":
      badgeStyle =
        "bg-yellow-100 text-yellow-700";
      break;

    case "In Progress":
      badgeStyle =
        "bg-blue-100 text-blue-700";
      break;

    case "Resolved":
      badgeStyle =
        "bg-green-100 text-green-700";
      break;

    default:
      badgeStyle =
        "bg-gray-100 text-gray-700";
  }

  return (
    <span
      className={`
      px-3
      py-1
      rounded-full
      text-sm
      font-semibold
      ${badgeStyle}
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;