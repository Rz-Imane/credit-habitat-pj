import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import bg from "../assets/bg1.jpg";
import MinimalFooter from "./MinimalFooter"; 

const LoginPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="login-bmce-wrapper" style={{ backgroundImage: `url(${bg})` }}>
        <div className="login-bmce-header">
          <button className="tab active">Email/Code d’accès</button>
          <button className="tab" onClick={() => navigate("/loginid")}>Identifiant BMCE Direct</button>
        </div>
  
        <div className="login-bmce-card">
          <form className="login-bmce-form">
            <label>Adresse Mail</label>
            <input type="email" placeholder="Adresse Mail" />
  
            <label>Code d’accès</label>
            <input type="password" placeholder="Code d’accès" />
  
            <div className="login-bmce-buttons">
              <button type="button" className="secondary-btn" onClick={() => navigate("/newcode")}>
                J’ai perdu mon code d’accès
              </button>
              <button type="submit" className="primary-btn">
                Suivant
              </button>
            </div>
          </form>
        </div>
      </div>
      <MinimalFooter />
    </>
  );
};

export default LoginPage;