import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/NewCode.css";
import bg from "../assets/bg1.jpg";
import MinimalFooter from "./MinimalFooter"; 

const NewCode = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-wrapper" style={{ backgroundImage: `url(${bg})` }}>
        <div className="login-card">
          <h2 className="new-code-title">Nouveau code d'accès</h2>
          <form className="login-form">
            <label>Identifiant BMCE Direct</label>
            <input type="email" placeholder="Identifiant BMCE Direct" />
            <div className="login-buttons">
              <button type="submit" className="primary-btn" onClick={() => navigate("/changepwd")}>
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

export default NewCode;