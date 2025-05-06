import React from 'react';
import '../styles/MinimalFooter.css';

const MinimalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="minimal-footer">
      <p>{currentYear}© BANK OF AFRICA. Tous droits réservés.</p>
    </footer>
  );
};

export default MinimalFooter;