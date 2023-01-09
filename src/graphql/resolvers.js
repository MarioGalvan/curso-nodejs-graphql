const userLogin = require('./auth.resolver');
const {
  addCategory,
  deleteCategory,
  getallCategorys,
} = require('./categorys.resolver');
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
    allcategorys: getallCategorys,

  },
  Mutation: {
    addProduct,
    deleteProduct,
    updateProduct,
    login: userLogin,
    addCategory,
    deleteCategory,
  },
};

module.exports = resolvers;
