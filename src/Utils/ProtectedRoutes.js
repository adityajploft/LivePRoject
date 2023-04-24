import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  let auth = localStorage.getItem("Zept_Auth_token_User");
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoutes;
