module.exports = (sequelize, DataTypes) => {
  const appliedGigs = sequelize.define("appliedGigs", {
    date: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    artistsId: {
      type: DataTypes.INTEGER(),
      references: {
        model: "artists",
        key: "id"
      }
    },
    createGigsId: {
      type: DataTypes.INTEGER(),
      references: {
        model: "createGigs",
        key: "id"
      }
    }
  });

  appliedGigs.associate = function(models) {
    models.appliedGigs.hasOne(models.artists, {
      foreignKey: "artistsId",
      onDelete: "CASCADE",
      as: "artists",
      foreignKey: {
        allowNull: false
      }
    });
  };

  appliedGigs.associate = function(models) {
    models.appliedGigs.hasOne(models.createGigs, {
      foreignKey: "createGigsId",
      onDelete: "CASCADE",
      as: "createGigs",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return appliedGigs;
};
