"use strict";

module.exports = (sequelize, DataTypes) => {
  var notification = sequelize.define("notification", {
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    event: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    appliedGigsId: {
      type: DataTypes.INTEGER(),
      unique: true,
      references: {
        model: "appliedGigs",
        key: "id"
      }
    }
  });

  notification.associate = models => {
    notification.belongsTo(models.notification, {
      onDelete: "CASCADE",
      as: "appliedGigs",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return notification;
};
