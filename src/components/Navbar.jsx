import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        gap: "30px",
        padding: "10px",
      }}
    >
      <Link to="/">Login</Link>
      <Link to="/adminpanel">Admin Panel</Link>
      <Link to="/webbased">Web Based</Link>
    </div>
  );
};

export default Navbar;
