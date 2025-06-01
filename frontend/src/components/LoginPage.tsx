import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import bg from "../assets/bg1.jpg";
import MinimalFooter from "./MinimalFooter";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }) // <-- password now!
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Erreur de connexion");
      navigate("/form");
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
      <div className="login-bmce-wrapper" style={{ backgroundImage: `url(${bg})` }}>
        <div className="login-bmce-header">
          <button className="tab active">Email/Mot de passe</button>
          <button className="tab" onClick={() => navigate("/loginid")}>
            Identifiant BMCE Direct
          </button>
        </div>

        <div className="login-bmce-card">
          <form className="login-bmce-form" onSubmit={handleSubmit}>
            <label>Adresse Mail</label>
            <input
              type="email"
              placeholder="Adresse Mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            <div className="login-bmce-buttons">
              <button
                type="button"
                className="secondary_btn"
                onClick={() => navigate("/newcode")}
              >
                J’ai perdu mon mot de passe
              </button>
              <button type="submit" className="primary-btn">
                Suivant
              </button>
            </div>
          </form>
        </div>
      </div>
      <MinimalFooter />
    </>
  );
};

export default LoginPage;
