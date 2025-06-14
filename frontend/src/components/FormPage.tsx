'use client';
import React, { useState, useEffect } from 'react';
import MonProfil from '../components/MonProfil';
import MaSituation from '../components/MaSituation';
import MonProjet from '../components/MonProjet';
import PersonnaliserCredit from '../components/PersonnaliserCredit';
import bgform from "../assets/bgform.png";
import '../styles/FormPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

// Définir le type des données du formulaire
type FormData = {
  civilite: string;
  prenom: string;
  nom: string;
  date_naissance: string;
  tel: string;
  isclient: boolean;
  categorie_client: string;
  coemprunt: boolean;
  employeur: string;
  revenu: string;
  mensualite: string;
  anciennete: string;
  trialperiod: boolean;
  revenucompl: boolean;
  typeprojet: string;
  valeur_du_bien: string;
  apportpersonnel: string;
  duree: string;
  taux: string;
  montant: string;
  remboursement: boolean;
  financement: string;
  jourrelev: string;
  activite_professionnelle: string;
  pays_residence: string;
};

const initialData: FormData = {
  civilite: '',
  prenom: '',
  nom: '',
  date_naissance: '',
  tel: '',
  isclient: false,
  categorie_client: '',
  coemprunt: false,
  employeur: '',
  revenu: '',
  mensualite: '',
  anciennete: '',
  trialperiod: false,
  revenucompl: false,
  typeprojet: '',
  valeur_du_bien: '',
  apportpersonnel: '',
  duree: '',
  taux: '',
  montant: '',
  remboursement: false,
  financement: '',
  jourrelev: '',
  activite_professionnelle: '',
  pays_residence: '',
};

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Permet de revenir sur l’étape voulue avec les données
  const [step, setStep] = useState<number>(location.state?.step ?? 0);
  const [formData, setFormData] = useState<FormData>(() => {
    // Si on vient de la page de confirmation, récupérer les données
    if (location.state) {
      const { step: incomingStep, ...rest } = location.state;
      return { ...initialData, ...rest };
    }
    return initialData;
  });

  // Si l'utilisateur revient avec des données modifiées
  useEffect(() => {
    if (location.state) {
      const { step: incomingStep, ...rest } = location.state;
      setStep(typeof incomingStep === 'number' ? incomingStep : 0);
      setFormData((prev: FormData) => ({ ...prev, ...rest }));
    }
    // eslint-disable-next-line
  }, [location.state]);

  const nextStep = () => setStep((prev: number) => prev + 1);
  const prevStep = () => setStep((prev: number) => prev - 1);

  // Soumission finale
  const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/formulaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/confirmation', { state: formData });
      } else {
        alert('Erreur : ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Erreur serveur lors de l'envoi du formulaire");
    }
  };

  const stepsLabels = [
    'Mon profil',
    'Ma situation',
    'Mon projet',
    'Personnaliser mon crédit'
  ];

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <MonProfil
            data={formData}
            setData={setFormData}
            onNext={nextStep}
          />
        );
      case 1:
        return (
          <MaSituation
            data={formData}
            setData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 2:
        return (
          <MonProjet
            data={formData}
            setData={setFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <PersonnaliserCredit
            data={formData}
            setData={setFormData}
            onBack={prevStep}
            onSubmit={handleFinalSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-layout">
      <div className="form-wrapper" style={{ backgroundImage: `url(${bgform})` }}>
        <main className="form-container">
          <div className="step-indicator">
            {stepsLabels.map((label, index) => (
              <div key={index} className={`step ${step === index ? 'active' : ''}`}>
                {label}
              </div>
            ))}
          </div>
          {renderStep()}
        </main>
      </div>
    </div>
  );
};

export default FormPage;
