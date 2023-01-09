const { getProduct,getProducts} = require('./product.resolvers');

const resolvers = {
  Query: {
    //Products
    product: getProduct,
    products:getProducts
  },
};

module.exports = resolvers;
