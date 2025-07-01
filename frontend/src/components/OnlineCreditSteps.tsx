import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/onlinecreditsteps.css";

import step1 from "../assets/form.svg";
import step2 from "../assets/prop.svg";
import step3 from "../assets/doc.svg";
import step4 from "../assets/contrat.svg";
import step5 from "../assets/agence.svg";

const icons = [step1, step2, step3, step4, step5];

const OnlineCreditSteps = () => {
  const { t } = useTranslation();

  // Type assertion and guard to ensure array type for steps
  const stepsData = t("steps", { returnObjects: true });
  const steps: { title: string; description: string }[] = Array.isArray(stepsData) ? stepsData : [];

  return (
    <section className="online-steps-section">
      <h2 className="steps-title">{t("stepsTitle")}</h2>
      <p
        className="steps-subtitle"
        dangerouslySetInnerHTML={{ __html: t("stepsSubtitle") }}
      />
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <img src={icons[index]} alt={step.title} className="step-icon" />
            <h4 className="step-title">{step.title}</h4>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnlineCreditSteps;
