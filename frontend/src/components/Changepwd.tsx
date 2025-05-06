import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Changepwd.css";
import bg from "../assets/bg1.jpg";

const NewCode = () => {
  const navigate = useNavigate();
  return (
    <div className="pwd-wrapper" style={{ backgroundImage: `url(${bg})` }}>
      <div className="pwd-card">
        <h2 className="new-code-title">Changement de mot de passe</h2> {/* Added title */}
        <form className="pwd-form">
          <label>Ancien mot de passe</label>
          <input type="text" placeholder="Ancien mot de passe" />
          <label>Nouveau mot de passe</label>
          <input type="text" placeholder="Nouveau mot de passe" />
          <label>Confirmation du nouveau mot de passe</label>
          <input type="text" placeholder="Confirmation du nouveau mot de passe" />
          <div className="pwd-buttons">
            <button type="submit" className="pwd-btn">
              Changer le mot de passe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCode;