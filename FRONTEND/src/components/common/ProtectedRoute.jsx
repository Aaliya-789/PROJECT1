import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  allowedRole,
  userRole,
  children,
}) => {

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && userRole !== allowedRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;