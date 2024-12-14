import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import { useState, useEffect } from "react";

const Mainlayout = () => {
  const [isHome, setIsHome] = useState(true);
  const [isPartner, setIsPartner] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/discover") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
    if (path === "/partner") {
      setIsPartner(true);
    } else {
      setIsPartner(false);
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollTop />
      <Navbar isHome={isHome} isPartner={isPartner} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Mainlayout;
