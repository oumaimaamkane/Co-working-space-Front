import { Routes, Route } from "react-router-dom";
// import Sidebar from "../components/Layouts/Dashboard/App";
import Users from "../views/BackOffice/Users";
import Services from "../views/BackOffice/Services";
import Categories from "../views/BackOffice/Categories";
import Espaces from "../views/BackOffice/Espaces";
import Equipements from "../views/BackOffice/Equipements";
import Dashboard from "../views/BackOffice/Dashboard";
import Reservations from "../views/BackOffice/Reservations";
import Roles from "../views/BackOffice/Roles";

import Register from "../views/Auth/Register";
import Login from "../views/Auth/Login";
import MainLayout from "../components/Layouts/Home/MainLayout";
import Home from "../views/FrontOffice/Home";

const Router = () => {
  return (
    <Routes>
      
      {/*Auth Routes */}
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      {/*Front Office Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/*Back Office Routes */}
      <Route path="/Admin" element={<Users />}>
        <Route path="users" element={<Users />} />
        <Route path="services" element={<Services />} />
        <Route path="categories" element={<Categories />} />
        <Route path="equipements" element={<Equipements />} />
        <Route path="espaces" element={<Espaces />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="roles" element={<Roles />} />
      </Route>
    </Routes>
  );
};

export default Router;
