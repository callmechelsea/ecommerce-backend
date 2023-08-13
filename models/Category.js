const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer value
      primaryKey: true, // primary key
      autoIncrement: true, // auto increment
      allowNull: false // can't be null
    },
    category_name: {
      type: DataTypes.STRING, // string value
      allowNull: false // can't be null
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
