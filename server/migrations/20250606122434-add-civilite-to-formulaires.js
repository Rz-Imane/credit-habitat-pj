'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('formulaires', 'civilite', {
      type: Sequelize.STRING,
      allowNull: true 
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('formulaires', 'civilite');
  }
};
