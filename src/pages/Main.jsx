import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../component/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto max-w-[1300px] w-[100%] lg-w[88%] px-0 pb-0">
        <Nav></Nav>
      </div>
      <div className="container mx-auto max-w-[1300px] w-[100%] lg-w[88%] px-0 pb-0">
        <Outlet></Outlet>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Main;
