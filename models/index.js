// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // foreign key
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // foreign key
  onDelete: 'CASCADE', // if a category is deleted, delete any associated products
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'product_tag', // through ProductTag
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'product_tag', // through ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
