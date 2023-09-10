import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);


  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <Link to="/">
          <img
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt=""
            className="nav_logo"
          />
        </Link>
        <Link to="/profile">
        <img
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="avatar"
          className="nav_avatar"
        />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
