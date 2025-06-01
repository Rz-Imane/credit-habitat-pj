module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('utilisateurs', 'accessCode', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('utilisateurs', 'accessCodeExpiresAt', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('utilisateurs', 'accessCode');
    await queryInterface.removeColumn('utilisateurs', 'accessCodeExpiresAt');
  }
};
