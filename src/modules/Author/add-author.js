const { NotFoundError, BadRequestError } = require("../../shared/errors");
const Author = require("./Author");

const AddAuthor = async ({ body }) => {
  let { name, bio, ...data } = body;
  let exstingAuthorname = await Author.findOne({ name });

  if (exstingAuthorname) {
    throw new BadRequestError("author name exsted");
  }

  let AddUser = await Author.create({ name, bio, ...data });
  return { data: AddUser, message: "User created " };
};

module.exports = AddAuthor;
