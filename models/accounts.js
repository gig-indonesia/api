'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define('Accounts', {
    username: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Accounts.associate = function (models) {
    // associations can be defined here
  };
  return Accounts;
};