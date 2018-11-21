'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM("solo", "band"),
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING
    },
    video: {
      type: DataTypes.STRING
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  }, {});
  
  Artist.associate = function (models) {
    // associations can be defined here
    models.Artist.hasOne(models.account, {
      foreignKey: "accountId",
      targetKey: "id"
    })

  };
  return Artist;
};