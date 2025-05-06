'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('formulaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_naissance: {
        type: Sequelize.DATE,
        allowNull: false
      },
      tel: {
        type: Sequelize.INTEGER
      },
      isclient: {
        type: Sequelize.BOOLEAN
      },
      categorie_client: {
        type: Sequelize.ENUM('particulier', 'professionnel', 'mre') // ← adapte selon tes cas
      },
      coemprunt: {
        type: Sequelize.BOOLEAN
      },
      employeur: {
        type: Sequelize.STRING
      },
      revenu: {
        type: Sequelize.INTEGER
      },
      mensualite: {
        type: Sequelize.INTEGER
      },
      anciennete: {
        type: Sequelize.STRING
      },
      trialperiod: {
        type: Sequelize.BOOLEAN
      },
      revenucompl: {
        type: Sequelize.BOOLEAN
      },
      typeprojet: {
        type: Sequelize.ENUM('logement','construction','terrain','rachat') // ← adapte ici aussi
      },
      valeur_du_bien: {
        type: Sequelize.INTEGER
      },
      apportpersonnel: {
        type: Sequelize.INTEGER
      },
      duree: {
        type: Sequelize.INTEGER
      },
      taux: {
        type: Sequelize.ENUM('fixe', 'variable') // ← adapte selon tes types de taux
      },
      montant: {
        type: Sequelize.INTEGER
      },
      remboursement: {
        type: Sequelize.BOOLEAN
      },
      financement: {
        type: Sequelize.ENUM('par crédit', 'par propres moyens') // ← adapte ici aussi
      },
      jourrelev: {
        type: Sequelize.INTEGER
      },
      activite_professionnelle: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      pays_residence: {
        type: Sequelize.STRING,
        allowNull: true
      },      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface) => {
    // Supprimer les ENUMs séparément avant de drop la table
    await queryInterface.dropTable('formulaires');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_formulaires_categorie_client";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_formulaires_typeprojet";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_formulaires_taux";');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_formulaires_financement";');
  }
};
