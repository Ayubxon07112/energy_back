const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

const FindUserMe = async ({ user }) => {
  const existingUser = await User.findById(user.id);
  if (!existingUser) {
    throw new NotFoundError("user not found");
  }
  return { message: "user", data: existingUser };
};

module.exports = FindUserMe;
