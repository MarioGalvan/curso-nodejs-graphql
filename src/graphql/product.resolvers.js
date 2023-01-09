const ProductsService = require('../services/product.service');

const productService = new ProductsService();

const getProduct = async (_, { id }) => {
  return await productService.findOne(id);
};

const getProducts = async () => {
  return await productService.find({});
};

const addProduct = async (_, { dto }) => {
  return await productService.create(dto);
};

const updateProduct = async(_,{id,dto})=>{
  return await productService.update(id,dto);
}

const deleteProduct = async(_,{id})=>{
  return await productService.delete(id);
}

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
};
