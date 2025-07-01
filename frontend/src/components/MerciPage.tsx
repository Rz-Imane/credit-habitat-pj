import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MerciPage.css";
import bg from "../assets/salon.jpg"; 
import MinimalFooter from "./MinimalFooter";

const MerciPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="merci-bg" style={{ backgroundImage: `url(${bg})` }}>
        <div className="merci-center-wrapper">
      <div className="merci-container">
        <h2 className="merci-title">Merci pour votre confiance !</h2>
        <div className="merci-text">
          <p>
            Pour profiter de cette offre, ouvrez votre compte BANK OF AFRICA en quelques clics :
            <br />
            <span role="img" aria-label="en ligne">🖥️</span> En ligne :{" "}
            <a href="https://www.agencedirecte.ma" target="_blank" rel="noopener noreferrer" className="merci-link">
              www.agencedirecte.ma
            </a>
            <br />
            <span role="img" aria-label="en agence">🏢</span> En agence : <span className="merci-link">Choisissez la vôtre</span>
          </p>
          <p style={{ marginTop: 18 }}>
            Dès l’ouverture validée, finalisez votre souscription en ligne rapidement et sans délai.<br />
            À très vite pour la suite !
          </p>
        </div>
        <div className="merci-btns">
          <button className="merci-btn" onClick={() => navigate("/form")}>
            Retour au Formulaire
          </button>
          <a
            className="merci-btn"
            href="https://www.agencedirecte.ma"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 22 }}
          >
            Ouvrir mon compte
          </a>
        </div>
      </div>
      </div>
      <MinimalFooter />
    </div>
  );
};

export default MerciPage;
