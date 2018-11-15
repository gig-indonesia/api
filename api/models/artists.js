const artists = (sequelize, DataTypes) => {
    return sequelize.define("products", {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM('solo','group'),
        allowNull: false
      },
      photo: {
          type: DataTypes.STRING(255),
          allowNull: true
      },
      photo: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      foreign_id: {
          type: DataTypes.INTEGER,
          references: 'accounts',
          referencesKey: 'id'
      }
    });

  };
  
  module.exports = artists;
  