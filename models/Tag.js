const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer value
      primaryKey: true, // primary key
      autoIncrement: true, // auto increment
      allowNull: false // can't be null
    },
    tag_name: {
      type: DataTypes.STRING // string value
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
