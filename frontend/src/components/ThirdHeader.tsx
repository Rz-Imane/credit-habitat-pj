import React from "react";
import logo from "../assets/logo.png"; 
import "../styles/header.css"; 
import { useNavigate } from "react-router-dom";
const ThirdHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Bank of Africa" />
      </div>
      <div className="header-links">
        <button className="demande-btn" onClick={() => navigate("/signup")}>Nouvelle Demande</button>
      </div>
    </header>
  );
};

export default ThirdHeader;
