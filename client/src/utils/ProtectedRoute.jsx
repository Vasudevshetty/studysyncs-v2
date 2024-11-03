import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const [isAuth] = useState(true); // Replace with real auth logic
  const [user] = useState({ role: "user" }); // Replace with real user data

  if (!isAuth) return <Navigate to="/login" />;

  if (allowedRoles && !allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" />;

  // If authenticated and authorized, render children or Outlet for nested routes
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
