const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const UpdateAuthor = async ({ body, params }) => {
  let existingAuthor = await Author.findById(params.id);

  if (!existingAuthor) {
    throw new NotFoundError("Author not found");
  }

  if (body.image) {
    let file = fs.existsSync(path.join(__dirname, "uploads", body.image));
    if (!file) {
      throw new NotFoundError("Image not found");
    }
  }

  let udapteobj = {
    fullname: body.fullname ? body.fullname : existingAuthor.fullname,
    phone_number: body.phone_number
      ? body.phone_number
      : existingAuthor.phone_number,
    password: body.password ? body.password : existingAuthor.passsword,
    image: body.image ? body.image : existingAuthor.image,
    email: body.email ? body.email : existingAuthor.email,
  };

  let AuthorUpdate = await Author.findByIdAndUpdate(
    { _id: params.id },
    udapteobj,
    {
      new: true,
    },
  );

  return { message: "Author updated", data: AuthorUpdate };
};

module.exports = UpdateAuthor;
