import React, { useState } from "react";
import logo from "../assets/logo.png";
import frFlag from "../assets/fr.png";
import enFlag from "../assets/en.png";
import arFlag from "../assets/ar.png";
import { ReactComponent as PhoneIcon } from '../assets/call.svg';
import "../styles/header.css";
import { useNavigate } from "react-router-dom";

const LANGS = [
  { code: "fr", label: "Français", flag: frFlag },
  { code: "en", label: "English", flag: enFlag },
  { code: "ar", label: "العربية", flag: arFlag },
];

const Header: React.FC = () => {
  const [lang, setLang] = useState("fr");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const selectedLang = LANGS.find(l => l.code === lang) || LANGS[0];

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Bank of Africa" />
      </div>
      <div className="header-links">
        <div
          className="lang-dropdown"
          tabIndex={0}
          onBlur={() => setOpen(false)}
        >
          <button
            className="lang-btn"
            onClick={() => setOpen(o => !o)}
            title={selectedLang.label}
            type="button"
          >
            <img
              src={selectedLang.flag}
              alt={selectedLang.label}
              className="lang-flag"
            />
            <span className="lang-code">{selectedLang.code.toUpperCase()}</span>
            <span className="lang-arrow">▼</span>
          </button>
          {open && (
            <div className="lang-dropdown-menu">
              {LANGS.map(langOpt => (
                <button
                  key={langOpt.code}
                  className="lang-option"
                  onClick={() => {
                    setLang(langOpt.code);
                    setOpen(false);
                    // trigger language change if needed
                  }}
                >
                  <img src={langOpt.flag} alt={langOpt.label} className="lang-flag" />
                  {langOpt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <a href="tel:+212520393030" className="contact">
          <PhoneIcon className="phone-icon" />
          +212 (0) 5 20 39 30 30
        </a>
        <button className="simulator-btn" onClick={() => navigate("/simulateur")}>Simulateur</button>
        <button className="request-btn" onClick={() => navigate("/login")}>Ma demande</button>
      </div>
    </header>
  );
};

export default Header;
