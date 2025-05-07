'use client';
import React, { useState } from 'react';
import MonProfil from '../components/MonProfil';
import MaSituation from '../components/MaSituation';
import MonProjet from '../components/MonProjet';
import PersonnaliserCredit from '../components/PersonnaliserCredit';
import bgform from "../assets/bgform.png";
import '../styles/FormPage.css';


const FormPage = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <MonProfil onNext={nextStep} />;
      case 1:
        return <MaSituation onNext={nextStep} onBack={prevStep} />;
      case 2:
          return <MonProjet onBack={prevStep} onNext={nextStep} />;        
      case 3:
        return <PersonnaliserCredit onBack={prevStep} />;
      default:
        return <MonProfil onNext={nextStep} />;
    }
  };

  const stepsLabels = ['Mon profil', 'Ma situation', 'Mon projet', 'Personnaliser mon crédit'];

  return (
    <div 
      className="form-wrapper" style={{backgroundImage: `url(${bgform})`}}
    >
      <main className="form-container">
        <div className="step-indicator">
          {stepsLabels.map((label, index) => (
            <div key={index} className={`step ${step === index ? 'active' : ''}`}>
              {label}
            </div>
          ))}
        </div>

        <form className="form-content">{renderStep()}</form>
      </main>

    </div>
  );
};

export default FormPage;