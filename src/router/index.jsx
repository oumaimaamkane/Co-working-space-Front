import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Layouts/Dashboard/App';
import Users from '../views/BackOffice/Users';
import Services from '../views/BackOffice/Services';
import Categories from '../views/BackOffice/Categories';
import Espaces from '../views/BackOffice/Espaces';
import Equipements from '../views/BackOffice/Equipements';
import Dashboard from '../views/BackOffice/Dashboard';
import Reservations from '../views/BackOffice/Reservations';
import Roles from '../views/BackOffice/Roles';






import Register from "../views/Auth/Register";
import Login from "../views/Auth/Login";
import MainLayout from "../components/Layouts/Home/MainLayout";
import Home from "../views/FrontOffice/Home";

const Router = () => {
  return (
    <Routes>

      {/*Back Office Routes */}
      
      <Route path="/Admin" element={<Sidebar />}>
        <Route path="manage-users" element={<Users />} />
        <Route path="manage-services" element={<Services />} />
        <Route path="manage-categories" element={<Categories />} />
        <Route path="manage-equipements" element={<Equipements />} />
        <Route path="manage-espaces" element={<Espaces />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="manage-reservations" element={<Reservations />} />
        <Route path="manage-roles" element={<Roles />} />
      </Route>
      
      {/*Auth Routes */}
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      {/*Front Office Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

    </Routes>
  );
};

export default Router;