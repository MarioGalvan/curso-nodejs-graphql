const userLogin = require('./auth.resolver');
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
    updateProduct,
    login:userLogin
  },
};

module.exports = resolvers;
