import { Outlet } from "react-router-dom";
import Header from "../../Navbar/Guest";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
