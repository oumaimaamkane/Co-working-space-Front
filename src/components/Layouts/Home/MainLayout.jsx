import ScrollButton from "../../Buttons/ScrollButton";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../../Navbar/Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <ToastContainer />
      <Nav />
      <main>
        <Outlet />
      </main>

      {/* Scroll to Top Area  */}
      <ScrollButton />
      <Footer />
    </>
  );
}
