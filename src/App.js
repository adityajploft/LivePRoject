import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Login from "./Component/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import Subcriber from "./Component/Subcriber";
import Claims from "./Component/Claims";
import Soon from "./Component/Soon";
import Institution from "./Pages/Institution";
import ExpenseClaims from "./Pages/ExpenseClaims";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import LoginCheckRoute from "./Utils/LoginCheckRoute";
import MedicalCenter from "./Component/MedicalCenter";
import Doctor from "./Component/Doctor";
import "react-datepicker/dist/react-datepicker.css";
import Admintration from "./Component/Adminstrator";
import MedicalClaims from "./Component/MedicalClaims";
import MedicalClaimsDetail from "./Component/MedicalClaimsDetail";
import MedicalGenericService from "./Component/MedicalGenericService";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginCheckRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<Layout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />

            <Route path="/subscriber" element={<Subcriber />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/coming-soon" element={<Soon />} />
            <Route path="/institution" element={<Institution />} />
            <Route path="/expense-claims" element={<ExpenseClaims />} />
            <Route path="/medical-center" element={<MedicalCenter />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/admintration" element={<Admintration />} />
            <Route path="/medical-claims" element={<MedicalClaims />} />
            <Route
              path="/medical-claims-detail"
              element={<MedicalClaimsDetail />}
            />
            <Route
              path="/medical-generic-service"
              element={<MedicalGenericService />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
