const CategoryService = require('../services/category.service');

const categoryService = new CategoryService();

const addCategory = async (_, categorydto) => {
  return await categoryService.create(categorydto);
};

const deleteCategory = async (_, { id }) => {
  await categoryService.delete(id);
  return id;
};

const getallCategorys = async()=>{
  return await categoryService.find({});
}

module.exports = { addCategory, deleteCategory,getallCategorys };
