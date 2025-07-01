import React from 'react';
import { useTranslation } from "react-i18next";
import '../styles/MinimalFooter.css';

const MinimalFooter: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="minimal-footer">
      <p>{t("footer", { year: currentYear })}</p>
    </footer>
  );
};

export default MinimalFooter;
