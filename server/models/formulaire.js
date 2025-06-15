'use strict';
module.exports = (sequelize, DataTypes) => {
  const Formulaire = sequelize.define(
    'formulaire',
    {
      civilite: { type: DataTypes.STRING, allowNull: false },
      prenom: { type: DataTypes.STRING, allowNull: false },
      nom: { type: DataTypes.STRING, allowNull: false },
      date_naissance: { type: DataTypes.DATE, allowNull: false },
      tel: { type: DataTypes.STRING },
      isclient: DataTypes.BOOLEAN,
      categorie_client: DataTypes.ENUM('particulier', 'professionnel', 'mre'),
      coemprunt: DataTypes.BOOLEAN,
      employeur: DataTypes.STRING,
      revenu: DataTypes.INTEGER,
      mensualite: DataTypes.INTEGER,
      anciennete: DataTypes.STRING,
      trialperiod: DataTypes.BOOLEAN,
      revenucompl: DataTypes.BOOLEAN,
      typeprojet: DataTypes.ENUM('logement', 'construction', 'terrain', 'rachat'),
      valeur_du_bien: DataTypes.INTEGER,
      apportpersonnel: DataTypes.INTEGER,
      duree: DataTypes.INTEGER,
      taux: DataTypes.ENUM('fixe', 'variable'),
      montant: DataTypes.INTEGER,
      remboursement: DataTypes.BOOLEAN,
      financement: DataTypes.ENUM('par crédit', 'par propres moyens'),
      jourrelev: DataTypes.INTEGER,
      activite_professionnelle: DataTypes.STRING,
      pays_residence: DataTypes.STRING,
      utilisateur_id: {
      type: DataTypes.STRING,
      references: { model: 'utilisateurs', key: 'id' }
      },

    },
    {
      tableName: 'formulaires',
      timestamps: true
    }
  );
  return Formulaire;
};
