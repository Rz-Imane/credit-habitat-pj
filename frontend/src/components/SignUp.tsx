import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import bg from "../assets/bg1.jpg";
import MinimalFooter from "./MinimalFooter";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setInfo("");
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mail: email }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Erreur d'inscription");
      setInfo("Code envoyé par email !");
      setTimeout(() => {
        navigate("/changepwd", { state: { email } });
      }, 1000); // Redirect apres a short message
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
      <div className="login-wrapper" style={{ backgroundImage: `url(${bg})` }}>
        <div className="login-card">
          <h2 className="new-code-title">Ma demande</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Adresse mail</label>
            <input
              type="email"
              placeholder="Adresse mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            {info && <div style={{ color: "green" }}>{info}</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}
            <div className="login-bm-buttons">
              <button
                type="button"
                className="secondary_btn"
                onClick={() => navigate("/login")}
              >
                Reprendre ma demande
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

export default SignUp;
