const { NotFoundError } = require("../../shared/errors");
const Category = require("./Category");

const FindByID = async ({ params }) => {
  let exstingCategory = await Category.findById({ _id: params.id }).populate({
    path: "projects",
  });
  if (!exstingCategory) {
    throw new NotFoundError("category not found");
  }
  return { message: "Category find", data: exstingCategory };
};

module.exports = FindByID;
