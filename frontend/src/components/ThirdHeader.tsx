import React from "react";
import logo from "../assets/logo.png"; 
import "../styles/header.css"; 

const ThirdHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Bank of Africa" />
      </div>
      <div className="header-links">
        <button className="demande-btn">Nouvelle Demande</button>
      </div>
    </header>
  );
};

export default ThirdHeader;
