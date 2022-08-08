// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'tags',
  foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'products',
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// clg null but the id is created in sql
// ---------- customers - products have a relationship through the reciepts table ---------
// belongstomany we would use a third table / when there is not direct relationship between two tables we need a third to link them
// the thing that is forming the connection between the two tables, must be the same on both sides, with an exception for through as there is a third table