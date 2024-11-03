import { useAuth } from "@/context/authContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (allowedRoles && !allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" />;

  // If authenticated and authorized, render children or Outlet for nested routes
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
