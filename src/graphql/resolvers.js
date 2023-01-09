const {
  getProduct,
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require('./product.resolvers');

const resolvers = {
  Query: {
    //Products
    product: getProduct,
    products: getProducts,
  },
  Mutation: {
    addProduct,
    deleteProduct,
    updateProduct
  },
};

module.exports = resolvers;
