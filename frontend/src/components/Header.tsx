import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Ensure selectedLang updates with language
  const selectedLang = LANGS.find(l => l.code === i18n.language) || LANGS[0];

  // Update language and close dropdown
  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Bank of Africa" />
      </div>
      <div className="header-links">
        <div className="lang-dropdown" tabIndex={0}>
          <button
            className="lang-btn"
            onClick={() => setOpen(o => !o)}
            title={selectedLang.label}
            type="button"
          >
            <img src={selectedLang.flag} alt={selectedLang.label} className="lang-flag" />
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
                    console.log('Changing to', langOpt.code);
                    i18n.changeLanguage(langOpt.code);
                    setOpen(false);
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
        <button className="simulator-btn" onClick={() => navigate("/simulateur")}>
          {t("simulator")}
        </button>
        <button className="request-btn" onClick={() => navigate("/login")}>
          {t("myRequest")}
        </button>
      </div>
    </header>
  );
};

export default Header;
