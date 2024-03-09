const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const FIndById = async ({ params }) => {
  let exstingAuthor = await Author.findById(params.id);
  if (!exstingAuthor) {
    throw new NotFoundError("Author not found ");
  }
  return { message: `${exstingAuthor.name} detail`, data: exstingAuthor };
};

module.exports = FIndById;
