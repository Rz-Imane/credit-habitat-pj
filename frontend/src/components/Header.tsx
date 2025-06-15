import React from "react";
import logo from "../assets/logo.png"; 
import { ReactComponent as PhoneIcon } from '../assets/call.svg';
import "../styles/header.css"; 
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Bank of Africa" />
      </div>
      <div className="header-links">
        <a href="tel:+212520393030" className="contact"> 
        <PhoneIcon className="phone-icon"/>
        +212 (0) 5 20 39 30 30
        </a>
        <button className="simulator-btn" onClick={() => navigate("/simulateur")}>Simulateur</button>
        <button className="request-btn" onClick={() => navigate("/login")}>Ma demande</button>
      </div>
    </header>
  );
};

export default Header;
