'use client';
import React, { useState } from 'react';
import MonProfil from '../components/MonProfil';
import MaSituation from '../components/MaSituation';
import MonProjet from '../components/MonProjet';
import PersonnaliserCredit from '../components/PersonnaliserCredit';
import bgform from "../assets/bgform.png";
import '../styles/FormPage.css';
import { useNavigate } from 'react-router-dom';


const FormPage = () => {
  const [step, setStep] = useState(0);

  // On initialise formData avec TOUTES les clés de la table `formulaires`
  const [formData, setFormData] = useState({
    // Étape 1 : MonProfil
    prenom: '',
    nom: '',
    date_naissance: '',
    tel: '',
    isclient: false,
    categorie_client: '', // 'particulier' | 'professionnel' | 'mre'
    coemprunt: false,

    // Étape 2 : MaSituation
    employeur: '',
    revenu: '',          // montant net mensuel
    mensualite: '',      // mensualités en cours
    anciennete: '',      // 'moins6' | '6-12' | 'plus12'
    trialperiod: false,  // période d’essai
    revenucompl: false,  // revenus complémentaires

    // Étape 3 : MonProjet
    typeprojet: '',       // 'logement' | 'construction' | 'terrain' | 'rachat'
    valeur_du_bien: '',
    apportpersonnel: '',
    duree: '',            // nombre (années ou mois, à interpréter côté backend)
    taux: '',             // 'fixe' | 'variable'
    montant: '',

    // Étape 4 : PersonnaliserCredit
    remboursement: false, // différé de remboursement
    financement: '',      // 'par crédit' | 'par propres moyens'
    jourrelev: '',        // jour du prélèvement (1 à 31)
    activite_professionnelle: '', // si MRE ou Professionnel
    pays_residence: ''          // si MRE
  });

  const navigate = useNavigate();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Au dernier clic, on appelle cette fonction pour envoyer formData au backend
const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    console.log('Données envoyées au backend:', formData);

  try {
    const response = await fetch('/api/formulaire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
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


  const stepsLabels = ['Mon profil', 'Ma situation', 'Mon projet', 'Personnaliser mon crédit'];

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
