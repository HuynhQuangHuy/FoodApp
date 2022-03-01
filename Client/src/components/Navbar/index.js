import "./Style.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

function Header() {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();
  function logOut() {
    setUser(false);
    navigate("/sign-in");
  }
  return (
    <Nav>
      <NavLink to="/">
        <h3 class="animate-charcter"> Home</h3>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/services" activeStyle>
          Services
        </NavLink>
        <NavLink to="/contact-us" activeStyle>
          Contact Us
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign Up
        </NavLink>

        <NavLink to="/sign-in" activeStyle>
          Sign In
        </NavLink>
      </NavMenu>
    </Nav>
  );
}

export default Header;
