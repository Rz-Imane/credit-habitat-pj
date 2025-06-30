// Step1CIN.tsx
import React, { useRef, useState } from 'react';

type Props = {
  onNext: (cinData: any) => void; // transmet les infos CIN à la suite
};

const Step1CIN: React.FC<Props> = ({ onNext }) => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<"none"|"loading"|"error"|"ok">("none");
  const [cinData, setCinData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleUpload = async () => {
    if (!fileInput.current?.files?.[0]) return;
    setStatus("loading");
    setError("");
    const form = new FormData();
    form.append('cin', fileInput.current.files[0]);
    try {
      const res = await fetch('/api/cin', { method: 'POST', body: form });
      const data = await res.json();
      if (data.success) {
        setCinData(data);
        setStatus("ok");
      } else {
        setError("Erreur de lecture automatique, essayez une autre image.");
        setStatus("error");
      }
    } catch {
      setError("Erreur lors de la connexion au serveur.");
      setStatus("error");
    }
  };

  return (
    <div>
      <h3 className="credit-step-title">Téléversez votre carte d'identité nationale</h3>
      <input type="file" accept="image/*,application/pdf" ref={fileInput} className="credit-input-file" />
      <div style={{marginTop:12}}>
        <button className="credit-btn primary" onClick={handleUpload} disabled={status==="loading"}>
          {status === "loading" ? "Lecture..." : "Lire ma CIN"}
        </button>
      </div>
      {error && <div style={{ color: "#c00", marginTop: 10 }}>{error}</div>}
      {status === "ok" && (
        <div style={{ marginTop: 16, color: "#145" }}>
          <b>CIN reconnue !</b><br />
          <div className="credit-btn-group">
            <button className="credit-btn primary" onClick={() => onNext(cinData)}>
              Suivant
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step1CIN;
