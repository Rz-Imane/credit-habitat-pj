import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/herosection.css";
import chair from "../assets/chair.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="frame">
        <div className="card">
          <div className="diagonal-container">
            {/* Left Text Side */}
            <div className="left-pane"></div>

            {/* Right Image Side */}
            <div className="right-pane">
              <img src={chair} alt="chair" className="chair-img" />
            </div>
            
            {/* Fixed content wrapper - separated from left-pane */}
            <div className="fixed-content-wrapper">
              <div className="content">
              <div className="headline">
                <p className="headline-text" style={{ overflowWrap: "break-word" }}>
                  BANK OF AFRICA couvre vos frais d'enregistrement pour tout crédit de 10 ans et plus,
                  jusqu'au 10 mai – jusqu'à 30 000 Dhs offerts !
                </p>
              </div>
                <div className="buttons">
                  <button className="btn white">Simuler le crédit</button>
                  <button className="btn blue" onClick={() => navigate("/signup")}>Lancer ma demande</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HeroSection;