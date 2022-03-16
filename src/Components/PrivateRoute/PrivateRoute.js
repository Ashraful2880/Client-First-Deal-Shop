import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <img
        className="w-96 rounded-2xl mx-auto mt-3"
        src="https://i.ibb.co/D1GcjP6/Loading.gif"
        alt="Loading..."
      />
    );
  }
  return <>{user?.email ? children : <Navigate to="/signUp" />}</>;
};

export default PrivateRoute;
