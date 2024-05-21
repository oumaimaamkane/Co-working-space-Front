import { createBrowserRouter } from "react-router-dom";
import Register from "../views/Auth/Register";
import Login from "../views/Auth/Login";
import Categories from "../views/Admin/Categories";
import Dashboard from "../views/Admin/Dashboard";
import Equipements from "../views/Admin/Equipements";
import Espaces from "../views/Admin/Espaces";
import Reservations from "../views/Admin/Reservations";
import Roles from "../views/Admin/Roles";
import Services from "../views/Admin/Services";
import Users from "../views/Admin/Users";

const routes = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/equipements",
    element: <Equipements />,
  },
  {
    path: "/espaces",
    element: <Espaces />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
  {
    path: "/roles",
    element: <Roles />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/users",
    element: <Users />,
  },
];

const router = createBrowserRouter(routes);

export { router };
