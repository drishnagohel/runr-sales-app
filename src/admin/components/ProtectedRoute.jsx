import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check if user is logged in

  if (!token) {
    return <Navigate to="/" replace />; // redirect to login page
  }

  return children; // user is logged in, render the children component
};

export default ProtectedRoute;
