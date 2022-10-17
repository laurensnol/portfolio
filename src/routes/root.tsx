import './root.scss'

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function Root() {
  return (
    <div className="content">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
