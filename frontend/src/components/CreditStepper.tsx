import React, { useState } from 'react';
import '../styles/CreditStepper.css';
import Step1CIN from '../components/Step1CIN';
import Step2Documents from '../components/Step2Documents';
import Step3Medical from '../components/Step3Medical';
import salonBg from '../assets/salon.jpg'; // <<-- IMPORT BG IMAGE

const steps = [
  { label: "Ma CIN" },
  { label: "Mes documents" },
  { label: "Questionnaire médical" },
];

const CreditStepper: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [cinData, setCinData] = useState<any>(null);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleNextFromCIN = (data: any) => {
    setCinData(data); // Sauvegarde pour la suite
    nextStep();
  };

  const renderStep = () => {
    switch (step) {
      case 0: return <Step1CIN onNext={handleNextFromCIN} />;
      case 1: return <Step2Documents onBack={prevStep} onNext={nextStep} />;
      case 2: return <Step3Medical onBack={prevStep} />;
      default: return null;
    }
  };

  return (
    <div
      className="credit-stepper-bg" // <<--- NEW CLASS for bg
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${salonBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="credit-stepper-container" style={{background: "rgba(255,255,255,0.92)", borderRadius: 24, padding: 32, boxShadow: "0 8px 48px rgba(36, 57, 98, 0.10)"}}>
        <h2 className="credit-title">Mon dossier de crédit</h2>
        <div className="credit-stepper-header">
          {steps.map((s, i) => (
            <div key={i} className="credit-stepper-step">
              <div className={`credit-stepper-circle${i <= step ? ' active' : ''}`}>{i + 1}</div>
              <span className={`credit-stepper-label${i === step ? ' selected' : ''}`}>{s.label}</span>
              {i < steps.length - 1 && <div className="credit-stepper-bar" />}
            </div>
          ))}
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default CreditStepper;
