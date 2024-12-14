import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/media/theotherglasses-logo-white.png";
import logo2 from "../assets/media/theotherglasses-logo-black.png";
import { FaBars } from "react-icons/fa";

const Navbar = ({ isHome, isPartner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? `border-b ${isScrolled || isOpen ? "border-b-black" : ""} ${
          isHome ? "" : "border-b-black text-black"
        } ${isScrolled && "text-black"}`
      : `navList relative hover:after:w-full ${
          isScrolled || !isHome || isPartner
            ? "hover:after:bg-black text-black"
            : "lg:hover:after:bg-white hover:after:bg-black"
        }`;

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`lg:px-16 md:px-8 px-4 py-6 fixed top-0 z-50 w-full ${
        isHome && "lg:text-white text-black"
      } ${isScrolled && "bg-white transition-all duration-100"}`}
    >
      <section className="flex items-center lg:justify-between justify-center text-sm">
        <FaBars
          className={`lg:hidden absolute top-6 left-4 ${
            isScrolled || !isHome || isPartner ? "text-black" : "text-white"
          } cursor-pointer`}
          onClick={() => setIsOpen(true)}
        />
        {isOpen ? (
          <div className="navOverlay top-0 " onClick={closeNav}></div>
        ) : (
          ""
        )}
        <ul
          className={`${
            isOpen
              ? "h-screen flex flex-col items-start absolute top-0 left-0 bg-white px-4 w-4/5"
              : "lg:flex hidden items-center w-2/5 relative"
          }    gap-6 cursor-pointer ${isPartner && "text-black"}`}
        >
          <div className="pt-6 pb-20 lg:hidden text-black cursor-pointer">
            <FaBars onClick={() => setIsOpen(false)} />
          </div>
          <NavLink to="/" className={linkClass} onClick={closeNav}>
            Home
          </NavLink>
          <NavLink to="/discover" className={linkClass} onClick={closeNav}>
            Discover Collection
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeNav}>
            About Us
          </NavLink>
          <NavLink
            to="/partner"
            className={`text-black navList relative lg:hidden ${
              isPartner
                ? "border-b border-b-black"
                : "hover:after:w-full hover:after:bg-black"
            }`}
            onClick={closeNav}
          >
            Become a Partner
          </NavLink>
        </ul>
        <NavLink to="/">
          {isHome ? (
            <img
              src={isScrolled || isPartner ? logo2 : logo}
              alt=""
              className="lg:h-5 h-4 cursor-pointer"
            />
          ) : (
            <img src={logo2} alt="" className="lg:h-5 h-4 cursor-pointer" />
          )}
        </NavLink>
        <NavLink
          to="/partner"
          className={`w-2/5 text-end cursor-pointer lg:block hidden ${
            !isHome || isScrolled || isPartner ? "text-black" : ""
          } `}
        >
          Become a Partner
        </NavLink>
      </section>
    </nav>
  );
};

export default Navbar;
