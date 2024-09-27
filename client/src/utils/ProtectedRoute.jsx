import { useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // eslint-disable-next-line
  const [isAuth, setIsAuth] = useState(true);
  return isAuth ? children : <Navigate to="/signup" />;
}

export default ProtectedRoute;
