import React, { useRef } from 'react';

type Props = {
  onBack: () => void;
  onNext: () => void;
};

const REQUIRED_DOCS = [
  "Photocopie de votre CIN",
  "Facture récente de téléphone ou d’eau et d’électricité",
  "Demande manuscrite de crédit logement signée",
  "Attestation de travail, de salaire, 3 fiches de paie (si salarié du privé), ou état d’engagement pour fonctionnaire",
  "Domiciliation irrévocable du salaire (privé) ou état d’engagement (fonctionnaire)",
  "3 derniers relevés de compte (si nouveau client BANK OF AFRICA depuis moins de 3 mois)",
  "Compromis de vente du bien à acquérir (moins de 3 mois)",
  "Copie de certificat du propriété du bien à acquérir",
  "Copie certifiée conforme du certificat de non-imposition (si non propriétaire)",
  "Attestation de déclaration de salaire délivrée par la CNSS datant de moins d’un mois",
  "Autres"
];

const Step2Documents: React.FC<Props> = ({ onBack, onNext }) => {
  const fileInputs = useRef<(HTMLInputElement | null)[]>([]);

  // Si tu veux collecter les fichiers, il faut un peu plus de logique pour collecter tous les fichiers
  // const [uploaded, setUploaded] = React.useState<Record<number, File | null>>({});

  return (
    <div>
      <h3 className="credit-step-title">Téléversez vos documents requis</h3>
      <form className="credit-docs-form">
        <ul style={{padding: 0}}>
          {REQUIRED_DOCS.map((doc, idx) => (
            <li key={idx} style={{marginBottom: 12, listStyle: "none", display: 'flex', alignItems: 'center', gap: 8}}>
              <span style={{minWidth: 320}}>{doc}</span>
              <input
              type="file"
              ref={el => { fileInputs.current[idx] = el; }} // <-- FIXED!
              className="credit-input-file"
              accept="application/pdf,image/*"
            />

            </li>
          ))}
        </ul>
        <div className="credit-btn-group">
          <button type="button" onClick={onBack} className="credit-btn">Retour</button>
          <button type="button" onClick={onNext} className="credit-btn primary">Suivant</button>
        </div>
      </form>
    </div>
  );
};

export default Step2Documents;
