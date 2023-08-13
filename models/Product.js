// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // integer value
      primaryKey: true, // primary key
      autoIncrement: true, // auto increment
      allowNull: false, // can't be null
    },
    product_name: {
      type: DataTypes.STRING, // string value
      allowNull: false, // can't be null
    },
    price: {
      type: DataTypes.DECIMAL, // decimal value
      allowNull: false, // can't be null
      validate: {
        isDecimal: true, // must be a decimal value
      },
    },
    stock: {
      type: DataTypes.INTEGER, // integer value
      allowNull: false, // can't be null
      defaultValue: `10`, // default value of 10
      validate: {
        isInt: true, // must be an integer
      },
    },
    category_id: {
      type: DataTypes.INTEGER, // integer value
      references: {
        model: 'category', // references the category model
        key: 'id', // references the id column
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
