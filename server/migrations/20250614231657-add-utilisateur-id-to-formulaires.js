'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('formulaires', 'utilisateur_id', {
      type: Sequelize.STRING,
      references: {
        model: 'utilisateurs',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('formulaires', 'utilisateur_id');
  }
};
