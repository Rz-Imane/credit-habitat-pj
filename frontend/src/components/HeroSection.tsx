import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/herosection.css";
import chair from "../assets/chair.jpg";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
    React.useEffect(() => {
      const img = new window.Image();
      img.src = chair;
    }, []);

  return (
    <div className="frame">
      <div className="card">
        <div className="diagonal-container">
          <div className="left-pane"></div>
          <div className="right-pane">
            <img src={chair} alt="chair" className="chair-img" loading="eager"/>
          </div>
          <div className="fixed-content-wrapper">
            <div className="content">
              <div className="headline">
                <p className="headline-text" style={{ overflowWrap: "break-word" }}>
                  {t("headline")}
                </p>
              </div>
              <div className="buttons">
                <button className="btn white" onClick={() => navigate("/simulateur")}>
                  {t("simulateCredit")}
                </button>
                <button className="btn blue" onClick={() => navigate("/signup")}>
                  {t("startRequest")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
