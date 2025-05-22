import React from "react";
import logo from "../assets/logo.png"; 
import "../styles/header.css"; 

const SecondHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Bank of Africa" />
      </div>
      <div className="header-links">
        <button className="disconnect-btn">Déconnexion</button>
      </div>
    </header>
  );
};

export default SecondHeader;
