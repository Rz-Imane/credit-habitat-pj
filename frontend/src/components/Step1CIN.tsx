import React, { useRef } from 'react';

type Props = {
  onNext: () => void;
};

const Step1CIN: React.FC<Props> = ({ onNext }) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <h3 className="credit-step-title">Téléversez votre carte d'identité nationale</h3>
      <input type="file" accept="image/*,application/pdf" ref={fileInput} className="credit-input-file" />
      <div className="credit-btn-group">
        <button onClick={onNext} className="credit-btn primary">Suivant</button>
      </div>
    </div>
  );
};

export default Step1CIN;
