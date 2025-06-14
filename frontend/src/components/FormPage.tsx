import React, { useState, useEffect } from 'react';
import MonProfil from '../components/MonProfil';
import MaSituation from '../components/MaSituation';
import MonProjet from '../components/MonProjet';
import PersonnaliserCredit from '../components/PersonnaliserCredit';
import bgform from "../assets/bgform.png";
import '../styles/FormPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

type FormData = {
  id?: number;
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

function cleanPayload(obj: any) {
  const cleaned: any = {};
  const intFields = [
    "revenu", "mensualite", "valeur_du_bien", "apportpersonnel",
    "duree", "montant", "jourrelev"
  ];
  const enumFields = [
    "typeprojet", "taux", "financement", "categorie_client"
  ];
  for (const key in obj) {
    if (
      (intFields.includes(key) || enumFields.includes(key)) &&
      (obj[key] === "" || obj[key] === undefined)
    ) {
      cleaned[key] = null;
    } else {
      cleaned[key] = obj[key];
    }
  }
  return cleaned;
}

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Récupérer l'id sauvegardé (si l'utilisateur revient)
  const savedId = localStorage.getItem('formulaireId');
  const [step, setStep] = useState<number>(location.state?.step ?? 0);
  const [formData, setFormData] = useState<FormData>(() => {
    if (location.state) {
      const { step: incomingStep, ...rest } = location.state;
      return { ...initialData, ...rest, id: rest.id || savedId || undefined };
    }
    if (savedId) return { ...initialData, id: Number(savedId) };
    return initialData;
  });

  useEffect(() => {
    if (location.state) {
      const { step: incomingStep, ...rest } = location.state;
      setStep(typeof incomingStep === 'number' ? incomingStep : 0);
      setFormData((prev) => ({ ...prev, ...rest }));
    }
  }, [location.state]);

  // ==> SUPPRIMER CETTE FONCTION
  // const saveStepToBackend = async (nextStep: number) => { ... }

  // Navigation = juste changement de step, aucune sauvegarde !
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Soumission finale
const handleFinalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const cleanedFormData = cleanPayload(formData);

    // Si id présent, update (PUT), sinon create (POST)
    let response;
    if (cleanedFormData.id) {
      // Update = PUT et url avec l'id
      response = await fetch(`/api/formulaire/${cleanedFormData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanedFormData),
      });
    } else {
      // Création = POST sans id dans le payload
      delete cleanedFormData.id;
      response = await fetch('/api/formulaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanedFormData),
      });
    }

    const data = await response.json();
    if (response.ok) {
      // Nettoie le localStorage après soumission si tu veux repartir de zéro ensuite
      localStorage.removeItem('formulaireId');
      navigate('/confirmation', { state: formData });
    } else {
      alert('Erreur : ' + data.error);
    }
  } catch (err) {
    alert("Erreur serveur lors de l'envoi du formulaire");
  }
};



  const stepsLabels = [
    'Mon profil', 'Ma situation', 'Mon projet', 'Personnaliser mon crédit'
  ];

  const renderStep = () => {
    switch (step) {
      case 0:
        return <MonProfil data={formData} setData={setFormData} onNext={nextStep} />;
      case 1:
        return <MaSituation data={formData} setData={setFormData} onNext={nextStep} onBack={prevStep} />;
      case 2:
        return <MonProjet data={formData} setData={setFormData} onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <PersonnaliserCredit data={formData} setData={setFormData} onBack={prevStep} onSubmit={handleFinalSubmit} />;
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
