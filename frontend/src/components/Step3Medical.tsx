import React, { useState } from 'react';

type Answer = {
  souscripteur: boolean | null;
  conjoint: boolean | null;
  detail: string;
};

const questions: { label: string; hasInput?: boolean }[] = [
  { label: "Subissez-vous un traitement médical ? Si oui, lequel ?", hasInput: true },
  { label: "Avez-vous été atteint d’une maladie grave ou chronique ? Si oui, lesquelles ?" },
  { label: "Avez-vous subi des opérations chirurgicales ? Si oui, lesquelles ?" },
  { label: "Êtes-vous atteint d’une infirmité ? Si oui, laquelle ?" },
  { label: "Avez-vous dû interrompre votre travail pour raison de santé pendant plus de 15 jours au cours des 2 dernières années ?" },
  { label: "Êtes-vous titulaire d’une pension d’invalidité ?" },
  { label: "Bénéficiez-vous d’une assurance maladie ? Si oui, auprès de quelle compagnie ?" },
];

type Props = {
  onBack: () => void;
};

const Step3Medical: React.FC<Props> = ({ onBack }) => {
  const [answers, setAnswers] = useState<Answer[]>(Array(questions.length).fill({ souscripteur: null, conjoint: null, detail: "" }));

  const handleRadio = (i: number, who: 'souscripteur' | 'conjoint', value: boolean) => {
    const updated = [...answers];
    updated[i] = { ...updated[i], [who]: value };
    setAnswers(updated);
  };

  const handleInput = (i: number, value: string) => {
    const updated = [...answers];
    updated[i] = { ...updated[i], detail: value };
    setAnswers(updated);
  };

  return (
    <form className="credit-medical-form">
      <h3 className="credit-step-title">Questionnaire médical</h3>
      <table className="credit-medical-table">
        <thead>
          <tr>
            <th></th>
            <th>Souscripteur</th>
            <th>Conjoint</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, i) => (
            <tr key={i}>
              <td>
                <div>{q.label}</div>
                {q.hasInput && (
                  <input
                    type="text"
                    placeholder="Précisez…"
                    className="credit-input-text"
                    value={answers[i].detail}
                    onChange={e => handleInput(i, e.target.value)}
                  />
                )}
              </td>
              <td>
                <div className="radio-col">
                  <label>
                    <input
                      type="radio"
                      name={`souscripteur-${i}`}
                      checked={answers[i].souscripteur === true}
                      onChange={() => handleRadio(i, "souscripteur", true)}
                    /> Oui
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`souscripteur-${i}`}
                      checked={answers[i].souscripteur === false}
                      onChange={() => handleRadio(i, "souscripteur", false)}
                    /> Non
                  </label>
                </div>
              </td>
              <td>
                <div className="radio-col">
                  <label>
                    <input
                      type="radio"
                      name={`conjoint-${i}`}
                      checked={answers[i].conjoint === true}
                      onChange={() => handleRadio(i, "conjoint", true)}
                    /> Oui
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`conjoint-${i}`}
                      checked={answers[i].conjoint === false}
                      onChange={() => handleRadio(i, "conjoint", false)}
                    /> Non
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="credit-btn-group">
        <button type="button" onClick={onBack} className="credit-btn">Retour</button>
        <button type="submit" className="credit-btn primary" disabled>Valider</button>
      </div>
    </form>
  );
};

export default Step3Medical;
