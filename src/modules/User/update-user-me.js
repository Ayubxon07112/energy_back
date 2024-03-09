const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const UpdateUserMe = async ({ body, user }) => {
  let existingUser = await User.findById(user.id);

  if (!existingUser) {
    throw new NotFoundError("user not found");
  }

  if (body.image) {
    let file = fs.existsSync(path.join(__dirname, "uploads", body.image));
    if (!file) {
      throw new NotFoundError("Image not found");
    }
  }

  let udapteobj = {
    fullname: body.fullname ? body.fullname : existingUser.fullname,
    phone_number: body.phone_number
      ? body.phone_number
      : existingUser.phone_number,
    password: body.password ? body.password : existingUser.passsword,
    image: body.image ? body.image : existingUser.image,
  };

  let UserUpdate = await User.findByIdAndUpdate({ _id: user.id }, udapteobj, {
    new: true,
  });

  return { message: "user updated", data: UserUpdate };
};

module.exports = UpdateUserMe;
