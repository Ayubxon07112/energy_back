const Author = require("./Author");

const Allauthors = async () => {
  let exsitingauthors = await Author.find();
  return { message: "all authors", data: exsitingauthors };
};

module.exports = Allauthors;
