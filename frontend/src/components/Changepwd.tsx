import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Changepwd.css";
import bg from "../assets/bg1.jpg";
import MinimalFooter from "./MinimalFooter";

const NewCode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirmPwd) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    try {
      const response = await fetch("/api/auth/changepwd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          accessCode: code,
          newPassword: password,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Erreur");
      setSuccess("Mot de passe changé avec succès !");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError("Une erreur s'est produite");
  }
}

  };

  return (
    <>
      <div className="pwd-wrapper" style={{ backgroundImage: `url(${bg})` }}>
        <div className="pwd-card">
          <h2 className="new-code-title">Changement de mot de passe</h2>
          <form className="pwd-form" onSubmit={handleSubmit}>
            <label>Code reçu par email</label>
            <input
              type="text"
              placeholder="Code à 6 chiffres"
              value={code}
              onChange={e => setCode(e.target.value)}
              required
            />
            <label>Nouveau mot de passe</label>
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label>Confirmation du nouveau mot de passe</label>
            <input
              type="password"
              placeholder="Confirmation du nouveau mot de passe"
              value={confirmPwd}
              onChange={e => setConfirmPwd(e.target.value)}
              required
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            {success && <div style={{ color: "green" }}>{success}</div>}
            <div className="pwd-buttons">
              <button type="submit" className="pwd-btn">
                Changer le mot de passe
              </button>
            </div>
          </form>
        </div>
      </div>
      <MinimalFooter />
    </>
  );
};

export default NewCode;
