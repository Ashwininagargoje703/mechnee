import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        justifyContent: "flex-start",
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
