import React, { useRef } from 'react';

type Props = {
  onBack: () => void;
  onNext: () => void;
};

const Step2Documents: React.FC<Props> = ({ onBack, onNext }) => {
  const fileInput = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <h3 className="credit-step-title">Téléversez vos documents requis</h3>
      <input type="file" multiple ref={fileInput} className="credit-input-file" />
      <div className="credit-btn-group">
        <button onClick={onBack} className="credit-btn">Retour</button>
        <button onClick={onNext} className="credit-btn primary">Suivant</button>
      </div>
    </div>
  );
};

export default Step2Documents;
