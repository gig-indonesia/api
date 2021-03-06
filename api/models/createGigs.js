"use strict";

module.exports = (sequelize, DataTypes) => {
  var createGigs = sequelize.define("createGigs", {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    budget: {
      type: DataTypes.DECIMAL(),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hostId: {
      type: DataTypes.INTEGER(),
      unique: true,
      references: {
        model: "hosts",
        key: "id"
      }
    }
  });

  createGigs.associate = models => {
    console.log(models);
    createGigs.belongsTo(models.hosts, {
      onDelete: "CASCADE",
      as: "hosts",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return createGigs;
};
