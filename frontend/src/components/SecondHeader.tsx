import React from "react";
import logo from "../assets/logo.png"; 
import "../styles/header.css"; 
import { useNavigate } from "react-router-dom";

const SecondHeader = () => {
  const navigate = useNavigate();

  const handleDisconnect = () => {
    // Clear all user/session data
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Bank of Africa" />
      </div>
      <div className="header-links">
        <button className="disconnect-btn" onClick={handleDisconnect}>
          Déconnexion
        </button>
      </div>
    </header>
  );
};

export default SecondHeader;
