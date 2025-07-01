import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/creditoffer.css";
import svg1 from "../assets/frais.svg"; 
import svg2 from "../assets/checkmark.svg";

const CreditOfferSection = () => {
  const { t } = useTranslation();

  return (
    <section className="credit-offer-section">
      <div className="offer-top">
        <h2>{t("offer.exclusiveOnline")}</h2>
        <div className="offer-features">
          <div className="feature-item">
            <img src={svg1} alt={t("offer.dossierFees")} />
            <p>
              <strong>{t("offer.dossierFees")}</strong>
              <br />
              {t("offer.free")}
            </p>
          </div>
          <div className="feature-item">
            <img src={svg1} alt={t("offer.expertiseFees")} />
            <p>
              <strong>{t("offer.expertiseFees")}</strong>
              <br />
              {t("offer.free")}
            </p>
          </div>
          <div className="feature-item">
            <img src={svg1} alt={t("offer.instantApproval")} />
            <p>
              <strong>{t("offer.instantApproval")}</strong>
              <br />
              {t("offer.instant")}
            </p>
          </div>
        </div>
      </div>

      <div className="offer-options">
        <h3>{t("offer.optionsTitle")}</h3>
        <div className="options-features">
          <div className="option-item">
            <img src={svg2} alt={t("offer.paymentDate")} />
            <p>
              {t("offer.paymentDate")}
              <br />
              {t("offer.paymentDateSubtitle")}
            </p>
          </div>
          <div className="option-item">
            <img src={svg2} alt={t("offer.suspension")} />
            <p>
              {t("offer.suspension")}
              <br />
              {t("offer.suspensionSubtitle")}
            </p>
          </div>
          <div className="option-item">
            <img src={svg2} alt={t("offer.revision")} />
            <p>
              {t("offer.revision")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditOfferSection;
