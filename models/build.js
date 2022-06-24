const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

class Build extends Model {}

Build.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    perk: {
      type: DataTypes.STRING,
    },
    offering: {
      type: DataTypes.STRING,
    },
    item: {
      type: DataTypes.STRING,
    },
    itemAddon: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min: 1,
        max: 2,
      },
    },
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "build",
  }
);

module.exports = Build;