const { BadRequestError } = require("../../shared/errors");
const Author = require("./Author");

const DeleteAuthor = async ({ params }) => {
  let exsitingAuthors = await Author.findById(params.id);

  if (!exsitingAuthors) {
    throw new BadRequestError("Author not found");
  }

  let deleteAuthor = await Author.findByIdAndDelete(params.id);

  return { message: "Author deleted :(", data: deleteAuthor };
};

module.exports = DeleteAuthor;
