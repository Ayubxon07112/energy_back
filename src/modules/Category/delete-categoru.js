const { NotFoundError } = require("../../shared/errors");
const Category = require("./Category");

const DeleteCategory = async ({ params }) => {
  let exstingCategory = await Category.findById({ _id: params.id });
  if (!exstingCategory) {
    throw new NotFoundError("category not found");
  }
  await Category.findByIdAndDelete(params.id);
  return { message: "category deleted", data: exstingCategory };
};

module.exports = DeleteCategory;
