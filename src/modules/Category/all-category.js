const Category = require("./Category");

const allCategorys = async () => {
  let all = await Category.find().populate({ path: "projects" });
  return { message: "all categorys", data: all };
};
module.exports = allCategorys;
