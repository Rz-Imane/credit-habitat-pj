import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/loginid.css";
import bg from "../assets/bg1.jpg";
import MinimalFooter from "./MinimalFooter"; 

const Loginid = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="login-bm-wrapper" style={{ backgroundImage: `url(${bg})` }}>
        <div className="login-bm-header">
          <button className="tab" onClick={() => navigate("/login")}>Email/Code d'accès</button>
          <button className="tab active">Identifiant BMCE Direct</button>
        </div>
  
        <div className="login-bm-card">
          <form className="login-bm-form">
            <label>Identifiant BMCE Direct</label>
            <input type="email" placeholder="Identifiant BMCE Direct" />
    
            <label>Code d'accès</label>
            <input type="password" placeholder="Code d'accès" />
    
            <div className="login-bm-buttons">
              <button type="button" className="secondary-btn" onClick={() => navigate("/newcode")}>
                J'ai perdu mon code d'accès
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

export default Loginid;