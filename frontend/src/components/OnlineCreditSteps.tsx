import React from "react";
import "../styles/onlinecreditsteps.css";

import step1 from "../assets/form.svg";
import step2 from "../assets/prop.svg";
import step3 from "../assets/doc.svg";
import step4 from "../assets/contrat.svg";
import step5 from "../assets/agence.svg";

const steps = [
  {
    icon: step1,
    title: "Formulaire",
    description: "Je saisis les informations relatives à mon profil et mon projet",
  },
  {
    icon: step2,
    title: "Proposition commerciale",
    description: "J’obtiens un accord de principe immédiat avec une simulation personnalisée",
  },
  {
    icon: step3,
    title: "Dossier de crédit",
    description: "J’envoie mes pièces justificatives via mon espace personnel",
  },
  {
    icon: step4,
    title: "Contractualisation",
    description: "J’obtiens mon contrat à légaliser",
  },
  {
    icon: step5,
    title: "Rendez-vous en agence",
    description: "Je me présente en agence avec mes originaux et mon contrat légalisé",
  },
];

const OnlineCreditSteps = () => {
  return (
    <section className="online-steps-section">
      <h2 className="steps-title">Votre crédit immobilier en ligne en 5 étapes</h2>
      <p className="steps-subtitle">
        Plus besoin de vous déplacer plusieurs fois en agence.<br />
        Optez pour le crédit immobilier en ligne et facilitez-vous la vie.
      </p>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <img src={step.icon} alt={step.title} className="step-icon" />
            <h4 className="step-title">{step.title}</h4>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnlineCreditSteps;
