const { NotFoundError } = require("../../shared/errors");
const Category = require("./Category");

const UpdateCategory = async ({ params, body }) => {
  let exstingCategory = await Category.findById(params.id);

  if (!exstingCategory) {
    throw new NotFoundError("Category not found");
  }

  let updatedCateogry = await Category.findByIdAndUpdate(params.id, {
    title: body.title ? body.title : exstingCategory.title,
  });
  return { dat: updatedCateogry, message: "category updated" };
};

module.exports = UpdateCategory;
