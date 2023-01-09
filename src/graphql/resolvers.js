const { getProduct, getProducts, addProduct } = require('./product.resolvers');

const resolvers = {
  Query: {
    //Products
    product: getProduct,
    products: getProducts,
  },
  Mutation: {
    addProduct,
  },
};

module.exports = resolvers;
