import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({ component: RouteComponent }) {
  const { userInfo } = useSelector((state) => state.userReducer);

  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return <RouteComponent />;
}

export default PrivateRoute;
