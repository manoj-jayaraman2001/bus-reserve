import {
  DirectionsBusFilled,
  MenuOpen,
  CloseOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <DirectionsBusFilled className="icon" style={{ fontSize: 30 }} />
          <p>RESERVE</p>
        </div>
        <div className="links">
          <NavLink>Ticket</NavLink>
          <NavLink>Contact us</NavLink>
        </div>
        <div className="auth">
          <button className="btn-option">Register</button>
          <button className="btn">Login</button>
        </div>

        <div
          className="menu-icon"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        >
          {menuOpen ? (
            <CloseOutlined className="icon" />
          ) : (
            <MenuOpen className="icon" />
          )}
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : "close"}`}>
          <NavLink>Tickets</NavLink>
          <NavLink>Contact us</NavLink>
          <button className="btn-option">Register</button>
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
