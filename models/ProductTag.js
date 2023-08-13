const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer value
      autoIncrement: true, // auto increment
      primaryKey: true, // primary key
      allowNull: false, // can't be null
    },
    product_id: {
      type: DataTypes.INTEGER, // integer value
      references: {
        model: 'product', // references the product model
        key: 'id', // references the id column
      },
    },
    tag_id: {
      type: DataTypes.INTEGER, // integer value
      references: {
        model: 'tag', // references the tag model
        key: 'id', // references the id column
      },
    },  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
