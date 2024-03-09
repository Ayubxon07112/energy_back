const { BadRequestError } = require("../../shared/errors");
const Category = require("./Category");

const AddCategory = async ({ body }) => {
  let exstistCategory = await Category.findOne({ title: body.title });
  if (exstistCategory) {
    throw new BadRequestError("category alredy exsist");
  }
  let newCategory = await Category.create({ ...body });
  return { message: "cateogry created", data: newCategory };
};

module.exports = AddCategory;
