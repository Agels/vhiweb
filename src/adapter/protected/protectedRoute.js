import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const auth = localStorage.getItem('token');
  return auth ?  children : <Navigate to="/" />;
}

 