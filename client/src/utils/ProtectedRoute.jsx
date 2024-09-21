import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  // eslint-disable-next-line
  const [isAuth, setIsAuth] = useState(true);
  return isAuth ? <Outlet /> : <Navigate to="/signup" />;
}

export default ProtectedRoute;
