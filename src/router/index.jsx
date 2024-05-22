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

const Router = () => {
  return (
    <Routes>
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
    </Routes>
  );
};

export default Router;
