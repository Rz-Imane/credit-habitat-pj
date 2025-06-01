'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class utilisateur extends Model {
    static associate(models) {
      // define association here
    }
  }
  utilisateur.init({
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    codeHasBeenChanged: DataTypes.BOOLEAN,
    accessCode: DataTypes.STRING,
    accessCodeExpiresAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'utilisateur',
  });
  return utilisateur;
};